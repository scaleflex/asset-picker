import{b as d}from"./index-DZvN-g-_.js";import{r as p}from"./code-block-Bk3NnwHF.js";let l=["image"],o="",i="";function u(){const e={type:{values:l}};return o.trim()&&i.trim()&&(e[o.trim()]={values:[i.trim()]}),e}function s(e){const t=[`${e}type: { values: [${l.map(a=>`'${a}'`).join(", ")}] },`];return o.trim()&&i.trim()&&(t.push(`${e}// Custom metadata — use the RAW api key, value as a string`),t.push(`${e}${o.trim()}: { values: ['${i.trim()}'] },`)),t.join(`
`)}function n(){const e=document.getElementById("code-container");e&&(e.innerHTML="",p("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  forcedFilters: {
${s("    ")}
  },
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    forcedFilters: {
${s("      ")}
    },
  }}
/>`}]))}const v={render(){return`
      <div class="page-header">
        <h1>Forced filters</h1>
        <p>Use <code>forcedFilters</code> to lock filters that users cannot remove. You can lock to entire categories (e.g. all images) or specific extensions (e.g. SVG only, PNG + JPEG). The filter chips appear with a lock icon.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="control-group">
            <span class="control-group-title">Type filter</span>
            <div class="form-group">
              <label for="filter-select">Forced type</label>
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

          <div class="control-group-divider"></div>

          <div class="control-group">
            <span class="control-group-title">Custom metadata filter</span>
            <div class="control-pair">
              <div class="form-group">
                <label for="meta-key">Raw api key</label>
                <input id="meta-key" type="text" placeholder="e.g. authorized_for_external_usage" />
              </div>
              <span class="control-pair-sep">:</span>
              <div class="form-group">
                <label for="meta-value">Value</label>
                <input id="meta-value" type="text" placeholder="e.g. true" />
              </div>
            </div>
          </div>
        </div>
        <p class="form-hint">The <strong>type filter</strong> and <strong>custom metadata filter</strong> are two independent forced filters. For a boolean metadata field, use the field's <strong>raw api key</strong> (no <code>bool_</code> prefix) and the string value <code>true</code> or <code>false</code>. Leave the key empty to skip the metadata filter.</p>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){l=["image"],o="",i="",n();const t=document.getElementById("filter-select");t.addEventListener("change",()=>{l=t.value.split(","),n()});const a=document.getElementById("meta-key"),r=document.getElementById("meta-value");a.addEventListener("input",()=>{o=a.value,n()}),r.addEventListener("input",()=>{i=r.value,n()}),document.getElementById("open-btn").addEventListener("click",()=>{e.config=d({forcedFilters:u(),onSelect:c=>alert(`Selected ${c.length} asset(s)`)}),e.open()})}};export{v as default};
