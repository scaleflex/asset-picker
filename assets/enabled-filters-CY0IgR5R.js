import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=[{key:`metadata`,label:`Metadata`},{key:`date`,label:`Date`},{key:`type`,label:`Format`},{key:`size`,label:`Size`},{key:`asset_expiration`,label:`License expiry`},{key:`tags`,label:`Tags`},{key:`labels`,label:`Labels`},{key:`product_ref`,label:`Products`},{key:`image`,label:`Image`},{key:`color`,label:`Color`},{key:`approval`,label:`Approval`}],r=[{id:`all`,label:`All filters`,hint:`Omit enabledFilters entirely — every filter is offered.`,keys:null},{id:`minimal`,label:`Minimal`,hint:`Just the basics: format, date and size.`,keys:[`type`,`date`,`size`]},{id:`media`,label:`Media library`,hint:`Visual search: format plus the image, color and tag filters.`,keys:[`type`,`image`,`color`,`tags`]},{id:`compliance`,label:`Compliance`,hint:`Rights management: approval state, license expiry and metadata.`,keys:[`approval`,`asset_expiration`,`metadata`,`labels`]}],i=new Set(r[1].keys),a=!1;function o(){return n.filter(e=>i.has(e.key)).map(e=>e.key)}function s(e){return a?`${e}// enabledFilters omitted — all filters available`:`${e}enabledFilters: [${o().map(e=>`'${e}'`).join(`, `)}],`}function c(){let e=document.getElementById(`code-container`);e&&(e.innerHTML=``,t(`#code-container`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
${s(`  `)}
};`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
${s(`    `)}
  }}
/>`}]))}function l(){for(let e of n){let t=document.getElementById(`filter-${e.key}`);t&&(t.checked=a||i.has(e.key))}let e=u();document.querySelectorAll(`[data-preset]`).forEach(t=>{t.classList.toggle(`is-active`,t.dataset.preset===e)});let t=document.getElementById(`preset-hint`);t&&(t.textContent=r.find(t=>t.id===e)?.hint??(i.size===0?`Empty array — the Filters button is hidden entirely.`:`Custom set — tick the filters you want to offer.`))}function u(){if(a)return`all`;let e=o().slice().sort().join(`,`);return r.find(t=>t.keys&&t.keys.slice().sort().join(`,`)===e)?.id??`custom`}var d={render(){return`
      <div class="page-header">
        <h1>Enabled filters</h1>
        <p>Use <code>enabledFilters</code> to restrict which filters the picker offers. Only the listed keys appear in the <strong>Filters</strong> menu — everything else is hidden, including previously pinned chips and any <code>defaultFilters</code> entry the user could not re-add. Pass an empty array to hide the Filters button altogether.</p>
      </div>

      <section class="page-section">
        <div class="config-controls ef-controls">
          <div class="control-group">
            <span class="control-group-title">Presets</span>
            <div class="ef-presets">
              ${r.map(e=>`<button class="btn-outline" data-preset="${e.id}" type="button">${e.label}</button>`).join(``)}
            </div>
          </div>

          <div class="control-group">
            <span class="control-group-title">Filters</span>
            <div class="ef-filter-grid">
              ${n.map(e=>`
                <div class="form-group checkbox-group">
                  <label><input type="checkbox" id="filter-${e.key}" /> ${e.label}</label>
                </div>`).join(``)}
            </div>
          </div>
        </div>
        <p class="form-hint" id="preset-hint"></p>
        <p class="form-hint">Governs the <strong>Filters menu</strong> only. <code>forcedFilters</code> still apply, and so do config-only keys with no menu entry — see <a href="#/docs/filters">Filter keys</a>. Pinned filters are hidden rather than unpinned, so a restricted picker never erases the saved pin list.</p>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){i=new Set(r[1].keys),a=!1,l(),c(),document.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=r.find(t=>t.id===e.dataset.preset);a=t.keys===null,i=new Set(t.keys??[]),l(),c()})});for(let e of n){let t=document.getElementById(`filter-${e.key}`);t.addEventListener(`change`,()=>{a&&(a=!1,i=new Set(n.map(e=>e.key))),t.checked?i.add(e.key):i.delete(e.key),l(),c()})}document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({...a?{}:{enabledFilters:o()},onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),t.open()})}};export{d as default};