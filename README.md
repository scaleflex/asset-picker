<p align="center">
  <a href="https://www.scaleflex.com">
    <img src="https://scaleflex.cloudimg.io/v7/plugins/scaleflex/logo.png?vh=b0a502&radius=25&w=700" alt="Scaleflex" width="350">
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
  - [Integrated uploader](#integrated-uploader)
  - [Content-Security-Policy & thumbnail proxying](#content-security-policy--thumbnail-proxying)
  - [Default & Forced Filters](#default--forced-filters)
  - [Restricting the filter menu](#restricting-the-filter-menu)
- [Public Methods](#public-methods)
- [Events](#events)
- [React API](#react-api)
  - [Provider + Hook](#provider--hook-recommended)
- [Asset Utilities](#asset-utilities)
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
- [Claude Code Integration](#claude-code-integration)
- [License](#license)

---

## Overview

`@scaleflex/asset-picker` is a drop-in modal component that connects to a [Scaleflex VXP](https://www.scaleflex.com) DAM project and lets users browse, search, filter, preview, and select digital assets. It ships as a standard [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) (Custom Element) built with [Lit 3](https://lit.dev/), so it works everywhere — vanilla JS, React, Vue, Angular, Svelte, or any other framework.

The npm package contains **only pre-built, minified production files** (`dist/`). Source code is maintained in Scaleflex's `scaleflex-dam-tools` monorepo.

## Features

- **Framework-agnostic** — standard `<sfx-asset-picker>` custom element, works in any stack
- **First-class React wrapper** — `forwardRef` component with controlled `open` prop and imperative ref
- **Two auth modes** — security templates or direct SASS key
- **Grid & list views** — switchable with persistent user preference
- **Full-text search** — real-time search across your DAM
- **14+ filter types** — type, date, size, tags, labels, color, approval status, metadata, and more
- **Filter pinning** — users can pin favourite filters; persisted to `localStorage`
- **Default & forced filters** — pre-apply filters on open or lock filters the user cannot remove
- **Infinite scroll** — automatic pagination as the user scrolls
- **Folder navigation** — browse the full DAM folder tree with breadcrumb
- **Labels view** — browse assets organized by label with breadcrumb navigation
- **Asset preview panel** — side panel with metadata, thumbnails, and video/audio playback
- **Multi-select & select all** — single or bulk selection with configurable max
- **Keyboard navigation** — arrow keys, Enter, Escape, Shift+click range select
- **Marquee selection** — click-and-drag to select multiple assets
- **Approval workflow** — filter by approval status, approver, requester, due date
- **Regional variants** — metadata variant groups with per-variant filtering
- **Internationalisation** — built-in i18n via i18next; pass `locale` in config (`'fr'`, `'de'`, `'en-US'`, etc.) — falls back to English for untranslated keys
- **Customisable theming** — brand color config + 20 CSS custom properties
- **Tiny footprint** — ~70 KB gzipped (main chunk)

## Requirements

- A [Scaleflex](https://www.scaleflex.com) VXP DAM account with a project token
- Either a **security template key** or a **SASS key** for authentication
- Modern browser with Custom Elements v1 support (see [Browser Support](#browser-support))

## Installation

### npm / yarn / pnpm

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

### CDN

No bundler? Add a single script tag:

```html
<script src="https://cdn.scaleflex.com/asset-picker/1.2.3/asset-picker.min.js"></script>
```

This auto-registers `<sfx-asset-picker>` — no imports needed. See the [CDN quick start](#cdn-1) below.

### Package exports

| Export path                      | Description                                                             |
| -------------------------------- | ----------------------------------------------------------------------- |
| `@scaleflex/asset-picker`        | `AssetPicker` class + all TypeScript types + asset utility functions    |
| `@scaleflex/asset-picker/react`  | React wrapper component + `AssetPickerProvider` + `useAssetPicker` hook |
| `@scaleflex/asset-picker/define` | Side-effect import — registers `<sfx-asset-picker>` custom element      |

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
    locale: 'fr', // optional — defaults to 'en'
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
      <button onClick={() => pickerRef.current?.open()}>Pick assets</button>

      <AssetPicker
        ref={pickerRef}
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
          locale: 'fr', // optional — defaults to 'en'
        }}
        onSelect={(assets) => console.log(assets)}
        onCancel={() => console.log('Cancelled')}
      />
    </>
  );
}
```

### CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.scaleflex.com/asset-picker/1.2.3/asset-picker.min.js"></script>
  </head>
  <body>
    <sfx-asset-picker></sfx-asset-picker>
    <button onclick="document.querySelector('sfx-asset-picker').open()">Open Picker</button>

    <script>
      const picker = document.querySelector('sfx-asset-picker');
      picker.config = {
        auth: {
          mode: 'securityTemplate',
          securityTemplateKey: 'YOUR_KEY',
          projectToken: 'YOUR_TOKEN',
        },
        locale: 'fr', // optional — defaults to 'en'
      };
      picker.addEventListener('ap-select', (e) => {
        console.log('Selected:', e.detail.assets);
      });
    </script>
  </body>
</html>
```

---

## Configuration

### Authentication

The picker supports two authentication modes:

#### Security template (external / public apps)

Use for client-side integrations. The picker automatically exchanges the security template key for a SASS key on init.

```ts
{
  auth: {
    mode: 'securityTemplate',
    securityTemplateKey: string,   // Exchanged for a SASS key via API
    projectToken: string,
  }
}
```

#### SASS key (internal / Scaleflex apps)

Use when your application already has a SASS key — e.g. inside the Scaleflex Hub where the host app manages SASS key generation and renewal.

```ts
{
  auth: {
    mode: 'sassKey',
    sassKey: string,         // X-Filerobot-Key
    projectToken: string,
  }
}
```

### Config Options

The full, always-current list of `AssetPickerConfig` properties lives on the live demo docs
site, not duplicated here to avoid two copies drifting apart:

**→ [Config Options reference](https://scaleflex.github.io/asset-picker/#/docs/configuration)**

Highlights: `auth` (required), `locale`, `multiSelect` / `maxSelections`, `tabs`,
`defaultFilters` / `forcedFilters`, `enabledFilters` / `enabledMetadataFields`, `variants`,
`transformations`, `uploader` (integrated uploader), `brandColor`,
`transformRemoteThumbnail`, `onSelect` / `onCancel`. The authoritative shape is always
[`src/types/config.types.ts`](./src/types/config.types.ts).

#### Sort fields

| Value                     | Available in        |
| ------------------------- | ------------------- |
| `'name'`                  | Assets, Folders     |
| `'created_at'`            | Assets, Folders     |
| `'modified_at'`           | Assets, Folders     |
| `'size'`                  | Assets              |
| `'type'`                  | Assets              |
| `'relevance'`             | Search results only |
| `'title'`                 | Assets              |
| `'color'`                 | Assets              |
| `'uploaded'`              | Assets              |
| `'updated_at'`            | Assets              |
| `'files_count_recursive'` | Folders only        |
| `'files_size_recursive'`  | Folders only        |

### Integrated uploader

Set `uploader` to add an "Upload" button to the toolbar and turn the content area into a
drop zone. Requires `@scaleflex/uploader` to be installed. **Auth and target folder are
derived automatically** from the picker's own `auth` and current folder — do not set them:

```js
picker.config = {
  auth: {
    mode: 'securityTemplate',
    projectToken: 'YOUR_CONTAINER',
    securityTemplateKey: 'SECU_...',
  },
  uploader: {
    autoProceed: false,
    showCopyCdnButton: true,
  },
};
```

#### Metadata in the uploader

Pass `uploader.metadataConfig` to let users fill project metadata before upload. An empty
object is all it takes — **including in `securityTemplate` auth mode**:

```js
picker.config = {
  auth: {
    mode: 'securityTemplate',
    projectToken: 'YOUR_CONTAINER',
    securityTemplateKey: 'SECU_...',
  },
  uploader: {
    metadataConfig: {
      enforceRequiredBeforeUpload: 'auto',
    },
  },
};
```

The "Fill Metadata" button appears automatically once `metadataConfig` is set. With no
`hubHeaders`, the schema is loaded from the container's `/v5/settings` endpoint using the
SASS key the uploader exchanges from your security template — no session token, no proxy,
no pre-fetched schema and **no `projectUuid`**: that request is scoped to your container,
which already identifies the project. Field groups, select options, regional variants,
required-field enforcement and product fields all work on this path.

Add `projectUuid` only when you want the Hub — it is the id in the Hub's `/project/{uuid}`
URL, and metadata **dependency rules** are Hub-only. Without it the uploader goes straight
to `/v5/settings` and leaves dependency rules off.

Two things need Hub session auth, which a security template cannot provide:

| Feature                                           | Without `hubHeaders`                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Metadata **dependency rules**                     | Disabled — unless you pass `metadataConfig.rawDependencies` yourself                                         |
| Project toggle `force_filling_metadata_on_upload` | Not read; `enforceRequiredBeforeUpload: 'auto'` infers enforcement from the schema's required fields instead |

If your app does have a Hub session, pass the tokens to get both back:

```js
uploader: {
  metadataConfig: {
    projectUuid: 'YOUR_PROJECT_UUID',
    hubHeaders: {
      'x-session-token': sessionUuid,
      'x-company-token': companyUuid,
      'x-project-token': projectUuid,
    },
  },
}
```

When the session token arrives asynchronously, assign a **new** config object once it is
available — in-place mutation is not detected. `metadataConfig.schemaSource` (`'auto'` by
default, or `'hub'` / `'settings'`) overrides which source is used.

### Content-Security-Policy & thumbnail proxying

If the host page enforces a `Content-Security-Policy` that does not allow the Filerobot
asset CDN (`assets.filerobot.com` / `*.filerobot.com`) as an `img-src`, asset thumbnails
will be blocked. Use `transformRemoteThumbnail` to rewrite every preview image URL through
a CSP-permitted proxy:

```ts
picker.config = {
  auth: {
    /* ... */
  },
  transformRemoteThumbnail: (url, ctx) => {
    // ctx.source: 'asset' | 'video' | 'pdf' | 'folder' (+ 'url-import' | 'connector'
    // when forwarded to the integrated uploader). ctx.asset is the Asset when available.
    return `https://proxy.example.com/?u=${encodeURIComponent(url)}`;
  },
};
```

What it covers:

- **Rewritten:** grid cards, list rows, folder previews, and every image in the preview
  panel — the main image, the fullscreen image, and the video poster. If the `uploader`
  is enabled, the same function is forwarded to it (`ctx.source` is `'url-import'` or
  `'connector'`), so branch on `ctx.source` to handle both.
- **Not rewritten:** the `<video>` / `<audio>` playback streams (including HLS). Those
  are the actual media, not previews — allow their origin in `media-src` instead.

Notes:

- Return the original `url` (or any falsy value) to leave it unchanged. The callback runs
  once per image per render, so keep it pure and cheap; thrown errors are caught and the
  original URL is used.
- The transform is registered process-wide. If two pickers share a page the last one
  configured wins, and a picker mounted without this option clears a previously registered
  transform.
- **File-type fallback icons** (shown for non-thumbnailable assets) are served from
  `scaleflex.cloudimg.io` and are **not** routed through this callback. A strict CSP must
  allowlist that origin in `img-src`, or use a CDN proxy at the network level for it.

### Default & Forced Filters

You can pre-configure filters that are applied when the picker opens, and/or lock filters that the user cannot remove.

```ts
picker.config = {
  auth: {
    /* ... */
  },

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

```ts
// Lock to specific extensions using subtype values (category_extension)
forcedFilters: {
  type: { values: ['image_svg', 'image_png'] },
},
```

**Behaviour:**

- **`defaultFilters`** are seeded into the applied filters state when `open()` is called. The user sees them as normal filter chips and can modify or remove them freely.
- **`forcedFilters`** are merged into every API request but are **not** stored in the mutable applied state. They render as locked chips (with a lock icon instead of an X button). The user cannot remove them, and "Clear filters" does not affect them. Forced filter keys are also hidden from the "Add filter" dropdown.
- If the same key appears in both `defaultFilters` and `forcedFilters`, the forced filter takes precedence — the default filter for that key is skipped.

### Restricting the filter menu

`enabledFilters` limits which filters the **Filters** menu offers:

```ts
picker.config = {
  auth: {
    /* ... */
  },
  enabledFilters: ['type', 'date', 'size'],
};
```

**Behaviour:**

- Only the listed keys appear in the Filters menu. Pass `[]` to hide the Filters button entirely; omit the option for all filters.
- Excluded keys are also hidden from the pinned-filter chips, and dropped from `defaultFilters` — otherwise the user would get a chip they can remove but not add back. The saved pin list itself is **not** rewritten: it is keyed by project token and shared across every picker on the origin, so a restricted picker hides pins without erasing them for an unrestricted one.
- `forcedFilters` are unaffected — a locked filter always applies, since it is never user-removable in the first place.
- Only filters that **have a menu entry** are governed. `mimetype`, `folders`, `resolution`, `orientation`, `faces` and `products` are integrator-only keys reachable solely through `defaultFilters` / `forcedFilters`; they always pass through, whatever `enabledFilters` lists.
- Approval sub-keys (`approval_status`, `task_approver`, `task_requester`, `task_duedate`) follow their parent `approval` entry.

#### Approval sub-filters

`approval` is a container, like `metadata`: its menu entry opens a list of four independent
filters rather than a panel of its own. Each one gets its own chip, popover and pin.

| Sub-key             | Constant                         | Filter          |
| ------------------- | -------------------------------- | --------------- |
| `'approval_status'` | `APPROVAL_FILTER_KEYS.STATUS`    | Approval status |
| `'task_approver'`   | `APPROVAL_FILTER_KEYS.APPROVER`  | Approver        |
| `'task_requester'`  | `APPROVAL_FILTER_KEYS.REQUESTOR` | Requester       |
| `'task_duedate'`    | `APPROVAL_FILTER_KEYS.DUE_DATE`  | Due date        |

Approver and Requester are listed only when the matching user list is configured — see
[`approverUsers` / `requesterUsers`](#configuration). All four are usable as `defaultFilters` /
`forcedFilters` keys whether or not the menu offers them.

### Restricting the metadata filter fields

`enabledMetadataFields` limits which metadata fields can be added as filters, independently of
`enabledFilters` (which governs the `metadata` entry as a whole):

```ts
picker.config = {
  auth: {
    /* ... */
  },
  enabledMetadataFields: ['campaign_name', 'photographer'],
};
```

**Behaviour:**

- Keys are the raw `MetadataModelField.key` from the project's schema (unprefixed — e.g.
  `'campaign_name'`, not `'text_campaign_name'`).
- Only the listed fields appear in the "Add metadata field" popup, the toolbar's metadata filter,
  and the metadata filter chips. Pass `[]` to make no metadata fields available; omit the option
  for all fields.
- A pinned field excluded here is hidden from the filters bar even if it is still present in
  localStorage — the saved pin list itself is left intact, same as `enabledFilters`.
- Keys with no match in the project's metadata schema are ignored silently.
- Does **not** affect the preview panel, which always shows the full metadata field list —
  that's governed separately by [`showMetadata`](#configuration).

### Internationalisation

The picker ships with English strings baked in as fallbacks. To render the UI in a different language, pass a [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) locale tag via `locale`. Translations are loaded lazily from the Scaleflex TMS CDN on first use; if a key is not yet translated the English default is shown.

```ts
picker.config = {
  auth: {
    /* ... */
  },
  locale: 'fr', // 'fr', 'de', 'en-US', etc. — defaults to 'en'
};
```

To debug missing translations locally, set the flag in `localStorage` and reload — untranslated keys are logged to the console:

```js
localStorage.setItem('apTranslationsMissingKeysEnabled', 'true');
```

---

## Public Methods

| Method    | Returns         | Description                                                                                                                |
| --------- | --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `open()`  | `Promise<void>` | Opens the picker modal. Initialises the API client and loads initial data if not already done. Fires `ap-open` on success. |
| `close()` | `void`          | Closes the picker modal and clears the selection state.                                                                    |

```js
// Open the picker
await picker.open();

// Close programmatically
picker.close();
```

---

## Events

All events bubble and cross shadow DOM boundaries (`composed: true`).

| Event       | Detail                                           | Description                                       |
| ----------- | ------------------------------------------------ | ------------------------------------------------- |
| `ap-select` | `{ assets: Asset[] }`                            | Fired when the user confirms their selection      |
| `ap-cancel` | `{ reason: 'backdrop' \| 'escape' \| 'button' }` | Fired when the picker is closed without selecting |
| `ap-open`   | `{ timestamp: number }`                          | Fired when the picker opens successfully          |
| `ap-error`  | `{ error: Error, context: string }`              | Fired on initialisation or runtime errors         |

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
import {
  AssetPicker,
  type AssetPickerRef,
  type AssetPickerProps,
} from '@scaleflex/asset-picker/react';
```

### Props

| Prop                  | Type                                                       | Description                                                  |
| --------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| `config`              | `AssetPickerConfig`                                        | Configuration object (see [Config Options](#config-options)) |
| `open`                | `boolean`                                                  | Controlled open state                                        |
| `onSelect`            | `(assets: Asset[], folders?: Folder[]) => void`            | Selection callback (assets + optional folders)               |
| `onSelectWithFolders` | `(result: { assets: Asset[]; folders: Folder[] }) => void` | Alternative callback that always includes folders            |
| `onCancel`            | `() => void`                                               | Cancel callback                                              |
| `className`           | `string`                                                   | CSS class for the wrapper                                    |
| `style`               | `CSSProperties`                                            | Inline styles for the wrapper                                |

### Ref methods

| Method    | Description                   |
| --------- | ----------------------------- |
| `open()`  | Open the picker imperatively  |
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
/>;
```

### Imperative mode

```tsx
const ref = useRef<AssetPickerRef>(null);

<button onClick={() => ref.current?.open()}>Open</button>
<AssetPicker ref={ref} config={config} onSelect={handleSelect} />
```

### Provider + Hook (recommended)

For apps that open the picker from many places, use `AssetPickerProvider` + `useAssetPicker()` to avoid managing open/close state yourself. One picker instance is mounted at the root and shared across the tree.

#### Setup

```tsx
import { AssetPickerProvider } from '@scaleflex/asset-picker/react';

function App() {
  return (
    <AssetPickerProvider
      config={{
        auth: {
          mode: 'sassKey',
          sassKey: 'YOUR_SASS_KEY',
          projectToken: 'YOUR_TOKEN',
        },
        locale: 'fr', // optional — defaults to 'en'
      }}
    >
      <Dashboard />
    </AssetPickerProvider>
  );
}
```

#### Promise mode

```tsx
import { useAssetPicker } from '@scaleflex/asset-picker/react';

function ImageSelector() {
  const picker = useAssetPicker();

  const handleClick = async () => {
    try {
      const assets = await picker.open({ multiSelect: true });
      console.log('Selected:', assets);
    } catch {
      console.log('User cancelled');
    }
  };

  return <button onClick={handleClick}>Choose images</button>;
}
```

The promise resolves with the selected `Asset[]` on confirm, and rejects with `'cancelled'` when the user closes without selecting. Note: promise mode returns only assets — use callback mode with `onSelect(assets, folders)` if you need folder data.

#### Callback mode

```tsx
function VideoSelector() {
  const picker = useAssetPicker();

  return (
    <button
      onClick={() =>
        picker.open({
          forcedFilters: { type: { values: ['video'] } },
          onSelect: (assets) => console.log(assets),
          onCancel: () => console.log('Cancelled'),
        })
      }
    >
      Choose video
    </button>
  );
}
```

#### Config overrides

Any `AssetPickerConfig` property passed to `open()` is merged with (and overrides) the base config from the provider:

```tsx
// Base config has multiSelect: false
// This call overrides it to true and adds a forced filter
const assets = await picker.open({
  multiSelect: true,
  forcedFilters: { type: { values: ['image'] } },
});
```

#### Hook return type

```ts
interface UseAssetPickerReturn {
  open(overrides?: OpenOptions): Promise<Asset[]>;
  close(): void;
  isOpen: boolean;
}
```

---

## Asset Utilities

Pure helper functions for working with `Asset` objects. Exported from the main entry point — no React required.

```ts
import {
  getAltText,
  getCdnUrl,
  getAssetWidth,
  getAssetHeight,
  getAssetDimensions,
  isTranscoded,
  getTranscodedUrl,
  getBestVideoUrl,
  isVideo,
  isImage,
  isAudio,
} from '@scaleflex/asset-picker';
```

### Type checks

| Function         | Returns   | Description                                  |
| ---------------- | --------- | -------------------------------------------- |
| `isImage(asset)` | `boolean` | `true` if `asset.type` starts with `"image"` |
| `isVideo(asset)` | `boolean` | `true` if `asset.type` starts with `"video"` |
| `isAudio(asset)` | `boolean` | `true` if `asset.type` starts with `"audio"` |

### URLs

| Function                  | Returns          | Description                                    |
| ------------------------- | ---------------- | ---------------------------------------------- |
| `getCdnUrl(asset)`        | `string`         | CDN URL, falling back to public URL, then `""` |
| `getBestVideoUrl(asset)`  | `string`         | Transcoded HLS URL > CDN URL > public URL      |
| `getTranscodedUrl(asset)` | `string \| null` | HLS manifest URL, or `null` if not transcoded  |

### Alt text

```ts
const alt = getAltText(asset); // uses first available language
const alt = getAltText(asset, 'fr'); // prefers French title
```

Resolution priority: `meta.alt` > `meta.title` (string or localized `Record<string, string>`) > filename without extension.

### Dimensions

| Function                    | Returns             | Description                                                 |
| --------------------------- | ------------------- | ----------------------------------------------------------- |
| `getAssetWidth(asset)`      | `number`            | Width in px (`0` if unknown). Works for images and videos.  |
| `getAssetHeight(asset)`     | `number`            | Height in px (`0` if unknown). Works for images and videos. |
| `getAssetDimensions(asset)` | `{ width, height }` | Both dimensions as an object.                               |

### Video transcoding

| Function                  | Returns          | Description                                    |
| ------------------------- | ---------------- | ---------------------------------------------- |
| `isTranscoded(asset)`     | `boolean`        | Whether the asset has a transcoded HLS version |
| `getTranscodedUrl(asset)` | `string \| null` | The HLS manifest URL, or `null`                |
| `getBestVideoUrl(asset)`  | `string`         | Best playback URL (transcoded > CDN > public)  |

---

## Theming

### Brand Color

The simplest way to theme the picker is via the `brandColor` config option. It accepts a hex colour string and applies it as the primary accent across all UI elements.

```ts
picker.config = {
  auth: {
    /* ... */
  },
  brandColor: '#6366f1', // Indigo
};
```

If not set, the picker uses the brand colour configured in your Scaleflex project settings.

### CSS Custom Properties

For fine-grained control, override these CSS custom properties on the `<sfx-asset-picker>` element or any ancestor. All variables use the `--ap-` prefix.

#### Colours

| Property                  | Default                | Description                 |
| ------------------------- | ---------------------- | --------------------------- |
| `--ap-primary`            | `oklch(0.65 0.19 258)` | Primary accent colour       |
| `--ap-primary-foreground` | `#fff`                 | Text on primary backgrounds |
| `--ap-primary-10`         | primary @ 10%          | Subtle primary tint         |
| `--ap-primary-20`         | primary @ 20%          | Light primary background    |
| `--ap-background`         | `#ffffff`              | Main background             |
| `--ap-foreground`         | `#09090b`              | Main text colour            |
| `--ap-card`               | `#ffffff`              | Card/panel background       |
| `--ap-border`             | `#e4e4e7`              | Border colour               |
| `--ap-muted`              | `#f4f4f5`              | Muted/disabled background   |
| `--ap-muted-foreground`   | `#71717a`              | Muted/disabled text         |
| `--ap-ring`               | same as primary        | Focus ring colour           |
| `--ap-selection-bg`       | primary @ 8%           | Selected item background    |

#### Modal

| Property                | Default           | Description             |
| ----------------------- | ----------------- | ----------------------- |
| `--ap-modal-backdrop`   | `rgba(0,0,0,0.5)` | Backdrop overlay colour |
| `--ap-modal-radius`     | `12px`            | Modal corner radius     |
| `--ap-modal-shadow`     | large shadow      | Modal box shadow        |
| `--ap-modal-max-width`  | `1200px`          | Maximum modal width     |
| `--ap-modal-max-height` | `85vh`            | Maximum modal height    |

#### Typography & Radius

| Property           | Default                                | Description           |
| ------------------ | -------------------------------------- | --------------------- |
| `--ap-font-family` | `system-ui, -apple-system, sans-serif` | Font stack            |
| `--ap-radius`      | `8px`                                  | Default border radius |
| `--ap-radius-sm`   | `6px`                                  | Small border radius   |
| `--ap-radius-lg`   | `12px`                                 | Large border radius   |

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

Only some of them have an entry in the **Filters** menu. `mimetype`, `folders`, `resolution`, `orientation`, `faces` and `products` are config-only: users cannot add them, and [`enabledFilters`](#restricting-the-filter-menu) does not govern them — they stay available to `defaultFilters` / `forcedFilters` regardless.

| Key                  | Constant                     | Description                                                |
| -------------------- | ---------------------------- | ---------------------------------------------------------- |
| `'type'`             | `FILTER_KEYS.TYPE`           | File format (image, video, audio, document, archive, font) |
| `'mimetype'`         | `FILTER_KEYS.MIME_TYPE`      | MIME type                                                  |
| `'date'`             | `FILTER_KEYS.DATE`           | Upload/modification date                                   |
| `'size'`             | `FILTER_KEYS.SIZE`           | File size range                                            |
| `'tags'`             | `FILTER_KEYS.TAGS`           | Asset tags                                                 |
| `'labels'`           | `FILTER_KEYS.LABELS`         | Asset labels                                               |
| `'color'`            | `FILTER_KEYS.COLOR`          | Dominant colour search                                     |
| `'image'`            | `FILTER_KEYS.IMAGE`          | Image-specific (resolution, orientation, faces)            |
| `'approval'`         | `FILTER_KEYS.APPROVAL`       | Approval — opens its four sub-filters (see below)          |
| `'metadata'`         | `FILTER_KEYS.METADATA`       | Custom metadata fields                                     |
| `'product_ref'`      | `FILTER_KEYS.PRODUCT_REF`    | Product reference                                          |
| `'asset_expiration'` | `FILTER_KEYS.LICENSE_EXPIRY` | License/asset expiry date                                  |
| `'folders'`          | `FILTER_KEYS.FOLDERS`        | Folder location                                            |
| `'resolution'`       | `FILTER_KEYS.RESOLUTION`     | Image resolution                                           |
| `'orientation'`      | `FILTER_KEYS.ORIENTATION`    | Image orientation                                          |
| `'faces'`            | `FILTER_KEYS.FACES`          | Detected faces count                                       |
| `'products'`         | `FILTER_KEYS.PRODUCTS`       | Products                                                   |

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

| Operator                | Symbol | Description           |
| ----------------------- | ------ | --------------------- |
| `IS`                    | `:`    | Exact match (default) |
| `EQUAL`                 | `=`    | Equality              |
| `NOT_EQUAL`             | `!=`   | Inequality            |
| `RANGE`                 | `..`   | Range match           |
| `IS_NOT`                | `:-`   | Negated match         |
| `IS_EXACT`              | `:=`   | Strict exact match    |
| `CONTAINS`              | `~`    | Contains substring    |
| `CONTAINS_IN_TEXT`      | `~~~`  | Full text search      |
| `STARTS_WITH`           | `~^`   | Starts with           |
| `GREATER_THAN`          | `>`    | Greater than          |
| `LESS_THAN`             | `<`    | Less than             |
| `GREATER_THAN_OR_EQUAL` | `>=`   | Greater than or equal |
| `LESS_THAN_OR_EQUAL`    | `<=`   | Less than or equal    |
| `SIMILAR_TO`            | `~~`   | Similarity match      |

---

## Types Reference

All types are exported from the main entry point:

```ts
import type {
  AssetPickerConfig,
  AuthConfig,
  SecurityTemplateAuth,
  SassKeyAuth,
  Asset,
  Folder,
  FolderOwner,
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
  type: string; // 'image', 'video', 'audio', 'document', ...
  mime?: string; // MIME type
  size: {
    bytes: number;
    pretty: string;
  };
  url?: {
    public: string; // Public URL
    cdn: string; // CDN-optimised URL
    path: string; // Relative path
    permalink?: string; // Permanent link
  };
  created_at: string; // ISO timestamp
  modified_at: string; // ISO timestamp
  tags:
    | Record<string, Array<{ label: string; sid: string }>>
    | Record<string, { label: string; sid: string }>
    | string[];
  labels: string[];
  meta: {
    title?: string | Record<string, string>; // plain or localized by language code
    description?: string;
    alt?: string;
    [key: string]: unknown;
  };
  info: {
    img_type?: string; // Image format (e.g. "jpeg", "png")
    img_w?: number; // Image width (px)
    img_h?: number; // Image height (px)
    duration?: number; // Audio duration (seconds)
    video_duration?: number; // Video duration (seconds)
    video_w?: number; // Video width (px)
    video_h?: number; // Video height (px)
    thumbnail?: string; // Thumbnail URL
    preview?: string; // Preview URL
    video_thumbnail?: string; // Video poster image URL
    video_gif?: string; // Animated GIF preview URL
    image_thumbnail?: string; // Image thumbnail URL
    main_colors?: string[]; // Dominant colours (names)
    main_colors_hex?: string[]; // Dominant colours (hex)
    dominant_color?: string; // Most dominant colour (name)
    dominant_color_hex?: string; // Most dominant colour (hex)
    color_space?: string; // Colour space (e.g. "sRGB")
    metadata?: Record<string, unknown>; // Embedded metadata (EXIF, IPTC, etc.)
    playlists?: Array<{ playlists: string[]; resolution?: string }>; // HLS transcoded playlists
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
  owner?: FolderOwner;
  created_at: string;
  modified_at?: string;
  updated_at?: string;
  count?: {
    files_recursive?: number;
    files_direct?: number;
  };
  size?: {
    total_recursive_bytes?: number;
    total_recursive_pretty?: string;
  };
  visibility?: {
    in_cdn?: { actual: string; set: string };
    in_dam?: { actual: string; set: string };
  };
  meta?: Record<string, unknown>;
  decoration?: {
    highlight_color?: string | null;
    has_custom_preview?: boolean | null;
  };
}

interface FolderOwner {
  uuid: string;
  name: string;
  email: string;
  photo?: string | null;
}
```

---

## Browser Support

| Browser         | Minimum version |
| --------------- | --------------- |
| Chrome          | 67+             |
| Firefox         | 63+             |
| Safari          | 13.1+           |
| Edge (Chromium) | 79+             |

Requires native support for Custom Elements v1, Shadow DOM, and ES2020+. Internet Explorer is **not** supported.

---

## Release

asset-picker ships from the `scaleflex-dam-tools` monorepo. Versioning and npm publishing
are centralized via [Changesets](https://github.com/changesets/changesets); the CDN bundle
is built per-app. From the monorepo root:

```bash
pnpm changeset                                    # record the bump (patch/minor/major)
pnpm --filter @scaleflex/asset-picker build:cdn   # → dist-cdn/asset-picker.min.js
```

Merging to `main` opens a Changesets "Version Packages" PR; merging that PR publishes to
npm. See [`DEPLOYING.md`](./DEPLOYING.md) for the full flow.

---

## Claude Code Integration

If you use [Claude Code](https://docs.anthropic.com/en/docs/claude-code), this package ships with a ready-made skill that helps Claude add the asset picker to your project — detecting your framework, wiring auth, events, theming, and filters automatically.

### Option 1: Project-level (recommended)

Copy the skill into your project so every team member who uses Claude Code gets it:

```bash
mkdir -p .claude/skills/integrate-asset-picker
cp node_modules/@scaleflex/asset-picker/.claude/skills/integrate-asset-picker/SKILL.md \
   .claude/skills/integrate-asset-picker/SKILL.md
```

Commit the `.claude/skills/` directory to version control. The skill is now available to everyone on the team.

### Option 2: Global (personal)

Install it once for all your projects:

```bash
mkdir -p ~/.claude/skills/integrate-asset-picker
cp node_modules/@scaleflex/asset-picker/.claude/skills/integrate-asset-picker/SKILL.md \
   ~/.claude/skills/integrate-asset-picker/SKILL.md
```

### Usage

Type `/integrate-asset-picker` in Claude Code and it will walk you through the full integration — install, config, events, and theming — tailored to your stack (React, Vue, vanilla JS, etc.).

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
