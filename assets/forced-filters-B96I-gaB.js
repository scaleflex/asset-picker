import{b as c}from"./index-DeQhaZNH.js";import{r as a}from"./code-block-Bk3NnwHF.js";let t=["image"];function n(){const e=document.getElementById("code-container");if(!e)return;e.innerHTML="";const o=t.map(i=>`'${i}'`).join(", ");a("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  forcedFilters: {
    type: { values: [${o}] },
  },
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    forcedFilters: {
      type: { values: [${o}] },
    },
  }}
/>`}])}const r={render(){return`
      <div class="page-header">
        <h1>Forced filters</h1>
        <p>Use <code>forcedFilters</code> to lock filters that users cannot remove. You can lock to entire categories (e.g. all images) or specific extensions (e.g. SVG only, PNG + JPEG). The filter chips appear with a lock icon.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="filter-select">Forced type filter</label>
            <select id="filter-select">
              <optgroup label="Categories">
                <option value="image" selected>Images</option>
                <option value="video">Videos</option>
                <option value="audio">Audio</option>
                <option value="document">Documents</option>
              </optgroup>
              <optgroup label="Extensions">
                <option value="image_svg">SVG only</option>
                <option value="image_png,image_jpeg">PNG + JPEG</option>
                <option value="document_pdf">PDF only</option>
              </optgroup>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){t=["image"],n();const o=document.getElementById("filter-select");o.addEventListener("change",()=>{t=o.value.split(","),n()}),document.getElementById("open-btn").addEventListener("click",()=>{e.config=c({forcedFilters:{type:{values:t}},onSelect:i=>alert(`Selected ${i.length} asset(s)`)}),e.open()})}};export{r as default};
