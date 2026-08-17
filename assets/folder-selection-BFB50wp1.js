import{b as a}from"./index-Y5wmoV4G.js";import{r as p}from"./code-block-Bk3NnwHF.js";let d="folder",n="";function c(){const o=document.getElementById("code-container");if(!o)return;o.innerHTML="";const s=n?`
    initialFolderPath: '${n}',`:"";p("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  picker.config = {
    auth: { /* ... */ },
    folderSelection: true,
    folderSelectionMode: '${d}',${s}
    onSelect: (assets, folders) => {
      console.log('Selected assets:', assets.length, 'folders:', folders?.length ?? 0);
    },
  };
<\/script>`}])}const g={render(){return`
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
          <div class="form-group">
            <label for="folder-input">Initial folder path (optional)</label>
            <input type="text" id="folder-input" placeholder="e.g. /Images/" class="mono-input" />
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
        <p class="helper-text">Set an initial folder path to open directly in that folder (Folders tab) — useful when you know the relevant folder context upfront.</p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(o){d="folder",n="",c();const s=document.getElementById("mode-select");s.addEventListener("change",()=>{d=s.value,c()});const r=document.getElementById("folder-input");r.addEventListener("input",()=>{n=r.value.trim(),c()}),document.getElementById("open-btn").addEventListener("click",()=>{o.config=a({folderSelection:!0,folderSelectionMode:d,...n?{initialFolderPath:n}:{},onSelect:(i,t)=>{const e=[];t!=null&&t.length&&e.push(`${t.length} folder(s): ${t.map(l=>l.name).join(", ")}`),e.push(`${i.length} asset(s): ${i.map(l=>l.name).join(", ")}`),alert(e.join(`
`))}}),o.addEventListener("ap-select",(i=>{const{assets:t,folders:e}=i.detail;e!=null&&e.length&&console.log(`Folders: ${e.map(l=>l.name).join(", ")}`),console.log(`Assets: ${t.length}`)}),{once:!0}),o.open()})}};export{g as default};
