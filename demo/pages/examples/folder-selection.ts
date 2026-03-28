import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let folderSelectionMode: 'folder' | 'assets' = 'folder';

function updateCode() {
  const container = document.getElementById('code-container');
  if (!container) return;
  container.innerHTML = '';
  renderCodeBlock('#code-container', [
    {
      label: 'HTML',
      lang: 'markup',
      code: `
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  picker.config = {
    auth: { /* ... */ },
    folderSelection: true,
    folderSelectionMode: '${folderSelectionMode}',
    onSelect: (assets) => {
      console.log('Selected:', assets.length, 'assets');
    },
  };
</script>`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Folder selection</h1>
        <p>Enable <code>folderSelection: true</code> to let users select folders alongside assets. Configure <code>folderSelectionMode</code> to control what happens on confirm.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="mode-select">Folder selection mode</label>
            <select id="mode-select">
              <option value="folder" selected>folder (return folders as-is)</option>
              <option value="assets">assets (resolve folder contents)</option>
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
    folderSelectionMode = 'folder';
    updateCode();

    const select = document.getElementById('mode-select') as HTMLSelectElement;
    select.addEventListener('change', () => {
      folderSelectionMode = select.value as 'folder' | 'assets';
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        folderSelection: true,
        folderSelectionMode,
        onSelect: (assets, folders) => {
          const lines: string[] = [];
          if (folders?.length) {
            lines.push(`${folders.length} folder(s): ${folders.map((f) => f.name).join(', ')}`);
          }
          lines.push(`${assets.length} asset(s): ${assets.map((a) => a.name).join(', ')}`);
          alert(lines.join('\n'));
        },
      });

      picker.addEventListener('ap-select', ((e: CustomEvent) => {
        const { assets, folders } = e.detail;
        if (folders?.length) {
          console.log(`Folders: ${folders.map((f: any) => f.name).join(', ')}`);
        }
        console.log(`Assets: ${assets.length}`);
      }) as EventListener, { once: true });

      picker.open();
    });
  },
};

export default page;
