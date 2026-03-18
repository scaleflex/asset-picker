import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Inline display</h1>
        <p>Render the picker directly in the page flow instead of as a modal overlay. Use <code>displayMode: 'inline'</code> to embed the picker inside any container.</p>
      </div>

      <section class="page-section">
        <p>The picker below is rendered inline with <code>displayMode: 'inline'</code>. It auto-opens when config is set and sizes to its container.</p>
        <div id="inline-container" style="height: 600px; margin-top: 16px;">
          <sfx-asset-picker id="inline-picker"></sfx-asset-picker>
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(_picker: AssetPicker) {
    const inlinePicker = document.getElementById('inline-picker') as AssetPicker;

    // Set up the inline picker immediately
    inlinePicker.config = buildConfig({
      displayMode: 'inline',
      onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
    });

    renderCodeBlock('#code-container', [
      {
        label: 'HTML',
        lang: 'markup',
        code: `
<div style="height: 600px;">
  <sfx-asset-picker id="picker"></sfx-asset-picker>
</div>

<script type="module">
  import '@scaleflex/asset-picker/define';

  const picker = document.getElementById('picker');
  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
    displayMode: 'inline',
    onSelect: (assets) => console.log('Selected:', assets),
  };
  // No need to call open() — inline mode auto-opens
</script>`,
      },
      {
        label: 'React',
        lang: 'tsx',
        code: `
import { AssetPicker } from '@scaleflex/asset-picker/react';

export function App() {
  return (
    <div style={{ height: 600 }}>
      <AssetPicker
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
          displayMode: 'inline',
          onSelect: (assets) => console.log('Selected:', assets),
        }}
      />
    </div>
  );
}`,
      },
    ]);
  },

  destroy() {
    const inlinePicker = document.getElementById('inline-picker') as AssetPicker | null;
    if (inlinePicker) inlinePicker.close();
  },
};

export default page;
