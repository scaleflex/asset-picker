import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let rootPath = '/Images';

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';
  const pathValue = rootPath || '/marketing/banners/';
  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: `
picker.config = {
  auth: { /* ... */ },
  rootFolderPath: '${pathValue}',
};`,
    },
    {
      label: 'React',
      lang: 'tsx',
      code: `
<AssetPicker
  config={{
    auth: { /* ... */ },
    rootFolderPath: '${pathValue}',
  }}
/>`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Root folder</h1>
        <p>Use <code>rootFolderPath</code> to scope the picker to a specific folder. Users can browse subfolders but cannot navigate above the root.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="path-input">Root folder path</label>
            <input type="text" id="path-input" placeholder="e.g. /marketing/banners/" class="mono-input" />
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
        <p class="helper-text">Defaults to <code>/Images</code>. Change the path to scope to a different folder.</p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(picker: AssetPicker) {
    rootPath = '/Images';
    updateCode();

    const input = document.getElementById('path-input') as HTMLInputElement;
    input.value = rootPath;
    input.addEventListener('input', () => {
      rootPath = input.value.trim();
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        rootFolderPath: rootPath || '/Images',
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });
  },
};

export default page;
