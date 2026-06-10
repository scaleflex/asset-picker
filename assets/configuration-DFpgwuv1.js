import{h as t,c as e,d}from"./doc-utils-XkOyWBCy.js";const r={render(){return`
      <div class="doc-content">
        <h1>Configuration</h1>
        <p class="doc-lead">All configuration is passed via the <code>config</code> property on the <code>&lt;sfx-asset-picker&gt;</code> element.</p>

        <h2>Authentication</h2>
        <p>The picker supports two authentication modes:</p>

        <h3>Security template (external / public apps)</h3>
        <p>Use for client-side integrations. The picker automatically exchanges the security template key for a SASS key on init.</p>
        ${e("typescript",`{
  auth: {
    mode: 'securityTemplate',
    securityTemplateKey: string,   // Exchanged for a SASS key via API
    projectToken: string,
  }
}`)}

        <h3>SASS key (internal / Scaleflex apps)</h3>
        <p>Use when your application already has a SASS key — e.g. inside the Scaleflex Hub where the host app manages SASS key generation and renewal.</p>
        ${e("typescript",`{
  auth: {
    mode: 'sassKey',
    sassKey: string,         // X-Filerobot-Key
    projectToken: string,
  }
}`)}

        <h2>Config options</h2>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>auth</code></td><td><code>AuthConfig</code></td><td><strong>required</strong></td><td>Authentication credentials (see above)</td></tr>
            <tr><td><code>apiBase</code></td><td><code>string</code></td><td>auto</td><td>Override the API base URL</td></tr>
            <tr><td><code>apiFields</code></td><td><code>string[]</code></td><td><code>['cdn_permalink']</code></td><td>Extra computed Files API fields to request, added on top of the default response (does not narrow it). The default exposes the signed CDN permalink as <code>url.cdn_permalink</code> on selected assets. Pass extra keys (e.g. <code>['cdn_permalink', 'relations']</code>) or <code>[]</code> to request none.</td></tr>
            <tr><td><code>locale</code></td><td><code>string</code></td><td><code>'en'</code></td><td>BCP 47 locale tag for the UI language (e.g. <code>'fr'</code>, <code>'de'</code>, <code>'en-US'</code>). Translations are loaded lazily from the Scaleflex TMS CDN; falls back to English for any untranslated keys</td></tr>
            <tr><td><code>multiSelect</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Enable multi-asset selection</td></tr>
            <tr><td><code>maxSelections</code></td><td><code>number</code></td><td><code>undefined</code></td><td>Maximum number of selectable assets</td></tr>
            <tr><td><code>displayMode</code></td><td><code>'modal' | 'inline'</code></td><td><code>'modal'</code></td><td>Render as a dialog overlay or inline in page flow</td></tr>
            <tr><td><code>defaultViewMode</code></td><td><code>'grid' | 'list'</code></td><td><code>'grid'</code></td><td>Initial view mode</td></tr>
            <tr><td><code>gridSize</code></td><td><code>'normal' | 'large'</code></td><td><code>'normal'</code></td><td>Grid card density: <code>'normal'</code> (4 columns) or <code>'large'</code> (3 columns) at ~1200px width</td></tr>
            <tr><td><code>stickyFilters</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Keep the toolbar and filters bar visible while scrolling content</td></tr>
            <tr><td><code>defaultSortBy</code></td><td><code>SortBy</code></td><td><code>'created_at'</code></td><td>Initial sort field (see table below)</td></tr>
            <tr><td><code>defaultSortDirection</code></td><td><code>'asc' | 'desc'</code></td><td><code>'desc'</code></td><td>Initial sort direction</td></tr>
            <tr><td><code>tabs</code></td><td><code>TabKey[]</code></td><td><code>['assets', 'folders']</code></td><td>Tabs to show (<code>'assets'</code>, <code>'folders'</code>, <code>'labels'</code>, <code>'collections'</code>). If only one, the dropdown is hidden</td></tr>
            <tr><td><code>defaultTab</code></td><td><code>TabKey</code></td><td>first in <code>tabs</code></td><td>Which tab to activate when the picker opens</td></tr>
            <tr><td><code>enabledFilters</code></td><td><code>FilterKey[]</code></td><td>all</td><td>Restrict which filters appear in the toolbar</td></tr>
            <tr><td><code>rootFolderPath</code></td><td><code>string</code></td><td><code>'/'</code></td><td>Restrict browsing to a folder subtree. Users can navigate into subfolders but cannot go above this path. Also sets the initial folder.</td></tr>
            <tr><td><code>initialFolderPath</code></td><td><code>string</code></td><td><code>undefined</code></td><td>Open the picker pre-navigated to this folder path (e.g. <code>'/marketing/banners/'</code>). Unlike <code>rootFolderPath</code>, this does not restrict navigation — users can still browse to any folder including parent folders. When set, the picker defaults to the Folders tab. Overridden by <code>rememberLastFolder</code>.</td></tr>
            <tr><td><code>folderSelection</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Allow selecting folders via checkboxes alongside assets</td></tr>
            <tr><td><code>folderSelectionMode</code></td><td><code>'folder' | 'assets'</code></td><td><code>'folder'</code></td><td>What to return when folders are confirmed. <code>'folder'</code>: return Folder objects in the <code>ap-select</code> event. <code>'assets'</code>: show a dialog to fetch folder contents (direct or recursive) and return only Asset objects.</td></tr>
            <tr><td><code>folderCreation</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show a "Create folder" button on the Folders tab. Only visible if the security template grants <code>DIR_CREATE</code> (always visible in <code>sassKey</code> mode).</td></tr>
            <tr><td><code>disabledAssetIds</code></td><td><code>string[]</code></td><td><code>undefined</code></td><td>UUIDs of assets to display but prevent from being selected. Matching assets appear greyed out and are unclickable — useful when some assets are already picked in the host application and should not be re-selected.</td></tr>
            <tr><td><code>disabledFolderIds</code></td><td><code>string[]</code></td><td><code>undefined</code></td><td>UUIDs of folders to display but prevent from being selected.</td></tr>
            <tr><td><code>showMetadata</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Show metadata sections in the preview panel</td></tr>
            <tr><td><code>brandColor</code></td><td><code>string</code></td><td>from API</td><td>Brand accent colour as hex (e.g. <code>'#3b82f6'</code>)</td></tr>
            <tr><td><code>rememberLastFolder</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Persist the last browsed folder and restore on next open</td></tr>
            <tr><td><code>rememberLastView</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Persist the last used view mode (grid/list) and restore on next open</td></tr>
            <tr><td><code>rememberLastTab</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Persist the last active tab and restore on next open</td></tr>
            <tr><td><code>defaultFilters</code></td><td><code>FiltersInput</code></td><td><code>undefined</code></td><td>Filters pre-applied on open. User can modify/remove</td></tr>
            <tr><td><code>forcedFilters</code></td><td><code>FiltersInput</code></td><td><code>undefined</code></td><td>Filters always active. Locked chips the user cannot remove</td></tr>
            <tr><td><code>enableAISearch</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show an AI search toggle in the search bar. When active, queries use semantic/visual AI matching via the Filerobot API</td></tr>
            <tr><td><code>defaultAISearch</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Activate AI search mode by default when the picker opens. Requires <code>enableAISearch: true</code></td></tr>
            <tr><td><code>uploader</code></td><td><code>UploaderIntegrationConfig</code></td><td><code>undefined</code></td><td>Enable the integrated uploader. Shows an Upload button &amp; drop zone. Requires <code>@scaleflex/uploader</code> (optional peer dep, loaded dynamically)</td></tr>
            <tr><td><code>transformations</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Enable transformation options (format, quality, resize) before selection is finalized. When enabled, an "Export options" button appears in the selection bar for image assets, opening a dialog to adjust format, quality, and dimensions. The resulting CDN URLs include the transformation parameters</td></tr>
            <tr><td><code>transformRemoteThumbnail</code></td><td><code>(url: string, ctx: RemoteThumbnailContext) =&gt; string</code></td><td><code>undefined</code></td><td>Rewrite thumbnail/preview URLs before rendering. Useful for CSP proxy setups. Return the original <code>url</code> (or falsy) to leave it unchanged. Applied to all preview images; does not affect video/audio playback streams.</td></tr>
            <tr><td><code>onSelect</code></td><td><code>(assets: Asset[], folders?: Folder[]) =&gt; void</code></td><td><code>undefined</code></td><td>Callback when assets are selected. When transformations are enabled, each image asset includes a <code>transformation</code> property with <code>params</code> and <code>url</code> (<code>{ cdn, permalink_cdn? }</code> — transformed CDN URLs)</td></tr>
            <tr><td><code>onCancel</code></td><td><code>() =&gt; void</code></td><td><code>undefined</code></td><td>Callback when the picker is cancelled</td></tr>
          </tbody>
        </table>

        <h3>Sort fields</h3>
        <table>
          <thead><tr><th>Value</th><th>Available in</th></tr></thead>
          <tbody>
            <tr><td><code>'name'</code></td><td>Assets, Folders</td></tr>
            <tr><td><code>'created_at'</code></td><td>Assets, Folders</td></tr>
            <tr><td><code>'modified_at'</code></td><td>Assets, Folders</td></tr>
            <tr><td><code>'size'</code></td><td>Assets only</td></tr>
            <tr><td><code>'type'</code></td><td>Assets only</td></tr>
            <tr><td><code>'relevance'</code></td><td>Search results only</td></tr>
          </tbody>
        </table>
        <p>When the user switches to the Folders tab, the picker shows its own set of sort options (<code>name</code>, <code>created_at</code>, <code>modified_at</code>). If the current sort field is not supported by folders (e.g. <code>size</code> or <code>type</code>), the sort dropdown updates to show only the available folder options.</p>

        <h2>Internationalisation</h2>
        <p>The picker ships with English strings baked in as fallbacks. To render the UI in a different language, pass a <a href="https://www.rfc-editor.org/rfc/rfc5646" target="_blank" rel="noopener">BCP 47</a> locale tag via <code>locale</code>. Translations are loaded lazily from the Scaleflex TMS CDN on first use; if a key is not yet translated the English default is shown.</p>
        ${e("typescript",`picker.config = {
  auth: { /* ... */ },
  locale: 'fr', // 'fr', 'de', 'en-US', etc. — defaults to 'en'
};`)}
        <p>To debug missing translations locally, set the flag in <code>localStorage</code> and reload — untranslated keys are logged to the console:</p>
        ${e("javascript","localStorage.setItem('apTranslationsMissingKeysEnabled', 'true');")}
        <p>See the <a href="#/examples/language-switcher">Language switcher example</a> for a live demo.</p>

        <h2>Default &amp; forced filters</h2>
        <p>You can pre-configure filters that are applied when the picker opens, and/or lock filters that the user cannot remove.</p>
        ${e("typescript",`picker.config = {
  auth: { /* ... */ },

  // Pre-applied on open — user can modify or remove
  defaultFilters: {
    type: { values: ['image'] },
  },

  // Always active — locked chip with lock icon, cannot be removed
  forcedFilters: {
    tags: { values: ['approved'] },
  },
};`)}

        <h3>Behaviour</h3>
        <ul>
          <li><strong><code>defaultFilters</code></strong> are seeded into the applied filters state when <code>open()</code> is called. The user sees them as normal filter chips and can modify or remove them freely.</li>
          <li><strong><code>forcedFilters</code></strong> are merged into every API request but are <strong>not</strong> stored in the mutable applied state. They render as locked chips (with a lock icon instead of an X button). The user cannot remove them, and "Clear filters" does not affect them. Forced filter keys are also hidden from the "Add filter" dropdown.</li>
          <li>If the same key appears in both <code>defaultFilters</code> and <code>forcedFilters</code>, the forced filter takes precedence.</li>
        </ul>

        <p>You can also lock to specific file extensions using subtype values (<code>category_extension</code> format):</p>
        ${e("typescript",`// Lock to specific extensions using subtype values
picker.config = {
  auth: { /* ... */ },
  forcedFilters: {
    type: { values: ['image_svg', 'image_png'] },
  },
};`)}

        ${d({href:"#/docs/getting-started",label:"Getting started"},{href:"#/docs/api",label:"API"})}
      </div>
    `},init(){t()}};export{r as default};
