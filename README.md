<p align="center">
  <a href="https://www.scaleflex.com">
    <img src="https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/logo_scaleflex_on_white_bg.jpg?vh=91b12d&w=700" alt="Scaleflex" width="350">
  </a>
</p>

<h1 align="center">@scaleflex/asset-picker</h1>

<p align="center">
  Framework-agnostic Asset Picker Web Component for <a href="https://www.scaleflex.com/page/digital-asset-management">Scaleflex VXP DAM</a>.<br>
  Browse, search, filter, and select assets from your DAM — in any frontend stack.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@scaleflex/asset-picker"><img src="https://img.shields.io/npm/v/@scaleflex/asset-picker.svg?style=flat-square" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@scaleflex/asset-picker"><img src="https://img.shields.io/npm/dm/@scaleflex/asset-picker.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://bundlephobia.com/package/@scaleflex/asset-picker"><img src="https://img.shields.io/bundlephobia/minzip/@scaleflex/asset-picker?style=flat-square" alt="bundle size"></a>
  <img src="https://img.shields.io/badge/license-proprietary-red?style=flat-square" alt="license">
</p>

<p align="center">
  <a href="https://scaleflex.github.io/asset-picker/">Live Demo</a> |
  <a href="https://scaleflex.github.io/asset-picker/#/docs/getting-started">Documentation</a> |
  <a href="https://scaleflex.github.io/asset-picker/#/examples/basic">Examples</a> |
  <a href="https://www.npmjs.com/package/@scaleflex/asset-picker">npm</a> |
  <a href="https://www.scaleflex.com/page/digital-asset-management">Scaleflex DAM</a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Vanilla JS / Web Component](#vanilla-js--web-component)
  - [React](#react)
- [Configuration](#configuration)
  - [Authentication](#authentication)
  - [Config Options](#config-options)
  - [Default & Forced Filters](#default--forced-filters)
- [Public Methods](#public-methods)
- [Events](#events)
- [React API](#react-api)
- [Theming](#theming)
  - [Brand Color](#brand-color)
  - [CSS Custom Properties](#css-custom-properties)
- [Filters Reference](#filters-reference)
  - [Filter Keys](#filter-keys)
  - [Filter Data Structures](#filter-data-structures)
- [Types Reference](#types-reference)
  - [Asset](#asset)
  - [Folder](#folder)
- [Browser Support](#browser-support)
- [License](#license)

---

## Overview

`@scaleflex/asset-picker` is a drop-in modal component that connects to a [Scaleflex VXP](https://www.scaleflex.com) DAM project and lets users browse, search, filter, preview, and select digital assets. It ships as a standard [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) (Custom Element) built with [Lit 3](https://lit.dev/), so it works everywhere — vanilla JS, React, Vue, Angular, Svelte, or any other framework.

The npm package contains **only pre-built, minified production files** (`dist/`). Source code is maintained in a private Scaleflex GitLab repository.

## Features

- **Framework-agnostic** — standard `<sfx-asset-picker>` custom element, works in any stack
- **First-class React wrapper** — `forwardRef` component with controlled `open` prop and imperative ref
- **Two auth modes** — session tokens or security templates
- **Grid & list views** — switchable with persistent user preference
- **Full-text search** — real-time search across your DAM
- **14+ filter types** — type, date, size, tags, labels, color, approval status, metadata, and more
- **Filter pinning** — users can pin favourite filters; persisted to `localStorage`
- **Default & forced filters** — pre-apply filters on open or lock filters the user cannot remove
- **Infinite scroll** — automatic pagination as the user scrolls
- **Folder navigation** — browse the full DAM folder tree with breadcrumb
- **Asset preview panel** — side panel with metadata, thumbnails, and video/audio playback
- **Multi-select & select all** — single or bulk selection with configurable max
- **Keyboard navigation** — arrow keys, Enter, Escape, Shift+click range select
- **Marquee selection** — click-and-drag to select multiple assets
- **Approval workflow** — filter by approval status, approver, requester, due date
- **Regional variants** — metadata variant groups with per-variant filtering
- **Customisable theming** — brand color config + 20 CSS custom properties
- **Tiny footprint** — ~70 KB gzipped (main chunk)

## Requirements

- A [Scaleflex](https://www.scaleflex.com) VXP DAM account with a project token
- Either **session credentials** or a **security template key** for authentication
- Modern browser with Custom Elements v1 support (see [Browser Support](#browser-support))

## Installation

```bash
npm install @scaleflex/asset-picker
```

```bash
yarn add @scaleflex/asset-picker
```

```bash
pnpm add @scaleflex/asset-picker
```

`lit` is bundled with the package. For React usage, you also need `react` and `react-dom` (v18+) as peer dependencies.

### Package exports

| Export path | Description |
|---|---|
| `@scaleflex/asset-picker` | `AssetPicker` class + all TypeScript types |
| `@scaleflex/asset-picker/react` | React wrapper component |
| `@scaleflex/asset-picker/define` | Side-effect import — registers `<sfx-asset-picker>` custom element |

Both ESM (`import`) and CJS (`require`) builds are provided.

---

## Quick Start

### Vanilla JS / Web Component

```html
<sfx-asset-picker></sfx-asset-picker>

<script type="module">
  // 1. Register the custom element (once)
  import '@scaleflex/asset-picker/define';

  // 2. Grab the element
  const picker = document.querySelector('sfx-asset-picker');

  // 3. Configure
  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
  };

  // 4. Listen for events
  picker.addEventListener('ap-select', (e) => {
    console.log('Selected assets:', e.detail.assets);
  });

  picker.addEventListener('ap-cancel', (e) => {
    console.log('Cancelled via:', e.detail.reason);
  });

  // 5. Open
  picker.open();
</script>
```

### React

```tsx
import { useRef } from 'react';
import { AssetPicker, type AssetPickerRef } from '@scaleflex/asset-picker/react';

function App() {
  const pickerRef = useRef<AssetPickerRef>(null);

  return (
    <>
      <button onClick={() => pickerRef.current?.open()}>
        Pick assets
      </button>

      <AssetPicker
        ref={pickerRef}
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
        }}
        onSelect={(assets) => console.log(assets)}
        onCancel={() => console.log('Cancelled')}
      />
    </>
  );
}
```

---

## Configuration

### Authentication

The picker supports two authentication modes:

#### Security template (external / public apps)

Use for client-side integrations where you don't want to expose session tokens. The picker automatically exchanges the key for a SASS key on init.

```ts
{
  auth: {
    mode: 'securityTemplate',
    securityTemplateKey: string,   // Exchanged for a SASS key via API
    projectToken: string,
  }
}
```

#### Session (internal / Scaleflex apps)

Use when your backend already manages Scaleflex sessions.

```ts
{
  auth: {
    mode: 'session',
    sessionToken: string,   // X-Session-Token
    companyToken: string,    // X-Company-Token
    projectToken: string,    // X-Project-Token
  }
}
```

### Config Options

| Property | Type | Default | Description |
|---|---|---|---|
| `auth` | `AuthConfig` | **required** | Authentication credentials (see above) |
| `apiBase` | `string` | auto | Override the API base URL |
| `locale` | `string` | `undefined` | Locale for translations |
| `multiSelect` | `boolean` | `true` | Enable multi-asset selection |
| `maxSelections` | `number` | `undefined` | Maximum number of selectable assets |
| `defaultViewMode` | `'grid' \| 'list'` | `'grid'` | Initial view mode |
| `defaultSortBy` | `SortBy` | `'created_at'` | Initial sort field (see table below) |
| `defaultSortDirection` | `'asc' \| 'desc'` | `'desc'` | Initial sort direction |
| `tabs` | `TabKey[]` | `['assets', 'folders']` | Tabs to show. If only one, the dropdown is hidden |
| `enabledFilters` | `FilterKey[]` | all | Restrict which filters appear in the toolbar |
| `rootFolderPath` | `string` | `'/'` | Start browsing from a specific folder path (e.g. `'/marketing/banners/'`) |
| `showMetadata` | `boolean` | `true` | Show metadata sections in the preview panel |
| `brandColor` | `string` | from API | Brand accent colour as hex (e.g. `'#3b82f6'`). Overrides the API-fetched value |
| `rememberLastFolder` | `boolean` | `false` | Persist the last browsed folder and restore on next open |
| `rememberLastView` | `boolean` | `false` | Persist the last used view mode (grid/list) and restore on next open |
| `defaultFilters` | `FiltersInput` | `undefined` | Filters pre-applied on open. User can modify/remove |
| `forcedFilters` | `FiltersInput` | `undefined` | Filters always active. Shown as locked chips the user cannot remove |
| `onSelect` | `(assets: Asset[]) => void` | `undefined` | Callback when assets are selected |
| `onCancel` | `() => void` | `undefined` | Callback when the picker is cancelled |

#### Sort fields

| Value | Available in |
|---|---|
| `'name'` | Assets, Folders |
| `'created_at'` | Assets, Folders |
| `'modified_at'` | Assets, Folders |
| `'size'` | Assets |
| `'type'` | Assets |
| `'relevance'` | Search results only |
| `'title'` | Assets |
| `'color'` | Assets |
| `'uploaded'` | Assets |
| `'updated_at'` | Assets |
| `'files_count_recursive'` | Folders only |
| `'files_size_recursive'` | Folders only |

### Default & Forced Filters

You can pre-configure filters that are applied when the picker opens, and/or lock filters that the user cannot remove.

```ts
picker.config = {
  auth: { /* ... */ },

  // Pre-applied on open — user can modify or remove
  defaultFilters: {
    type: { type: 'string', values: ['image'] },
  },

  // Always active — locked chip with lock icon, cannot be removed
  forcedFilters: {
    tags: { type: 'string', values: ['approved'] },
  },
};
```

**Behaviour:**

- **`defaultFilters`** are seeded into the applied filters state when `open()` is called. The user sees them as normal filter chips and can modify or remove them freely.
- **`forcedFilters`** are merged into every API request but are **not** stored in the mutable applied state. They render as locked chips (with a lock icon instead of an X button). The user cannot remove them, and "Clear filters" does not affect them. Forced filter keys are also hidden from the "Add filter" dropdown.
- If the same key appears in both `defaultFilters` and `forcedFilters`, the forced filter takes precedence — the default filter for that key is skipped.

---

## Public Methods

| Method | Returns | Description |
|---|---|---|
| `open()` | `Promise<void>` | Opens the picker modal. Initialises the API client and loads initial data if not already done. Fires `ap-open` on success. |
| `close()` | `void` | Closes the picker modal and clears the selection state. |

```js
// Open the picker
await picker.open();

// Close programmatically
picker.close();
```

---

## Events

All events bubble and cross shadow DOM boundaries (`composed: true`).

| Event | Detail | Description |
|---|---|---|
| `ap-select` | `{ assets: Asset[] }` | Fired when the user confirms their selection |
| `ap-cancel` | `{ reason: 'backdrop' \| 'escape' \| 'button' \| 'close-button' }` | Fired when the picker is closed without selecting |
| `ap-open` | `{ timestamp: number }` | Fired when the picker opens successfully |
| `ap-error` | `{ error: Error, context: string }` | Fired on initialisation or runtime errors |

```js
picker.addEventListener('ap-select', (e) => {
  const { assets } = e.detail;
  assets.forEach((asset) => {
    console.log(asset.name, asset.url?.cdn);
  });
});

picker.addEventListener('ap-cancel', (e) => {
  console.log('Cancelled via:', e.detail.reason);
});

picker.addEventListener('ap-error', (e) => {
  console.error(`[${e.detail.context}]`, e.detail.error);
});
```

---

## React API

```tsx
import { AssetPicker, type AssetPickerRef, type AssetPickerProps } from '@scaleflex/asset-picker/react';
```

### Props

| Prop | Type | Description |
|---|---|---|
| `config` | `AssetPickerConfig` | Configuration object (see [Config Options](#config-options)) |
| `open` | `boolean` | Controlled open state |
| `onSelect` | `(assets: Asset[]) => void` | Selection callback |
| `onCancel` | `() => void` | Cancel callback |
| `className` | `string` | CSS class for the wrapper |
| `style` | `CSSProperties` | Inline styles for the wrapper |

### Ref methods

| Method | Description |
|---|---|
| `open()` | Open the picker imperatively |
| `close()` | Close the picker imperatively |

### Controlled mode

```tsx
const [isOpen, setIsOpen] = useState(false);

<AssetPicker
  config={config}
  open={isOpen}
  onSelect={(assets) => {
    console.log(assets);
    setIsOpen(false);
  }}
  onCancel={() => setIsOpen(false)}
/>
```

### Imperative mode

```tsx
const ref = useRef<AssetPickerRef>(null);

<button onClick={() => ref.current?.open()}>Open</button>
<AssetPicker ref={ref} config={config} onSelect={handleSelect} />
```

---

## Theming

### Brand Color

The simplest way to theme the picker is via the `brandColor` config option. It accepts a hex colour string and applies it as the primary accent across all UI elements.

```ts
picker.config = {
  auth: { /* ... */ },
  brandColor: '#6366f1', // Indigo
};
```

If not set, the picker uses the brand colour configured in your Scaleflex project settings.

### CSS Custom Properties

For fine-grained control, override these CSS custom properties on the `<sfx-asset-picker>` element or any ancestor. All variables use the `--ap-` prefix.

#### Colours

| Property | Default | Description |
|---|---|---|
| `--ap-primary` | `oklch(0.65 0.19 258)` | Primary accent colour |
| `--ap-primary-foreground` | `#fff` | Text on primary backgrounds |
| `--ap-primary-10` | primary @ 10% | Subtle primary tint |
| `--ap-primary-20` | primary @ 20% | Light primary background |
| `--ap-background` | `#ffffff` | Main background |
| `--ap-foreground` | `#09090b` | Main text colour |
| `--ap-card` | `#ffffff` | Card/panel background |
| `--ap-border` | `#e4e4e7` | Border colour |
| `--ap-muted` | `#f4f4f5` | Muted/disabled background |
| `--ap-muted-foreground` | `#71717a` | Muted/disabled text |
| `--ap-ring` | same as primary | Focus ring colour |
| `--ap-selection-bg` | primary @ 8% | Selected item background |

#### Modal

| Property | Default | Description |
|---|---|---|
| `--ap-modal-backdrop` | `rgba(0,0,0,0.5)` | Backdrop overlay colour |
| `--ap-modal-radius` | `12px` | Modal corner radius |
| `--ap-modal-shadow` | large shadow | Modal box shadow |
| `--ap-modal-max-width` | `1200px` | Maximum modal width |
| `--ap-modal-max-height` | `85vh` | Maximum modal height |

#### Typography & Radius

| Property | Default | Description |
|---|---|---|
| `--ap-font-family` | `system-ui, -apple-system, sans-serif` | Font stack |
| `--ap-radius` | `8px` | Default border radius |
| `--ap-radius-sm` | `6px` | Small border radius |
| `--ap-radius-lg` | `12px` | Large border radius |

```css
asset-picker {
  --ap-primary: #6366f1;
  --ap-primary-foreground: #fff;
  --ap-radius: 12px;
  --ap-modal-max-width: 1400px;
}
```

---

## Filters Reference

### Filter Keys

These are the keys used in `enabledFilters`, `defaultFilters`, and `forcedFilters`.

| Key | Constant | Description |
|---|---|---|
| `'type'` | `FILTER_KEYS.TYPE` | File format (image, video, audio, document, archive, font) |
| `'mimetype'` | `FILTER_KEYS.MIME_TYPE` | MIME type |
| `'date'` | `FILTER_KEYS.DATE` | Upload/modification date |
| `'size'` | `FILTER_KEYS.SIZE` | File size range |
| `'tags'` | `FILTER_KEYS.TAGS` | Asset tags |
| `'labels'` | `FILTER_KEYS.LABELS` | Asset labels |
| `'color'` | `FILTER_KEYS.COLOR` | Dominant colour search |
| `'image'` | `FILTER_KEYS.IMAGE` | Image-specific (resolution, orientation, faces) |
| `'approval'` | `FILTER_KEYS.APPROVAL` | Approval workflow status |
| `'metadata'` | `FILTER_KEYS.METADATA` | Custom metadata fields |
| `'product_ref'` | `FILTER_KEYS.PRODUCT_REF` | Product reference |
| `'asset_expiration'` | `FILTER_KEYS.LICENSE_EXPIRY` | License/asset expiry date |
| `'folders'` | `FILTER_KEYS.FOLDERS` | Folder location |
| `'resolution'` | `FILTER_KEYS.RESOLUTION` | Image resolution |
| `'orientation'` | `FILTER_KEYS.ORIENTATION` | Image orientation |
| `'faces'` | `FILTER_KEYS.FACES` | Detected faces count |
| `'products'` | `FILTER_KEYS.PRODUCTS` | Products |

### Filter Data Structures

Filters used in `defaultFilters` and `forcedFilters` use these shapes:

#### String filter

```ts
{
  type: 'string',
  values: string[],           // Filter values
  operator?: string,          // Filter operator (default: ':')
  logic?: 'OR' | 'AND',      // Combine logic (default: 'OR')
}
```

**Examples:**

```ts
// Only images
{ type: 'string', values: ['image'] }

// Only JPEG and PNG
{ type: 'string', values: ['image/jpeg', 'image/png'] }

// Tagged with "hero" or "banner"
{ type: 'string', values: ['hero', 'banner'] }

// Size range: 1 MB to 50 MB (values in bytes as "min..max")
{ type: 'string', values: ['1000000..50000000'] }
```

#### Date filter

```ts
{
  type: 'date',
  field: 'created' | 'updated',
  kind: 'preset' | 'after' | 'before' | 'between' | 'specific' | null,
  preset: string | null,     // e.g. 'today', 'last_week', 'last_month'
  from: string | null,       // ISO date string
  to: string | null,         // ISO date string
}
```

**Examples:**

```ts
// Uploaded in the last month
{
  type: 'date',
  field: 'created',
  kind: 'preset',
  preset: 'last_month',
  from: null,
  to: null,
}

// Modified after a specific date
{
  type: 'date',
  field: 'updated',
  kind: 'after',
  preset: null,
  from: '2025-01-01T00:00:00.000Z',
  to: null,
}
```

**Available date presets:** `'today'`, `'last_week'`, `'within_week'`, `'last_month'`, `'within_month'`, `'last_year'`, `'within_year'`, `'empty'`, `'non-empty'`

#### Filter operators

| Operator | Symbol | Description |
|---|---|---|
| `IS` | `:` | Exact match (default) |
| `EQUAL` | `=` | Equality |
| `NOT_EQUAL` | `!=` | Inequality |
| `RANGE` | `..` | Range match |
| `IS_NOT` | `:-` | Negated match |
| `IS_EXACT` | `:=` | Strict exact match |
| `CONTAINS` | `~` | Contains substring |
| `CONTAINS_IN_TEXT` | `~~~` | Full text search |
| `STARTS_WITH` | `~^` | Starts with |
| `GREATER_THAN` | `>` | Greater than |
| `LESS_THAN` | `<` | Less than |
| `GREATER_THAN_OR_EQUAL` | `>=` | Greater than or equal |
| `LESS_THAN_OR_EQUAL` | `<=` | Less than or equal |
| `SIMILAR_TO` | `~~` | Similarity match |

---

## Types Reference

All types are exported from the main entry point:

```ts
import type {
  AssetPickerConfig,
  AuthConfig,
  SessionAuth,
  SecurityTemplateAuth,
  Asset,
  Folder,
  FilterKey,
  AnyFilterKey,
  AnyFilter,
  StringFilter,
  DateFilter,
  Filters,
  FiltersState,
  ViewMode,
  SortBy,
  SortDirection,
  TabKey,
  AssetPickerSelectDetail,
  AssetPickerCancelDetail,
} from '@scaleflex/asset-picker';
```

### Asset

The `Asset` object returned in `ap-select` events:

```ts
interface Asset {
  uuid: string;
  name: string;
  extension: string;
  type: string;                  // 'image', 'video', 'audio', 'document', ...
  mime?: string;                 // MIME type
  size: {
    bytes: number;
    pretty: string;
  };
  url?: {
    public: string;              // Public URL
    cdn: string;                 // CDN-optimised URL
    path: string;                // Relative path
    permalink?: string;          // Permanent link
  };
  created_at: string;           // ISO timestamp
  modified_at: string;          // ISO timestamp
  tags: Record<string, any>;
  labels: string[];
  meta: {
    title?: string;
    description?: string;
    alt?: string;
    [key: string]: unknown;
  };
  info: {
    img_w?: number;              // Image width (px)
    img_h?: number;              // Image height (px)
    duration?: number;           // Video/audio duration (seconds)
    video_w?: number;            // Video width (px)
    video_h?: number;            // Video height (px)
    thumbnail?: string;          // Thumbnail URL
    main_colors_hex?: string[];  // Dominant colours
    dominant_color_hex?: string; // Most dominant colour
    [key: string]: unknown;
  };
  folder?: {
    uuid: string;
    name: string;
  };
  owner?: {
    uuid: string;
    name: string;
    email: string;
  };
}
```

### Folder

```ts
interface Folder {
  uuid: string;
  name: string;
  path: string;
  created_at: string;
  modified_at?: string;
  count?: {
    files_recursive?: number;
    files_direct?: number;
  };
  size?: {
    total_recursive_bytes?: number;
  };
}
```

---

## Browser Support

| Browser | Minimum version |
|---|---|
| Chrome | 67+ |
| Firefox | 63+ |
| Safari | 13.1+ |
| Edge (Chromium) | 79+ |

Requires native support for Custom Elements v1, Shadow DOM, and ES2020+. Internet Explorer is **not** supported.

---

## License

**PROPRIETARY** &mdash; All Rights Reserved.

Copyright &copy; 2025 [Scaleflex SAS](https://www.scaleflex.com).

This software and associated documentation are the exclusive property of Scaleflex SAS. No part of this software may be copied, modified, distributed, sublicensed, sold, or otherwise made available to any third party without prior written permission from Scaleflex SAS.

This package is distributed via npm solely for the convenience of licensed customers. Installing or using this package does not grant any licence to use the software. Use is permitted only under a separate written licence agreement with Scaleflex SAS.

Unauthorised use, reproduction, or distribution of this software may result in civil and criminal penalties and will be prosecuted to the maximum extent permitted by law.

For licensing enquiries, contact [sales@scaleflex.com](mailto:sales@scaleflex.com).

---

<p align="center">
  Made with care by <a href="https://www.scaleflex.com">Scaleflex</a>
</p>
