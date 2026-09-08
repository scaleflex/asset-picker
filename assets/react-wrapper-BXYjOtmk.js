import{r as e}from"./code-block-Bk3NnwHF.js";const s={render(){return`
      <div class="page-header">
        <h1>React wrapper</h1>
        <p>The package ships a first-class React component with <code>forwardRef</code> support, typed props, and all the same configuration options.</p>
      </div>

      <section class="page-section">
        <h2>Installation</h2>
        <div id="code-install"></div>
      </section>

      <section class="page-section">
        <h2>Basic usage</h2>
        <div id="code-basic"></div>
      </section>

      <section class="page-section">
        <h2>With ref</h2>
        <div id="code-ref"></div>
      </section>

      <section class="page-section">
        <h2>Full example</h2>
        <div id="code-full"></div>
      </section>

      <section class="page-section">
        <h2>TypeScript types</h2>
        <div id="code-types"></div>
      </section>
    `},init(){e("#code-install",[{label:"bash",lang:"bash",code:"npm install @scaleflex/asset-picker"}]),e("#code-basic",[{label:"React",lang:"tsx",code:`
import { AssetPicker } from '@scaleflex/asset-picker/react';

function App() {
  return (
    <AssetPicker
      config={{
        auth: {
          mode: 'securityTemplate',
          securityTemplateKey: 'YOUR_KEY',
          projectToken: 'YOUR_TOKEN',
        },
        onSelect: (assets) => {
          console.log('Selected:', assets);
        },
      }}
    />
  );
}`}]),e("#code-ref",[{label:"React",lang:"tsx",code:`
import { useRef } from 'react';
import { AssetPicker, type AssetPickerRef } from '@scaleflex/asset-picker/react';

function AssetButton() {
  const pickerRef = useRef<AssetPickerRef>(null);

  return (
    <>
      <button onClick={() => pickerRef.current?.open()}>
        Select asset
      </button>
      <AssetPicker
        ref={pickerRef}
        config={{
          auth: { mode: 'securityTemplate', securityTemplateKey: 'KEY', projectToken: 'TOKEN' },
          onSelect: (assets) => console.log(assets),
        }}
      />
    </>
  );
}`}]),e("#code-full",[{label:"React",lang:"tsx",code:`
import { useRef, useState } from 'react';
import { AssetPicker, type AssetPickerRef } from '@scaleflex/asset-picker/react';
import type { Asset } from '@scaleflex/asset-picker';

function MediaPicker() {
  const pickerRef = useRef<AssetPickerRef>(null);
  const [selected, setSelected] = useState<Asset[]>([]);

  return (
    <div>
      <button onClick={() => pickerRef.current?.open()}>
        Choose media ({selected.length} selected)
      </button>

      {selected.map((asset) => (
        <img key={asset.uuid} src={asset.url?.cdn} alt={asset.name} />
      ))}

      <AssetPicker
        ref={pickerRef}
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
          multiSelect: true,
          brandColor: '#155bcd',
          defaultFilters: {
            type: { values: ['image'] },
          },
          onSelect: setSelected,
          onCancel: () => console.log('Cancelled'),
        }}
      />
    </div>
  );
}`}]),e("#code-types",[{label:"TypeScript",lang:"typescript",code:`
import type {
  AssetPickerConfig,
  Asset,
  AuthConfig,
  SecurityTemplateAuth,
  SassKeyAuth,
} from '@scaleflex/asset-picker';

import type {
  AssetPickerRef,
  AssetPickerProps,
} from '@scaleflex/asset-picker/react';`}])}};export{s as default};
