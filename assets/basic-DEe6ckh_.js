import{b as c}from"./index-BqysEWZn.js";import{r as o}from"./code-block-Bk3NnwHF.js";const i={render(){return`
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
    `},init(e){o("#code-container",[{label:"HTML",lang:"markup",code:`
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
    onSelect: (assets) => console.log('Selected:', assets),
    onCancel: () => console.log('Cancelled'),
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
          onSelect: (assets) => console.log('Selected:', assets),
          onCancel: () => console.log('Cancelled'),
        }}
      />
    </>
  );
}`}]),document.getElementById("open-btn").addEventListener("click",()=>{e.config=c({onSelect:t=>alert(`Selected ${t.length} asset(s)`),onCancel:()=>console.log("Cancelled")}),e.open()})}};export{i as default};
