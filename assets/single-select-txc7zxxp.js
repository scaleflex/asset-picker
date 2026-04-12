import{b as c}from"./index-BqysEWZn.js";import{r as i}from"./code-block-Bk3NnwHF.js";const a={render(){return`
      <div class="page-header">
        <h1>Single select</h1>
        <p>Set <code>multiSelect: false</code> to restrict the picker to a single asset selection. The picker will close immediately after selecting one asset.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){i("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  picker.config = {
    auth: { /* ... */ },
    multiSelect: false,
    onSelect: (assets) => {
      // assets will always contain exactly 1 item
      console.log('Selected:', assets[0]);
    },
  };
<\/script>`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    multiSelect: false,
    onSelect: (assets) => console.log('Selected:', assets[0]),
  }}
/>`}]),document.getElementById("open-btn").addEventListener("click",()=>{e.config=c({multiSelect:!1,onSelect:t=>alert(`Selected: ${t.map(s=>s.name).join(", ")}`)}),e.open()})}};export{a as default};
