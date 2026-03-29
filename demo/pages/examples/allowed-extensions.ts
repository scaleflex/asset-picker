import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let extensions = ['svg'];

const PRESETS: Record<string, string[]> = {
  svg: ['svg'],
  raster: ['png', 'jpg', 'jpeg', 'webp'],
  documents: ['pdf', 'docx', 'xlsx'],
  video: ['mp4', 'webm', 'mov'],
};

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';
  const formatted = extensions.map((e) => `'${e}'`).join(', ');
  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: `
picker.config = {
  auth: { /* ... */ },
  allowedExtensions: [${formatted}],
};`,
    },
    {
      label: 'React',
      lang: 'tsx',
      code: `
<AssetPicker
  config={{
    auth: { /* ... */ },
    allowedExtensions: [${formatted}],
  }}
/>`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Allowed extensions</h1>
        <p>Use <code>allowedExtensions</code> to restrict results to specific file formats. Only files matching the listed extensions are returned from the API.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="preset-select">Extension preset</label>
            <select id="preset-select">
              <option value="svg" selected>SVG only</option>
              <option value="raster">Raster images (png, jpg, webp)</option>
              <option value="documents">Documents (pdf, docx, xlsx)</option>
              <option value="video">Video (mp4, webm, mov)</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div class="form-group" id="custom-group" style="display:none">
            <label for="custom-input">Extensions (comma-separated)</label>
            <input type="text" id="custom-input" placeholder="e.g. png, jpg, gif" />
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
    extensions = ['svg'];
    updateCode();

    const select = document.getElementById('preset-select') as HTMLSelectElement;
    const customGroup = document.getElementById('custom-group')!;
    const customInput = document.getElementById('custom-input') as HTMLInputElement;

    select.addEventListener('change', () => {
      const val = select.value;
      if (val === 'custom') {
        customGroup.style.display = '';
        const parsed = customInput.value.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
        extensions = parsed.length ? parsed : ['svg'];
      } else {
        customGroup.style.display = 'none';
        extensions = PRESETS[val];
      }
      updateCode();
    });

    customInput.addEventListener('input', () => {
      const parsed = customInput.value.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
      extensions = parsed.length ? parsed : ['svg'];
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        allowedExtensions: extensions,
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });
  },
};

export default page;
