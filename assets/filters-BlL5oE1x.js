import{h as d,c as t,d as e}from"./doc-utils-XkOyWBCy.js";const c={render(){return`
      <div class="doc-content">
        <h1>Filters</h1>
        <p class="doc-lead">Filter keys, data structures, and operators used in <code>enabledFilters</code>, <code>defaultFilters</code>, and <code>forcedFilters</code>.</p>

        <h2>Filter keys</h2>
        <table>
          <thead><tr><th>Key</th><th>Constant</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>'type'</code></td><td><code>FILTER_KEYS.TYPE</code></td><td>File format (image, video, audio, document, archive, font)</td></tr>
            <tr><td><code>'mimetype'</code></td><td><code>FILTER_KEYS.MIME_TYPE</code></td><td>MIME type</td></tr>
            <tr><td><code>'date'</code></td><td><code>FILTER_KEYS.DATE</code></td><td>Upload/modification date</td></tr>
            <tr><td><code>'size'</code></td><td><code>FILTER_KEYS.SIZE</code></td><td>File size range</td></tr>
            <tr><td><code>'tags'</code></td><td><code>FILTER_KEYS.TAGS</code></td><td>Asset tags</td></tr>
            <tr><td><code>'labels'</code></td><td><code>FILTER_KEYS.LABELS</code></td><td>Asset labels</td></tr>
            <tr><td><code>'color'</code></td><td><code>FILTER_KEYS.COLOR</code></td><td>Dominant colour search</td></tr>
            <tr><td><code>'image'</code></td><td><code>FILTER_KEYS.IMAGE</code></td><td>Image-specific (resolution, orientation, faces)</td></tr>
            <tr><td><code>'approval'</code></td><td><code>FILTER_KEYS.APPROVAL</code></td><td>Approval workflow status</td></tr>
            <tr><td><code>'metadata'</code></td><td><code>FILTER_KEYS.METADATA</code></td><td>Custom metadata fields</td></tr>
            <tr><td><code>'product_ref'</code></td><td><code>FILTER_KEYS.PRODUCT_REF</code></td><td>Product reference</td></tr>
            <tr><td><code>'asset_expiration'</code></td><td><code>FILTER_KEYS.LICENSE_EXPIRY</code></td><td>License/asset expiry date</td></tr>
            <tr><td><code>'folders'</code></td><td><code>FILTER_KEYS.FOLDERS</code></td><td>Folder location</td></tr>
            <tr><td><code>'resolution'</code></td><td><code>FILTER_KEYS.RESOLUTION</code></td><td>Image resolution</td></tr>
            <tr><td><code>'orientation'</code></td><td><code>FILTER_KEYS.ORIENTATION</code></td><td>Image orientation</td></tr>
            <tr><td><code>'faces'</code></td><td><code>FILTER_KEYS.FACES</code></td><td>Detected faces count</td></tr>
            <tr><td><code>'products'</code></td><td><code>FILTER_KEYS.PRODUCTS</code></td><td>Products</td></tr>
          </tbody>
        </table>

        <h2>Filter data structures</h2>
        <p>Filters used in <code>defaultFilters</code> and <code>forcedFilters</code> use these shapes. The <code>type</code> field is optional — it is automatically inferred from the key (<code>'date'</code> and <code>'asset_expiration'</code> produce date filters, everything else produces string filters).</p>

        <h3>String filter</h3>
        <p>Any key except <code>'date'</code>, <code>'asset_expiration'</code>, and <code>'task_duedate'</code> is a string filter. Only <code>values</code> is required — <code>operator</code> defaults to <code>':'</code> and <code>logic</code> defaults to <code>'OR'</code>.</p>
        ${t("typescript",`defaultFilters: {
  // Only show images
  type: { values: ['image'] },

  // Only JPEG and PNG mime types
  mimetype: { values: ['image/jpeg', 'image/png'] },

  // Tagged with "hero" AND "banner"
  tags: { values: ['hero', 'banner'], logic: 'AND' },

  // Size range: 1 MB to 50 MB (values in bytes as "min..max")
  size: { values: ['1000000..50000000'] },
}`)}

        <h3>Date filter</h3>
        <p>Keys <code>'date'</code>, <code>'asset_expiration'</code>, and <code>'task_duedate'</code> are date filters. Only <code>kind</code> is required — <code>field</code> defaults to <code>'created'</code>, and <code>preset</code>/<code>from</code>/<code>to</code> default to <code>null</code>.</p>
        ${t("typescript",`defaultFilters: {
  // Uploaded in the last month (preset)
  date: { kind: 'preset', preset: 'last_month' },

  // License expires after a specific date
  asset_expiration: { kind: 'after', from: '2025-01-01T00:00:00.000Z' },

  // Uploaded between two dates
  date: { kind: 'between', from: '2025-01-01T00:00:00.000Z', to: '2025-06-01T00:00:00.000Z' },

  // Modified (not created) in the last week
  date: { kind: 'preset', preset: 'last_week', field: 'updated' },
}`)}

        <p><strong>Available date presets:</strong> <code>'today'</code>, <code>'last_week'</code>, <code>'within_week'</code>, <code>'last_month'</code>, <code>'within_month'</code>, <code>'last_year'</code>, <code>'within_year'</code>, <code>'empty'</code>, <code>'non-empty'</code></p>

        <h3>Backward compatibility</h3>
        <p>The full <code>StringFilter</code> / <code>DateFilter</code> types with an explicit <code>type</code> field are also accepted:</p>
        ${t("typescript",`defaultFilters: {
  type: { type: 'string', values: ['image'] },
  date: { type: 'date', field: 'created', kind: 'preset', preset: 'last_month', from: null, to: null },
}`)}

        <h2>Filter operators</h2>
        <table>
          <thead><tr><th>Operator</th><th>Symbol</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td><code>IS</code></td><td><code>:</code></td><td>Exact match (default)</td></tr>
            <tr><td><code>EQUAL</code></td><td><code>=</code></td><td>Equality</td></tr>
            <tr><td><code>NOT_EQUAL</code></td><td><code>!=</code></td><td>Inequality</td></tr>
            <tr><td><code>RANGE</code></td><td><code>..</code></td><td>Range match</td></tr>
            <tr><td><code>IS_NOT</code></td><td><code>:-</code></td><td>Negated match</td></tr>
            <tr><td><code>IS_EXACT</code></td><td><code>:=</code></td><td>Strict exact match</td></tr>
            <tr><td><code>CONTAINS</code></td><td><code>~</code></td><td>Contains substring</td></tr>
            <tr><td><code>CONTAINS_IN_TEXT</code></td><td><code>~~~</code></td><td>Full text search</td></tr>
            <tr><td><code>STARTS_WITH</code></td><td><code>~^</code></td><td>Starts with</td></tr>
            <tr><td><code>GREATER_THAN</code></td><td><code>&gt;</code></td><td>Greater than</td></tr>
            <tr><td><code>LESS_THAN</code></td><td><code>&lt;</code></td><td>Less than</td></tr>
            <tr><td><code>GREATER_THAN_OR_EQUAL</code></td><td><code>&gt;=</code></td><td>Greater than or equal</td></tr>
            <tr><td><code>LESS_THAN_OR_EQUAL</code></td><td><code>&lt;=</code></td><td>Less than or equal</td></tr>
            <tr><td><code>SIMILAR_TO</code></td><td><code>~~</code></td><td>Similarity match</td></tr>
          </tbody>
        </table>

        ${e({href:"#/docs/theming",label:"Theming"},{href:"#/docs/types",label:"Types"})}
      </div>
    `},init(){d()}};export{c as default};
