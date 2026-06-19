import{b as o}from"./index-DAAE0gwp.js";import{r as l}from"./code-block-Bk3NnwHF.js";const c=[{id:"btn-en",label:"English",code:"en"},{id:"btn-fr",label:"French",code:"fr"},{id:"btn-de",label:"German",code:"de"}],i={render(){return`
      <div class="page-header">
        <h1>Language switcher</h1>
        <p>Pass a <code>locale</code> option to the picker config to load the UI in a different language. Translations are fetched from the Scaleflex TMS CDN. Falls back to English if a translation is unavailable.</p>
      </div>

      <section class="page-section">
        <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
          ${c.map(({id:t,label:n})=>`<button class="btn-primary" id="${t}">${n}</button>`).join(`
        `)}
        </div>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(e){l("#code-container",[{label:"HTML",lang:"markup",code:`
<script type="module">
  import '@scaleflex/asset-picker/define';
<\/script>

<sfx-asset-picker id="picker"></sfx-asset-picker>

<script>
  const picker = document.getElementById('picker');

  function openWithLocale(locale) {
    picker.config = {
      auth: {
        mode: 'securityTemplate',
        securityTemplateKey: 'YOUR_KEY',
        projectToken: 'YOUR_TOKEN',
      },
      locale,
      onSelect: (assets) => console.log('Selected:', assets),
      onCancel: () => console.log('Cancelled'),
    };
    picker.open();
  }

  document.getElementById('btn-en').addEventListener('click', () => openWithLocale('en'));
  document.getElementById('btn-fr').addEventListener('click', () => openWithLocale('fr'));
  document.getElementById('btn-de').addEventListener('click', () => openWithLocale('de'));
<\/script>`},{label:"React",lang:"tsx",code:`
import { useEffect, useRef, useState } from 'react';
import { AssetPicker, type AssetPickerRef } from '@scaleflex/asset-picker/react';

const languages = [
  { label: 'English', code: 'en' },
  { label: 'French', code: 'fr' },
  { label: 'German', code: 'de' },
];

export function App() {
  const pickerRef = useRef<AssetPickerRef>(null);
  const [locale, setLocale] = useState('en');
  const hasOpened = useRef(false);

  // Defer open() until after the locale state is applied to the config prop
  useEffect(() => {
    if (!hasOpened.current) { hasOpened.current = true; return; }
    pickerRef.current?.open();
  }, [locale]);

  return (
    <>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {languages.map(({ label, code }) => (
          <button key={code} onClick={() => setLocale(code)}>
            {label}
          </button>
        ))}
      </div>
      <AssetPicker
        ref={pickerRef}
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
          locale,
          onSelect: (assets) => console.log('Selected:', assets),
          onCancel: () => console.log('Cancelled'),
        }}
      />
    </>
  );
}`}]);for(const{id:t,code:n}of c)document.getElementById(t).addEventListener("click",()=>{e.config=o({locale:n}),e.open()})}};export{i as default};
