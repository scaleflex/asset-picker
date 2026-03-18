import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let brandColor = '#155bcd';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Theming</h1>
        <p>Use the <code>brandColor</code> option to theme the picker to match your brand. Pass any hex color and the picker derives all accent shades automatically.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="color-input">Brand color</label>
            <input type="color" id="color-input" value="#155bcd" />
          </div>
          <div class="form-group">
            <label for="color-hex">Hex value</label>
            <input type="text" id="color-hex" value="#155bcd" class="mono-input" />
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(picker: AssetPicker) {
    brandColor = '#155bcd';

    renderCodeBlock('#code-container', [
      {
        label: 'JavaScript',
        lang: 'javascript',
        code: `
picker.config = {
  auth: { /* ... */ },
  brandColor: '#155bcd', // Any hex color
};`,
      },
      {
        label: 'React',
        lang: 'tsx',
        code: `
<AssetPicker
  config={{
    auth: { /* ... */ },
    brandColor: '#155bcd',
  }}
/>`,
      },
    ]);

    const colorInput = document.getElementById('color-input') as HTMLInputElement;
    const hexInput = document.getElementById('color-hex') as HTMLInputElement;

    colorInput.addEventListener('input', () => {
      brandColor = colorInput.value;
      hexInput.value = brandColor;
    });

    hexInput.addEventListener('input', () => {
      const val = hexInput.value.trim();
      if (/^#[0-9a-f]{6}$/i.test(val)) {
        brandColor = val;
        colorInput.value = val;
      }
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        brandColor,
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });
  },
};

export default page;
