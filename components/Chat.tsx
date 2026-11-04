
"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  Headset,
  MessageCircle,
  X,
  Send,
  ExternalLink,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  time: string;
};

const welcomeMessage: Message = {
  role: "assistant",
  content:
    "Hello! Welcome to SGT PLC. How can we help you today? Ask about our chemical products, applications, or quotations.",
  time: "",
};

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    welcomeMessage,
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  // Scroll only the conversation area.
  useEffect(() => {
    if (!open) return;

    const container = messagesRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy, open]);

  // Prevent background scrolling on mobile.
  useEffect(() => {
    if (!open) return;

    const media = window.matchMedia("(max-width: 640px)");
    let previousOverflow = "";

    function updateScrollLock() {
      if (media.matches) {
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = previousOverflow;
      }
    }

    updateScrollLock();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Allow closing with Escape.
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function getTime() {
    return new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function closeChat() {
    setOpen(false);

    requestAnimationFrame(() => {
      launcherRef.current?.focus();
    });
  }

  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = input.trim();

    if (!text || busy) return;

    const next: Message[] = [
      ...messages,
      {
        role: "user",
        content: text,
        time: getTime(),
      },
    ];

    setMessages(next);
    setInput("");
    setBusy(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          messages: next
            .slice(-20)
            .map(({ role, content }) => ({
              role,
              content,
            })),
        }),
      });

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: response.ok
            ? data.reply ||
              "Please contact our sales team."
            : data.error ||
              "Please contact sales on WhatsApp.",
          time: getTime(),
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Connection issue. Please contact our sales team on WhatsApp.",
          time: getTime(),
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

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
                <Headset size={22} />
              </div>

              <div>
                <b>SGT Customer Support</b>

                <small>
                  <span className="chatonline" />
                  AI assistant · Available 24/7
                </small>
              </div>
            </div>

            <button
              type="button"
              aria-label="Close chat"
              onClick={closeChat}
            >
              <X size={21} />
            </button>
          </div>

          <div
            ref={messagesRef}
            className="chatmessages"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatmessage ${message.role}`}
              >
                {message.role === "assistant" && (
                  <div className="chatmessageavatar">
                    <Headset size={15} />
                  </div>
                )}

                <div className="chatmessagecontent">
                  {message.role === "assistant" && (
                    <span className="chatmessagename">
                      SGT Assistant
                    </span>
                  )}

                  <div
                    className={`bubble ${message.role}`}
                  >
                    {message.content}
                  </div>

                  {message.time && (
                    <span className="chatmessagetime">
                      {message.time}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {busy && (
              <div className="chatmessage assistant">
                <div className="chatmessageavatar">
                  <Headset size={15} />
                </div>

                <div className="chatmessagecontent">
                  <span className="chatmessagename">
                    SGT Assistant
                  </span>

                  <div className="bubble assistant">
                    Thinking…
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="chatbottom">
            <form
              onSubmit={send}
              className="chatinput"
            >
              <input
                ref={inputRef}
                aria-label="Message"
                placeholder="Type your message..."
                maxLength={2000}
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
              />

              <button
                type="submit"
                aria-label="Send message"
                disabled={busy || !input.trim()}
              >
                <Send size={18} />
              </button>
            </form>

            <a
              className="chatwa"
              href="https://wa.me/251913033179"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact sales on WhatsApp
              <ExternalLink size={13} />
            </a>

            <small className="chatdisclaimer">
              AI can make mistakes. Verify specifications
              with sales.
            </small>
          </div>
        </section>
      )}

      {!open && (
        <button
          ref={launcherRef}
          type="button"
          className="chatfab"
          aria-label="Open AI assistant"
          onClick={() => setOpen(true)}
        >
          <MessageCircle size={21} />
          <span>Ask SGT AI</span>
        </button>
      )}
    </div>
  );
}
