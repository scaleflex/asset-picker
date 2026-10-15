import{b as f,a as d,g,e as y,D as b,c as k}from"./index-BxvppXwv.js";import{r as v}from"./code-block-Bk3NnwHF.js";const $=["title","year","countries"];let l=[],s=[],c=0;function i(a){return a.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function E(){const{projectToken:a,securityTemplateKey:e}=g(),t=`https://api.filerobot.com/${a}/v5`,{key:n}=await y({mode:"securityTemplate",securityTemplateKey:e,projectToken:a},t),o=new b({apiBase:t.replace(/\/v5$/,""),headers:{"X-Filerobot-Key":n}});return k(o)}function h(a){if(!s.length)return`${a}// thumbnailMetadata omitted — default tile`;const e=s.map(t=>`'${t.replace(/\\/g,"\\\\").replace(/'/g,"\\'")}'`);return`${a}thumbnailMetadata: [${e.join(", ")}],`}function r(){const a=document.getElementById("code-container");a&&(a.innerHTML="",v("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
${h("  ")}
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
${h("    ")}
  }}
/>`}]))}function L(a){const e=l.find(t=>t.key===a);return(e==null?void 0:e.label)||a}function p(){const a=s.length>=d;document.querySelectorAll("[data-field-key]").forEach(n=>{const o=s.includes(n.dataset.fieldKey);n.checked=o,n.disabled=a&&!o});const e=document.getElementById("tm-counter");e&&(e.textContent=`${s.length} / ${d}`);const t=document.getElementById("tm-order");t&&(t.innerHTML=s.length?s.map((n,o)=>`<span class="tm-chip">${o+1}. ${i(L(n))}</span>`).join(""):'<span class="form-hint">No fields selected — the default tile.</span>')}function u(){var n;const a=(n=document.getElementById("tm-search"))==null?void 0:n.value.trim().toLowerCase();let e=0;document.querySelectorAll(".tm-field").forEach(o=>{const m=!a||o.dataset.search.includes(a);o.hidden=!m,m&&e++});const t=document.getElementById("tm-no-match");t&&(t.hidden=e>0)}function T(){const a=document.getElementById("tm-fields");if(a){if(!l.length){a.innerHTML='<p class="form-hint">This project has no metadata fields.</p>';return}a.innerHTML=`${l.map(e=>{const t=e.label||e.key;return`<label class="tm-field" title="${i(`${t} (${e.key})`)}" data-search="${i(`${t} ${e.key}`.toLowerCase())}"><input type="checkbox" data-field-key="${i(e.key)}" /><span class="tm-field-label">${i(t)}</span></label>`}).join("")}<p class="form-hint tm-no-match" id="tm-no-match" hidden>No fields match.</p>`,a.querySelectorAll("[data-field-key]").forEach(e=>{e.addEventListener("change",()=>{const t=e.dataset.fieldKey;s=e.checked?[...s,t]:s.filter(n=>n!==t),p(),r()})}),u(),p()}}const S={render(){return`
      <div class="page-header">
        <h1>Thumbnail metadata</h1>
        <p>Use <code>thumbnailMetadata</code> to show up to ${d} metadata fields on each grid tile as <em>Label: value</em> lines — the widget counterpart of the Hub's Library → Interface → Appearance → "Thumbnail metadata" setting. Keys are the raw <code>MetadataModelField.key</code> (unprefixed); lines follow the array order. Select values show their labels, regional fields the selected region, and a missing value shows "—", so a tile's height doesn't depend on which fields the asset has filled.</p>
      </div>

      <section class="page-section">
        <div class="config-controls ef-controls">
          <div class="control-group">
            <span class="control-group-title">Fields on tiles <span id="tm-counter"></span></span>
            <div class="form-group tm-search">
              <input id="tm-search" type="search" placeholder="Search fields by name or key" autocomplete="off" />
            </div>
            <div class="tm-fields" id="tm-fields"><p class="form-hint">Loading the project's metadata fields…</p></div>
            <div class="tm-order" id="tm-order"></div>
          </div>
        </div>
        <p class="form-hint">The list comes from the project set in the header's auth settings. Lines appear in the order you tick the boxes.</p>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(a){l=[],s=[],r();const e=++c;E().then(t=>{if(e!==c)return;l=t;const n=new Set(t.map(o=>o.key));s=$.filter(o=>n.has(o)),T(),r()}).catch(t=>{if(e!==c)return;const n=document.getElementById("tm-fields");n&&(n.innerHTML=`<p class="form-hint">Could not load metadata fields: ${i(t instanceof Error?t.message:String(t))}</p>`)}),document.getElementById("tm-search").addEventListener("input",u),document.getElementById("open-btn").addEventListener("click",()=>{a.config=f({defaultViewMode:"grid",...s.length?{thumbnailMetadata:[...s]}:{},onSelect:t=>alert(`Selected ${t.length} asset(s)`)}),a.open()})}};export{S as default};
