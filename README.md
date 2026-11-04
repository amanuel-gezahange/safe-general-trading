# SGT PLC — Next.js website

Production-oriented starter for SAFE GENERAL TRAINING PLC. Preferred domain: **safegeneraltraining.com** (NOT confirmed available or registered).

## Features
- Responsive marketing website, 7 product detail pages, industries, company contacts
- SEO metadata, sitemap, robots.txt
- AI multi-turn chat restricted to company and product questions
- Secure server-side OpenAI API calls (key never exposed to browser)
- Quotation email submission via Resend
- Shared Upstash Redis rate limiting for chat and quotes; fails closed if not configured
- Form validation, honeypot, no database of customer data

## Run locally
1. Install Node.js 20+.
2. `npm install`
3. Copy `.env.example` to `.env.local` and configure values.
4. `npm run dev` then visit http://localhost:3000.
5. `npm run build` before deploying.

## Deploy
1. Push this folder to a **private GitHub repository**.
2. Import repository into Vercel as a Next.js project.
3. Set environment variables in Vercel (do not commit `.env.local`).
4. Create an Upstash Redis database and set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN. **Without these, chatbot and quote submissions intentionally return an error**, to prevent abuse.
5. Set OPENAI_API_KEY and OPENAI_MODEL for AI chat. Usage is billed by OpenAI. Configure spending limits and monitoring.
6. Set RESEND_API_KEY and verify a sender domain with Resend; set QUOTE_FROM_EMAIL to an address at that verified domain and QUOTE_TO_EMAIL to the destination inbox. The quotation form will not send until configured.
7. Verify availability and purchase safegeneraltraining.com from a registrar; add it in Vercel Domains and follow the DNS records Vercel provides. DNS/SSL may take time to activate.
8. Verify chatbot, quote delivery, responsive UI, and privacy/compliance policies before publishing.

## Product imagery
The seven SVG assets in public/products are **original conceptual illustrations**, not photos of actual chemical products or stock. Replace with company-approved, licensed, accurate product photographs and update `lib/data.ts` paths. Do not use misleading images.

## Important launch considerations
- Company location/address, verified product technical specs, grades, SDS/TDS files, certifications, inventory and shipping terms have NOT been provided. Do not invent these.
- Only English copy is provided. Amharic translation is not yet implemented.
- AI messages are passed to OpenAI to generate responses; do not send sensitive or confidential customer information via chat. Add a privacy notice and obtain necessary consent where required.
- No persistent chat history: context is kept in browser state during the current page session, up to 20 messages per request. Refreshing the page clears it.
- The quote form sends submitted details to the configured business inbox. Publish an appropriate privacy policy before collecting real customer information.
- Consider CAPTCHA/bot protection, WAF, spam filtering, abuse analytics, monitoring and human review for production.
- This is a deployable codebase, **not a deployed website**. No domain was purchased or registered.
