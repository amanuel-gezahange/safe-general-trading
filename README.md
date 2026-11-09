# Safe General Trading PLC — Website

Corporate website for **Safe General Trading PLC**, an Ethiopian importer and distributor of industrial chemicals (surfactants, alkalis, glycerin, mineral oils).

Live site: https://safe-general-trading.netlify.app

Built with **Next.js 15 (App Router)**, **React 19** and **TypeScript**.

## Getting started

Requires Node.js 20+.

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev                  # http://localhost:3000
```

## Scripts

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the development server                  |
| `npm run build`     | Production build                              |
| `npm run start`     | Serve the production build                    |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript) |
| `npm run typecheck` | TypeScript check without emitting files       |

Run `npm run lint` and `npm run typecheck` before committing.

> Don't run `npm run build` while `npm run dev` is running — both write to `.next/` and the dev server will break. If it happens: stop dev, delete `.next/`, start dev again.

## Project structure

```
app/
  layout.tsx              Root layout: header, footer, side tabs, chat
  globals.css             Base styles (quote page, chat widget)
  theme.css               Site theme: typography, buttons, page hero, tiles
  page.tsx, home.css      Homepage (the only page with "VIEW MORE" links)
  our-business/           Company background and quality commitment
  business-fields/        Industries served
  products/               Products & Solutions list + [slug] detail pages
  product-search/         Filterable product search (?q= ?group= ?field=)
  quote/                  Contact / quotation form
  api/chat, api/quote     Server routes: AI assistant, quote email
components/               Header, Footer, PageHero, Expandable, ProductCard,
                          SearchForm, ContactBand, SideTabs, Chat, QuoteForm
lib/
  data.ts                 Company info, products, business fields (single source of content)
  nav.ts                  Main navigation items
  rate.ts                 Upstash rate limiting
```

### Editing content

All product and company text lives in [`lib/data.ts`](lib/data.ts). Adding a product there automatically adds its detail page, search entry, sitemap URL and chat-assistant knowledge.

## Environment variables

See [`.env.example`](.env.example). Set the same values in **Netlify → Site configuration → Environment variables** for production.

- `GROQ_API_KEY`, `GROQ_MODEL` — AI chat assistant
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` — rate limiting; chat and quote requests are refused without these
- `RESEND_API_KEY`, `QUOTE_FROM_EMAIL`, `QUOTE_TO_EMAIL` — quote form emails (sender must be on a domain verified in Resend)

## Images

Images in `public/products` and `public/industries` are **illustrative placeholders**, not photographs of the company's stock. Replace them with licensed, accurate photos before launch. `public/industries/detergent.jpg` shows a third-party brand and should be replaced first.

## Before launch

- Confirm technical specifications against supplier COAs.
- Add the company address, and SDS/TDS documents if available.
- Publish a privacy policy (the quote form and chat collect customer details).
