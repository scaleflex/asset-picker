import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=`/Images`;function r(){let e=document.getElementById(`code-container`);if(!e)return;e.innerHTML=``;let r=n||`/marketing/banners/`;t(`#code-container`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
  rootFolderPath: '${r}',
};`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    rootFolderPath: '${r}',
  }}
/>`}])}var i={render(){return`
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
    `},init(t){n=`/Images`,r();let i=document.getElementById(`path-input`);i.value=n,i.addEventListener(`input`,()=>{n=i.value.trim(),r()}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({rootFolderPath:n||`/Images`,onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),t.open()})}};export{i as default};