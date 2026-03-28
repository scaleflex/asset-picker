import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const STORAGE_KEYS = {
  lastTab: 'ap-last-tab',
  lastFolder: 'ap-last-folder',
  lastView: 'ap-last-view',
};

let rememberLastTab = true;
let rememberLastFolder = true;
let rememberLastView = true;

function clearStoredValue(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch { /* ignore */ }
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Preferences</h1>
        <p>Persist the user's last active tab, last folder, and last view mode across sessions using <code>rememberLastTab</code>, <code>rememberLastFolder</code>, and <code>rememberLastView</code>. Values are stored in localStorage and restored automatically on next open.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-tab">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-tab" checked />
                <span class="toggle-track"></span>
              </span>
              Remember last tab
            </label>
          </div>
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-folder">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-folder" checked />
                <span class="toggle-track"></span>
              </span>
              Remember last folder
            </label>
          </div>
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-view">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-view" checked />
                <span class="toggle-track"></span>
              </span>
              Remember last view mode
            </label>
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
    rememberLastTab = true;
    rememberLastFolder = true;
    rememberLastView = true;

    const toggleTab = document.getElementById('toggle-tab') as HTMLInputElement;
    const toggleFolder = document.getElementById('toggle-folder') as HTMLInputElement;
    const toggleView = document.getElementById('toggle-view') as HTMLInputElement;

    toggleTab.addEventListener('change', () => {
      rememberLastTab = toggleTab.checked;
      if (!rememberLastTab) {
        clearStoredValue(STORAGE_KEYS.lastTab);
      }
    });

    toggleFolder.addEventListener('change', () => {
      rememberLastFolder = toggleFolder.checked;
      if (!rememberLastFolder) {
        clearStoredValue(STORAGE_KEYS.lastFolder);
      }
    });

    toggleView.addEventListener('change', () => {
      rememberLastView = toggleView.checked;
      if (!rememberLastView) {
        clearStoredValue(STORAGE_KEYS.lastView);
      }
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        rememberLastTab,
        rememberLastFolder,
        rememberLastView,
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });

    renderCodeBlock('#code-container', [
      {
        label: 'HTML',
        lang: 'markup',
        code: `
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script type="module">
  import '@scaleflex/asset-picker/define';

  const picker = document.getElementById('picker');
  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
    rememberLastTab: true,
    rememberLastFolder: true,
    rememberLastView: true,
    onSelect: (assets) => console.log('Selected:', assets),
  };
  picker.open();
</script>`,
      },
      {
        label: 'React',
        lang: 'tsx',
        code: `
import { AssetPicker } from '@scaleflex/asset-picker/react';
import { useRef } from 'react';

export function App() {
  const ref = useRef(null);

  return (
    <>
      <button onClick={() => ref.current?.open()}>Open picker</button>
      <AssetPicker
        ref={ref}
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
          rememberLastTab: true,
          rememberLastFolder: true,
          rememberLastView: true,
          onSelect: (assets) => console.log('Selected:', assets),
        }}
      />
    </>
  );
}`,
      },
    ]);
  },

  destroy() {
    // Nothing to clean up — event listeners are on elements that get replaced
  },
};

export default page;
