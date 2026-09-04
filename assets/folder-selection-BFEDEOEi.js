import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=`folder`,r=``;function i(){let e=document.getElementById(`code-container`);if(!e)return;e.innerHTML=``;let i=r?`\n    initialFolderPath: '${r}',`:``;t(`#code-container`,[{label:`HTML`,lang:`markup`,code:`
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  picker.config = {
    auth: { /* ... */ },
    folderSelection: true,
    folderSelectionMode: '${n}',${i}
    onSelect: (assets, folders) => {
      console.log('Selected assets:', assets.length, 'folders:', folders?.length ?? 0);
    },
  };
<\/script>`}])}var a={render(){return`
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
    `},init(t){n=`folder`,r=``,i();let a=document.getElementById(`mode-select`);a.addEventListener(`change`,()=>{n=a.value,i()});let o=document.getElementById(`folder-input`);o.addEventListener(`input`,()=>{r=o.value.trim(),i()}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({folderSelection:!0,folderSelectionMode:n,...r?{initialFolderPath:r}:{},onSelect:(e,t)=>{let n=[];t?.length&&n.push(`${t.length} folder(s): ${t.map(e=>e.name).join(`, `)}`),n.push(`${e.length} asset(s): ${e.map(e=>e.name).join(`, `)}`),alert(n.join(`
`))}}),t.addEventListener(`ap-select`,(e=>{let{assets:t,folders:n}=e.detail;n?.length&&console.log(`Folders: ${n.map(e=>e.name).join(`, `)}`),console.log(`Assets: ${t.length}`)}),{once:!0}),t.open()})}};export{a as default};