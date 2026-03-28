import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Grid size</h1>
        <p>Control the grid card density with the <code>gridSize</code> option. The default <code>'normal'</code> shows 4 columns at ~1200px, while <code>'large'</code> shows 3 columns with bigger cards.</p>
      </div>

      <section class="page-section">
        <div style="display: flex; gap: 12px;">
          <button id="open-normal" class="btn btn-primary">Normal (default)</button>
          <button id="open-large" class="btn btn-primary">Large</button>
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(picker: AssetPicker) {
    document.getElementById('open-normal')?.addEventListener('click', () => {
      picker.config = buildConfig({
        gridSize: 'normal',
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
      });
      picker.open();
    });

    document.getElementById('open-large')?.addEventListener('click', () => {
      picker.config = buildConfig({
        gridSize: 'large',
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
    gridSize: 'large', // default is 'normal'
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
          gridSize: 'large',
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
