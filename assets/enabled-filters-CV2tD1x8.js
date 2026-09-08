import{b as f}from"./index-DZvN-g-_.js";import{r as u}from"./code-block-Bk3NnwHF.js";const o=[{key:"metadata",label:"Metadata"},{key:"date",label:"Date"},{key:"type",label:"Format"},{key:"size",label:"Size"},{key:"asset_expiration",label:"License expiry"},{key:"tags",label:"Tags"},{key:"labels",label:"Labels"},{key:"product_ref",label:"Products"},{key:"image",label:"Image"},{key:"color",label:"Color"},{key:"approval",label:"Approval"}],l=[{id:"all",label:"All filters",hint:"Omit enabledFilters entirely — every filter is offered.",keys:null},{id:"minimal",label:"Minimal",hint:"Just the basics: format, date and size.",keys:["type","date","size"]},{id:"media",label:"Media library",hint:"Visual search: format plus the image, color and tag filters.",keys:["type","image","color","tags"]},{id:"compliance",label:"Compliance",hint:"Rights management: approval state, license expiry and metadata.",keys:["approval","asset_expiration","metadata","labels"]}];let i=new Set(l[1].keys),a=!1;function d(){return o.filter(e=>i.has(e.key)).map(e=>e.key)}function y(e){if(a)return`${e}// enabledFilters omitted — all filters available`;const t=d();return`${e}enabledFilters: [${t.map(n=>`'${n}'`).join(", ")}],`}function r(){const e=document.getElementById("code-container");e&&(e.innerHTML="",u("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
${y("  ")}
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
${y("    ")}
  }}
/>`}]))}function c(){var n;for(const s of o){const p=document.getElementById(`filter-${s.key}`);p&&(p.checked=a||i.has(s.key))}const e=h();document.querySelectorAll("[data-preset]").forEach(s=>{s.classList.toggle("is-active",s.dataset.preset===e)});const t=document.getElementById("preset-hint");t&&(t.textContent=((n=l.find(s=>s.id===e))==null?void 0:n.hint)??(i.size===0?"Empty array — the Filters button is hidden entirely.":"Custom set — tick the filters you want to offer."))}function h(){if(a)return"all";const e=d().slice().sort().join(","),t=l.find(n=>n.keys&&n.keys.slice().sort().join(",")===e);return(t==null?void 0:t.id)??"custom"}const k={render(){return`
      <div class="page-header">
        <h1>Enabled filters</h1>
        <p>Use <code>enabledFilters</code> to restrict which filters the picker offers. Only the listed keys appear in the <strong>Filters</strong> menu — everything else is hidden, including previously pinned chips and any <code>defaultFilters</code> entry the user could not re-add. Pass an empty array to hide the Filters button altogether.</p>
      </div>

      <section class="page-section">
        <div class="config-controls ef-controls">
          <div class="control-group">
            <span class="control-group-title">Presets</span>
            <div class="ef-presets">
              ${l.map(e=>`<button class="btn-outline" data-preset="${e.id}" type="button">${e.label}</button>`).join("")}
            </div>
          </div>

          <div class="control-group">
            <span class="control-group-title">Filters</span>
            <div class="ef-filter-grid">
              ${o.map(e=>`
                <div class="form-group checkbox-group">
                  <label><input type="checkbox" id="filter-${e.key}" /> ${e.label}</label>
                </div>`).join("")}
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
    `},init(e){i=new Set(l[1].keys),a=!1,c(),r(),document.querySelectorAll("[data-preset]").forEach(t=>{t.addEventListener("click",()=>{const n=l.find(s=>s.id===t.dataset.preset);a=n.keys===null,i=new Set(n.keys??[]),c(),r()})});for(const t of o){const n=document.getElementById(`filter-${t.key}`);n.addEventListener("change",()=>{a&&(a=!1,i=new Set(o.map(s=>s.key))),n.checked?i.add(t.key):i.delete(t.key),c(),r()})}document.getElementById("open-btn").addEventListener("click",()=>{e.config=f({...a?{}:{enabledFilters:d()},onSelect:t=>alert(`Selected ${t.length} asset(s)`)}),e.open()})}};export{k as default};
