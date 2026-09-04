import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=[{id:`all`,label:`All fields`,hint:`Omit enabledMetadataFields entirely — every metadata field is offered.`,keys:null},{id:`restricted`,label:`Photographer + Collection`,hint:`Only these two fields appear in the "Add metadata field" popup and filter chips.`,keys:[`photographer`,`collection`]},{id:`none`,label:`None`,hint:`Empty array — no metadata fields are offered at all.`,keys:[]}],r=n[0].id;function i(){return n.find(e=>e.id===r).keys}function a(e){let t=i();return t===null?`${e}// enabledMetadataFields omitted — all fields available`:`${e}enabledMetadataFields: [${t.map(e=>`'${e}'`).join(`, `)}],`}function o(){let e=document.getElementById(`code-container`);e&&(e.innerHTML=``,t(`#code-container`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
${a(`  `)}
};`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
${a(`    `)}
  }}
/>`}]))}function s(){document.querySelectorAll(`[data-preset]`).forEach(e=>{e.classList.toggle(`is-active`,e.dataset.preset===r)});let e=document.getElementById(`preset-hint`);e&&(e.textContent=n.find(e=>e.id===r)?.hint??``)}var c={render(){return`
      <div class="page-header">
        <h1>Enabled metadata fields</h1>
        <p>Use <code>enabledMetadataFields</code> to restrict which metadata fields the picker offers as filters — the "Add metadata field" popup, the toolbar's metadata entry, and the filter chips. Values are the raw <code>MetadataModelField.key</code> from the project's schema (unprefixed). The preview panel is unaffected — it always shows the full field list (see <code>showMetadata</code>).</p>
      </div>

      <section class="page-section">
        <div class="config-controls ef-controls">
          <div class="control-group">
            <span class="control-group-title">Presets</span>
            <div class="ef-presets">
              ${n.map(e=>`<button class="btn-outline" data-preset="${e.id}" type="button">${e.label}</button>`).join(``)}
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
    `},init(t){r=n[0].id,s(),o(),document.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{r=e.dataset.preset,s(),o()})}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{let n=i();t.config=e({...n===null?{}:{enabledMetadataFields:n},onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),t.open()})}};export{c as default};