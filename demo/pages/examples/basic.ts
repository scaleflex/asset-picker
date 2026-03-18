import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Basic usage</h1>
        <p>The minimal configuration to open the asset picker. Only authentication is required.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(picker: AssetPicker) {
    renderCodeBlock('#code-container', [
      {
        label: 'HTML',
        lang: 'markup',
        code: `
<script type="module">
  import '@scaleflex/asset-picker/define';
</script>

<asset-picker id="picker"></asset-picker>

<script>
  const picker = document.getElementById('picker');
  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
    onSelect: (assets) => console.log('Selected:', assets),
    onCancel: () => console.log('Cancelled'),
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
          onSelect: (assets) => console.log('Selected:', assets),
          onCancel: () => console.log('Cancelled'),
        }}
      />
    </>
  );
}`,
      },
    ]);

    document.getElementById('open-btn')!.addEventListener('click', () => {
      picker.config = buildConfig({
        onSelect: (assets) => alert(`Selected ${assets.length} asset(s)`),
        onCancel: () => console.log('Cancelled'),
      });
      picker.open();
    });
  },
};

export default page;
