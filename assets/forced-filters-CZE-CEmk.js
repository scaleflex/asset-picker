import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=[`image`],r=``,i=``;function a(){let e={type:{values:n}};return r.trim()&&i.trim()&&(e[r.trim()]={values:[i.trim()]}),e}function o(e){let t=[`${e}type: { values: [${n.map(e=>`'${e}'`).join(`, `)}] },`];return r.trim()&&i.trim()&&(t.push(`${e}// Custom metadata — use the RAW api key, value as a string`),t.push(`${e}${r.trim()}: { values: ['${i.trim()}'] },`)),t.join(`
`)}function s(){let e=document.getElementById(`code-container`);e&&(e.innerHTML=``,t(`#code-container`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
  forcedFilters: {
${o(`    `)}
  },
};`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    forcedFilters: {
${o(`      `)}
    },
  }}
/>`}]))}var c={render(){return`
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
    `},init(t){n=[`image`],r=``,i=``,s();let o=document.getElementById(`filter-select`);o.addEventListener(`change`,()=>{n=o.value.split(`,`),s()});let c=document.getElementById(`meta-key`),l=document.getElementById(`meta-value`);c.addEventListener(`input`,()=>{r=c.value,s()}),l.addEventListener(`input`,()=>{i=l.value,s()}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({forcedFilters:a(),onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),t.open()})}};export{c as default};