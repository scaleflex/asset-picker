import{b as r}from"./index-DZvN-g-_.js";import{r as c}from"./code-block-Bk3NnwHF.js";const i=[{id:"all",label:"All fields",hint:"Omit enabledMetadataFields entirely — every metadata field is offered.",keys:null},{id:"restricted",label:"Photographer + Collection",hint:'Only these two fields appear in the "Add metadata field" popup and filter chips.',keys:["photographer","collection"]},{id:"none",label:"None",hint:"Empty array — no metadata fields are offered at all.",keys:[]}];let n=i[0].id;function l(){return i.find(e=>e.id===n).keys}function s(e){const t=l();return t===null?`${e}// enabledMetadataFields omitted — all fields available`:`${e}enabledMetadataFields: [${t.map(a=>`'${a}'`).join(", ")}],`}function o(){const e=document.getElementById("code-container");e&&(e.innerHTML="",c("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
${s("  ")}
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
${s("    ")}
  }}
/>`}]))}function d(){var t;document.querySelectorAll("[data-preset]").forEach(a=>{a.classList.toggle("is-active",a.dataset.preset===n)});const e=document.getElementById("preset-hint");e&&(e.textContent=((t=i.find(a=>a.id===n))==null?void 0:t.hint)??"")}const h={render(){return`
      <div class="page-header">
        <h1>Enabled metadata fields</h1>
        <p>Use <code>enabledMetadataFields</code> to restrict which metadata fields the picker offers as filters — the "Add metadata field" popup, the toolbar's metadata entry, and the filter chips. Values are the raw <code>MetadataModelField.key</code> from the project's schema (unprefixed). The preview panel is unaffected — it always shows the full field list (see <code>showMetadata</code>).</p>
      </div>

      <section class="page-section">
        <div class="config-controls ef-controls">
          <div class="control-group">
            <span class="control-group-title">Presets</span>
            <div class="ef-presets">
              ${i.map(e=>`<button class="btn-outline" data-preset="${e.id}" type="button">${e.label}</button>`).join("")}
            </div>
          </div>
        </div>
        <p class="form-hint" id="preset-hint"></p>
        <p class="form-hint">A field pinned before switching presets stays out of the filters bar once excluded — the saved pin list itself is left intact in localStorage, same as <code>enabledFilters</code>. Try it: open the picker on "All fields", pin a field (e.g. Description) via the metadata popup's pin icon, then reopen on "Photographer + Collection" — the pinned chip disappears.</p>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){n=i[0].id,d(),o(),document.querySelectorAll("[data-preset]").forEach(t=>{t.addEventListener("click",()=>{n=t.dataset.preset,d(),o()})}),document.getElementById("open-btn").addEventListener("click",()=>{const t=l();e.config=r({...t===null?{}:{enabledMetadataFields:t},onSelect:a=>alert(`Selected ${a.length} asset(s)`)}),e.open()})}};export{h as default};
