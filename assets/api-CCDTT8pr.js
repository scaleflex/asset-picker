import{h as t,c as e,d}from"./doc-utils-XkOyWBCy.js";const c={render(){return`
      <div class="doc-content">
        <h1>API</h1>
        <p class="doc-lead">Public methods, events, and the React wrapper API.</p>

        <h2>Public methods</h2>
        <table>
          <thead><tr><th>Method</th><th>Returns</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>open()</code></td><td><code>Promise&lt;void&gt;</code></td><td>Opens the picker modal. Initialises the API client and loads initial data if not already done. Fires <code>ap-open</code> on success.</td></tr>
            <tr><td><code>close()</code></td><td><code>void</code></td><td>Closes the picker modal and clears the selection state.</td></tr>
          </tbody>
        </table>
        ${e("javascript",`// Open the picker
await picker.open();

// Close programmatically
picker.close();`)}

        <h2>Events</h2>
        <p>All events bubble and cross shadow DOM boundaries (<code>composed: true</code>).</p>
        <table>
          <thead><tr><th>Event</th><th>Detail</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>ap-select</code></td><td><code>{ assets: Asset[] }</code></td><td>Fired when the user confirms their selection</td></tr>
            <tr><td><code>ap-cancel</code></td><td><code>{ reason: 'backdrop' | 'escape' | 'button' | 'close-button' }</code></td><td>Fired when the picker is closed without selecting</td></tr>
            <tr><td><code>ap-open</code></td><td><code>{ timestamp: number }</code></td><td>Fired when the picker opens successfully</td></tr>
            <tr><td><code>ap-error</code></td><td><code>{ error: Error, context: string }</code></td><td>Fired on initialisation or runtime errors</td></tr>
          </tbody>
        </table>
        ${e("javascript",`picker.addEventListener('ap-select', (e) => {
  const { assets } = e.detail;
  assets.forEach((asset) => {
    console.log(asset.name, asset.url?.cdn);
  });
});

picker.addEventListener('ap-cancel', (e) => {
  console.log('Cancelled via:', e.detail.reason);
});

picker.addEventListener('ap-error', (e) => {
  console.error(\`[\${e.detail.context}]\`, e.detail.error);
});`)}

        <h2>React API</h2>
        ${e("tsx","import { AssetPicker, type AssetPickerRef, type AssetPickerProps } from '@scaleflex/asset-picker/react';")}

        <h3>Props</h3>
        <table>
          <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>config</code></td><td><code>AssetPickerConfig</code></td><td>Configuration object (see <a href="#/docs/configuration">Configuration</a>)</td></tr>
            <tr><td><code>open</code></td><td><code>boolean</code></td><td>Controlled open state</td></tr>
            <tr><td><code>onSelect</code></td><td><code>(assets: Asset[]) =&gt; void</code></td><td>Selection callback</td></tr>
            <tr><td><code>onCancel</code></td><td><code>() =&gt; void</code></td><td>Cancel callback</td></tr>
            <tr><td><code>className</code></td><td><code>string</code></td><td>CSS class for the wrapper</td></tr>
            <tr><td><code>style</code></td><td><code>CSSProperties</code></td><td>Inline styles for the wrapper</td></tr>
          </tbody>
        </table>

        <h3>Ref methods</h3>
        <table>
          <thead><tr><th>Method</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>open()</code></td><td>Open the picker imperatively</td></tr>
            <tr><td><code>close()</code></td><td>Close the picker imperatively</td></tr>
          </tbody>
        </table>

        <h3>Controlled mode</h3>
        ${e("tsx",`const [isOpen, setIsOpen] = useState(false);

<AssetPicker
  config={config}
  open={isOpen}
  onSelect={(assets) => {
    console.log(assets);
    setIsOpen(false);
  }}
  onCancel={() => setIsOpen(false)}
/>`)}

        <h3>Imperative mode</h3>
        ${e("tsx",`const ref = useRef<AssetPickerRef>(null);

<button onClick={() => ref.current?.open()}>Open</button>
<AssetPicker ref={ref} config={config} onSelect={handleSelect} />`)}

        ${d({href:"#/docs/configuration",label:"Configuration"},{href:"#/docs/theming",label:"Theming"})}
      </div>
    `},init(){t()}};export{c as default};
