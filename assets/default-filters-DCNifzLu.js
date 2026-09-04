import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=`image`;function r(){let e=document.getElementById(`code-container`);e&&(e.innerHTML=``,t(`#code-container`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
  defaultFilters: {
    type: { values: ['${n}'] },
  },
};`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    defaultFilters: {
      type: { values: ['${n}'] },
    },
  }}
/>`}]))}var i={render(){return`
      <div class="page-header">
        <h1>Default filters</h1>
        <p>Use <code>defaultFilters</code> to pre-apply filters when the picker opens. Users can modify or remove these filters.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="filter-select">Filter by type</label>
            <select id="filter-select">
              <option value="image" selected>Images</option>
              <option value="video">Videos</option>
              <option value="audio">Audio</option>
              <option value="document">Documents</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){n=`image`,r();let i=document.getElementById(`filter-select`);i.addEventListener(`change`,()=>{n=i.value,r()}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({defaultFilters:{type:{values:[n]}},onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),t.open()})}};export{i as default};