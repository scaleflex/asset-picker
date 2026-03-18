import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let filterType = 'image';

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';
  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: `
picker.config = {
  auth: { /* ... */ },
  defaultFilters: {
    type: { values: ['${filterType}'] },
  },
};`,
    },
    {
      label: 'React',
      lang: 'tsx',
      code: `
<AssetPicker
  config={{
    auth: { /* ... */ },
    defaultFilters: {
      type: { values: ['${filterType}'] },
    },
  }}
/>`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Default filters</h1>
        <p>Use <code>defaultFilters</code> to pre-apply filters when the picker opens. Users can modify or remove these filters.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="filter-select">Filter by type</label>
            <select id="filter-select">
              <option value="image" selected>Images</option>
              <option value="video">Videos</option>
              <option value="audio">Audio</option>
              <option value="document">Documents</option>
            </select>
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
    filterType = 'image';
    updateCode();

    const select = document.getElementById('filter-select') as HTMLSelectElement;
    select.addEventListener('change', () => {
      filterType = select.value;
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        defaultFilters: {
          type: { values: [filterType] },
        },
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });
  },
};

export default page;
