import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n={lastTab:`ap-last-tab`,lastFolder:`ap-last-folder`,lastView:`ap-last-view`},r=!0,i=!0,a=!0;function o(e){try{localStorage.removeItem(e)}catch{}}var s={render(){return`
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
    `},init(s){r=!0,i=!0,a=!0;let c=document.getElementById(`toggle-tab`),l=document.getElementById(`toggle-folder`),u=document.getElementById(`toggle-view`);c.addEventListener(`change`,()=>{r=c.checked,r||o(n.lastTab)}),l.addEventListener(`change`,()=>{i=l.checked,i||o(n.lastFolder)}),u.addEventListener(`change`,()=>{a=u.checked,a||o(n.lastView)}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{s.config=e({rememberLastTab:r,rememberLastFolder:i,rememberLastView:a,onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),s.open()}),t(`#code-container`,[{label:`HTML`,lang:`markup`,code:`
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
<\/script>`},{label:`React`,lang:`tsx`,code:`
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
}`}])},destroy(){}};export{s as default};