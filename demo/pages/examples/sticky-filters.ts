import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Sticky filters</h1>
        <p>Keep the toolbar and filter bar pinned to the top of the content area while scrolling. Use <code>stickyFilters: true</code> to enable this behavior.</p>
      </div>

      <section class="page-section">
        <p>Open the picker below — the toolbar and applied filters remain visible as you scroll through assets.</p>
        <button id="open-sticky" class="btn btn-primary">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `;
  },

  init(picker: AssetPicker) {
    document.getElementById('open-sticky')?.addEventListener('click', () => {
      picker.config = buildConfig({
        stickyFilters: true,
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
    stickyFilters: true,
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
          stickyFilters: true,
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
