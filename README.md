# @scaleflex/asset-picker

A framework-agnostic Asset Picker for [Scaleflex Filerobot](https://www.scaleflex.com/filerobot) DAM. Built as a Web Component with [Lit](https://lit.dev/), with a first-class React wrapper.

Browse, search, filter, and select assets from your Filerobot project — embed it in any app with a few lines of code.

## Features

- **Web Component** — works with any framework or vanilla JS
- **React wrapper** — `forwardRef`-based component with typed props
- **Grid & list views** with smooth staggered animations
- **Full-text search** with debounced input
- **Rich filtering** — file type, tags, labels, color, date range, size, orientation, approval status, custom metadata
- **Multi-select** — click, Shift+click range, Ctrl/Cmd+click toggle, rubber-band drag
- **Preview panel** — slide-in panel with asset details, tags, and fullscreen support
- **Infinite scroll** — loads 100 assets at a time via IntersectionObserver
- **Theming** — fully customizable via `--ap-*` CSS custom properties
- **Keyboard accessible** — tab navigation, arrow keys, Escape to close
- **SSR safe** — conditional custom element registration
- **Lightweight** — ~22 KB gzipped (excluding `lit` peer)

## Installation

```bash
npm install @scaleflex/asset-picker lit
```

`lit` is a peer dependency. For React usage, you also need `react` and `react-dom` (v18+).

## Quick Start

### Vanilla JS / Web Component

```html
<script type="module">
  import '@scaleflex/asset-picker/define';
</script>

<asset-picker id="picker"></asset-picker>

<script type="module">
  const picker = document.getElementById('picker');

  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
  };

  picker.addEventListener('ap-select', (e) => {
    console.log('Selected assets:', e.detail.assets);
  });

  picker.addEventListener('ap-cancel', () => {
    console.log('Picker closed');
  });

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
        Open Picker
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
        onSelect={(assets) => console.log('Selected:', assets)}
        onCancel={() => console.log('Cancelled')}
      />
    </>
  );
}
```

## Authentication

Two auth modes are supported:

### Security Template (external / public apps)

```typescript
{
  auth: {
    mode: 'securityTemplate',
    securityTemplateKey: 'your-security-template-key',
    projectToken: 'your-project-token',
  }
}
```

The picker automatically exchanges the security template key for a SASS key on init.

### Session (internal / Scaleflex apps)

```typescript
{
  auth: {
    mode: 'session',
    sessionToken: 'session-uuid',
    companyToken: 'company-token',
    projectToken: 'project-token',
  }
}
```

## Configuration

| Option | Type | Default | Description |
|---|---|---|---|
| `auth` | `AuthConfig` | **required** | Authentication configuration |
| `apiBase` | `string` | Auto from token | Custom API base URL |
| `multiSelect` | `boolean` | `true` | Allow selecting multiple assets |
| `maxSelections` | `number` | `undefined` | Maximum number of selectable assets |
| `defaultViewMode` | `'grid' \| 'list'` | `'grid'` | Initial view mode |
| `defaultSortBy` | `string` | `'created_at'` | Initial sort field (`name`, `created_at`, `modified_at`, `size`, `type`) |
| `defaultSortDirection` | `'asc' \| 'desc'` | `'desc'` | Initial sort direction |
| `hiddenTabs` | `TabKey[]` | `[]` | Tabs to hide (`assets`, `folders`) |
| `enabledFilters` | `FilterKey[]` | All | Which filters to show |
| `allowedFileTypes` | `string[]` | All | Restrict to specific file types |
| `rootFolderUuid` | `string` | Root | Start browsing from a specific folder |
| `onSelect` | `(assets) => void` | — | Callback when assets are confirmed |
| `onCancel` | `() => void` | — | Callback when picker is dismissed |

## Events

| Event | Detail | Description |
|---|---|---|
| `ap-select` | `{ assets: Asset[] }` | Fired when the user confirms selection |
| `ap-cancel` | `{ reason: string }` | Fired when the picker is closed without selection |
| `ap-open` | `{ timestamp: number }` | Fired when the picker opens |
| `ap-error` | `{ error: Error, context: string }` | Fired on API or init errors |

## Methods

| Method | Description |
|---|---|
| `open()` | Opens the picker modal (async — waits for auth init) |
| `close()` | Closes the picker modal |

## Theming

Customize the picker's appearance with CSS custom properties on the host or any ancestor:

```css
asset-picker {
  --ap-primary: oklch(0.65 0.19 258);
  --ap-primary-foreground: #fff;
  --ap-primary-10: oklch(0.65 0.19 258 / 0.1);
  --ap-background: #fff;
  --ap-foreground: #09090b;
  --ap-card: #fff;
  --ap-border: #e4e4e7;
  --ap-muted: #f4f4f5;
  --ap-muted-foreground: #71717a;
  --ap-ring: oklch(0.65 0.19 258);
  --ap-selection-bg: oklch(0.65 0.19 258 / 0.08);
  --ap-font-family: system-ui, -apple-system, sans-serif;
  --ap-font-size-sm: 0.875rem;
  --ap-font-size-base: 1rem;
  --ap-radius: 8px;
  --ap-radius-sm: 6px;
  --ap-modal-max-width: 1200px;
  --ap-modal-max-height: 85vh;
  --ap-modal-radius: 12px;
  --ap-modal-backdrop: rgba(0, 0, 0, 0.5);
  --ap-modal-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
```

The picker fetches your project's brand color from the Filerobot API and applies it automatically. Override with `--ap-primary` to use a custom color.

## Package Exports

```
@scaleflex/asset-picker        — Core types and AssetPicker class
@scaleflex/asset-picker/react  — React wrapper component
@scaleflex/asset-picker/define — Side-effect import that registers <asset-picker>
```

Both ESM and CJS builds are provided.

## Development

```bash
npm install
npm run dev       # Dev server with playground at dev/index.html
npm run build     # Production build to dist/
npm run typecheck # TypeScript type checking
```

## Browser Support

All modern browsers that support Web Components, Shadow DOM, and `<dialog>`. No IE11 support.

## License

MIT
