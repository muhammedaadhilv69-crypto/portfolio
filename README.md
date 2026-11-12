# Aadhil — Developer Portfolio

A personal developer portfolio built with Next.js, TypeScript, Tailwind CSS v4, and Lucide React.

## Tech stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React

## Getting started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
pnpm lint
pnpm build
pnpm start
```

## Deploy to Vercel

Import this repository into Vercel. The Next.js framework preset should be detected automatically. No environment variables are required.

## Design system

- Tokens live in `src/app/globals.css`: raw palette in `:root`, semantic names (`page`, `text`, `muted`, `accent`, `action`, `inverse`) in `@theme`. Components use only the semantic names.
- One typeface, Readex Pro (self-hosted via `@fontsource-variable/readex-pro`), because it covers Latin and Arabic in one family.
- Use logical utilities (`ms-`, `pe-`, `text-start`, `border-s`) so layouts flip correctly in RTL.

## Content

All copy and project data, in English and Arabic, is in `src/content/site.ts`. Set `site.email` there to show an Email button in the contact section.

## Before publishing

- Have a native Arabic speaker review the Arabic copy.
- Add screenshots for the featured projects when available.
- Add repository links for Budget App and Task CLI.

## License

Personal portfolio. All rights reserved unless otherwise stated.
