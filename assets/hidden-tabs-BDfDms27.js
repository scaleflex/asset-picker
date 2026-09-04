import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=new Set([`assets`]);function r(){let e=document.getElementById(`code-container`);if(!e)return;e.innerHTML=``;let r=[...n].map(e=>`'${e}'`).join(`, `);t(`#code-container`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
  tabs: [${r}],
};`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    tabs: [${r}],
  }}
/>`}])}var i={render(){return`
      <div class="page-header">
        <h1>Tabs</h1>
        <p>Use <code>tabs</code> to control which navigation tabs are available. If only one tab is specified, the tab dropdown is hidden.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group checkbox-group">
            <label><input type="checkbox" id="tab-assets" checked /> Assets</label>
          </div>
          <div class="form-group checkbox-group">
            <label><input type="checkbox" id="tab-folders" /> Folders</label>
          </div>
          <div class="form-group checkbox-group">
            <label><input type="checkbox" id="tab-labels" /> Labels</label>
          </div>
          <div class="form-group checkbox-group">
            <label><input type="checkbox" id="tab-collections" /> Collections</label>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){n=new Set([`assets`]),r();function i(e,t){let i=document.getElementById(e);i.addEventListener(`change`,()=>{i.checked?n.add(t):n.delete(t),n.size===0&&(n.add(`assets`),document.getElementById(`tab-assets`).checked=!0),r()})}i(`tab-assets`,`assets`),i(`tab-folders`,`folders`),i(`tab-labels`,`labels`),i(`tab-collections`,`collections`),document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({tabs:[...n],onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),t.open()})}};export{i as default};