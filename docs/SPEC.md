# @scaleflex/asset-picker Specification

## Overview

A framework-agnostic Asset Picker plugin for Scaleflex's VXP DAM platform. Users can browse, search, filter, and select assets/folders from their DAM. Built as a Web Component (Lit 3) with a React wrapper.

## Architecture

```
src/
  asset-picker.ts          Root <sfx-asset-picker> custom element
  define.ts                Side-effect registration
  index.ts                 Main entry (exports)
  react.ts                 React wrapper

  types/                   TypeScript interfaces
  store/                   Reactive state management
  controllers/             Lit ReactiveControllers
  services/                API client & service layer
  utils/                   Helpers (thumbnail, format, debounce)
  styles/                  Theme, animations, Tailwind
  components/
    modal/                 Dialog-based modal
    header/                Search, tabs, view/sort controls
    navigation/            Breadcrumb
    filters/               All filter components
    views/                 Grid, list, cards, rows, skeleton
    preview/               Asset preview panel
    selection/             Selection bar, marquee overlay
    shared/                Icon, spinner, checkbox, popover, etc.
```

## Consumer API

### Vanilla JS

```html
<script type="module">
  import '@scaleflex/asset-picker/define';
</script>

<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  const picker = document.getElementById('picker');
  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
    multiSelect: true,
    onSelect: (assets) => console.log(assets),
    onCancel: () => console.log('cancelled'),
  };
  picker.open();
</script>
```

### React

```tsx
import { AssetPicker, AssetPickerRef } from '@scaleflex/asset-picker/react';

function App() {
  const pickerRef = useRef<AssetPickerRef>(null);

  return (
    <AssetPicker
      ref={pickerRef}
      config={{
        auth: { mode: 'securityTemplate', securityTemplateKey: 'KEY', projectToken: 'TOKEN' },
        multiSelect: true,
      }}
      open={isOpen}
      onSelect={(assets) => console.log(assets)}
      onCancel={() => setIsOpen(false)}
    />
  );
}
```

## Configuration (`AssetPickerConfig`)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `auth` | `AuthConfig` | required | Authentication configuration |
| `apiBase` | `string` | auto | Custom API base URL |
| `locale` | `string` | `'en'` | Locale for i18n |
| `multiSelect` | `boolean` | `true` | Allow multiple selection |
| `maxSelections` | `number` | unlimited | Max selectable assets |
| `defaultViewMode` | `'grid' \| 'list'` | `'grid'` | Initial view mode |
| `defaultSortBy` | `SortBy` | `'created_at'` | Initial sort field |
| `defaultSortDirection` | `'asc' \| 'desc'` | `'desc'` | Initial sort direction |
| `tabs` | `TabKey[]` | `['assets', 'folders']` | Tabs to show (`'assets'`, `'folders'`, `'labels'`, `'collections'`) |
| `defaultTab` | `TabKey` | first in `tabs` | Which tab to activate when the picker opens |
| `enableAISearch` | `boolean` | `false` | Show AI search toggle in the search bar |
| `defaultAISearch` | `boolean` | `false` | Activate AI search by default on open (requires `enableAISearch`) |
| `enabledFilters` | `FilterKey[]` | all | Which filters to show |
| `rootFolderPath` | `string` | `'/'` | Starting folder path |
| `rememberLastFolder` | `boolean` | `false` | Persist last browsed folder |
| `rememberLastView` | `boolean` | `false` | Persist last view mode |
| `rememberLastTab` | `boolean` | `false` | Persist last active tab |
| `gridSize` | `'normal' \| 'large'` | `'normal'` | Grid card density: normal (4 cols at ~1200px) or large (3 cols at ~1200px) |
| `transformations` | `boolean` | `false` | Enable export options dialog (format, quality, resize) before selection is finalized |
| `onSelect` | `(assets: Asset[], folders?: Folder[]) => void` | - | Callback on confirm |
| `onCancel` | `() => void` | - | Callback on cancel |

## Authentication

### Security Template (external use)
```typescript
{ mode: 'securityTemplate', securityTemplateKey: 'KEY', projectToken: 'TOKEN' }
```
Exchanges the security template key for a SASS key via `GET /v5/key`.

### SASS Key (internal use)
```typescript
{ mode: 'sassKey', sassKey: '...', projectToken: '...' }
```
Uses the SASS key directly as `X-Filerobot-Key` header. For Scaleflex Hub apps where the host already manages SASS key generation and renewal.

## Views

- **Grid**: CSS Grid `repeat(auto-fill, minmax(280px, 1fr))` with staggered card animations
- **List**: Table-like rows with columns: thumbnail, name, type, description, date, actions

## Tabs

- **Assets**: Browse files with grid/list view
- **Folders**: Navigate folder hierarchy
- **Labels**: Browse assets by label — click a label to see all tagged assets
- **Collections**: Browse assets by collection — navigate collection folders, drill into leaf folders to see matching assets

## Filters

| Filter | Component | API Param |
|--------|-----------|-----------|
| File type | `ap-filter-type` | `filetype` |
| Tags | `ap-filter-tags` | `tags` |
| Labels | `ap-filter-labels` | `labels` |
| Color | `ap-filter-color` | `color` |
| Created date | `ap-filter-date` | `created_at_from/to` |
| Modified date | `ap-filter-date` | `modified_at_from/to` |
| File size | `ap-filter-size` | `size_from/to` |
| Orientation | `ap-filter-image` | `orientation` |
| Approval | `ap-filter-approval` | `approval_status` |
| Metadata | `ap-filter-metadata` | dynamic |

## Selection Modes

- **Single click**: Select one asset (replaces previous in single-select mode)
- **Cmd/Ctrl + click**: Toggle selection (multi-select)
- **Shift + click**: Range selection
- **Drag (marquee)**: Rubber-band area selection

## Transformations

When `transformations: true`, an "Export options" button appears in the selection bar for image assets. Clicking it opens a dialog with:

- **Format**: WebP, JPEG, PNG, GIF (radio group)
- **Quality**: Excellent (90), Good (75), Fair (60) — hidden for PNG (lossless)
- **Size**: Width/height inputs with aspect ratio lock, plus presets (Original, Large 1200px, Medium 600px, Small 300px)

Users can **Apply** (includes transformation params + transformed CDN URLs in the `onSelect` callback), **Skip** (proceeds with original assets, no transformations), or **Cancel** (returns to selection without confirming).

When transformations are applied, each image asset in the `onSelect` callback includes a `transformation` property:
- `params`: `{ format, quality, width, height }` — the chosen transformation settings
- `url.cdn`: `string` — transformed CDN URL (e.g. `https://token.filerobot.com/path/image.jpg?force_format=webp&q=75&w=1200`)
- `url.permalink_cdn`: `string | undefined` — transformed permalink CDN URL, included only if the asset has a permalink

Non-image assets and skipped transformations have no `transformation` property. For multi-select, width/height act as max dimensions (each asset preserves its own aspect ratio).

## Preview Panel

Slides in from the right showing:
- Image/video/audio preview
- File metadata (name, type, size, dimensions, dates)
- Tags and labels
- Fullscreen button

## Theming (CSS Variables)

All customizable via `--ap-*` CSS custom properties:

```css
asset-picker {
  --ap-primary: oklch(0.65 0.19 258);
  --ap-background: #ffffff;
  --ap-foreground: #09090b;
  --ap-border: #e4e4e7;
  --ap-radius: 8px;
  --ap-font-family: system-ui, sans-serif;
  --ap-modal-max-width: 1200px;
  --ap-modal-max-height: 85vh;
}
```

Brand color is auto-fetched from `GET /v5/public/settings` -> `project_branding.brandColor`.

## Animations

- Modal: scale + opacity (200ms ease-out)
- Cards: staggered translateY + opacity (300ms, 50ms delay per card)
- Skeleton: shimmer gradient (1.5s infinite)
- Selection bar: slide up (250ms)
- Preview panel: slide in from right (300ms)
- All respect `prefers-reduced-motion: reduce`

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `ap-select` | `{ assets: Asset[], folders?: Folder[] }` | User confirmed selection |
| `ap-cancel` | `{ reason: string }` | User cancelled (backdrop/escape/button) |
| `ap-open` | `{ timestamp: number }` | Picker opened |
| `ap-error` | `{ error: Error, context: string }` | Error occurred |

## API Endpoints

- `GET /v5/key` - Exchange security template for SASS key
- `GET /v5/public/settings` - Project settings (brand color)
- `GET /v5/files` - List/search files with filters, pagination, sort
- `GET /v5/folders` - List folders
- `GET /v5/folders/{uuid}` - Get folder details
- `GET /v5/labels` - List labels
- `GET /v5/collections` - List collections
- `GET /v5/collections/{uuid}/folders` - Get collection folders
- `GET /v5/filters` - Get filter values

## Bundle

- **ESM**: `dist/index.js` (~120KB, ~24KB gzip)
- **CJS**: `dist/index.cjs`
- **React wrapper**: `dist/react.js` / `dist/react.cjs`
- **Side-effect registration**: `dist/define.js`
- External dependencies: `lit`, `react`, `react-dom`

Round 1: Focus on the event flow — do all component events bubble up correctly and get handled in          
asset-picker.ts? Is the filter → API query param translation complete?

Round 2: Component quality — are the Lit patterns correct? Any missing lifecycle cleanup? Do the types     
actually match what the API returns?

Round 3: Build & integration — does the dev playground actually render? Do the exports work when consumed  
externally?
