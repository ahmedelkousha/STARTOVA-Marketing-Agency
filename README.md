# STARTOVA Marketing Agency Website

A professional marketing agency website built with React + Vite. Black/white/grey design with Framer Motion animations.


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