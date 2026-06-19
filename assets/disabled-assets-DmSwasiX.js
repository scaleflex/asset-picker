import{b as u}from"./index-DAAE0gwp.js";import{r as m}from"./code-block-Bk3NnwHF.js";let c=[],a=[],d=[],n=[];function l(){const s=document.getElementById("code-container");if(!s)return;s.innerHTML="";const o=c.length?`
    disabledAssetIds: [${c.map(e=>`'${e}'`).join(", ")}],`:"",i=a.length?`
    disabledFolderIds: [${a.map(e=>`'${e}'`).join(", ")}],`:"";m("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  // Track previously selected assets/folders outside the picker
  let pickedAssets = [];
  let pickedFolders = [];

  picker.config = {
    auth: { /* ... */ },${o}${i}
    folderSelection: true,
    onSelect: (assets, folders) => {
      // Merge new selections into existing arrays (additive)
      for (const a of assets) {
        if (!pickedAssets.some((p) => p.uuid === a.uuid)) pickedAssets.push(a);
      }
      for (const f of (folders ?? [])) {
        if (!pickedFolders.some((p) => p.uuid === f.uuid)) pickedFolders.push(f);
      }
      // Update config so already-picked items are disabled on next open
      picker.config = {
        ...picker.config,
        disabledAssetIds: pickedAssets.map((a) => a.uuid),
        disabledFolderIds: pickedFolders.map((f) => f.uuid),
      };
    },
  };
<\/script>`}])}function r(){const s=document.getElementById("picked-list");if(!s)return;if(d.length===0&&n.length===0){s.innerHTML='<p class="helper-text">No items picked yet. Open the picker and select some assets or folders.</p>';return}const o=d.map(e=>`<div class="picked-item"><span class="picked-name">${e.name}</span><code class="picked-uuid">${e.uuid}</code></div>`),i=n.map(e=>`<div class="picked-item"><span class="picked-name">📁 ${e.name}</span><code class="picked-uuid">${e.uuid}</code></div>`);s.innerHTML=[...o,...i].join("")}const g={render(){return`
      <div class="page-header">
        <h1>Disabled assets</h1>
        <p>Pass <code>disabledAssetIds</code> (or <code>disabledFolderIds</code>) to display assets that cannot be re-selected. Useful when some items are already picked in the host application.</p>
      </div>

      <section class="page-section">
        <p>Select some assets or folders below. On the next open, those items will appear greyed out and cannot be selected again.</p>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
          <button class="btn-primary" id="open-btn">Open picker</button>
          <button class="btn-secondary" id="reset-btn">Reset picked items</button>
        </div>
        <div id="picked-list" style="margin-top:16px;"></div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(s){c=[],a=[],d=[],n=[],l(),r(),document.getElementById("open-btn").addEventListener("click",()=>{s.config=u({disabledAssetIds:c,disabledFolderIds:a,folderSelection:!0,onSelect:(o,i)=>{for(const t of o)d.some(p=>p.uuid===t.uuid)||d.push(t);for(const t of i??[])n.some(p=>p.uuid===t.uuid)||n.push(t);c=d.map(t=>t.uuid),a=n.map(t=>t.uuid),l(),r();const e=o.length+((i==null?void 0:i.length)??0);alert(`Picked ${e} item(s). Open again to see them disabled.`)}}),s.open()}),document.getElementById("reset-btn").addEventListener("click",()=>{c=[],a=[],d=[],n=[],l(),r()})}};export{g as default};
