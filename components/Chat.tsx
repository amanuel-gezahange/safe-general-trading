"use client";

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUp, ExternalLink, RotateCcw } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  time: string;
};

const STORAGE_KEY = "sgt-chat-v3";
const TEASER_KEY = "sgt-chat-teaser-dismissed";
const WHATSAPP = "https://wa.me/251913033179";
const AGENT_IMAGE = "/chat-agent.svg";

const greetings = [
  "Selam! 👋 Looking for a specific chemical?",
  "I can share specs and uses, and help you get a quote in minutes.",
];

const welcomeMessages: Message[] = greetings.map((content) => ({
  role: "assistant",
  content,
  time: "",
}));

function AgentAvatar({ size }: { size: number }) {
  return (
    <Image
      src={AGENT_IMAGE}
      alt=""
      width={size}
      height={size}
      unoptimized
      draggable={false}
    />
  );
}

const suggestions = [
  "What products do you sell?",
  "Chemicals for detergent making",
  "How do I get a quote?",
  "Where are you located?",
];

const tokenPattern =
  /(\*\*[^*\n]+\*\*|https?:\/\/[^\s]+|\/(?:quote|products|product-search|our-business|business-fields)(?:\/[\w-]+)*|\+?251[\s-]?\d{2,3}[\s-]?\d{3}[\s-]?\d{3,4})/g;

function renderRich(text: string): ReactNode {
  const parts = text.split(tokenPattern);

  return parts.map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;

    if (part.startsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("http")) {
      const trail = part.match(/[.,!?)]+$/)?.[0] ?? "";
      const url = trail ? part.slice(0, -trail.length) : part;
      return (
        <Fragment key={i}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
          {trail}
        </Fragment>
      );
    }

    if (part.startsWith("/")) {
      return (
        <Link key={i} href={part}>
          {part}
        </Link>
      );
    }

    return (
      <a
        key={i}
        href={`https://wa.me/${part.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </a>
    );
  });
}

function getTime() {
  return new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(welcomeMessages);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [teaserCount, setTeaserCount] = useState(0);
  const [teaserTyping, setTeaserTyping] = useState(false);
  const teaserTimers = useRef<number[]>([]);

  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Message[];
        if (Array.isArray(parsed) && parsed.length) setMessages(parsed);
      }
    } catch {}
    loadedRef.current = true;
  }, []);

  useEffect(() => {
    if (!loadedRef.current || busy) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages, busy]);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {}
    if (dismissed) return;

    const steps: [number, () => void][] = [
      [1500, () => setTeaserTyping(true)],
      [2500, () => {
        setTeaserTyping(false);
        setTeaserCount(1);
      }],
      [3200, () => setTeaserTyping(true)],
      [4400, () => {
        setTeaserTyping(false);
        setTeaserCount(2);
      }],
    ];

    const timers = steps.map(([ms, run]) => window.setTimeout(run, ms));
    teaserTimers.current = timers;
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  useEffect(() => {
    if (!open) return;
    const container = messagesRef.current;
    container?.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 250);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (!window.matchMedia("(max-width: 640px)").matches) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeChat();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, [input, open]);

  function dismissTeaser() {
    teaserTimers.current.forEach((t) => window.clearTimeout(t));
    setTeaserCount(0);
    setTeaserTyping(false);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {}
  }

  function openChat() {
    dismissTeaser();
    setOpen(true);
  }

  function closeChat() {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }

  function resetChat() {
    abortRef.current?.abort();
    setBusy(false);
    setMessages(welcomeMessages);
    setInput("");
    inputRef.current?.focus();
  }

  function updateLast(patch: (last: Message) => Message) {
    setMessages((current) => [
      ...current.slice(0, -1),
      patch(current[current.length - 1]),
    ]);
  }

  async function send(raw: string) {
    const text = raw.trim();
    if (!text || busy) return;

    const history: Message[] = [
      ...messages,
      { role: "user", content: text, time: getTime() },
    ];

    setMessages([...history, { role: "assistant", content: "", time: "" }]);
    setInput("");
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: history
            .slice(-20)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok || !response.body) {
        const data = await response.json().catch(() => ({}));
        updateLast(() => ({
          role: "assistant",
          content: data.error || "Please contact sales on WhatsApp.",
          time: getTime(),
        }));
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        updateLast((last) => ({ ...last, content: last.content + chunk }));
      }

      updateLast((last) => ({
        ...last,
        content: last.content.trim(),
        time: getTime(),
      }));
    } catch (error) {
      if (controller.signal.aborted) return;
      console.error(error);
      updateLast(() => ({
        role: "assistant",
        content: "Connection issue. Please contact our sales team on WhatsApp.",
        time: getTime(),
      }));
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
        setBusy(false);
      }
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    send(input);
  }

  function handleKeyDown(e: ReactKeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send(input);
    }
  }

  const showSuggestions = !busy && !messages.some((m) => m.role === "user");

  return (
    <div className="chatwrap">
      {open && (
        <section
          className="chatpanel"
          aria-label="SGT AI assistant"
          role="dialog"
          aria-modal={false}
        >
          <div className="chathead">
            <div className="chatidentity">
              <div className="chatavatar">
                <AgentAvatar size={44} />
                <span className="chatavatardot" />
              </div>

              <div>
                <b>SGT Assistant</b>
                <small>
                  {busy ? "Typing…" : "AI support · Online now"}
                </small>
              </div>
            </div>

            <div className="chatheadactions">
              <button
                type="button"
                aria-label="Start a new chat"
                title="New chat"
                onClick={resetChat}
              >
                <RotateCcw size={18} />
              </button>
              <button type="button" aria-label="Close chat" onClick={closeChat}>
                <X size={21} />
              </button>
            </div>
          </div>

          <div
            ref={messagesRef}
            className="chatmessages"
            aria-live="polite"
            aria-busy={busy}
          >
            {messages.map((message, index) => {
              const next = messages[index + 1];
              const grouped = next?.role === message.role;
              const pending =
                message.role === "assistant" && !message.content;

              return (
                <div
                  key={index}
                  className={`chatmessage ${message.role}${
                    grouped ? " grouped" : ""
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="chatmessageavatar">
                      <AgentAvatar size={28} />
                    </div>
                  )}

                  <div className="chatmessagecontent">
                    <div className={`bubble ${message.role}`}>
                      {pending ? (
                        <span className="chattyping" aria-label="Typing">
                          <i />
                          <i />
                          <i />
                        </span>
                      ) : (
                        renderRich(message.content)
                      )}
                    </div>

                    {message.time && (
                      <span className="chatmessagetime">{message.time}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {showSuggestions && (
              <div className="chatsuggestions">
                {suggestions.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chatbottom">
            <form onSubmit={handleSubmit} className="chatinput">
              <textarea
                ref={inputRef}
                rows={1}
                aria-label="Message"
                placeholder="Ask about products, prices, delivery…"
                maxLength={2000}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <button
                type="submit"
                aria-label="Send message"
                disabled={busy || !input.trim()}
              >
                <ArrowUp size={18} strokeWidth={2.5} />
              </button>
            </form>

            <div className="chatfoot">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Talk to sales on WhatsApp
                <ExternalLink size={12} />
              </a>
              <small>AI can make mistakes. Verify specs with sales.</small>
            </div>
          </div>
        </section>
      )}

      {!open && (
        <div className="chatlauncher">
          {teaserCount > 0 && (
            <div className="chatteaser" role="status">
              <button
                type="button"
                className="chatteaserclose"
                aria-label="Dismiss"
                onClick={dismissTeaser}
              >
                <X size={14} strokeWidth={2.5} />
              </button>
              {greetings.slice(0, teaserCount).map((line) => (
                <button
                  key={line}
                  type="button"
                  className="chatteaserbubble"
                  onClick={openChat}
                >
                  {line}
                </button>
              ))}
            </div>
          )}

          <div className="chatfabcol">
            <button
              ref={launcherRef}
              type="button"
              className={`chatfab${teaserCount ? " attention" : ""}`}
              aria-label="Chat with the SGT assistant"
              onClick={openChat}
            >
              <AgentAvatar size={64} />
              <span className="chatavatardot" />
              {teaserCount > 0 && (
                <em className="chatbadge">{teaserCount}</em>
              )}
            </button>
            <span
              className={`chatfabtyping${teaserTyping ? " on" : ""}`}
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
