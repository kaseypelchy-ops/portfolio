# Kasey Pelchy Portfolio

Multi-page Next.js / TypeScript portfolio for interactive, public-safe case studies.

## Pages

- `/` — portfolio homepage
- `/projects` — all case studies
- `/projects/market-recovery`
- `/projects/fieldos`
- `/projects/ai-call-quality`
- `/projects/fiber-mapping`
- `/projects/seo-aeo`
- `/about`
- `/experience`
- `/contact`

## Interactive demos

Each project page contains a synthetic browser-only demo that communicates the workflow without connecting to any production system or private data.

- Market Recovery: market selection, severity, completeness, eligibility, baseline freeze
- FieldOS: simulated field-sales workflow
- AI Call Quality: animated asynchronous processing pipeline
- SEO/AEO: dynamic structured content bundle / rendered result
- Fiber Mapping: synthetic geometry, bounding box, point-in-polygon, normalized output

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Validate

```bash
npm run lint
npm run build
```

## Deploy

The project is structured for Vercel. Import the GitHub repository into Vercel and deploy with the default Next.js settings.

## Public-safe boundary

This portfolio is intentionally designed as a reconstruction, not a production mirror. Do not add production credentials, customer or employee data, private infrastructure identifiers, confidential pricing, raw operational exports, exact private business rules, or proprietary production code that should remain private.
