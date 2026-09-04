import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=[],r=[],i=[],a=[];function o(){let e=document.getElementById(`code-container`);if(!e)return;e.innerHTML=``;let i=n.length?`\n    disabledAssetIds: [${n.map(e=>`'${e}'`).join(`, `)}],`:``,a=r.length?`\n    disabledFolderIds: [${r.map(e=>`'${e}'`).join(`, `)}],`:``;t(`#code-container`,[{label:`HTML`,lang:`markup`,code:`
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  // Track previously selected assets/folders outside the picker
  let pickedAssets = [];
  let pickedFolders = [];

  picker.config = {
    auth: { /* ... */ },${i}${a}
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
<\/script>`}])}var s=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`);function c(){let e=document.getElementById(`picked-list`);if(!e)return;if(i.length===0&&a.length===0){e.innerHTML=`<p class="helper-text">No items picked yet. Open the picker and select some assets or folders.</p>`;return}let t=i.map(e=>`<div class="picked-item"><span class="picked-name">${s(e.name)}</span><code class="picked-uuid">${s(e.uuid)}</code></div>`),n=a.map(e=>`<div class="picked-item"><span class="picked-name">📁 ${s(e.name)}</span><code class="picked-uuid">${s(e.uuid)}</code></div>`);e.innerHTML=[...t,...n].join(``)}var l={render(){return`
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
    `},init(t){n=[],r=[],i=[],a=[],o(),c(),document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({disabledAssetIds:n,disabledFolderIds:r,folderSelection:!0,onSelect:(e,t)=>{for(let t of e)i.some(e=>e.uuid===t.uuid)||i.push(t);for(let e of t??[])a.some(t=>t.uuid===e.uuid)||a.push(e);n=i.map(e=>e.uuid),r=a.map(e=>e.uuid),o(),c();let s=e.length+(t?.length??0);alert(`Picked ${s} item(s). Open again to see them disabled.`)}}),t.open()}),document.getElementById(`reset-btn`).addEventListener(`click`,()=>{n=[],r=[],i=[],a=[],o(),c()})}};export{l as default};