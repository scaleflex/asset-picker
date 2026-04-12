import{b as d}from"./index-BqysEWZn.js";import{r as a}from"./code-block-Bk3NnwHF.js";let l="folder";function i(){const t=document.getElementById("code-container");t&&(t.innerHTML="",a("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  picker.config = {
    auth: { /* ... */ },
    folderSelection: true,
    folderSelectionMode: '${l}',
    onSelect: (assets) => {
      console.log('Selected:', assets.length, 'assets');
    },
  };
<\/script>`}]))}const g={render(){return`
      <div class="page-header">
        <h1>Folder selection</h1>
        <p>Enable <code>folderSelection: true</code> to let users select folders alongside assets. Configure <code>folderSelectionMode</code> to control what happens on confirm.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="mode-select">Folder selection mode</label>
            <select id="mode-select">
              <option value="folder" selected>folder (return folders as-is)</option>
              <option value="assets">assets (resolve folder contents)</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){l="folder",i();const c=document.getElementById("mode-select");c.addEventListener("change",()=>{l=c.value,i()}),document.getElementById("open-btn").addEventListener("click",()=>{t.config=d({folderSelection:!0,folderSelectionMode:l,onSelect:(s,o)=>{const e=[];o!=null&&o.length&&e.push(`${o.length} folder(s): ${o.map(n=>n.name).join(", ")}`),e.push(`${s.length} asset(s): ${s.map(n=>n.name).join(", ")}`),alert(e.join(`
`))}}),t.addEventListener("ap-select",(s=>{const{assets:o,folders:e}=s.detail;e!=null&&e.length&&console.log(`Folders: ${e.map(n=>n.name).join(", ")}`),console.log(`Assets: ${o.length}`)}),{once:!0}),t.open()})}};export{g as default};
