import{b as a}from"./index-KnVPMwua.js";import{r as n}from"./code-block-Bk3NnwHF.js";const i={render(){return`
      <div class="page-header">
        <h1>Variants / presets</h1>
        <p>
          Enable inserting a container preset instead of the original file by setting
          <code>variants: true</code>. A "Insert as" dropdown appears in the toolbar to set the
          default for every insert, and each asset card shows a small switcher badge to override
          the choice for just that asset. The <code>onSelect</code> callback receives each asset
          with a <code>selectedVariant</code> object (name + URL) when a non-original variant is
          chosen — the original <code>asset.url</code> is always kept as well.
        </p>
      </div>

      <section class="page-section">
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker with variants</button>
        <p style="margin-top: 12px; color: #71717a; font-size: 0.875rem;">
          Pick a default variant in the toolbar, or switch it per asset via the badge on the
          card, then select an asset.
        </p>
        <pre id="output" style="margin-top: 16px; display: none; background: #f4f4f5; padding: 16px; border-radius: 8px; font-size: 0.8125rem; overflow-x: auto; max-height: 320px;"></pre>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){const t=document.getElementById("output");document.getElementById("open-btn").addEventListener("click",()=>{e.config=a({variants:!0,onSelect:s=>{t.style.display="block",t.textContent=JSON.stringify(s,null,2)},onCancel:()=>console.log("Cancelled")}),e.open()}),n("#code-container",[{label:"HTML",lang:"markup",code:`
<script type="module">
  import '@scaleflex/asset-picker/define';
<\/script>

<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  const picker = document.getElementById('picker');
  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
    variants: true,

    onSelect: (assets) => {
      assets.forEach((asset) => {
        console.log(asset.name, asset.url.cdn);
        if (asset.selectedVariant) {
          console.log('Insert:', asset.selectedVariant.name, asset.selectedVariant.url);
        }
      });
    },
  };
  picker.open();
<\/script>`},{label:"React",lang:"tsx",code:`
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
          variants: true,
        }}
        onSelect={(assets) => {
          assets.forEach((asset) => {
            if (asset.selectedVariant) {
              console.log('Insert:', asset.selectedVariant.url);
            }
          });
        }}
      />
    </>
  );
}`}])}};export{i as default};
