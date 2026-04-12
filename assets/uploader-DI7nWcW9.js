import{b as o}from"./index-BqysEWZn.js";import{r as a}from"./code-block-Bk3NnwHF.js";const i={render(){return`
      <div class="page-header">
        <h1>Uploader integration</h1>
        <p>
          Enable the integrated <code>@scaleflex/uploader</code> by passing the <code>uploader</code>
          config option. An "Upload" button appears in the toolbar, and the entire content area becomes
          a drop zone. Auth and target folder are derived automatically.
        </p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open picker with uploader</button>
        <p style="margin-top: 12px; color: #71717a; font-size: 0.875rem;">
          Try dragging files onto the picker or click the Upload button in the toolbar.
        </p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){a("#code-container",[{label:"HTML",lang:"markup",code:`
<!-- Install both packages -->
<!-- npm install @scaleflex/asset-picker @scaleflex/uploader -->

<script type="module">
  import '@scaleflex/asset-picker/define';
  // Note: @scaleflex/uploader is loaded dynamically only when
  // uploader config is provided. No extra import needed.
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
    // Enable the uploader — just pass an empty object for defaults
    uploader: {},
    onSelect: (assets) => console.log('Selected:', assets),
  };
  picker.open();
<\/script>`},{label:"With restrictions",lang:"markup",code:`
<script>
  picker.config = {
    auth: { /* ... */ },
    uploader: {
      restrictions: {
        maxFileSize: 10 * 1024 * 1024, // 10 MB
        maxNumberOfFiles: 5,
        allowedFileTypes: ['image/*', 'video/*'],
      },
      autoProceed: false,    // Review files before uploading
      concurrency: 2,        // Upload 2 files at a time
      showFillMetadata: true, // Show metadata form
    },
    onSelect: (assets) => console.log('Selected:', assets),
  };
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
          uploader: {
            restrictions: {
              maxFileSize: 10 * 1024 * 1024,
              allowedFileTypes: ['image/*'],
            },
          },
          onSelect: (assets) => console.log('Selected:', assets),
        }}
      />
    </>
  );
}`}]),document.getElementById("open-btn").addEventListener("click",()=>{e.config=o({uploader:{},onSelect:t=>alert(`Selected ${t.length} asset(s)`),onCancel:()=>console.log("Cancelled")}),e.open()})}};export{i as default};
