---
name: integrate-asset-picker
description: Integrate @scaleflex/asset-picker into any project — install, configure auth,
  wire events, theme, and add filters. Works with vanilla JS, React, Vue, Angular, Svelte.
user_invocable: true
metadata:
  category: integration
  tags:
  - scaleflex
  - dam
  - asset-picker
  - web-component
  status: ready
  version: 1
---

# Scaleflex Asset Picker Integration Skill

## When to Use

- User says "add asset picker", "integrate asset picker", "DAM picker", "file picker from Scaleflex"
- User wants to let users browse/select assets from Scaleflex VXP DAM
- User asks how to use `@scaleflex/asset-picker` in their project

## Step 1 — Detect the Target Framework

Read the project's `package.json` to determine:
- **React** (18+): use the React wrapper (`@scaleflex/asset-picker/react`)
- **Vue / Angular / Svelte / vanilla JS**: use the Web Component (`@scaleflex/asset-picker/define`)

## Step 2 — Install

```bash
npm install @scaleflex/asset-picker
```

`lit` is bundled — no extra peer deps for vanilla JS / Vue / Angular / Svelte.
For React, `react` and `react-dom` (v18+) must already be installed (they're optional peer deps).

### Optional: Uploader integration

If the user wants upload functionality inside the picker:

```bash
npm install @scaleflex/uploader
```

## Step 3 — Add the Picker

### Vanilla JS / Web Component

```js
import '@scaleflex/asset-picker/define';

const picker = document.querySelector('sfx-asset-picker')
  || document.createElement('sfx-asset-picker');
document.body.appendChild(picker);

picker.config = {
  auth: {
    mode: 'securityTemplate',
    securityTemplateKey: 'YOUR_SECURITY_TEMPLATE_KEY',
    projectToken: 'YOUR_PROJECT_TOKEN',
  },
};

picker.addEventListener('ap-select', (e) => {
  const assets = e.detail.assets;
  console.log('Selected:', assets);
});

picker.addEventListener('ap-cancel', () => {
  console.log('Cancelled');
});

picker.open();
```

### React

```tsx
import { useRef, useState } from 'react';
import { AssetPicker, type AssetPickerRef } from '@scaleflex/asset-picker/react';
import type { Asset } from '@scaleflex/asset-picker';

function MyComponent() {
  const pickerRef = useRef<AssetPickerRef>(null);

  const config = {
    auth: {
      mode: 'securityTemplate' as const,
      securityTemplateKey: 'YOUR_SECURITY_TEMPLATE_KEY',
      projectToken: 'YOUR_PROJECT_TOKEN',
    },
  };

  const handleSelect = (assets: Asset[]) => {
    console.log('Selected:', assets);
  };

  return (
    <>
      <button onClick={() => pickerRef.current?.open()}>Pick assets</button>
      <AssetPicker
        ref={pickerRef}
        config={config}
        onSelect={handleSelect}
        onCancel={() => console.log('Cancelled')}
      />
    </>
  );
}
```

**React controlled mode** (open state managed by parent):

```tsx
const [isOpen, setIsOpen] = useState(false);

<AssetPicker
  config={config}
  open={isOpen}
  onSelect={(assets) => { handleSelect(assets); setIsOpen(false); }}
  onCancel={() => setIsOpen(false)}
/>
```

### Vue

```vue
<template>
  <sfx-asset-picker ref="picker"></sfx-asset-picker>
  <button @click="openPicker">Pick assets</button>
</template>

<script setup>
import '@scaleflex/asset-picker/define';
import { ref, onMounted } from 'vue';

const picker = ref(null);

onMounted(() => {
  const el = picker.value;
  el.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_SECURITY_TEMPLATE_KEY',
      projectToken: 'YOUR_PROJECT_TOKEN',
    },
  };

  el.addEventListener('ap-select', (e) => {
    console.log('Selected:', e.detail.assets);
  });
});

function openPicker() {
  picker.value?.open();
}
</script>
```

## Step 4 — Authentication

Ask the user which auth mode they need:

### Security template (external / public apps)

The picker auto-exchanges the key for a SASS key on init. Safer for client-side code.

```ts
auth: {
  mode: 'securityTemplate',
  securityTemplateKey: string,  // From Scaleflex dashboard
  projectToken: string,
}
```

### SASS key (internal / Scaleflex apps)

Use when the application already has a SASS key — e.g. inside the Scaleflex Hub where the host app manages SASS key generation and renewal.

```ts
auth: {
  mode: 'sassKey',
  sassKey: string,         // X-Filerobot-Key
  projectToken: string,
}
```

## Step 5 — Configure (Optional)

All options beyond `auth` are optional. Add only what the user needs:

```ts
picker.config = {
  auth: { /* ... */ },

  // Display
  displayMode: 'modal',              // 'modal' (default) or 'inline'
  defaultViewMode: 'grid',           // 'grid' (default) or 'list'
  brandColor: '#6366f1',             // Hex color for accent theme

  // Selection
  multiSelect: true,                 // default: true
  maxSelections: 5,                  // limit selections

  // Navigation
  rootFolderPath: '/marketing/',     // start in a specific folder
  tabs: ['assets', 'folders'],       // default: both. Use ['assets'] to hide folders tab
  defaultTab: 'assets',              // which tab opens first. Defaults to first in `tabs`
  rememberLastFolder: true,          // persist last folder in localStorage
  rememberLastView: true,            // persist grid/list preference

  // Sorting
  defaultSortBy: 'created_at',      // 'name' | 'created_at' | 'modified_at' | 'size' | 'type' | etc.
  defaultSortDirection: 'desc',     // 'asc' | 'desc'

  // Filters
  enabledFilters: ['type', 'tags', 'date'],  // restrict visible filters
  defaultFilters: {                           // pre-applied, user can remove
    type: { type: 'string', values: ['image'] },
  },
  forcedFilters: {                            // locked, user cannot remove
    tags: { type: 'string', values: ['approved'] },
  },

  // Metadata
  showMetadata: true,                // show metadata in preview panel

  // Uploader (requires @scaleflex/uploader installed)
  uploader: {
    autoProceed: false,
    restrictions: {
      maxFileSize: 10_000_000,       // 10 MB
      allowedFileTypes: ['image/*', 'video/*'],
    },
  },
};
```

## Events Reference

All events bubble and cross Shadow DOM (`composed: true`):

| Event | Detail | When |
|---|---|---|
| `ap-select` | `{ assets: Asset[] }` | User confirms selection |
| `ap-cancel` | `{ reason: 'backdrop' \| 'escape' \| 'button' \| 'close-button' }` | Picker closed without selecting |
| `ap-open` | `{ timestamp: number }` | Picker opened successfully |
| `ap-error` | `{ error: Error, context: string }` | Initialization or runtime error |

## Public Methods

| Method | Returns | Description |
|---|---|---|
| `open()` | `Promise<void>` | Open the picker, init API if needed |
| `close()` | `void` | Close and clear selection |

## Asset Object Shape

The `Asset` returned in `ap-select`:

```ts
interface Asset {
  uuid: string;
  name: string;
  extension: string;
  type: string;              // 'image', 'video', 'audio', 'document', ...
  mime?: string;
  size: { bytes: number; pretty: string };
  url?: {
    public: string;          // Public URL
    cdn: string;             // CDN-optimised URL
    path: string;            // Relative path
    permalink?: string;
  };
  created_at: string;
  modified_at: string;
  tags: Record<string, any>;
  labels: string[];
  meta: { title?: string; description?: string; alt?: string; [key: string]: unknown };
  info: {
    img_w?: number; img_h?: number;
    duration?: number;
    video_w?: number; video_h?: number;
    thumbnail?: string;
    main_colors_hex?: string[];
    dominant_color_hex?: string;
    [key: string]: unknown;
  };
  folder?: { uuid: string; name: string };
  owner?: { uuid: string; name: string; email: string };
}
```

## Theming

### Quick: brandColor config

```ts
picker.config = { auth: { /* ... */ }, brandColor: '#6366f1' };
```

### Advanced: CSS custom properties

Override on the element or any ancestor. All use `--ap-` prefix:

```css
sfx-asset-picker {
  --ap-primary: #6366f1;
  --ap-primary-foreground: #fff;
  --ap-background: #ffffff;
  --ap-foreground: #09090b;
  --ap-border: #e4e4e7;
  --ap-muted: #f4f4f5;
  --ap-muted-foreground: #71717a;
  --ap-radius: 8px;
  --ap-font-family: 'Inter', system-ui, sans-serif;
  --ap-modal-max-width: 1400px;
  --ap-modal-max-height: 90vh;
}
```

## Filter Data Structures

For `defaultFilters` and `forcedFilters`:

```ts
// String filter (type, mimetype, tags, labels, size, etc.)
{ type: 'string', values: ['image'], operator?: ':', logic?: 'OR' }

// Date filter
{
  type: 'date',
  field: 'created' | 'updated',
  kind: 'preset' | 'after' | 'before' | 'between' | 'specific' | null,
  preset: 'today' | 'last_week' | 'last_month' | 'last_year' | null,
  from: string | null,  // ISO date
  to: string | null,    // ISO date
}
```

**Filter keys:** `type`, `mimetype`, `date`, `size`, `tags`, `labels`, `color`, `image`, `approval`, `metadata`, `product_ref`, `asset_expiration`, `folders`, `resolution`, `orientation`, `faces`, `products`

## Common Patterns

### Single image picker

```ts
config = {
  auth: { /* ... */ },
  multiSelect: false,
  forcedFilters: { type: { type: 'string', values: ['image'] } },
  tabs: ['assets'],
};
```

### Inline mode (embedded in page, not modal)

```ts
config = {
  auth: { /* ... */ },
  displayMode: 'inline',
};
```

Style the container height:
```css
sfx-asset-picker { --ap-inline-height: 500px; }
```

### With uploader drop zone

```ts
config = {
  auth: { /* ... */ },
  uploader: {
    autoProceed: true,
    restrictions: { maxFileSize: 50_000_000 },
  },
};
```

Requires `@scaleflex/uploader` installed as peer dependency.

## Troubleshooting

- **"customElements is not defined"** — SSR environment. The React wrapper handles this automatically. For vanilla JS, guard the import: `if (typeof customElements !== 'undefined') import('@scaleflex/asset-picker/define');`
- **Styles not showing** — The component uses Shadow DOM; external CSS won't penetrate. Use `--ap-*` CSS custom properties for theming.
- **Auth errors** — Check that the security template key or SASS key is valid and the project token matches.
- **`open()` does nothing** — `config` must be set before calling `open()`. Ensure `auth` is provided.
