# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

`@scaleflex/asset-picker` — a framework-agnostic Web Component (Lit 3) for browsing, searching, filtering, and selecting digital assets from Scaleflex VXP DAM. Ships as a standard `<sfx-asset-picker>` custom element with a first-class React wrapper.

## Common Commands

```bash
# Development
npm run dev              # Vite dev server (serves demo/)
npm run dev:demo         # Demo app dev server

# Build
npm run build            # Production library build → dist/
npm run build:demo       # Build GitHub Pages demo

# Type checking
npm run typecheck        # tsc --noEmit

# Release
npm run release          # CDN release (version bump, build, upload, git tag)
```

## Architecture

### Entry Points

| Export | File | Purpose |
|---|---|---|
| `@scaleflex/asset-picker` | `src/index.ts` | `AssetPicker` class + all TypeScript types |
| `@scaleflex/asset-picker/react` | `src/react.ts` | React `forwardRef` wrapper component |
| `@scaleflex/asset-picker/define` | `src/define.ts` | Side-effect — registers `<sfx-asset-picker>` custom element |

### Build Output

Vite library mode → ESM + CJS dual format in `dist/`. TypeScript declarations via `vite-plugin-dts`. CSS is bundled (no code splitting). External: `lit`, `@lit/*`, `@scaleflex/uploader`, `react`, `react-dom`.

### Root Component

`src/asset-picker.ts` — the `AssetPicker` LitElement. Manages all state via the reactive Store, registers 30+ sub-components on import.

### State Management

`src/store/store.ts` — simple reactive store with listener callbacks. Components subscribe via `StoreController` (Lit ReactiveController pattern in `src/controllers/store.controller.ts`).

### Services Layer (`src/services/`)

- `api-client.ts` — HTTP client with auth headers (session or security template SASS key)
- `files.service.ts` — Asset list/search API
- `folders.service.ts` — Folder tree navigation
- `filters.service.ts` — Metadata settings + filter options
- `auth.service.ts` — SASS key exchange for security templates
- `labels.service.ts`, `tags.service.ts` — Asset metadata
- `settings.service.ts` — Project settings/branding

### Controllers (`src/controllers/`)

- `store.controller.ts` — Store → Lit reactivity bridge
- `selection.controller.ts` — Multi-select state & keyboard shortcuts
- `infinite-scroll.controller.ts` — Pagination logic
- `marquee.controller.ts` — Click-and-drag area selection overlay

### Component Tree (`src/components/`)

- `modal/` — Dialog wrapper
- `header/` — Search bar, tabs, view/sort toggles
- `toolbar/` — View mode, sort controls
- `filters/` (16 components) — Filter UI for all 17 filter types
- `views/` (9 components) — Grid, list, cards, rows, skeletons, folder cards/rows
- `preview/` — Asset metadata side panel
- `selection/` — Selection bar, marquee overlay
- `navigation/` — Folder breadcrumb
- `shared/` (10 components) — Reusable UI: icon, spinner, checkbox, popover, dropdown, badge, tooltip, radio-group

### Styles

Tailwind CSS v4 (via `@tailwindcss/vite`). OKLCH color space. All CSS custom properties use `--ap-*` prefix. Shadow DOM encapsulation per component. Theme defined in `src/styles/theme.css`.

### Types (`src/types/`)

- `config.types.ts` — `AssetPickerConfig`, auth modes, uploader integration
- `asset.types.ts` — `Asset` interface
- `folder.types.ts` — `Folder` interface
- `filter.types.ts` — Filter keys, operators, data structures
- `events.types.ts` — Custom event detail types
- `api.types.ts` — API request/response shapes

## Code Conventions

- **LitElement** for all components, with `@customElement` decorator or manual registration
- **Reactive Store** pattern (not Redux) — simple publish/subscribe
- **Shadow DOM** on every component — styles are encapsulated
- **Tailwind v4** utility classes inside Shadow DOM via `@tailwindcss/vite` plugin
- **OKLCH** color space for all color tokens
- **`@` path alias** → `src/` (configured in vite.config.ts and tsconfig.json)
- File naming: `kebab-case.ts` for everything, component files prefixed with `ap-`
- No barrel exports except `src/index.ts` — components self-register

## Key Files

| File | Purpose |
|---|---|
| `src/asset-picker.ts` | Root LitElement — all state, lifecycle, sub-component registration |
| `src/store/store.ts` | Reactive store instance |
| `src/store/store.types.ts` | `AppState` interface |
| `src/services/api-client.ts` | HTTP client with auth |
| `src/styles/theme.css` | All `--ap-*` CSS custom properties |
| `src/types/config.types.ts` | Public config interface |
| `vite.config.ts` | Library build config |
| `demo/` | GitHub Pages demo app |
| `docs/SPEC.md` | Architecture spec |
