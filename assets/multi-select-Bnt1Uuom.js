import{b as l}from"./index-BqysEWZn.js";import{r as a}from"./code-block-Bk3NnwHF.js";let t;function s(e){return e!=null?`
    maxSelections: ${e},`:""}function c(){const e=document.getElementById("code-container");e&&(e.innerHTML="",a("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  picker.config = {
    auth: { /* ... */ },
    multiSelect: true,${s(t)}
    onSelect: (assets) => {
      console.log('Selected:', assets.length, 'assets');
    },
  };
<\/script>`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    multiSelect: true,${s(t)}
    onSelect: (assets) => console.log('Selected:', assets.length, 'assets'),
  }}
/>`}]))}const p={render(){return`
      <div class="page-header">
        <h1>Multi select</h1>
        <p>Multi-select is enabled by default. Use <code>maxSelections</code> to limit how many assets the user can pick.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="max-select">Max selections</label>
            <select id="max-select">
              <option value="" selected>Unlimited</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){t=void 0,c();const n=document.getElementById("max-select");n.addEventListener("change",()=>{t=n.value?Number(n.value):void 0,c()}),document.getElementById("open-btn").addEventListener("click",()=>{e.config=l({multiSelect:!0,maxSelections:t,onSelect:o=>alert(`Selected ${o.length} asset(s):
${o.map(i=>i.name).join(`
`)}`)}),e.open()})}};export{p as default};
