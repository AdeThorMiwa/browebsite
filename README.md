# Bro — Landing Page

Marketing site for [Bro](https://usebro.xyz) — a WhatsApp-based personal assistant service. Just say the word.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router (HashRouter for static hosting)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, how it works, categories, FAQ |
| `/#/privacy` | Privacy policy |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and push to GitHub Pages (`gh-pages` branch) |

## Deploying to GitHub Pages

1. Push the repo to GitHub
2. Run `npm run deploy`
3. In your repo → **Settings → Pages**, set source to the `gh-pages` branch

The site uses `HashRouter` so all routes work on GitHub Pages without any server-side redirect config.

## Contact

WhatsApp: [wa.me/2348030675682](https://wa.me/2348030675682)  
Email: privacy@usebro.xyz
