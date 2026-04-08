import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let defaultAISearch = false;

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>AI search</h1>
        <p>
          Enable AI-powered semantic search by setting <code>enableAISearch: true</code>.
          A sparkles toggle appears inside the search bar. When active, queries are processed
          by the Filerobot AI engine for visual and semantic matching instead of plain text search.
        </p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-default-ai">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-default-ai" />
                <span class="toggle-track"></span>
              </span>
              AI search on by default
            </label>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker with AI search</button>
        <p style="margin-top: 12px; color: #71717a; font-size: 0.875rem;">
          Click the sparkles pill inside the search bar to toggle AI search mode,
          then type a query to see AI-ranked results.
        </p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(picker: AssetPicker) {
    defaultAISearch = false;

    const toggleDefaultAI = document.getElementById('toggle-default-ai') as HTMLInputElement;
    toggleDefaultAI.addEventListener('change', () => {
      defaultAISearch = toggleDefaultAI.checked;
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        enableAISearch: true,
        defaultAISearch,
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
        onCancel: () => console.log('Cancelled'),
      });
      picker.open();
    });

    renderCodeBlock('#code-container', [
      {
        label: 'HTML',
        lang: 'markup',
        code: `
<script type="module">
  import '@scaleflex/asset-picker/define';
</script>

<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  const picker = document.getElementById('picker');
  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
    enableAISearch: true,
    // Optional: activate AI search by default on open
    // defaultAISearch: true,
    onSelect: (assets) => console.log('Selected:', assets),
  };
  picker.open();
</script>`,
      },
      {
        label: 'AI on by default',
        lang: 'markup',
        code: `
<script>
  picker.config = {
    auth: { /* ... */ },
    enableAISearch: true,
    defaultAISearch: true, // AI search active from the start
    onSelect: (assets) => console.log('Selected:', assets),
  };
  picker.open();
</script>`,
      },
      {
        label: 'React',
        lang: 'tsx',
        code: `
import { useRef } from 'react';
import { AssetPicker, type AssetPickerRef } from '@scaleflex/asset-picker/react';

export function App() {
  const pickerRef = useRef<AssetPickerRef>(null);

  return (
    <>
      <button onClick={() => pickerRef.current?.open()}>
        Open picker
      </button>
      <AssetPicker
        ref={pickerRef}
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
          enableAISearch: true,
          defaultAISearch: true,
          onSelect: (assets) => console.log('Selected:', assets),
        }}
      />
    </>
  );
}`,
      },
    ]);
  },
};

export default page;
