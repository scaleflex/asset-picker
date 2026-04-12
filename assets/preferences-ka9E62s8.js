import{b as d}from"./index-BqysEWZn.js";import{r as g}from"./code-block-Bk3NnwHF.js";const a={lastTab:"ap-last-tab",lastFolder:"ap-last-folder",lastView:"ap-last-view"};let t=!0,s=!0,o=!0;function r(e){try{localStorage.removeItem(e)}catch{}}const u={render(){return`
      <div class="page-header">
        <h1>Preferences</h1>
        <p>Persist the user's last active tab, last folder, and last view mode across sessions using <code>rememberLastTab</code>, <code>rememberLastFolder</code>, and <code>rememberLastView</code>. Values are stored in localStorage and restored automatically on next open.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-tab">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-tab" checked />
                <span class="toggle-track"></span>
              </span>
              Remember last tab
            </label>
          </div>
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-folder">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-folder" checked />
                <span class="toggle-track"></span>
              </span>
              Remember last folder
            </label>
          </div>
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-view">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-view" checked />
                <span class="toggle-track"></span>
              </span>
              Remember last view mode
            </label>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){t=!0,s=!0,o=!0;const l=document.getElementById("toggle-tab"),c=document.getElementById("toggle-folder"),n=document.getElementById("toggle-view");l.addEventListener("change",()=>{t=l.checked,t||r(a.lastTab)}),c.addEventListener("change",()=>{s=c.checked,s||r(a.lastFolder)}),n.addEventListener("change",()=>{o=n.checked,o||r(a.lastView)}),document.getElementById("open-btn").addEventListener("click",()=>{e.config=d({rememberLastTab:t,rememberLastFolder:s,rememberLastView:o,onSelect:i=>alert(`Selected ${i.length} asset(s)`)}),e.open()}),g("#code-container",[{label:"HTML",lang:"markup",code:`
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
    rememberLastTab: true,
    rememberLastFolder: true,
    rememberLastView: true,
    onSelect: (assets) => console.log('Selected:', assets),
  };
  picker.open();
<\/script>`},{label:"React",lang:"tsx",code:`
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
          rememberLastTab: true,
          rememberLastFolder: true,
          rememberLastView: true,
          onSelect: (assets) => console.log('Selected:', assets),
        }}
      />
    </>
  );
}`}])},destroy(){}};export{u as default};
