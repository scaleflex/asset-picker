import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n;function r(e){return e==null?``:`\n    maxSelections: ${e},`}function i(){let e=document.getElementById(`code-container`);e&&(e.innerHTML=``,t(`#code-container`,[{label:`HTML`,lang:`markup`,code:`
<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  picker.config = {
    auth: { /* ... */ },
    multiSelect: true,${r(n)}
    onSelect: (assets) => {
      console.log('Selected:', assets.length, 'assets');
    },
  };
<\/script>`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    multiSelect: true,${r(n)}
    onSelect: (assets) => console.log('Selected:', assets.length, 'assets'),
  }}
/>`}]))}var a={render(){return`
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
    `},init(t){n=void 0,i();let r=document.getElementById(`max-select`);r.addEventListener(`change`,()=>{n=r.value?Number(r.value):void 0,i()}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({multiSelect:!0,maxSelections:n,onSelect:e=>alert(`Selected ${e.length} asset(s):\n${e.map(e=>e.name).join(`
`)}`)}),t.open()})}};export{a as default};