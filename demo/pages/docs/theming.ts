import type { Page } from '../../lib/router';
import { code, docNav, highlightAll } from '../../lib/doc-utils';

const page: Page = {
  render() {
    return `
      <div class="doc-content">
        <h1>Theming</h1>
        <p class="doc-lead">Customise the picker's appearance using a brand colour or CSS custom properties.</p>

        <h2>Brand color</h2>
        <p>The simplest way to theme the picker is via the <code>brandColor</code> config option. It accepts a hex colour string and applies it as the primary accent across all UI elements.</p>
        ${code(
          'typescript',
          `picker.config = {
  auth: { /* ... */ },
  brandColor: '#6366f1', // Indigo
};`,
        )}
        <p>If not set, the picker uses the brand colour configured in your Scaleflex project settings.</p>

        <h2>CSS custom properties</h2>
        <p>For fine-grained control, override these CSS custom properties on the <code>&lt;sfx-asset-picker&gt;</code> element or any ancestor. All variables use the <code>--ap-</code> prefix.</p>

        <h3>Colours</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--ap-primary</code></td><td><code>oklch(0.65 0.19 258)</code></td><td>Primary accent colour</td></tr>
            <tr><td><code>--ap-primary-foreground</code></td><td><code>#fff</code></td><td>Text on primary backgrounds</td></tr>
            <tr><td><code>--ap-primary-10</code></td><td>primary @ 10%</td><td>Subtle primary tint</td></tr>
            <tr><td><code>--ap-primary-20</code></td><td>primary @ 20%</td><td>Light primary background</td></tr>
            <tr><td><code>--ap-background</code></td><td><code>#ffffff</code></td><td>Main background</td></tr>
            <tr><td><code>--ap-foreground</code></td><td><code>#09090b</code></td><td>Main text colour</td></tr>
            <tr><td><code>--ap-card</code></td><td><code>#ffffff</code></td><td>Card/panel background</td></tr>
            <tr><td><code>--ap-border</code></td><td><code>#e4e4e7</code></td><td>Border colour</td></tr>
            <tr><td><code>--ap-muted</code></td><td><code>#f4f4f5</code></td><td>Muted/disabled background</td></tr>
            <tr><td><code>--ap-muted-foreground</code></td><td><code>#71717a</code></td><td>Muted/disabled text</td></tr>
            <tr><td><code>--ap-ring</code></td><td>same as primary</td><td>Focus ring colour</td></tr>
            <tr><td><code>--ap-selection-bg</code></td><td>primary @ 8%</td><td>Selected item background</td></tr>
          </tbody>
        </table>

        <h3>Modal</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--ap-modal-backdrop</code></td><td><code>rgba(0,0,0,0.5)</code></td><td>Backdrop overlay colour</td></tr>
            <tr><td><code>--ap-modal-radius</code></td><td><code>12px</code></td><td>Modal corner radius</td></tr>
            <tr><td><code>--ap-modal-shadow</code></td><td>large shadow</td><td>Modal box shadow</td></tr>
            <tr><td><code>--ap-modal-max-width</code></td><td><code>1200px</code></td><td>Maximum modal width</td></tr>
            <tr><td><code>--ap-modal-max-height</code></td><td><code>85vh</code></td><td>Maximum modal height</td></tr>
          </tbody>
        </table>

        <h3>Typography &amp; radius</h3>
        <table>
          <thead><tr><th>Property</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>--ap-font-family</code></td><td><code>system-ui, -apple-system, sans-serif</code></td><td>Font stack</td></tr>
            <tr><td><code>--ap-radius</code></td><td><code>8px</code></td><td>Default border radius</td></tr>
            <tr><td><code>--ap-radius-sm</code></td><td><code>6px</code></td><td>Small border radius</td></tr>
            <tr><td><code>--ap-radius-lg</code></td><td><code>12px</code></td><td>Large border radius</td></tr>
          </tbody>
        </table>

        ${code(
          'css',
          `sfx-asset-picker {
  --ap-primary: #6366f1;
  --ap-primary-foreground: #fff;
  --ap-radius: 12px;
  --ap-modal-max-width: 1400px;
}`,
        )}

        ${docNav(
          { href: '#/docs/api', label: 'API' },
          { href: '#/docs/filters', label: 'Filters' },
        )}
      </div>
    `;
  },

  init() {
    highlightAll();
  },
};

export default page;
