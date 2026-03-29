import type { Page } from '../../lib/router';
import { code, docNav, highlightAll } from '../../lib/doc-utils';

const page: Page = {
  render() {
    return `
      <div class="doc-content">
        <h1>Configuration</h1>
        <p class="doc-lead">All configuration is passed via the <code>config</code> property on the <code>&lt;sfx-asset-picker&gt;</code> element.</p>

        <h2>Authentication</h2>
        <p>The picker supports two authentication modes:</p>

        <h3>Security template (external / public apps)</h3>
        <p>Use for client-side integrations. The picker automatically exchanges the security template key for a SASS key on init.</p>
        ${code(
          'typescript',
          `{
  auth: {
    mode: 'securityTemplate',
    securityTemplateKey: string,   // Exchanged for a SASS key via API
    projectToken: string,
  }
}`,
        )}

        <h3>SASS key (internal / Scaleflex apps)</h3>
        <p>Use when your application already has a SASS key — e.g. inside the Scaleflex Hub where the host app manages SASS key generation and renewal.</p>
        ${code(
          'typescript',
          `{
  auth: {
    mode: 'sassKey',
    sassKey: string,         // X-Filerobot-Key
    projectToken: string,
  }
}`,
        )}

        <h2>Config options</h2>
        <table>
          <thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>auth</code></td><td><code>AuthConfig</code></td><td><strong>required</strong></td><td>Authentication credentials (see above)</td></tr>
            <tr><td><code>apiBase</code></td><td><code>string</code></td><td>auto</td><td>Override the API base URL</td></tr>
            <tr><td><code>locale</code></td><td><code>string</code></td><td><code>undefined</code></td><td>Locale for translations</td></tr>
            <tr><td><code>multiSelect</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Enable multi-asset selection</td></tr>
            <tr><td><code>maxSelections</code></td><td><code>number</code></td><td><code>undefined</code></td><td>Maximum number of selectable assets</td></tr>
            <tr><td><code>defaultViewMode</code></td><td><code>'grid' | 'list'</code></td><td><code>'grid'</code></td><td>Initial view mode</td></tr>
            <tr><td><code>defaultSortBy</code></td><td><code>SortBy</code></td><td><code>'created_at'</code></td><td>Initial sort field (see table below)</td></tr>
            <tr><td><code>defaultSortDirection</code></td><td><code>'asc' | 'desc'</code></td><td><code>'desc'</code></td><td>Initial sort direction</td></tr>
            <tr><td><code>tabs</code></td><td><code>TabKey[]</code></td><td><code>['assets', 'folders']</code></td><td>Tabs to show. If only one, the dropdown is hidden</td></tr>
            <tr><td><code>defaultTab</code></td><td><code>TabKey</code></td><td>first in <code>tabs</code></td><td>Which tab to activate when the picker opens</td></tr>
            <tr><td><code>enabledFilters</code></td><td><code>FilterKey[]</code></td><td>all</td><td>Restrict which filters appear in the toolbar</td></tr>
            <tr><td><code>rootFolderPath</code></td><td><code>string</code></td><td><code>'/'</code></td><td>Start browsing from a specific folder path (e.g. <code>'/marketing/banners/'</code>)</td></tr>
            <tr><td><code>showMetadata</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Show metadata sections in the preview panel</td></tr>
            <tr><td><code>brandColor</code></td><td><code>string</code></td><td>from API</td><td>Brand accent colour as hex (e.g. <code>'#3b82f6'</code>)</td></tr>
            <tr><td><code>rememberLastFolder</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Persist the last browsed folder and restore on next open</td></tr>
            <tr><td><code>rememberLastView</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Persist the last used view mode (grid/list) and restore on next open</td></tr>
            <tr><td><code>rememberLastTab</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Persist the last active tab (assets/folders) and restore on next open</td></tr>
            <tr><td><code>defaultFilters</code></td><td><code>FiltersInput</code></td><td><code>undefined</code></td><td>Filters pre-applied on open. User can modify/remove</td></tr>
            <tr><td><code>forcedFilters</code></td><td><code>FiltersInput</code></td><td><code>undefined</code></td><td>Filters always active. Locked chips the user cannot remove</td></tr>
            <tr><td><code>uploader</code></td><td><code>UploaderIntegrationConfig</code></td><td><code>undefined</code></td><td>Enable the integrated uploader. Shows an Upload button &amp; drop zone. Requires <code>@scaleflex/uploader</code> (optional peer dep, loaded dynamically)</td></tr>
            <tr><td><code>onSelect</code></td><td><code>(assets: Asset[]) =&gt; void</code></td><td><code>undefined</code></td><td>Callback when assets are selected</td></tr>
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

        <h2>Default &amp; forced filters</h2>
        <p>You can pre-configure filters that are applied when the picker opens, and/or lock filters that the user cannot remove.</p>
        ${code(
          'typescript',
          `picker.config = {
  auth: { /* ... */ },

  // Pre-applied on open — user can modify or remove
  defaultFilters: {
    type: { values: ['image'] },
  },

  // Always active — locked chip with lock icon, cannot be removed
  forcedFilters: {
    tags: { values: ['approved'] },
  },
};`,
        )}

        <h3>Behaviour</h3>
        <ul>
          <li><strong><code>defaultFilters</code></strong> are seeded into the applied filters state when <code>open()</code> is called. The user sees them as normal filter chips and can modify or remove them freely.</li>
          <li><strong><code>forcedFilters</code></strong> are merged into every API request but are <strong>not</strong> stored in the mutable applied state. They render as locked chips (with a lock icon instead of an X button). The user cannot remove them, and "Clear filters" does not affect them. Forced filter keys are also hidden from the "Add filter" dropdown.</li>
          <li>If the same key appears in both <code>defaultFilters</code> and <code>forcedFilters</code>, the forced filter takes precedence.</li>
        </ul>

        <p>You can also lock to specific file extensions using subtype values (<code>category_extension</code> format):</p>
        ${code('typescript', `// Lock to specific extensions using subtype values
picker.config = {
  auth: { /* ... */ },
  forcedFilters: {
    type: { values: ['image_svg', 'image_png'] },
  },
};`)}

        ${docNav(
          { href: '#/docs/getting-started', label: 'Getting started' },
          { href: '#/docs/api', label: 'API' },
        )}
      </div>
    `;
  },

  init() {
    highlightAll();
  },
};

export default page;
