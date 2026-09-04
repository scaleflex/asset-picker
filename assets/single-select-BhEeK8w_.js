import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n={render(){return`
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
    `},init(n){t(`#code-container`,[{label:`HTML`,lang:`markup`,code:`
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
<\/script>`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    multiSelect: false,
    onSelect: (assets) => console.log('Selected:', assets[0]),
  }}
/>`}]),document.getElementById(`open-btn`).addEventListener(`click`,()=>{n.config=e({multiSelect:!1,onSelect:e=>alert(`Selected: ${e.map(e=>e.name).join(`, `)}`)}),n.open()})}};export{n as default};