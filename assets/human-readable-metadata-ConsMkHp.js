import{b as r}from"./index-BnaKtpZY.js";import{r as g}from"./code-block-Bk3NnwHF.js";let o=!0,t=null;function c(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function i(){const a=document.getElementById("code-container");a&&(a.innerHTML="",g("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  humanReadableMetadata: ${o},
  onSelect: (assets) => console.log(assets[0].info.metadata),
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    humanReadableMetadata: ${o},
    onSelect: (assets) => console.log(assets[0].info.metadata),
  }}
/>`}]))}function m(a,n){if(!t)return;const l=new Date().toLocaleTimeString(),e=document.createElement("div");e.innerHTML=`<span class="log-time">${c(l)}</span> <span class="log-event">${c(a)}</span> <span class="log-data">${c(JSON.stringify(n,null,2))}</span>`,t.appendChild(e),t.scrollTop=t.scrollHeight}const h={render(){return`
      <div class="page-header">
        <h1>Human-readable metadata</h1>
        <p>Use <code>humanReadableMetadata</code> to resolve select / multi-select metadata values to their configured label in the <code>onSelect</code> / <code>ap-select</code> payload, instead of the raw stored slug (e.g. <code>"@itm_v1_eaa5e83d_1@"</code>). Mirrors the Asset Detail API's <code>format=select:human</code> parameter. Off by default.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-human-readable">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-human-readable" checked />
                <span class="toggle-track"></span>
              </span>
              humanReadableMetadata
            </label>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Selected asset metadata</h2>
        <div class="event-log" id="metadata-log">
          <div><span class="log-time">--:--:--</span> Select an asset with metadata to see the resolved output here.</div>
        </div>
        <button class="btn-outline btn-sm" id="clear-log">Clear log</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(a){o=!0,t=document.getElementById("metadata-log"),i();const n=document.getElementById("toggle-human-readable");n.addEventListener("change",()=>{o=n.checked,i()}),document.getElementById("clear-log").addEventListener("click",()=>{t&&(t.innerHTML='<div><span class="log-time">--:--:--</span> Log cleared.</div>')}),document.getElementById("open-btn").addEventListener("click",()=>{a.config=r({humanReadableMetadata:o,onSelect:l=>{console.log("onSelect raw assets:",l),console.log("picker metadataFields (from store):",a.store.getState().metadataFields),l.forEach(e=>{var s,d;console.log(`asset "${e.name}" full object:`,e),console.log(`asset "${e.name}" meta:`,e.meta),console.log(`asset "${e.name}" info.metadata:`,(s=e.info)==null?void 0:s.metadata),m(e.name,{meta:e.meta??null,infoMetadata:((d=e.info)==null?void 0:d.metadata)??null})})}}),a.open()})},destroy(){t=null}};export{h as default};
