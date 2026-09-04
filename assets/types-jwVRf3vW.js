import{n as e,r as t,t as n}from"./doc-utils-C97Qk3q2.js";var r={render(){return`
      <div class="doc-content">
        <h1>Types</h1>
        <p class="doc-lead">All types are exported from the main entry point.</p>

        ${n(`typescript`,`import type {
  AssetPickerConfig,
  AuthConfig,
  SecurityTemplateAuth,
  SassKeyAuth,
  Asset,
  Folder,
  FolderOwner,
  FilterKey,
  AnyFilterKey,
  AnyFilter,
  StringFilter,
  DateFilter,
  Filters,
  FiltersState,
  ViewMode,
  SortBy,
  SortDirection,
  TabKey,
  AssetPickerSelectDetail,
  AssetPickerCancelDetail,
} from '@scaleflex/asset-picker';`)}

        <h2>Asset</h2>
        <p>The <code>Asset</code> object returned in <code>ap-select</code> events:</p>
        ${n(`typescript`,`interface Asset {
  uuid: string;
  name: string;
  extension: string;
  type: string;                  // 'image', 'video', 'audio', 'document', ...
  mime?: string;                 // MIME type
  size: {
    bytes: number;
    pretty: string;
  };
  url?: {
    public: string;              // Public URL
    cdn: string;                 // CDN-optimised URL
    path: string;                // Relative path
    permalink?: string;          // Permanent link
  };
  created_at: string;           // ISO timestamp
  modified_at: string;          // ISO timestamp
  tags: Record<string, any>;
  labels: string[];
  meta: {
    title?: string;
    description?: string;
    alt?: string;
    [key: string]: unknown;
  };
  info: {
    img_w?: number;              // Image width (px)
    img_h?: number;              // Image height (px)
    duration?: number;           // Video/audio duration (seconds)
    video_w?: number;            // Video width (px)
    video_h?: number;            // Video height (px)
    thumbnail?: string;          // Thumbnail URL
    main_colors_hex?: string[];  // Dominant colours
    dominant_color_hex?: string; // Most dominant colour
    [key: string]: unknown;
  };
  folder?: {
    uuid: string;
    name: string;
  };
  owner?: {
    uuid: string;
    name: string;
    email: string;
  };
}`)}

        <h2>Folder</h2>
        ${n(`typescript`,`interface Folder {
  uuid: string;
  name: string;
  path: string;
  owner?: FolderOwner;
  created_at: string;
  modified_at?: string;
  updated_at?: string;
  count?: {
    files_recursive?: number;
    files_direct?: number;
  };
  size?: {
    total_recursive_bytes?: number;
    total_recursive_pretty?: string;
  };
  visibility?: {
    in_cdn?: { actual: string; set: string };
    in_dam?: { actual: string; set: string };
  };
  meta?: Record<string, unknown>;
  decoration?: {
    highlight_color?: string | null;
    has_custom_preview?: boolean | null;
  };
}

interface FolderOwner {
  uuid: string;
  name: string;
  email: string;
  photo?: string | null;
}`)}

        ${e({href:`#/docs/filters`,label:`Filters`})}
      </div>
    `},init(){t()}};export{r as default};