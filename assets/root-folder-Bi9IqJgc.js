import{b as c}from"./index-DeQhaZNH.js";import{r}from"./code-block-Bk3NnwHF.js";let o="/Images";function n(){const t=document.getElementById("code-container");if(!t)return;t.innerHTML="";const e=o||"/marketing/banners/";r("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  rootFolderPath: '${e}',
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    rootFolderPath: '${e}',
  }}
/>`}])}const d={render(){return`
      <div class="page-header">
        <h1>Root folder</h1>
        <p>Use <code>rootFolderPath</code> to scope the picker to a specific folder. Users can browse subfolders but cannot navigate above the root.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="path-input">Root folder path</label>
            <input type="text" id="path-input" placeholder="e.g. /marketing/banners/" class="mono-input" />
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
        <p class="helper-text">Defaults to <code>/Images</code>. Change the path to scope to a different folder.</p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){o="/Images",n();const e=document.getElementById("path-input");e.value=o,e.addEventListener("input",()=>{o=e.value.trim(),n()}),document.getElementById("open-btn").addEventListener("click",()=>{t.config=c({rootFolderPath:o||"/Images",onSelect:a=>alert(`Selected ${a.length} asset(s)`)}),t.open()})}};export{d as default};
