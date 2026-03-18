import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const allTypes = ['image', 'video', 'audio', 'document', 'archive'];
let selectedTypes = new Set(['image', 'video']);

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Restricted types</h1>
        <p>Use <code>allowedFileTypes</code> to limit which file types appear in the picker.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label>Allowed file types</label>
            <div id="type-checkboxes" class="checkbox-row">
              ${allTypes
                .map(
                  (t) => `
                <label class="checkbox-label">
                  <input type="checkbox" data-type="${t}" ${['image', 'video'].includes(t) ? 'checked' : ''} /> ${t}
                </label>`,
                )
                .join('')}
            </div>
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
    selectedTypes = new Set(['image', 'video']);

    renderCodeBlock('#code-container', [
      {
        label: 'JavaScript',
        lang: 'javascript',
        code: `
picker.config = {
  auth: { /* ... */ },
  allowedFileTypes: ['image', 'video'],
};`,
      },
      {
        label: 'React',
        lang: 'tsx',
        code: `
<AssetPicker
  config={{
    auth: { /* ... */ },
    allowedFileTypes: ['image', 'video'],
  }}
/>`,
      },
    ]);

    document.getElementById('type-checkboxes')!.addEventListener('change', (e) => {
      const cb = e.target as HTMLInputElement;
      const type = cb.dataset.type!;
      if (cb.checked) selectedTypes.add(type);
      else selectedTypes.delete(type);
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        allowedFileTypes: [...selectedTypes],
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });
  },
};

export default page;
