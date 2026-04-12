import{b as l}from"./index-BqysEWZn.js";import{r as a}from"./code-block-Bk3NnwHF.js";let t="image";function i(){const e=document.getElementById("code-container");e&&(e.innerHTML="",a("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  defaultFilters: {
    type: { values: ['${t}'] },
  },
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    defaultFilters: {
      type: { values: ['${t}'] },
    },
  }}
/>`}]))}const r={render(){return`
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
    `},init(e){t="image",i();const o=document.getElementById("filter-select");o.addEventListener("change",()=>{t=o.value,i()}),document.getElementById("open-btn").addEventListener("click",()=>{e.config=l({defaultFilters:{type:{values:[t]}},onSelect:n=>alert(`Selected ${n.length} asset(s)`)}),e.open()})}};export{r as default};
