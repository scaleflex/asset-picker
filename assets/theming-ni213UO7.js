import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=`#155bcd`,r={render(){return`
      <div class="page-header">
        <h1>Theming</h1>
        <p>Use the <code>brandColor</code> option to theme the picker to match your brand. Pass any hex color and the picker derives all accent shades automatically.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group">
            <label for="color-input">Brand color</label>
            <input type="color" id="color-input" value="#155bcd" />
          </div>
          <div class="form-group">
            <label for="color-hex">Hex value</label>
            <input type="text" id="color-hex" value="#155bcd" class="mono-input" />
          </div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(r){n=`#155bcd`,t(`#code-container`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
  brandColor: '#155bcd', // Any hex color
};`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    brandColor: '#155bcd',
  }}
/>`}]);let i=document.getElementById(`color-input`),a=document.getElementById(`color-hex`);i.addEventListener(`input`,()=>{n=i.value,a.value=n}),a.addEventListener(`input`,()=>{let e=a.value.trim();/^#[0-9a-f]{6}$/i.test(e)&&(n=e,i.value=e)}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{r.config=e({brandColor:n,onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),r.open()})}};export{r as default};