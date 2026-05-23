<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **bun** (see `bun.lock`).

```bash
bun install           # install deps
bun run dev           # dev server (default http://localhost:3000)
bun run build         # produces ./out/ static export — no server output
bun run lint          # next lint
bunx shadcn@latest add <name|url>   # add a shadcn or registry component
```

There is no test suite.

## Deploy

This site is a fully **static export** (`output: "export"` in `next.config.ts`) hosted on **GitHub Pages** at `kpl.ventures` (custom domain).

- `.github/workflows/deploy.yml` runs on every push to `main`: `bun install` → `bun run build` → upload `./out/` → `actions/deploy-pages@v4`.
- `public/CNAME` controls the custom domain. `public/.nojekyll` is required so GitHub Pages doesn't drop the `_next/` folder.
- `next.config.ts` has `images.unoptimized: true` and `trailingSlash: true` — static export can't run the Next.js image optimizer.
- DNS gotcha: GoDaddy domain forwarding silently injects its own A records on the apex. If apex A records keep coming back wrong, forwarding is on — disable it before troubleshooting Pages.

## Architecture

### Page composition

There is **one page** ([src/app/page.tsx](src/app/page.tsx)) that stitches together section components in [src/components/sections/](src/components/sections/). Inter-section navigation uses hash anchors (`#pitch`, `#portfolio`, etc.) — no router routes. Adding a "page" almost always means adding a section component, not a new route, unless the content is large enough to warrant a separate static HTML.

The design originated as an HTML/CSS/JS bundle in `/tmp/design/kpl-ventures-design-system/` (KPL Ventures Design System handoff). Section components reproduce that visual output 1:1.

### Styling

Everything routes through [src/app/globals.css](src/app/globals.css). It's structured as:

1. **`@theme inline`** — exposes KPL tokens (`--color-kpl-red`, etc.) and font families to Tailwind 4's utility generator.
2. **`:root` / `.dark`** — sets KPL brand variables (`--kpl-red`, `--paper`, `--ink`, `--charcoal`, …) _and_ maps them onto shadcn's semantic tokens (`--background`, `--foreground`, `--primary`, `--card`, …). **Don't add new brand colors here** — extend by reusing existing tokens.
3. **Component utility classes** — `kpl-section`, `kpl-container`, `hero`, `process-grid`, `tm-roster`, `pf-card`, `cta-strip`, `faq`, `kpl-footer`, `pitch-shell`, etc. Section components compose these by className rather than inlining styles.

**Critical gotcha:** sections use both `.kpl-section` _and_ `.kpl-container` on the same element. `.kpl-container` provides horizontal gutter padding. `.kpl-section` and `.hero` must therefore set `padding-top`/`padding-bottom` **explicitly** — never the `padding` shorthand, which silently wipes the horizontal gutter from `.kpl-container` and leaves mobile sections with zero left/right margin.

Fonts are loaded via `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx) as `--font-inter` (sans) and `--font-fraunces` (display, used for all headings).

### Hero globe

[src/components/sections/hero.tsx](src/components/sections/hero.tsx) uses [src/components/ui/globe.tsx](src/components/ui/globe.tsx) — Aceternity's `github-globe` component (registry: `https://ui.aceternity.com/registry/globe.json`). It depends on `three`, `three-globe`, `@react-three/fiber@alpha`, `@react-three/drei` and reads country geometry from [src/data/globe.json](src/data/globe.json).

The globe is dynamically imported with `{ ssr: false }` because `three-globe` touches `window` during construction. Pure-color knobs (`globeColor`, `polygonColor`, atmosphere, arc colors) live in `hero.tsx` as `globeConfig` and `sampleArcs` — tweak these for visual changes; the underlying component is opinionated and not meant to be edited.

### Contact / forms

Static export means no server actions / API routes. The "pitch" CTA is a [Contact section](src/components/sections/contact.tsx) that opens `mailto:` with a pre-filled subject + founder template body. All `href="#contact"` anchors throughout the site scroll to this section.

### Adding shadcn components

`components.json` is configured with style `radix-nova`, base color `neutral`, alias `@/components/ui`. Use `bunx shadcn@latest add <component>` rather than hand-rolling. Several third-party registries (Aceternity, reactbits) work via the same `bunx shadcn@latest add <url>` form — see the globe install for an example. Reactbits _pro_ is license-gated; Aceternity is free.
