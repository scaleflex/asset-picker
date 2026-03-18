import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let maxSelections: number | undefined;

function getMaxLine(max: number | undefined): string {
  return max != null ? `\n    maxSelections: ${max},` : '';
}

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
    multiSelect: true,${getMaxLine(maxSelections)}
    onSelect: (assets) => {
      console.log('Selected:', assets.length, 'assets');
    },
  };
</script>`,
    },
    {
      label: 'React',
      lang: 'tsx',
      code: `
<AssetPicker
  config={{
    auth: { /* ... */ },
    multiSelect: true,${getMaxLine(maxSelections)}
    onSelect: (assets) => console.log('Selected:', assets.length, 'assets'),
  }}
/>`,
    },
  ]);
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Multi select</h1>
        <p>Multi-select is enabled by default. Use <code>maxSelections</code> to limit how many assets the user can pick.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="max-select">Max selections</label>
            <select id="max-select">
              <option value="" selected>Unlimited</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
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
    maxSelections = undefined;
    updateCode();

    const select = document.getElementById('max-select') as HTMLSelectElement;
    select.addEventListener('change', () => {
      maxSelections = select.value ? Number(select.value) : undefined;
      updateCode();
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        multiSelect: true,
        maxSelections,
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s):\n${assets.map((a) => a.name).join('\n')}`),
      });
      picker.open();
    });
  },
};

export default page;
