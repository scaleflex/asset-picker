import{b as i}from"./index-BqysEWZn.js";import{r as l}from"./code-block-Bk3NnwHF.js";let e=new Set(["assets"]);function n(){const s=document.getElementById("code-container");if(!s)return;s.innerHTML="";const t=[...e].map(a=>`'${a}'`).join(", ");l("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  tabs: [${t}],
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    tabs: [${t}],
  }}
/>`}])}const b={render(){return`
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
    `},init(s){e=new Set(["assets"]),n();function o(t,a){const c=document.getElementById(t);c.addEventListener("change",()=>{c.checked?e.add(a):e.delete(a),e.size===0&&(e.add("assets"),document.getElementById("tab-assets").checked=!0),n()})}o("tab-assets","assets"),o("tab-folders","folders"),o("tab-labels","labels"),o("tab-collections","collections"),document.getElementById("open-btn").addEventListener("click",()=>{s.config=i({tabs:[...e],onSelect:t=>alert(`Selected ${t.length} asset(s)`)}),s.open()})}};export{b as default};
