"use client";

import { Suspense, useState } from "react";
import type { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle } from "lucide-react";

import { products } from "@/lib/data";

function Inner() {
    const router = useRouter();
    const params = useSearchParams();

    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");

    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (busy) return;

        setBusy(true);
        setError("");

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const response = await fetch("/api/quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok || result.ok !== true) {
                throw new Error(
                    result.error ||
                        "Unable to send your inquiry. Please try again.",
                );
            }

            // Redirect only after successful submission.
            router.push("/quote/success");
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again.",
            );
            setBusy(false);
        }
    }

    return (
        <form className="quoteform" onSubmit={submit} aria-busy={busy}>
            <h2>Request a quotation</h2>

            <p>Fields marked * are required.</p>

            <div className="formrow">
                <label>
                    Full name *
                    <input
                        name="name"
                        type="text"
                        minLength={2}
                        maxLength={120}
                        required
                        placeholder="Your name"
                        disabled={busy}
                    />
                </label>

                <label>
                    Business email *
                    <input
                        name="email"
                        type="email"
                        maxLength={200}
                        required
                        placeholder="you@company.com"
                        disabled={busy}
                    />
                </label>
            </div>

            <div className="formrow">
                <label>
                    Company
                    <input
                        name="company"
                        type="text"
                        maxLength={160}
                        placeholder="Company name"
                        disabled={busy}
                    />
                </label>

                <label>
                    Country *
                    <input
                        name="country"
                        type="text"
                        maxLength={100}
                        required
                        placeholder="Country"
                        disabled={busy}
                    />
                </label>
            </div>

            <div className="formrow">
                <label>
                    Product *
                    <select
                        name="product"
                        defaultValue={params.get("product") || ""}
                        required
                        disabled={busy}
                    >
                        <option value="" disabled>
                            Select a product
                        </option>

                        {products.map((product) => (
                            <option key={product.slug} value={product.name}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Quantity / packaging
                    <input
                        name="quantity"
                        type="text"
                        maxLength={120}
                        placeholder="e.g. 1 metric ton"
                        disabled={busy}
                    />
                </label>
            </div>

            <label>
                Requirements *
                <textarea
                    name="message"
                    rows={5}
                    minLength={10}
                    maxLength={3000}
                    required
                    placeholder="Tell us about grade, packaging, destination, and other needs"
                    disabled={busy}
                />
            </label>

            <label className="consent">
                <input type="checkbox" required disabled={busy} />I agree to be
                contacted about this inquiry.
            </label>

            {/* Spam protection */}
            <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="honeypot"
                aria-hidden="true"
            />

            <button
                type="submit"
                className="btn primary"
                disabled={busy}
                aria-busy={busy}
            >
                {busy ? "Sending inquiry…" : "Submit inquiry →"}
            </button>

            {error && (
                <div className="quote-error" role="alert">
                    <AlertCircle size={19} />
                    <span>{error}</span>
                </div>
            )}
        </form>
    );
}

export default function QuoteForm() {
    return (
        <Suspense fallback={<div>Loading form…</div>}>
            <Inner />
        </Suspense>
    );
}
