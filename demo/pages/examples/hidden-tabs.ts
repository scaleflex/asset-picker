import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import type { TabKey } from '../../../src/types/config.types';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let enabledTabs = new Set<TabKey>(['assets']);

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';
  const tabsArray = [...enabledTabs];
  const tabsStr = tabsArray.map((t) => `'${t}'`).join(', ');
  renderCodeBlock('#code-container', [
    {
      label: 'JavaScript',
      lang: 'javascript',
      code: `
picker.config = {
  auth: { /* ... */ },
  tabs: [${tabsStr}],
};`,
    },
    {
      label: 'React',
      lang: 'tsx',
      code: `
<AssetPicker
  config={{
    auth: { /* ... */ },
    tabs: [${tabsStr}],
  }}
/>`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Tabs</h1>
        <p>Use <code>tabs</code> to control which navigation tabs are available. If only one tab is specified, the tab dropdown is hidden.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group checkbox-group">
            <label><input type="checkbox" id="tab-assets" checked /> Assets</label>
          </div>
          <div class="form-group checkbox-group">
            <label><input type="checkbox" id="tab-folders" /> Folders</label>
          </div>
          <div class="form-group checkbox-group">
            <label><input type="checkbox" id="tab-labels" /> Labels</label>
          </div>
          <div class="form-group checkbox-group">
            <label><input type="checkbox" id="tab-collections" /> Collections</label>
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
    enabledTabs = new Set<TabKey>(['assets']);
    updateCode();

    function bindToggle(id: string, tab: TabKey) {
      const cb = document.getElementById(id) as HTMLInputElement;
      cb.addEventListener('change', () => {
        if (cb.checked) enabledTabs.add(tab);
        else enabledTabs.delete(tab);
        // Ensure at least one tab is enabled
        if (enabledTabs.size === 0) {
          enabledTabs.add('assets');
          (document.getElementById('tab-assets') as HTMLInputElement).checked = true;
        }
        updateCode();
      });
    }

    bindToggle('tab-assets', 'assets');
    bindToggle('tab-folders', 'folders');
    bindToggle('tab-labels', 'labels');
    bindToggle('tab-collections', 'collections');

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        tabs: [...enabledTabs],
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });
  },
};

export default page;
