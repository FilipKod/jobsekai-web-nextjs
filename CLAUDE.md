# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Package manager is pnpm (`pnpm@10.15.0`).

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm build` / `pnpm start` — production build / serve
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`, uses `eslint-config-next`)
- `pnpm exec tsc --noEmit` — type check (no script defined)

No test runner is configured yet.

## Architecture

Early-stage Next.js 16 / React 19 app (scaffolded from `create-next-app`) using the App Router only — all routes live in `app/`. Styling is Tailwind CSS v4 via `@tailwindcss/postcss` (configured in `app/globals.css`, no `tailwind.config`). TypeScript is strict; the path alias `@/*` maps to the repo root.

- `app/layout.tsx` — minimal root layout (no fonts, default metadata); uses the globally generated `LayoutProps<"/">` type (no import needed).
- `app/page.tsx` — empty home page.

Next 16 has breaking changes from earlier versions: consult `node_modules/next/dist/docs/01-app/` before writing Next-specific code (see AGENTS.md).
