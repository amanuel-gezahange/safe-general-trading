import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { limitRequest } from "@/lib/rate";
const schema = z.object({
    name: z.string().trim().min(2).max(120),
    email: z.string().email().max(200),
    company: z.string().max(160).optional(),
    country: z.string().trim().min(2).max(100),
    product: z.enum([
        "LABSA 96%",
        "SLES 70%",
        "Caustic Soda Flakes",
        "Soda Ash Light",
        "Light Paraffin",
        "Heavy Paraffin",
        "Glycerin",
    ]),
    quantity: z.string().max(120).optional(),
    message: z.string().trim().min(10).max(3000),
    website: z.string().optional(),
});
export async function POST(req: NextRequest) {
    try {
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            "unknown";
        const allowed = await limitRequest("quote:" + ip, 5, 3600);
        if (!allowed)
            return NextResponse.json(
                { error: "Too many requests. Please try later." },
                { status: 429 },
            );
        const raw = await req.json();
        const parsed = schema.safeParse(raw);
        if (!parsed.success)
            return NextResponse.json(
                { error: "Please check your form fields." },
                { status: 400 },
            );
        const d = parsed.data;
        if (d.website) return NextResponse.json({ ok: true });
        if (
            !process.env.RESEND_API_KEY ||
            !process.env.QUOTE_FROM_EMAIL ||
            !process.env.QUOTE_TO_EMAIL
        )
            return NextResponse.json(
                {
                    error: "Online inquiries are not configured yet. Please contact us by email or WhatsApp.",
                },
                { status: 503 },
            );
        const esc = (s: string) =>
            s.replace(
                /[&<>"']/g,
                (c) =>
                    ({
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                    })[c]!,
            );
        const html = Object.entries(d)
            .filter(([k]) => k !== "website")
            .map(
                ([k, v]) =>
                    `<p><strong>${esc(k)}:</strong> ${esc(String(v || ""))}</p>`,
            )
            .join("");
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
            from: process.env.QUOTE_FROM_EMAIL,
            to: process.env.QUOTE_TO_EMAIL,
            replyTo: d.email,
            subject: "SGT PLC inquiry: " + d.product,
            html,
        });
        if (error) throw new Error("Email provider failed");
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json(
            {
                error: "Unable to send your inquiry. Please use email or WhatsApp.",
            },
            { status: 500 },
        );
    }
}
