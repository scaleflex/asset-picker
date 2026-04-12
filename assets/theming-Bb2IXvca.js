import{b as a}from"./index-BqysEWZn.js";import{r as l}from"./code-block-Bk3NnwHF.js";let o="#155bcd";const d={render(){return`
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
    `},init(c){o="#155bcd",l("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  brandColor: '#155bcd', // Any hex color
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    brandColor: '#155bcd',
  }}
/>`}]);const t=document.getElementById("color-input"),n=document.getElementById("color-hex");t.addEventListener("input",()=>{o=t.value,n.value=o}),n.addEventListener("input",()=>{const e=n.value.trim();/^#[0-9a-f]{6}$/i.test(e)&&(o=e,t.value=e)}),document.getElementById("open-btn").addEventListener("click",()=>{c.config=a({brandColor:o,onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),c.open()})}};export{d as default};
