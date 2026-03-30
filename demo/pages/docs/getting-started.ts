import type { Page } from '../../lib/router';
import { code, docNav, highlightAll } from '../../lib/doc-utils';

const page: Page = {
  render() {
    return `
      <div class="doc-content">
        <h1>Getting started</h1>
        <p class="doc-lead">
          <code>@scaleflex/asset-picker</code> is a drop-in modal component that connects to a
          <a href="https://www.scaleflex.com" target="_blank" rel="noopener">Scaleflex VXP</a> DAM project and
          lets users browse, search, filter, preview, and select digital assets.
        </p>

        <h2>Features</h2>
        <ul>
          <li><strong>Framework-agnostic</strong> — standard <code>&lt;sfx-asset-picker&gt;</code> custom element, works in any stack</li>
          <li><strong>First-class React wrapper</strong> — <code>forwardRef</code> component with controlled <code>open</code> prop and imperative ref</li>
          <li><strong>Two auth modes</strong> — security templates or direct SASS key</li>
          <li><strong>Grid &amp; list views</strong> — switchable with persistent user preference</li>
          <li><strong>Full-text search</strong> — real-time search across your DAM</li>
          <li><strong>14+ filter types</strong> — type, date, size, tags, labels, color, approval status, metadata, and more</li>
          <li><strong>Filter pinning</strong> — users can pin favourite filters; persisted to <code>localStorage</code></li>
          <li><strong>Default &amp; forced filters</strong> — pre-apply filters on open or lock filters the user cannot remove</li>
          <li><strong>Infinite scroll</strong> — automatic pagination as the user scrolls</li>
          <li><strong>Folder navigation</strong> — browse the full DAM folder tree with breadcrumb</li>
          <li><strong>Asset preview panel</strong> — side panel with metadata, thumbnails, and video/audio playback</li>
          <li><strong>Multi-select &amp; select all</strong> — single or bulk selection with configurable max</li>
          <li><strong>Keyboard navigation</strong> — arrow keys, Enter, Escape, Shift+click range select</li>
          <li><strong>Marquee selection</strong> — click-and-drag to select multiple assets</li>
          <li><strong>Customisable theming</strong> — brand color config + 20 CSS custom properties</li>
          <li><strong>Tiny footprint</strong> — ~70 KB gzipped (main chunk)</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>A <a href="https://www.scaleflex.com" target="_blank" rel="noopener">Scaleflex</a> VXP DAM account with a project token</li>
          <li>Either a <strong>security template key</strong> or a <strong>SASS key</strong> for authentication</li>
          <li>Modern browser with Custom Elements v1 support (see Browser support below)</li>
        </ul>

        <h2>Installation</h2>
        ${code('bash', 'npm install @scaleflex/asset-picker')}
        ${code('bash', 'yarn add @scaleflex/asset-picker')}
        ${code('bash', 'pnpm add @scaleflex/asset-picker')}
        <p><code>lit</code> is bundled with the package. For React usage, you also need <code>react</code> and <code>react-dom</code> (v18+) as peer dependencies.</p>

        <h3>Package exports</h3>
        <table>
          <thead><tr><th>Export path</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>@scaleflex/asset-picker</code></td><td><code>AssetPicker</code> class + all TypeScript types</td></tr>
            <tr><td><code>@scaleflex/asset-picker/react</code></td><td>React wrapper component</td></tr>
            <tr><td><code>@scaleflex/asset-picker/define</code></td><td>Side-effect import — registers <code>&lt;sfx-asset-picker&gt;</code> custom element</td></tr>
          </tbody>
        </table>
        <p>Both ESM (<code>import</code>) and CJS (<code>require</code>) builds are provided.</p>

        <h2>Quick start</h2>

        <h3>Vanilla JS / Web Component</h3>
        ${code(
          'markup',
          `<sfx-asset-picker></sfx-asset-picker>

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

  // 5. Open
  picker.open();
</script>`,
        )}

        <h3>React</h3>
        ${code(
          'tsx',
          `import { AssetPicker } from '@scaleflex/asset-picker/react';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Pick assets</button>
      <AssetPicker
        open={open}
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
        }}
        onSelect={(assets) => console.log(assets)}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}`,
        )}

        <h2>Browser support</h2>
        <table>
          <thead><tr><th>Browser</th><th>Minimum version</th></tr></thead>
          <tbody>
            <tr><td>Chrome</td><td>67+</td></tr>
            <tr><td>Firefox</td><td>63+</td></tr>
            <tr><td>Safari</td><td>13.1+</td></tr>
            <tr><td>Edge (Chromium)</td><td>79+</td></tr>
          </tbody>
        </table>
        <p>Requires native support for Custom Elements v1, Shadow DOM, and ES2020+. Internet Explorer is <strong>not</strong> supported.</p>

        ${docNav(undefined, { href: '#/docs/configuration', label: 'Configuration' })}
      </div>
    `;
  },

  init() {
    highlightAll();
  },
};

export default page;
