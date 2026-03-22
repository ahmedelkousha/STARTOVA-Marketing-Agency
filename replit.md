# STARTOVA Marketing Agency Website

A professional marketing agency website built with React + Vite. Black/white/grey design with Framer Motion animations.

## Structure

Conventional flat React + Vite layout at the workspace root:

```
/
├── src/
│   ├── App.tsx                        # Router + layout
│   ├── main.tsx                       # Entry point
│   ├── index.css                      # Global styles + Tailwind
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Sticky header: logo | nav | CTA
│   │   │   └── Footer.tsx
│   │   └── ui/                        # shadcn/ui components
│   ├── lib/
│   │   ├── constants.ts               # Services config, nav links
│   │   └── utils.ts                   # cn() helper
│   └── pages/
│       ├── home.tsx
│       ├── about.tsx
│       ├── contact.tsx
│       └── services/
│           └── [slug].tsx             # Dynamic service pages
├── public/                            # Static assets
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── components.json                    # shadcn config
├── .npmrc                             # legacy-peer-deps=true
└── artifacts/startova/.replit-artifact/artifact.toml  # Replit artifact registration
```

## Pages

- **/** — Home (hero, services grid, stats, CTA)
- **/about** — About Us (mission, team, timeline)
- **/services** — Services overview (redirects to technology)
- **/services/technology** — Technology solutions
- **/services/social-media** — Social Media marketing
- **/services/training** — Training programs
- **/services/events** — Events management
- **/services/media** — Media production
- **/contact** — Contact Us (form + info)

## Design

- Color scheme: strictly black (#000), white (#fff), grey shades
- Font: Inter (Google Fonts)
- Animations: Framer Motion (page transitions, scroll reveals)
- Icons: Lucide React
- Images: Unsplash (via URL)
- Component library: shadcn/ui + Radix UI + Tailwind CSS v4

## Stack

- React 19 + Vite 7 + TypeScript
- Tailwind CSS v4 (@tailwindcss/vite)
- Framer Motion 12
- Wouter (client-side routing)
- shadcn/ui + Radix UI
- Lucide React icons
- npm (no pnpm, no workspaces)

## Dev

```bash
npm run dev     # Start dev server on $PORT (default 23434)
npm run build   # Build to dist/
npm run serve   # Preview production build
```

## Environment

- `PORT` — dev server port (default 23434)
- `BASE_PATH` — app base path (default "/")

## Notes

- Frontend-only — no backend/API server needed
- `legacy-peer-deps=true` in .npmrc for React 19 compatibility
- The artifact is registered at `artifacts/startova/.replit-artifact/artifact.toml` but source lives at workspace root
