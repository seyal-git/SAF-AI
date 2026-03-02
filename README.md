# SAF.AI One-Pager Website

High-performance one-page website for the SAF.AI / Safium concept, focused on:
- enterprise AI governance
- security guardrails
- cost control and observability

## Run locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open:
   `http://localhost:3000`

## Build for production

```bash
npm run build
```

## Notes

- The chat section is a deterministic product demo (no external API key required).
- Main page copy and interactive content can be updated from:
  - `constants.tsx`
  - `components/ChatSection.tsx`
