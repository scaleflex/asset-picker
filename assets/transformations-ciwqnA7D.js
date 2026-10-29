import{b as a}from"./index-DnNwsxHG.js";import{r as n}from"./code-block-Bk3NnwHF.js";const c={render(){return`
      <div class="page-header">
        <h1>Transformations</h1>
        <p>
          Enable export options by setting <code>transformations: true</code>.
          When selecting image assets, a "Transform" button appears in the selection bar.
          Users can choose format (WebP, JPEG, PNG, GIF), quality, and resize dimensions
          before confirming their selection. The <code>onSelect</code> callback receives
          each image asset with a <code>transformation</code> object containing the chosen
          params and a CDN query string.
          You can also pass an object to customise the dialog button labels, omitting either property falls back to the default translated string:
        </p>
        <pre style="margin-top: 12px; background: #f4f4f5; padding: 14px 16px; border-radius: 8px; font-size: 0.8125rem; overflow-x: auto; color: #0f172a;">transformations: {
  exportOriginalLabel: 'Use original',  // optional
  applyExportLabel: 'Confirm',          // optional
}</pre>
        <p>
          Enabling <code>crop: true</code> alongside it adds a crop editor on the left of the same
          dialog — shown only when exactly one image asset is selected, since cropping is
          interactive and per-asset (no bulk equivalent). "Apply &amp; Export" applies the crop
          first, then format/quality/resize on top of it, so
          <code>asset.transformation.url.cdn</code> ends up a single URL reflecting both. The crop
          itself is attached separately as <code>asset.crop</code> (its URL and the editor's
          descriptor). Requires the optional peer dependency <code>@cloudimage/image-crop</code> —
          toggle the checkbox below to try it.
        </p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="control-group">
            <span class="control-group-title">Cropping</span>
            <div class="form-group checkbox-group">
              <label
                title="Adds crop: true to the config below. Shows the crop editor in the dialog, but only when exactly one image asset is selected."
              >
                <input id="enable-crop" type="checkbox" />
                Also enable cropping
              </label>
            </div>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker with transformations</button>
        <p style="margin-top: 12px; color: #71717a; font-size: 0.875rem;">
          Select one or more image assets, then click "Transform" in the selection bar
          to configure format, quality, and size before confirming. With cropping enabled and
          exactly one image selected, the crop editor appears on the left of the same dialog.
        </p>
        <pre id="output" style="margin-top: 16px; display: none; background: #f4f4f5; padding: 16px; border-radius: 8px; font-size: 0.8125rem; overflow-x: auto; max-height: 320px;"></pre>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){const o=document.getElementById("output"),t=document.getElementById("enable-crop");document.getElementById("open-btn").addEventListener("click",()=>{e.config=a({transformations:!0,...t.checked?{crop:!0}:{},onSelect:s=>{o.style.display="block",o.textContent=JSON.stringify(s,null,2)},onCancel:()=>console.log("Cancelled")}),e.open()}),n("#code-container",[{label:"HTML",lang:"markup",code:`
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
    // Enable transformations (boolean form)
    transformations: true,
    // Or pass an object to customise button labels:
    // transformations: {
    //   exportOriginalLabel: 'Use original',
    //   applyExportLabel: 'Confirm',
    // },
    // Optional: adds a crop editor on the left of the same dialog, shown only when exactly
    // one image asset is selected. Requires @cloudimage/image-crop as a peer dependency.
    // crop: true,

    onSelect: (assets) => {
      assets.forEach((asset) => {
        console.log(asset.name, asset.url.cdn);
        if (asset.transformation) {
          console.log('CDN:', asset.transformation.url.cdn);
          if (asset.transformation.url.permalink_cdn) {
            console.log('Permalink:', asset.transformation.url.permalink_cdn);
          }
        }
        if (asset.crop) {
          console.log('Crop descriptor:', asset.crop.descriptor);
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
          // Enable transformations (boolean form)
          transformations: true,
          // Or pass an object to customise button labels:
          // transformations: {
          //   exportOriginalLabel: 'Use original',
          //   applyExportLabel: 'Confirm',
          // },
          // Optional: adds a crop editor on the left of the same dialog, shown only when
          // exactly one image asset is selected.
          // crop: true,
        }}
        onSelect={(assets) => {
          assets.forEach((asset) => {
            if (asset.transformation) {
              console.log('CDN:', asset.transformation.url.cdn);
            }
            if (asset.crop) {
              console.log('Crop descriptor:', asset.crop.descriptor);
            }
          });
        }}
      />
    </>
  );
}`}])}};export{c as default};
