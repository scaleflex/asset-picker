import{b as s}from"./index-DeQhaZNH.js";import{r as n}from"./code-block-Bk3NnwHF.js";const i={render(){return`
      <div class="page-header">
        <h1>Transformations</h1>
        <p>
          Enable export options by setting <code>transformations: true</code>.
          When selecting image assets, an "Export options" button appears in the selection bar.
          Users can choose format (WebP, JPEG, PNG, GIF), quality, and resize dimensions
          before confirming their selection. The <code>onSelect</code> callback receives
          each image asset includes a <code>transformation</code> object with the chosen
          params and a CDN query string.
        </p>
      </div>

      <section class="page-section">
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker with transformations</button>
        <p style="margin-top: 12px; color: #71717a; font-size: 0.875rem;">
          Select one or more image assets, then click "Export options" in the selection bar
          to configure format, quality, and size before confirming.
        </p>
        <pre id="output" style="margin-top: 16px; display: none; background: #f4f4f5; padding: 16px; border-radius: 8px; font-size: 0.8125rem; overflow-x: auto; max-height: 320px;"></pre>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){const t=document.getElementById("output");document.getElementById("open-btn").addEventListener("click",()=>{e.config=s({transformations:!0,onSelect:o=>{t.style.display="block",t.textContent=JSON.stringify(o,null,2)},onCancel:()=>console.log("Cancelled")}),e.open()}),n("#code-container",[{label:"HTML",lang:"markup",code:`
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
    transformations: true,
    onSelect: (assets) => {
      assets.forEach((asset) => {
        console.log(asset.name, asset.url.cdn);
        if (asset.transformation) {
          console.log('CDN:', asset.transformation.url.cdn);
          if (asset.transformation.url.permalink_cdn) {
            console.log('Permalink:', asset.transformation.url.permalink_cdn);
          }
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
          transformations: true,
        }}
        onSelect={(assets) => {
          assets.forEach((asset) => {
            if (asset.transformation) {
              console.log('CDN:', asset.transformation.url.cdn);
            }
          });
        }}
      />
    </>
  );
}`}])}};export{i as default};
