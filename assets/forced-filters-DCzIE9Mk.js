import{b as m,M as g,F as h}from"./index-BnaKtpZY.js";import{r as v}from"./code-block-Bk3NnwHF.js";let r=["image"],o="",i="",n=!1;function y(){const e={type:{values:r}};return o.trim()&&i.trim()&&(e[o.trim()]={values:[i.trim()]}),e}function u(){return[...g].filter(e=>e!==h.TYPE)}function c(e){const t=[`${e}type: { values: [${r.map(a=>`'${a}'`).join(", ")}] },`];return o.trim()&&i.trim()&&(t.push(`${e}// Custom metadata — use the RAW api key, value as a string`),t.push(`${e}${o.trim()}: { values: ['${i.trim()}'] },`)),t.join(`
`)}function p(e){if(!n)return"";const t=!!o.trim(),a=[`${e}// 'type' excluded from enabledFilters${t?", and the metadata key from":" →"}`,t?`${e}// enabledMetadataFields → every excluded chip is hidden (still enforced)`:`${e}// its forced chip is hidden (still enforced)`,`${e}enabledFilters: [${u().map(s=>`'${s}'`).join(", ")}],`];return t&&a.push(`${e}enabledMetadataFields: [],`),a.join(`
`)}function l(){const e=document.getElementById("code-container");e&&(e.innerHTML="",v("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  forcedFilters: {
${c("    ")}
  },
${p("  ")}
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    forcedFilters: {
${c("      ")}
    },
${p("    ")}
  }}
/>`}]))}const F={render(){return`
      <div class="page-header">
        <h1>Forced filters</h1>
        <p>Use <code>forcedFilters</code> to lock filters that users cannot remove. You can lock to entire categories (e.g. all images) or specific extensions (e.g. SVG only, PNG + JPEG). The filter chips appear with a lock icon.</p>
      </div>

      <section class="page-section">
        <div class="config-controls ff-controls">
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

          <div class="control-group">
            <span class="control-group-title">Hide via allow-list</span>
            <div class="form-group checkbox-group">
              <label
                title="Excludes 'type' from enabledFilters, and the metadata key from enabledMetadataFields if one is set. Every excluded chip disappears, but the filters stay enforced on results."
              >
                <input id="exclude-from-allowlist" type="checkbox" />
                Hide the type chip (and the metadata chip, if configured)
              </label>
            </div>
          </div>
        </div>
        <p class="form-hint">The <strong>type filter</strong> and <strong>custom metadata filter</strong> are two independent forced filters. For a boolean metadata field, use the field's <strong>raw api key</strong> (no <code>bool_</code> prefix) and the string value <code>true</code> or <code>false</code>. Leave the key empty to skip the metadata filter. A custom metadata key that isn't a built-in filter shows its configured display name on the chip, resolved from the project's metadata model, instead of the raw key. Check <strong>Hide via allow-list</strong> to hide the type filter's chip — and the metadata filter's chip too, if one is configured — by excluding their keys from the allow-list; the filters stay enforced either way.</p>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){r=["image"],o="",i="",n=!1,l();const t=document.getElementById("filter-select");t.addEventListener("change",()=>{r=t.value.split(","),l()});const a=document.getElementById("meta-key"),s=document.getElementById("meta-value");a.addEventListener("input",()=>{o=a.value,l()}),s.addEventListener("input",()=>{i=s.value,l()});const d=document.getElementById("exclude-from-allowlist");d.addEventListener("change",()=>{n=d.checked,l()}),document.getElementById("open-btn").addEventListener("click",()=>{e.config=m({forcedFilters:y(),...n&&{enabledFilters:u()},...n&&o.trim()&&{enabledMetadataFields:[]},onSelect:f=>alert(`Selected ${f.length} asset(s)`)}),e.open()})}};export{F as default};
