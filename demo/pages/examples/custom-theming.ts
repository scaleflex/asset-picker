import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Custom theming</h1>
        <p>Override CSS custom properties on the <code>&lt;sfx-asset-picker&gt;</code> element for full control over colors, radii, and fonts — including dark themes.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(picker: AssetPicker) {
    const cssVars = `
  --ap-primary: #a78bfa;
  --ap-primary-foreground: #1a1625;
  --ap-primary-10: rgba(167, 139, 250, 0.12);
  --ap-background: #1a1625;
  --ap-foreground: #e8e0f0;
  --ap-card: #221d30;
  --ap-border: #2e2546;
  --ap-muted: #2a2240;
  --ap-muted-foreground: #9985b8;
  --ap-ring: #a78bfa;
  --ap-selection-bg: rgba(167, 139, 250, 0.15);
  --ap-modal-backdrop: rgba(10, 5, 20, 0.7);
  --ap-modal-radius: 16px;
  --ap-radius: 10px;
  --ap-radius-sm: 8px;
  --ap-radius-lg: 16px;
  --ap-font-family: 'Inter', system-ui, sans-serif;`.trim();

    renderCodeBlock('#code-container', [
      {
        label: 'HTML',
        lang: 'markup',
        code: `
<sfx-asset-picker id="picker" style="
  ${cssVars}
"></sfx-asset-picker>`,
      },
      {
        label: 'React',
        lang: 'tsx',
        code: `
<AssetPicker
  style={{
    '--ap-primary': '#a78bfa',
    '--ap-primary-foreground': '#1a1625',
    '--ap-primary-10': 'rgba(167, 139, 250, 0.12)',
    '--ap-background': '#1a1625',
    '--ap-foreground': '#e8e0f0',
    '--ap-card': '#221d30',
    '--ap-border': '#2e2546',
    '--ap-muted': '#2a2240',
    '--ap-muted-foreground': '#9985b8',
    '--ap-ring': '#a78bfa',
    '--ap-selection-bg': 'rgba(167, 139, 250, 0.15)',
    '--ap-modal-backdrop': 'rgba(10, 5, 20, 0.7)',
    '--ap-modal-radius': '16px',
    '--ap-radius': '10px',
    '--ap-radius-sm': '8px',
    '--ap-radius-lg': '16px',
    '--ap-font-family': "'Inter', system-ui, sans-serif",
  } as React.CSSProperties}
  config={{ /* ... */ }}
/>`,
      },
    ]);

    // Apply themed CSS vars to the shared picker for this example
    const vars: Record<string, string> = {
      '--ap-primary': '#a78bfa',
      '--ap-primary-foreground': '#1a1625',
      '--ap-primary-10': 'rgba(167, 139, 250, 0.12)',
      '--ap-background': '#1a1625',
      '--ap-foreground': '#e8e0f0',
      '--ap-card': '#221d30',
      '--ap-border': '#2e2546',
      '--ap-muted': '#2a2240',
      '--ap-muted-foreground': '#9985b8',
      '--ap-ring': '#a78bfa',
      '--ap-selection-bg': 'rgba(167, 139, 250, 0.15)',
      '--ap-modal-backdrop': 'rgba(10, 5, 20, 0.7)',
      '--ap-modal-radius': '16px',
      '--ap-radius': '10px',
      '--ap-radius-sm': '8px',
      '--ap-radius-lg': '16px',
      '--ap-font-family': "'Inter', system-ui, sans-serif",
    };

    for (const [key, value] of Object.entries(vars)) {
      picker.style.setProperty(key, value);
    }

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });
  },

  destroy() {
    // Remove themed CSS vars from the shared picker
    const picker = document.getElementById('picker') as HTMLElement | null;
    if (picker) {
      const keys = [
        '--ap-primary', '--ap-primary-foreground', '--ap-primary-10',
        '--ap-background', '--ap-foreground', '--ap-card', '--ap-border',
        '--ap-muted', '--ap-muted-foreground', '--ap-ring', '--ap-selection-bg',
        '--ap-modal-backdrop', '--ap-modal-radius', '--ap-radius',
        '--ap-radius-sm', '--ap-radius-lg', '--ap-font-family',
      ];
      for (const key of keys) {
        picker.style.removeProperty(key);
      }
    }
  },
};

export default page;
