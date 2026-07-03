import { css as T, LitElement as L, html as l, nothing as g, svg as as } from "lit";
import { property as d, query as lt, state as x } from "lit/decorators.js";
import { createI18n as bi, createMissingKeysHelper as xi } from "@scaleflex/dam-ui/i18n";
import { InfiniteScrollController as _i, MarqueeController as yi } from "@scaleflex/dam-ui/controllers";
import { debounce as $i, getFileTypeIconUrl as Gt, getDefaultFileTypeIconUrl as gt, DamClient as wi, getLabels as ki, getFilesRaw as Je, getFilesStats as Wt, getFoldersRaw as Si, getFolderPreviews as Ci, createFolder as Fi } from "@scaleflex/dam-core";
import { applyBrandColor as Ai } from "@scaleflex/dam-ui/theme";
import { customElement as P, cspStyle as O } from "@scaleflex/dam-ui";
import "@scaleflex/dam-ui/primitives";
class Ei {
  constructor(e) {
    this.listeners = /* @__PURE__ */ new Set(), this._notifying = !1, this._pendingState = null, this.state = e;
  }
  getState() {
    return this.state;
  }
  setState(e) {
    if (this._notifying) {
      this._pendingState = { ...this._pendingState || {}, ...e };
      return;
    }
    const s = this.state;
    this.state = { ...s, ...e }, this._notifying = !0;
    try {
      this.listeners.forEach((i) => i(this.state, s));
    } finally {
      this._notifying = !1;
    }
    if (this._pendingState) {
      const i = this._pendingState;
      this._pendingState = null, this.setState(i);
    }
  }
  subscribe(e) {
    return this.listeners.add(e), () => this.listeners.delete(e);
  }
  destroy() {
    this.listeners.clear();
  }
}
function Ti() {
  return new Ei({
    t: (t, e, s) => {
      const i = (r, o) => r.replace(/\{\{(\w+)\}\}/g, (a, n) => String(o[n] ?? ""));
      if (typeof e == "string")
        return i(e, s ?? {});
      if (typeof e == "object" && e !== null) {
        const r = e, o = r.count;
        if (o !== void 0) {
          const a = String(
            (o === 1 ? r.defaultValue_one : r.defaultValue_other) ?? r.defaultValue ?? t
          );
          return i(a, r);
        }
        return i(String(r.defaultValue ?? t), r);
      }
      return t;
    },
    config: null,
    projectToken: "",
    sassKey: "",
    permissions: null,
    brandColor: "",
    isOpen: !1,
    activeTab: "assets",
    viewMode: "grid",
    searchQuery: "",
    isAISearchActive: !1,
    sortBy: "modified_at",
    sortDirection: "desc",
    previewAsset: null,
    isPreviewOpen: !1,
    assets: [],
    folders: [],
    folderPreviews: {},
    labels: [],
    tags: [],
    currentFolder: null,
    currentFolderPath: "/",
    breadcrumb: [],
    activeLabelUuid: null,
    collections: [],
    activeCollectionUuid: null,
    activeCollectionFolders: [],
    activeCollectionFolder: null,
    isLoadingCollectionFolders: !1,
    offset: 0,
    limit: 100,
    totalCount: 0,
    totalFolderCount: 0,
    isLoading: !1,
    isSelectingAll: !1,
    hasMore: !1,
    filters: {
      metadata: { pinned: [], visible: [], applied: {} },
      pinned: [],
      visible: [],
      applied: {}
    },
    fileTypes: [],
    metadataFields: [],
    regionalVariantGroups: [],
    regionalFilters: {},
    selectedAssets: /* @__PURE__ */ new Map(),
    selectedFolders: /* @__PURE__ */ new Map(),
    disabledAssetIds: /* @__PURE__ */ new Set(),
    disabledFolderIds: /* @__PURE__ */ new Set(),
    isResolvingFolders: !1
  });
}
const Ys = "a656ff82-0270-46dc-8de8-c734318d841d", Ii = "https://i18n-fastly.ultrafast.io", Li = "https://neo.wordplex.io", Ws = "asset-picker", Xs = bi({
  gridUuid: Ys,
  namespace: Ws,
  cdnUrl: Ii
}), Oi = Xs.initI18n;
Xs.getInstance;
const Pi = xi({
  lsKey: "apTranslationsMissingKeysEnabled",
  namespace: Ws,
  gridUuid: Ys,
  prodUrl: Li,
  logPrefix: "[asset-picker]"
});
class Di {
  constructor(e, s) {
    this.host = e, this.store = s, e.addController(this);
  }
  get state() {
    return this.store.getState();
  }
  setState(e) {
    this.store.setState(e);
  }
  hostConnected() {
    this.unsubscribe = this.store.subscribe(() => {
      this.host.requestUpdate();
    });
  }
  hostDisconnected() {
    var e;
    (e = this.unsubscribe) == null || e.call(this);
  }
}
function zi(t) {
  return "extension" in t && !("path" in t);
}
class Mi {
  constructor(e, s) {
    this.lastClickedIndex = -1, this.host = e, this.store = s, e.addController(this);
  }
  hostConnected() {
  }
  hostDisconnected() {
  }
  get _folderSelectionEnabled() {
    var e;
    return ((e = this.store.getState().config) == null ? void 0 : e.folderSelection) === !0;
  }
  /**
   * Build a combined list matching the visual render order: folders first, then assets.
   * Only used when folder selection is enabled for shift+click ranges.
   */
  _getCombinedList() {
    const e = this.store.getState();
    return this._folderSelectionEnabled ? [...e.folders, ...e.assets] : e.assets;
  }
  _applyRangeSelection(e, s, i, r) {
    const o = this.store.getState(), a = this._getCombinedList();
    for (let n = e; n <= s; n++) {
      const c = a[n];
      c && (zi(c) ? o.disabledAssetIds.has(c.uuid) || i.set(c.uuid, c) : o.disabledFolderIds.has(c.uuid) || r.set(c.uuid, c));
    }
  }
  handleSelect(e, s, i) {
    var n, c, h, u;
    const r = this.store.getState();
    if (r.disabledAssetIds.has(e.uuid)) return;
    const o = new Map(r.selectedAssets);
    if (!(((n = r.config) == null ? void 0 : n.multiSelect) ?? !0)) {
      o.clear(), o.set(e.uuid, e), this.store.setState({ selectedAssets: o, selectedFolders: /* @__PURE__ */ new Map() }), this.lastClickedIndex = s;
      return;
    }
    if (i.shiftKey && this.lastClickedIndex >= 0)
      if (this._folderSelectionEnabled) {
        const f = Math.min(this.lastClickedIndex, s), p = Math.max(this.lastClickedIndex, s), v = new Map(r.selectedFolders);
        this._applyRangeSelection(f, p, o, v);
        const m = (c = r.config) == null ? void 0 : c.maxSelections;
        if (m && o.size + v.size > m) return;
        this.store.setState({ selectedAssets: o, selectedFolders: v });
      } else {
        const f = Math.min(this.lastClickedIndex, s), p = Math.max(this.lastClickedIndex, s), v = r.assets;
        for (let k = f; k <= p; k++)
          v[k] && !r.disabledAssetIds.has(v[k].uuid) && o.set(v[k].uuid, v[k]);
        const m = (h = r.config) == null ? void 0 : h.maxSelections;
        if (m && o.size > m) return;
        this.store.setState({ selectedAssets: o });
      }
    else if (i.metaKey || i.ctrlKey) {
      o.has(e.uuid) ? o.delete(e.uuid) : o.set(e.uuid, e);
      const f = (u = r.config) == null ? void 0 : u.maxSelections, p = o.size + (this._folderSelectionEnabled ? r.selectedFolders.size : 0);
      if (f && p > f) return;
      this.store.setState({ selectedAssets: o });
    } else
      o.clear(), o.set(e.uuid, e), this.store.setState({ selectedAssets: o, selectedFolders: /* @__PURE__ */ new Map() });
    this.lastClickedIndex = s;
  }
  handleFolderSelect(e, s, i) {
    var n, c, h;
    if (!this._folderSelectionEnabled) return;
    const r = this.store.getState();
    if (r.disabledFolderIds.has(e.uuid)) return;
    const o = new Map(r.selectedFolders);
    if (!(((n = r.config) == null ? void 0 : n.multiSelect) ?? !0)) {
      o.clear(), o.set(e.uuid, e), this.store.setState({ selectedFolders: o, selectedAssets: /* @__PURE__ */ new Map() }), this.lastClickedIndex = s;
      return;
    }
    if (i.shiftKey && this.lastClickedIndex >= 0) {
      const u = Math.min(this.lastClickedIndex, s), f = Math.max(this.lastClickedIndex, s), p = new Map(r.selectedAssets);
      this._applyRangeSelection(u, f, p, o);
      const v = (c = r.config) == null ? void 0 : c.maxSelections;
      if (v && p.size + o.size > v) return;
      this.store.setState({ selectedAssets: p, selectedFolders: o });
    } else if (i.metaKey || i.ctrlKey) {
      o.has(e.uuid) ? o.delete(e.uuid) : o.set(e.uuid, e);
      const u = (h = r.config) == null ? void 0 : h.maxSelections, f = o.size + r.selectedAssets.size;
      if (u && f > u) return;
      this.store.setState({ selectedFolders: o });
    } else
      o.clear(), o.set(e.uuid, e), this.store.setState({ selectedFolders: o, selectedAssets: /* @__PURE__ */ new Map() });
    this.lastClickedIndex = s;
  }
  isSelected(e) {
    return this.store.getState().selectedAssets.has(e);
  }
  isFolderSelected(e) {
    return this.store.getState().selectedFolders.has(e);
  }
  resetRange() {
    this.lastClickedIndex = -1;
  }
  selectAll(e) {
    var c;
    const s = this.store.getState(), i = (c = s.config) == null ? void 0 : c.maxSelections, r = this._folderSelectionEnabled ? s.selectedFolders.size : 0, o = e.filter((h) => !s.disabledAssetIds.has(h.uuid)), a = /* @__PURE__ */ new Map(), n = i ? Math.max(0, Math.min(o.length, i - r)) : o.length;
    for (let h = 0; h < n; h++)
      a.set(o[h].uuid, o[h]);
    return this.store.setState({ selectedAssets: a }), this.lastClickedIndex = -1, a.size;
  }
  selectAllFolders(e) {
    var n;
    if (!this._folderSelectionEnabled) return;
    const s = this.store.getState(), i = (n = s.config) == null ? void 0 : n.maxSelections, r = e.filter((c) => !s.disabledFolderIds.has(c.uuid)), o = /* @__PURE__ */ new Map(), a = i ? Math.max(0, Math.min(r.length, i - s.selectedAssets.size)) : r.length;
    for (let c = 0; c < a; c++)
      o.set(r[c].uuid, r[c]);
    this.store.setState({ selectedFolders: o });
  }
  clearSelection() {
    this.store.setState({ selectedAssets: /* @__PURE__ */ new Map(), selectedFolders: /* @__PURE__ */ new Map() }), this.lastClickedIndex = -1;
  }
  getSelectedAssets() {
    return Array.from(this.store.getState().selectedAssets.values());
  }
  getSelectedFolders() {
    return Array.from(this.store.getState().selectedFolders.values());
  }
}
async function Ri(t) {
  return t.get("/collections");
}
async function Ni(t, e) {
  return t.get(`/collections/${e}/folders`);
}
function Zs(t) {
  return t.filter((e) => !!e.name).map((e) => ({ ...e, children: Zs(e.children ?? []) })).filter((e) => {
    var s;
    return !((((s = e.children) == null ? void 0 : s.length) ?? 0) < 1 && !e.filters);
  });
}
async function Ui(t) {
  return ((await t.get("/tags")).tags || []).map((i) => ({
    ...i,
    label: i.names.en || Object.values(i.names)[0] || ""
  })).filter((i) => i.label).sort((i, r) => i.label.localeCompare(r.label));
}
const ji = 3e4;
async function Ki(t, e) {
  const s = `${e}/key/${t.securityTemplateKey}`, i = new AbortController(), r = setTimeout(() => i.abort(), ji);
  try {
    const o = await fetch(s, {
      headers: { "X-Filerobot-Key": t.securityTemplateKey },
      signal: i.signal
    });
    if (clearTimeout(r), !o.ok) {
      let n = `API error: ${o.status} ${o.statusText}`;
      try {
        const c = await o.json();
        c.msg && (n = `API error: ${o.status} - ${c.msg}`);
      } catch {
      }
      throw new Error(n);
    }
    const a = await o.json();
    if (a.status === "error")
      throw new Error(`API error: ${a.msg || "Unknown error"}`);
    return { key: a.key, permissions: a.permissions ?? [] };
  } catch (o) {
    throw clearTimeout(r), o instanceof DOMException && o.name === "AbortError" ? new Error("API request timed out") : o;
  }
}
function Bi(t, e) {
  return t ? t.includes(e) : !1;
}
const Vi = {
  FOLDER_CREATE: "DIR_CREATE"
};
function ls(t) {
  var r, o;
  const e = (r = t.info) == null ? void 0 : r.playlists;
  if (!(e != null && e.length)) return null;
  const s = (o = e[0]) == null ? void 0 : o.playlists;
  return s != null && s.length && s[0] || null;
}
function ht(t) {
  return (t.type ?? "").startsWith("image");
}
function Ua(t) {
  return (t.type ?? "").startsWith("video");
}
function ja(t) {
  return (t.type ?? "").startsWith("audio");
}
function qi(t) {
  var e, s;
  return ((e = t.url) == null ? void 0 : e.cdn) ?? ((s = t.url) == null ? void 0 : s.public) ?? "";
}
function Ka(t, e) {
  const { meta: s, name: i } = t;
  if (s != null && s.alt) return s.alt;
  const r = s == null ? void 0 : s.title;
  if (typeof r == "string" && r) return r;
  if (r && typeof r == "object") {
    if (e) {
      const a = r[e];
      if (a) return a;
    }
    const o = Object.keys(r)[0];
    if (o) {
      const a = r[o];
      if (a) return a;
    }
  }
  return i.split(".")[0];
}
function xs(t) {
  var e, s;
  return ((e = t.info) == null ? void 0 : e.img_w) ?? ((s = t.info) == null ? void 0 : s.video_w) ?? 0;
}
function _s(t) {
  var e, s;
  return ((e = t.info) == null ? void 0 : e.img_h) ?? ((s = t.info) == null ? void 0 : s.video_h) ?? 0;
}
function Ba(t) {
  return {
    width: xs(t),
    height: _s(t)
  };
}
function Va(t) {
  return ls(t) !== null;
}
function qa(t) {
  return ls(t);
}
function Ga(t) {
  return ls(t) ?? qi(t);
}
const Gi = {
  excellent: 90,
  good: 75,
  fair: 60
}, Qi = [
  { label: "WEBP", value: "webp" },
  { label: "JPEG", value: "jpeg" },
  { label: "PNG", value: "png" },
  { label: "GIF", value: "gif" }
], Hi = [
  { label: "Excellent", value: "excellent" },
  { label: "Good", value: "good" },
  { label: "Fair", value: "fair" }
], Yi = [
  { label: "Original", value: "original" },
  { label: "Full HD", value: "full_hd", width: 1920 },
  { label: "Large", value: "large", width: 1200 },
  { label: "Medium", value: "medium", width: 600 },
  { label: "Small", value: "small", width: 300 }
], Wi = {
  webp: "awebp,webp",
  jpeg: "jpeg",
  png: "png",
  gif: "agif,gif"
}, Xi = /* @__PURE__ */ new Set([
  "jpg",
  "jpeg",
  "png",
  "gif",
  "webp",
  "svg",
  "bmp",
  "ico",
  "tiff",
  "tif",
  "avif",
  "heic",
  "heif",
  "psd",
  "eps"
]), Zi = /* @__PURE__ */ new Set([
  ...Xi,
  "pdf",
  "psd",
  "eps",
  "ai",
  "ttf",
  "otf",
  "woff",
  "woff2",
  "eot"
]);
function ft(t) {
  if (!t) return "other";
  const e = {
    image: "image",
    video: "video",
    audio: "audio",
    application: "document",
    font: "font",
    text: "document"
  };
  return e[t] ? e[t] : t.startsWith("image/") ? "image" : t.startsWith("video/") ? "video" : t.startsWith("audio/") ? "audio" : t.startsWith("application/pdf") || t.startsWith("text/") || t.startsWith("application/msword") || t.startsWith("application/vnd.") ? "document" : t.startsWith("application/zip") || t.startsWith("application/x-rar") || t.startsWith("application/x-7z") || t.startsWith("application/gzip") ? "archive" : t.startsWith("font/") ? "font" : "other";
}
function Js(t) {
  const e = (t == null ? void 0 : t.toLowerCase().replace(".", "")) || "";
  return Zi.has(e);
}
function ns(t) {
  if (!t) return "";
  const e = t.split("/");
  return e.length > 1 ? e[1] : e[0];
}
const Ji = /* @__PURE__ */ new Set(["png", "svg", "webp", "gif", "avif"]);
function ks(t) {
  const e = (t == null ? void 0 : t.toLowerCase().replace(".", "")) || "";
  return Ji.has(e);
}
const er = /* @__PURE__ */ new Set(["svg", "svg+xml", "png", "pdf"]);
function ei(t) {
  return er.has(ns(t).toLowerCase());
}
let ys = null;
function tr(t) {
  ys = t ?? null;
}
function Oe(t, e) {
  if (!t || !ys) return t;
  try {
    return ys(t, e) || t;
  } catch (s) {
    return console.warn("[asset-picker] transformRemoteThumbnail threw:", s), t;
  }
}
function ss(t) {
  var i;
  const e = t.info, s = (e == null ? void 0 : e.video_thumbnail) || (e == null ? void 0 : e.image_thumbnail) || (e == null ? void 0 : e.thumbnail) || (e == null ? void 0 : e.preview) || ((i = t.url) == null ? void 0 : i.cdn) || "";
  return Oe(it(s), { source: "asset", asset: t });
}
function ti(t) {
  const e = t.info, s = (e == null ? void 0 : e.video_thumbnail) || (e == null ? void 0 : e.image_thumbnail) || (e == null ? void 0 : e.thumbnail) || "";
  return s ? Oe(it(s), { source: "video", asset: t }) : "";
}
function Ss(t) {
  var s, i;
  let e = it(((s = t.url) == null ? void 0 : s.cdn) || ((i = t.url) == null ? void 0 : i.public) || "");
  return e ? (e = e.replace(/([?&])func=proxy&?/, "$1").replace(/[?&]$/, ""), Oe(
    Be(e, {
      w: "200",
      force_format: "webp,jpeg",
      doc_page: "1",
      bypass_process_proxy: "1"
    }),
    { source: "pdf", asset: t }
  )) : "";
}
function Be(t, e) {
  try {
    const s = new URL(t);
    for (const [i, r] of Object.entries(e))
      s.searchParams.set(i, r);
    return s.toString();
  } catch {
    return t;
  }
}
const Us = /^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\/(?:v\d+\/)?/i;
function it(t, e) {
  if (!t) return "";
  const s = (r) => r.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i, "$1/");
  if (t.includes("assets.filerobot.com")) return s(t);
  const i = t.match(Us);
  if (i) {
    const r = i[2], o = t.replace(Us, `$1assets.filerobot.com/${r}/`);
    return s(o);
  }
  if (e)
    try {
      const r = new URL(t);
      return s(
        `https://assets.filerobot.com/${e}${r.pathname}${r.search}`
      );
    } catch {
    }
  return t;
}
function si(t, e) {
  const s = t.file_uri_cdn;
  if (!s) return "";
  let i = it(s);
  const r = ft(t.file_type), o = String(window.devicePixelRatio || 1);
  let a;
  return r === "video" ? a = Be(i, { w: e, dpr: o, force_format: "webp,jpeg" }) : t.file_type === "application/pdf" || ns(t.file_type).toLowerCase() === "pdf" ? (i = i.replace(/([?&])func=proxy&?/, "$1").replace(/[?&]$/, ""), a = Be(i, {
    w: e,
    dpr: o,
    force_format: "webp,jpeg",
    doc_page: "1",
    bypass_process_proxy: "1"
  })) : a = Be(i, { w: e, dpr: o }), Oe(a, { source: "folder" });
}
function ii(t, e) {
  const s = {};
  return t.format && (s.force_format = Wi[t.format]), t.quality && t.format !== "png" && (s.q = String(Gi[t.quality])), t.width && (s.w = String(t.width)), t.height && (s.h = String(t.height)), (t.width || t.height) && (s.org_if_sml = "1", e != null && e.isMultiSelect ? s.func = "bound" : (e == null ? void 0 : e.isAspectLocked) === !1 && (s.func = "cover")), s;
}
function Qa(t, e, s) {
  const i = it(t);
  if (!i) return t;
  const r = ii(e, s);
  return Object.keys(r).length > 0 ? Be(i, r) : i;
}
const b = {
  TYPE: "type",
  MIME_TYPE: "mimetype",
  METADATA: "metadata",
  DATE: "date",
  APPROVAL: "approval",
  SIZE: "size",
  LICENSE_EXPIRY: "asset_expiration",
  TAGS: "tags",
  IMAGE: "image",
  LABELS: "labels",
  PRODUCT_REF: "product_ref",
  FACES: "faces",
  COLOR: "color"
}, C = {
  STATUS: "approval_status",
  APPROVER: "task_approver",
  REQUESTOR: "task_requester",
  DUE_DATE: "task_duedate"
}, E = {
  IS: ":",
  RANGE: "..",
  IS_NOT: ":-",
  IS_EXACT: ":=",
  CONTAINS_IN_TEXT: "~~~",
  GREATER_THAN_OR_EQUAL: ">=",
  LESS_THAN_OR_EQUAL: "<="
}, sr = {
  AND: "AND"
}, w = {
  NUMERIC: "numeric",
  SELECT_ONE: "select-one",
  MULTI_SELECT: "multi-select",
  TEXT_AREA: "textarea",
  TEXT: "text",
  SUPERTAGS: "tags",
  DATE: "date",
  BOOLEAN: "boolean",
  ATTACHMENTS_ASSETS: "attachments-assets",
  ATTACHMENT_URI: "attachment-uri",
  GEO_POINT: "geopoint",
  DECIMAL2: "decimal2",
  INTEGER_LIST: "integer-list"
}, cs = {
  [w.DATE]: "date_",
  [w.BOOLEAN]: "bool_",
  [w.NUMERIC]: "num_",
  [w.DECIMAL2]: "dec_",
  [w.ATTACHMENTS_ASSETS]: "attach_",
  [w.ATTACHMENT_URI]: "uri_",
  [w.SELECT_ONE]: "one_",
  [w.MULTI_SELECT]: "multi_",
  [w.SUPERTAGS]: "tags_",
  [w.TEXT]: "text_",
  [w.TEXT_AREA]: "area_",
  [w.GEO_POINT]: "geo_",
  [w.INTEGER_LIST]: "intlist_"
};
Object.fromEntries(
  Object.entries(cs).map(([t, e]) => [e, t])
);
const ri = Object.values(cs), $e = {
  PRESET: "preset",
  AFTER: "after",
  BEFORE: "before",
  BETWEEN: "between",
  SPECIFIC: "specific"
}, js = {
  EMPTY: "empty",
  NOT_EMPTY: "non-empty"
}, ue = "empty", fe = "non-empty", et = "specific", hs = 10, Pt = 10, Xt = 10, oi = "filters:pinned:", ai = "metadata:pinned:", Ks = [
  b.DATE,
  b.TYPE,
  b.SIZE
], li = E.IS, Jt = "20", es = "1", ir = 0, rr = [
  { key: b.DATE, labelKey: "filterDate", label: "Date", icon: "calendar", type: "date" },
  {
    key: b.TYPE,
    labelKey: "filterFormat",
    label: "Format",
    icon: "file-type",
    type: "string"
  },
  { key: b.SIZE, labelKey: "filterSize", label: "Size", icon: "scaling", type: "string" },
  {
    key: b.LICENSE_EXPIRY,
    labelKey: "filterLicenseExpiry",
    label: "License expiry",
    icon: "history",
    type: "date"
  },
  { key: b.TAGS, labelKey: "filterTags", label: "Tags", icon: "hash", type: "string" },
  {
    key: b.LABELS,
    labelKey: "filterLabels",
    label: "Labels",
    icon: "tag",
    type: "string"
  },
  {
    key: b.PRODUCT_REF,
    labelKey: "filterProducts",
    label: "Products",
    icon: "box",
    type: "string"
  },
  {
    key: b.IMAGE,
    labelKey: "filterImage",
    label: "Image",
    icon: "image",
    type: "string"
  },
  {
    key: b.COLOR,
    labelKey: "filterColor",
    label: "Color",
    icon: "swatch-book",
    type: "string"
  }
], or = {
  key: b.METADATA,
  labelKey: "filterMetadata",
  label: "Metadata",
  icon: "file-text",
  type: "string"
}, ar = {
  key: b.APPROVAL,
  labelKey: "filterApproval",
  label: "Approval",
  icon: "badge-check",
  type: "string"
}, zt = [
  or,
  ...rr,
  ar
], ut = {
  [b.TYPE]: "Format",
  [b.DATE]: "Date",
  [b.SIZE]: "Size",
  [b.LICENSE_EXPIRY]: "License expiry",
  [b.TAGS]: "Tags",
  [b.LABELS]: "Labels",
  [b.PRODUCT_REF]: "Products",
  [b.IMAGE]: "Image",
  [b.COLOR]: "Color",
  [b.METADATA]: "Metadata",
  [b.APPROVAL]: "Approval",
  [C.STATUS]: "Approval",
  [C.APPROVER]: "Approval",
  [C.REQUESTOR]: "Approval",
  [C.DUE_DATE]: "Approval"
}, Dt = {
  ...Object.fromEntries(zt.map((t) => [t.key, t.labelKey])),
  [C.STATUS]: "filterApproval",
  [C.APPROVER]: "filterApproval",
  [C.REQUESTOR]: "filterApproval",
  [C.DUE_DATE]: "filterApproval"
}, ae = {
  IMAGE: "image",
  VIDEO: "video",
  AUDIO: "audio",
  DOCUMENT: "document",
  ARCHIVE: "archive",
  DESIGN_TEMPLATE: "template_fdt",
  OTHER: "other",
  FONTS: "font"
}, is = [
  { value: ae.IMAGE, labelKey: "assetTypeImage", label: "Image", icon: "image" },
  { value: ae.VIDEO, labelKey: "assetTypeVideo", label: "Video", icon: "clapperboard" },
  { value: ae.AUDIO, labelKey: "assetTypeAudio", label: "Audio", icon: "music" },
  {
    value: ae.DOCUMENT,
    labelKey: "assetTypeDocument",
    label: "Document",
    icon: "document"
  },
  { value: ae.ARCHIVE, labelKey: "assetTypeArchive", label: "Archive", icon: "archive" },
  {
    value: ae.DESIGN_TEMPLATE,
    labelKey: "assetTypeDesignTemplate",
    label: "Design template",
    icon: "layout-template"
  },
  { value: ae.FONTS, labelKey: "assetTypeFonts", label: "Fonts", icon: "text" },
  { value: ae.OTHER, labelKey: "assetTypeOther", label: "Other", icon: "layout-grid" }
], lr = {
  [ae.IMAGE]: [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "webp",
    "svg",
    "bmp",
    "ico",
    "tiff",
    "tif",
    "avif",
    "heic",
    "heif",
    "psd",
    "eps"
  ],
  [ae.VIDEO]: ["mp4", "webm", "ogg", "mov", "avi", "mkv", "flv", "wmv", "m4v"],
  [ae.AUDIO]: ["mp3", "wav", "ogg", "flac", "aac", "wma", "m4a", "opus"],
  [ae.DOCUMENT]: [
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "txt",
    "csv",
    "rtf",
    "odt",
    "ods",
    "odp",
    "html"
  ],
  [ae.ARCHIVE]: ["zip", "rar", "7z", "tar", "gz", "bz2", "xz"],
  [ae.FONTS]: ["ttf", "otf", "woff", "woff2", "eot"]
}, us = {
  RESOLUTION: 0,
  ORIENTATION: 1,
  FACES: 2
}, nr = [
  { value: "small", label: "Small", labelKey: "resolutionSmall" },
  { value: "medium", label: "Medium", labelKey: "resolutionMedium" },
  { value: "large", label: "Large", labelKey: "resolutionLarge" }
], cr = [
  { value: "portrait", label: "Portrait", labelKey: "orientationPortrait" },
  { value: "landscape", label: "Landscape", labelKey: "orientationLandscape" },
  { value: "square", label: "Square", labelKey: "orientationSquare" },
  { value: "panorama", label: "Panorama", labelKey: "orientationPanorama" }
], dr = [
  { value: "none", label: "None", labelKey: "facesNone" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3..", label: "3+" }
], ni = [
  { value: "created", label: "Created at", labelKey: "createdAt" },
  { value: "updated", label: "Updated at", labelKey: "updatedAt" }
], Cs = [
  { value: "today", label: "Today", labelKey: "today" },
  { value: "before", label: "Before date", labelKey: "beforeDate" },
  { value: "last_week", label: "Last week", labelKey: "lastWeek" },
  { value: "after", label: "After date", labelKey: "afterDate" },
  { value: "last_month", label: "Last month", labelKey: "lastMonth" },
  { value: "between", label: "Between dates", labelKey: "betweenDates" },
  { value: "last_year", label: "Last year", labelKey: "lastYear" }
], ci = [
  { value: "today", label: "Today", labelKey: "today" },
  { value: "before", label: "Before date", labelKey: "beforeDate" },
  { value: "within_week", label: "Within week", labelKey: "withinWeek" },
  { value: "after", label: "After date", labelKey: "afterDate" },
  { value: "within_month", label: "Within month", labelKey: "withinMonth" },
  { value: "between", label: "Between dates", labelKey: "betweenDates" },
  { value: "within_year", label: "Within year", labelKey: "withinYear" },
  { value: "specific", label: "Specific date", labelKey: "specificDate" }
], di = [
  { value: "today", label: "Today", labelKey: "today" },
  { value: "before", label: "Before date", labelKey: "beforeDate" },
  { value: "within_week", label: "Within week", labelKey: "withinWeek" },
  { value: "after", label: "After date", labelKey: "afterDate" },
  { value: "within_month", label: "Within month", labelKey: "withinMonth" },
  { value: "between", label: "Between dates", labelKey: "betweenDates" },
  { value: "within_year", label: "Within year", labelKey: "withinYear" },
  { value: "specific", label: "Specific date", labelKey: "specificDate" }
], pr = [
  "#ffffff",
  "#99a1af",
  "#000000",
  "#894b00",
  "#e7000b",
  "#ff8904",
  "#fdc700",
  "#9ae600",
  "#008236",
  "#00bcff",
  "#1447e6",
  "#7f22fe",
  "#e60076"
], hr = [
  { label: "None (Exact)", value: "0", labelKey: "colorDiffNone" },
  { label: "Small", value: "1", labelKey: "colorDiffSmall" },
  { label: "Medium", value: "2", labelKey: "colorDiffMedium" },
  { label: "Large", value: "4", labelKey: "colorDiffLarge" }
], fs = [
  { label: "Is", value: E.IS, labelKey: "operatorIs" },
  { label: "Contains", value: E.CONTAINS_IN_TEXT, labelKey: "operatorContains" }
], Ke = [
  { label: "Is", value: E.IS, labelKey: "operatorIs" },
  { label: "Is not", value: E.IS_NOT, labelKey: "operatorIsNot" }
], gs = [
  { label: "Is", value: E.IS_EXACT, labelKey: "operatorIs" },
  { label: "Contains", value: E.IS, labelKey: "operatorContains" },
  { label: "Does not contain", value: E.IS_NOT, labelKey: "operatorDoesNotContain" }
], vs = [
  { label: "Is", value: E.IS, labelKey: "operatorIs" },
  {
    label: "Greater than",
    value: E.GREATER_THAN_OR_EQUAL,
    labelKey: "operatorGreaterThan"
  },
  { label: "Is not", value: E.IS_NOT, labelKey: "operatorIsNot" },
  { label: "Less than", value: E.LESS_THAN_OR_EQUAL, labelKey: "operatorLessThan" },
  { label: "Between", value: E.RANGE, labelKey: "operatorBetween" }
], Bs = [
  { label: "Is", value: E.IS_EXACT, labelKey: "operatorIs" },
  { label: "Is not", value: E.IS_NOT, labelKey: "operatorIsNot" }
], ur = [
  {
    value: "APPROVED",
    label: "Approved",
    labelKey: "approved",
    icon: "circle-check-big",
    iconColor: "var(--sfx-success, oklch(0.637 0.17 151.295))"
  },
  {
    value: "PENDING",
    label: "Pending",
    labelKey: "pending",
    icon: "clock",
    iconColor: "var(--sfx-warning, oklch(0.734 0.157 69.419))"
  },
  {
    value: "REJECTED",
    label: "Rejected",
    labelKey: "rejected",
    icon: "x-circle",
    iconColor: "var(--sfx-destructive, oklch(0.577 0.215 27.325))"
  },
  {
    value: "CANCELLED",
    label: "Cancelled",
    labelKey: "cancelled",
    icon: "ban",
    iconColor: "var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"
  }
], rs = [
  { label: "Empty", value: ue, labelKey: "empty" },
  { label: "Not empty", value: fe, labelKey: "notEmpty" }
], fr = [
  ...rs,
  { label: "Specific", value: et, labelKey: "specific" }
], gr = [
  { label: "Empty", value: ue, labelKey: "empty" },
  { label: "Not empty", value: fe, labelKey: "notEmpty" },
  { label: "True", value: "true", labelKey: "boolTrue" },
  { label: "False", value: "false", labelKey: "boolFalse" }
], ts = {
  [w.DATE]: "calendar",
  [w.BOOLEAN]: "toggle-left",
  [w.NUMERIC]: "file-digit",
  [w.DECIMAL2]: "decimals-arrow-right",
  [w.ATTACHMENTS_ASSETS]: "paperclip",
  [w.ATTACHMENT_URI]: "link-2",
  [w.SELECT_ONE]: "circle-dot",
  [w.MULTI_SELECT]: "square-check",
  [w.SUPERTAGS]: "hash",
  [w.TEXT]: "text-initial",
  [w.TEXT_AREA]: "text-align-justify",
  [w.GEO_POINT]: "locate",
  [w.INTEGER_LIST]: "list-ordered"
}, vr = {
  [w.TEXT]: "text",
  [w.TEXT_AREA]: "text",
  [w.NUMERIC]: "number",
  [w.DECIMAL2]: "number",
  [w.BOOLEAN]: "boolean",
  [w.SELECT_ONE]: "select-one",
  [w.MULTI_SELECT]: "multi-select",
  [w.SUPERTAGS]: "tags",
  [w.DATE]: "date",
  [w.GEO_POINT]: "geo",
  [w.ATTACHMENTS_ASSETS]: "attachment",
  [w.ATTACHMENT_URI]: "attachment",
  [w.INTEGER_LIST]: "attachment"
};
async function mr(t) {
  var i;
  return (((i = (await t.get("/filters", {
    filter_by: "filetype",
    format: "list",
    limit: 200
  })).filters) == null ? void 0 : i.file_types) ?? []).map((r) => ({
    name: r.name,
    value: r.value,
    count: r.count,
    category: r.category ?? r.value.split("_")[0],
    label: br(r.name)
  }));
}
function br(t) {
  const e = t.indexOf("›");
  return (e !== -1 ? t.slice(e + 1).trim() : t).toUpperCase();
}
async function xr(t) {
  var m, k;
  const e = await t.get("/settings"), s = e.settings ?? e, i = (s == null ? void 0 : s.metadata) ?? e.metadata, o = ((i == null ? void 0 : i.model) ?? [])[ir], a = i == null ? void 0 : i.store, c = ((a == null ? void 0 : a.regional_variants_groups) ?? []).map((_) => ({
    uuid: _.uuid,
    label: _.label ?? _.name ?? "",
    variants: (_.variants ?? []).map(($) => ({
      api_value: $.api_value ?? $.value ?? "",
      internal_unique_value: $.internal_unique_value ?? $.api_value ?? "",
      label: $.label ?? $.name ?? ""
    }))
  })).filter((_) => _.variants.length > 1), h = {};
  for (const _ of c)
    h[_.uuid] = ((m = _.variants[0]) == null ? void 0 : m.api_value) ?? "";
  const u = (s == null ? void 0 : s.project_branding) ?? ((k = e.settings) == null ? void 0 : k.project_branding), f = u == null ? void 0 : u.brandColor;
  if (!o) return { fields: [], regionalVariantGroups: c, regionalFilters: h, brandColor: f };
  const p = o.groups ?? [], v = [];
  for (const _ of p) {
    const $ = _.name || "";
    for (const y of _.fields ?? []) {
      const I = y.possible_values, N = I == null ? void 0 : I.map((F) => ({
        api_value: F.api_value ?? F.value ?? "",
        internal_unique_value: F.internal_unique_value ?? F.api_value ?? "",
        label: F.label ?? F.name ?? F.api_value ?? ""
      }));
      v.push({
        // Use field.key (not ckey) — this is what a.meta uses as keys
        key: y.key ?? y.ckey,
        label: y.title ?? y.label ?? y.key ?? "",
        type: y.type ?? "text",
        slug: y.slug,
        ckey: y.ckey,
        possible_values: N,
        group: $,
        regionalVariantsGroupUuid: y.regional_variants_group_uuid
      });
    }
  }
  return { fields: v, regionalVariantGroups: c, regionalFilters: h, brandColor: f };
}
function tt(t) {
  return t.toLocaleDateString("en-CA");
}
function Zt() {
  return tt(/* @__PURE__ */ new Date());
}
function Fs(t) {
  const e = /* @__PURE__ */ new Date();
  switch (t) {
    case "today":
      return {
        from: Zt(),
        to: null
      };
    case "last_week": {
      const s = new Date(e);
      return s.setDate(s.getDate() - 7), { from: tt(s), to: null };
    }
    case "within_week": {
      const s = new Date(e);
      return s.setDate(s.getDate() + 7), { from: Zt(), to: tt(s) };
    }
    case "last_month": {
      const s = new Date(e);
      return s.setDate(s.getDate() - 30), { from: tt(s), to: null };
    }
    case "within_month": {
      const s = new Date(e);
      return s.setDate(s.getDate() + 30), { from: Zt(), to: tt(s) };
    }
    case "last_year": {
      const s = new Date(e);
      return s.setDate(s.getDate() - 365), { from: tt(s), to: null };
    }
    case "within_year": {
      const s = new Date(e);
      return s.setDate(s.getDate() + 365), { from: Zt(), to: tt(s) };
    }
    default:
      return null;
  }
}
function Vs(t, e) {
  return e ? e.type === "date" ? _r(e) : e.type === "string" ? yr(e) : !0 : !1;
}
function _r(t) {
  return !(!t.kind && !t.preset || t.kind === "preset" && !t.preset || t.kind === "between" && !t.from && !t.to || t.kind === "after" && !t.from || t.kind === "before" && !t.to || t.kind === "specific" && !t.from || t.from && t.to && new Date(t.from) > new Date(t.to));
}
function yr(t) {
  return !t.values || !Array.isArray(t.values) ? !1 : t.values.filter(Boolean).length > 0;
}
function $r(t, e = {}) {
  const s = [];
  for (const [i, r] of Object.entries(t)) {
    if (!r || !Vs(i, r)) continue;
    const o = kr(i, r);
    s.push(...o);
  }
  for (const [i, r] of Object.entries(e)) {
    if (!r || !Vs(i, r)) continue;
    const o = Ir(i, r);
    s.push(...o);
  }
  return wr(s);
}
function wr(t) {
  const e = [], s = [], i = [];
  for (const r of t)
    r.startsWith("type:") || r.startsWith("type=") ? e.push(r) : r.startsWith("mimetype:") || r.startsWith("mimetype=") ? s.push(r) : i.push(r);
  if (e.length > 0 && s.length > 0) {
    const r = [...e, ...s].join(" , ");
    i.push(r);
  } else
    i.push(...e, ...s);
  return i;
}
function kr(t, e) {
  if (e.type === "date")
    return pi(t, e);
  if (t === b.IMAGE)
    return Tr(e);
  const s = e, { operator: i = li, values: r = [], logic: o } = s;
  if (r.length === 0) return [];
  switch (t) {
    case b.SIZE:
      return Sr(t, r, "..");
    case b.FACES:
      return Cr(t, i, r);
    case b.TAGS:
      return st(t, i, qs(r), ",", o);
    case b.LABELS:
      return st(t, i, qs(r), ",", o);
    case b.COLOR:
      return Fr(i, r, o);
    case b.TYPE:
      return Ar(r, i);
    case b.MIME_TYPE:
      return Er(t, r, i);
    case b.PRODUCT_REF:
      return st(t, "=%", r, ",", o);
    default:
      return st(t, i, r, ",", o);
  }
}
function pi(t, e) {
  const s = e.field || "created";
  if (e.kind === $e.PRESET && e.preset) {
    if (e.preset === js.EMPTY)
      return [`${s}:"empty"`];
    if (e.preset === js.NOT_EMPTY)
      return [`${s}:"non-empty"`];
    const i = Fs(e.preset);
    return i ? i.to === null ? [`${s}>"${i.from}"`] : [`${s}:"${i.from}..${i.to}"`] : [];
  }
  if (e.kind === $e.AFTER && e.from)
    return [`${s}:>"${e.from}"`];
  if (e.kind === $e.BEFORE && e.to)
    return [`${s}:<"${e.to}"`];
  if (e.kind === $e.BETWEEN) {
    if (e.from && e.to)
      return [`${s}:"${e.from}..${e.to}"`];
    if (e.from && !e.to)
      return [`${s}:>"${e.from}"`];
    if (!e.from && e.to)
      return [`${s}:<"${e.to}"`];
  }
  return e.kind === $e.SPECIFIC && e.from ? [`${s}:"${e.from}"`] : [];
}
function Sr(t, e, s) {
  return e.length === 0 ? [] : [`${t}:"${e.join(s)}"`];
}
function Cr(t, e, s) {
  return s.length === 0 ? [] : [`${t}${e}"${s.join(",")}"`];
}
function st(t, e, s, i, r) {
  if (s.length === 0) return [];
  if (r === sr.AND)
    return s.map((a) => `${t}${e}"${a}"`);
  const o = s.map((a) => `"${a}"`).join(i);
  return [`${t}${e}${o}`];
}
function Fr(t, e, s) {
  const i = [], r = st("color_search", t, e, ",", s);
  return i.push(...r), i.push('color_operator:"AND"'), i;
}
function Ar(t, e) {
  if (t.length === 0) return [];
  const s = /* @__PURE__ */ new Set(), i = [];
  for (const o of t) {
    const a = lr[o];
    if (a)
      for (const n of a) {
        const c = `${o}_${n}`;
        s.has(c) || (s.add(c), i.push(c));
      }
    else s.has(o) || (s.add(o), i.push(o));
  }
  const r = i.map((o) => `"${o}"`).join(",");
  return [`type${e}${r}`];
}
function Er(t, e, s, i) {
  if (e.length === 0) return [];
  const r = e.map((o) => `"${o}"`).join(",");
  return [`${t}${s}${r}`];
}
function Tr(t) {
  const e = [];
  if (typeof t == "object" && t !== null && !Array.isArray(t)) {
    const a = t, n = a.resolution, c = a.orientation, h = a.faces;
    return n != null && n.length && e.push(`resolution:"${n.join(",")}"`), c != null && c.length && e.push(`orientation:"${c.join(",")}"`), h != null && h.length && e.push(`faces:"${h.join(",")}"`), e;
  }
  const s = t, i = s[us.RESOLUTION], r = s[us.ORIENTATION], o = s[us.FACES];
  return i && e.push(`resolution:"${i}"`), r && e.push(`orientation:"${r}"`), o && e.push(`faces:"${o}"`), e;
}
function Ir(t, e) {
  const s = Pr(t), i = Or(t);
  if (e.type === "date")
    return Lr(s, e, i);
  const r = e, { operator: o = li, values: a = [], logic: n, metadataType: c } = r;
  if (a.length === 0) return [];
  if (a.length === 1 && (a[0] === ue || a[0] === fe)) {
    const h = c === w.GEO_POINT ? E.IS + "~" : E.IS;
    return [`${s}${h}"${a[0]}"`];
  }
  if ((c === w.NUMERIC || c === w.DECIMAL2) && o === E.RANGE)
    return [`${s}${E.IS}"${a.join('","')}"`];
  if (c === w.GEO_POINT) {
    const h = a.map((u) => {
      const f = u.indexOf("..");
      if (f === -1) return `(${u})`;
      const p = u.slice(0, f), v = u.slice(f);
      return `(${p})${v}`;
    });
    return st(s, o + "~", h, ",", n);
  }
  return st(s, o, a, ",", n);
}
function Lr(t, e, s) {
  const i = pi(t, e);
  return !s || i.length === 0 ? i : i.map((r) => {
    const o = r.search(/[^a-zA-Z0-9_]/);
    if (o === -1) return `"${r}"`;
    const a = r.slice(0, o), c = r.slice(o).replace(/"/g, "");
    return `"${a}${c}"`;
  });
}
function Or(t) {
  return t.startsWith("date_");
}
function Pr(t) {
  for (const e of ri)
    if (t.startsWith(e))
      return t.slice(e.length);
  return t;
}
function qs(t) {
  return t.map((e) => e.replace(/#/g, ""));
}
const Dr = /* @__PURE__ */ new Set([
  b.DATE,
  b.LICENSE_EXPIRY,
  C.DUE_DATE
]), zr = {
  [b.DATE]: "created",
  [b.LICENSE_EXPIRY]: b.LICENSE_EXPIRY,
  [C.DUE_DATE]: C.DUE_DATE
};
function $s(t) {
  if (!t) return {};
  const e = {};
  for (const [s, i] of Object.entries(t))
    i && (e[s] = Mr(s, i));
  return e;
}
function Mr(t, e) {
  return e.type === "string" || e.type === "date" ? e : Dr.has(t) ? {
    type: "date",
    field: e.field ?? zr[t] ?? "created",
    kind: e.kind ?? null,
    preset: e.preset ?? null,
    from: e.from ?? null,
    to: e.to ?? null
  } : {
    type: "string",
    values: e.values,
    ...e.operator !== void 0 && { operator: e.operator },
    ...e.logic !== void 0 && { logic: e.logic }
  };
}
function Rr(t) {
  const e = localStorage.getItem(oi + t), s = localStorage.getItem(ai + t);
  let i;
  try {
    i = e ? JSON.parse(e) : [...Ks];
  } catch {
    i = [...Ks];
  }
  let r;
  try {
    r = s ? JSON.parse(s) : [];
  } catch {
    r = [];
  }
  return { pinnedFilters: i, pinnedMetadata: r };
}
function Nr(t, e) {
  localStorage.setItem(oi + t, JSON.stringify(e));
}
function Ur(t, e) {
  localStorage.setItem(ai + t, JSON.stringify(e));
}
const hi = "sort-by", ui = "sort-order";
function Gs(t, e) {
  try {
    localStorage.setItem(hi, t), localStorage.setItem(ui, e);
  } catch {
  }
}
function jr() {
  try {
    const t = localStorage.getItem(hi), e = localStorage.getItem(ui);
    return { sortBy: t, sortDirection: e };
  } catch {
    return { sortBy: null, sortDirection: null };
  }
}
const fi = "ap-last-folder", gi = "ap-last-view", vi = "ap-last-tab";
function vt(t, e) {
  return e ? `${t}:${e}` : t;
}
function Qs(t, e) {
  try {
    localStorage.setItem(vt(fi, e), t);
  } catch {
  }
}
function Kr(t) {
  try {
    return localStorage.getItem(vt(fi, t));
  } catch {
    return null;
  }
}
function Br(t, e) {
  try {
    localStorage.setItem(vt(gi, e), t);
  } catch {
  }
}
function Vr(t) {
  try {
    return localStorage.getItem(vt(gi, t));
  } catch {
    return null;
  }
}
function qr(t, e) {
  try {
    localStorage.setItem(vt(vi, e), t);
  } catch {
  }
}
function Gr(t) {
  try {
    const e = localStorage.getItem(vt(vi, t));
    return e === "assets" || e === "folders" || e === "labels" || e === "collections" ? e : null;
  } catch {
    return null;
  }
}
const As = [
  { value: "name", labelKey: "sortName", label: "Name" },
  { value: "created_at", labelKey: "sortUploaded", label: "Uploaded" },
  { value: "modified_at", labelKey: "sortModified", label: "Modified" },
  { value: "size", labelKey: "sortSize", label: "Size" },
  { value: "type", labelKey: "sortFormat", label: "Format" }
], Qr = [
  { value: "relevance", labelKey: "sortRelevance", label: "Relevance" },
  ...As
], Hr = [
  { value: "name", labelKey: "sortName", label: "Name" },
  { value: "created_at", labelKey: "sortUploaded", label: "Uploaded" },
  { value: "modified_at", labelKey: "sortModified", label: "Modified" },
  { value: "files_count_recursive", labelKey: "sortAssetsCount", label: "Assets count" },
  { value: "files_size_recursive", labelKey: "sortAssetsSize", label: "Assets size" }
], Yr = [
  { value: "name", labelKey: "sortName", label: "Name" }
], Wr = [
  { value: "name", labelKey: "sortName", label: "Name" },
  { value: "created_at", labelKey: "sortUploaded", label: "Uploaded" },
  { value: "updated_at", labelKey: "sortModified", label: "Modified" }
], Xr = [
  { value: "name", labelKey: "sortName", label: "Name" }
];
var Zr = Object.defineProperty, Jr = Object.getOwnPropertyDescriptor, Es = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Jr(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Zr(e, s, r), r;
};
let Mt = class extends L {
  constructor() {
    super(...arguments), this.open = !1;
  }
  updated(t) {
    var e;
    super.updated(t), t.has("open") && (this.open ? this.dialog && !this.dialog.open && this.dialog.showModal() : (e = this.dialog) != null && e.open && this._animateClose());
  }
  _animateClose() {
    const t = this.dialog;
    if (t) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        t.close();
        return;
      }
      t.classList.add("closing"), t.addEventListener(
        "animationend",
        () => {
          t.classList.remove("closing"), t.close();
        },
        { once: !0 }
      );
    }
  }
  _handleBackdropClick(t) {
    t.target === this.dialog && this.dispatchEvent(
      new CustomEvent("ap-cancel", {
        detail: { reason: "backdrop" },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleCancel(t) {
    t.preventDefault(), this.dispatchEvent(
      new CustomEvent("ap-cancel", { detail: { reason: "escape" }, bubbles: !0, composed: !0 })
    );
  }
  render() {
    return l`
      <dialog @click=${this._handleBackdropClick} @cancel=${this._handleCancel}>
        <div class="modal-body">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </dialog>
    `;
  }
};
Mt.styles = T`
    :host {
      display: contents;
    }
    dialog:not([open]) {
      display: none;
    }
    dialog {
      position: fixed;
      inset: 0;
      width: 100%;
      max-width: var(--sfx-modal-max-width, 1200px);
      height: var(--sfx-modal-height, 85vh);
      max-height: var(--sfx-modal-max-height, 85vh);
      margin: auto;
      padding: 0;
      border: none;
      border-radius: var(--sfx-modal-radius, 12px);
      box-shadow: var(--sfx-modal-shadow, 0 25px 50px -12px rgb(0 0 0 / 0.25));
      background: var(--sfx-background, oklch(1 0 0));
      overflow: hidden;
      display: flex;
      flex-direction: column;
      font-family: var(--sfx-font-family, system-ui, -apple-system, sans-serif);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    dialog[open] {
      animation: ap-modal-in 200ms ease-out;
    }
    dialog.closing {
      animation: ap-modal-out 150ms ease-in forwards;
    }
    dialog::backdrop {
      background: var(--sfx-modal-backdrop, rgba(0, 0, 0, 0.5));
      animation: ap-backdrop-in 200ms ease-out;
    }
    @keyframes ap-modal-in {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes ap-modal-out {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0.95);
      }
    }
    @keyframes ap-backdrop-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: var(--sfx-modal-max-height, 85vh);
      overflow: hidden;
    }
    .modal-header {
      flex-shrink: 0;
    }
    .modal-content {
      flex: 1;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .modal-footer {
      flex-shrink: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      dialog[open],
      dialog::backdrop,
      dialog.closing {
        animation: none;
      }
    }
  `;
Es([
  d({ type: Boolean })
], Mt.prototype, "open", 2);
Es([
  lt("dialog")
], Mt.prototype, "dialog", 2);
Mt = Es([
  P("ap-modal")
], Mt);
const xe = T`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
var eo = Object.defineProperty, to = Object.getOwnPropertyDescriptor, Qt = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? to(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && eo(e, s, r), r;
};
let rt = class extends L {
  constructor() {
    super(...arguments), this.groups = [], this.selectedFilters = {}, this.t = (t, e) => typeof e == "string" ? e : t, this._open = !1, this._handleOutsideClick = (t) => {
      this._open && !t.composedPath().includes(this) && (this._open = !1);
    };
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", this._handleOutsideClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._handleOutsideClick);
  }
  _selectVariant(t, e) {
    this.dispatchEvent(
      new CustomEvent("regional-change", {
        detail: { groupUuid: t, value: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const t = this.groups.length > 0;
    return l`
      <button
        class="trigger ${this._open ? "active" : ""}"
        @click=${() => this._open = !this._open}
        aria-label=${this.t("regionalSettings", "Regional settings")}
        title=${this.t("regionalSettings", "Regional settings")}
      >
        <sfx-icon name="globe" .size=${18}></sfx-icon>
      </button>
      <div class="popover ${this._open ? "open" : ""}">
        ${t ? g : l`
              <div class="empty-msg">
                ${this.t("noRegionalSettings", "No regional settings configured")}
              </div>
            `}
        ${this.groups.map(
      (e) => l`
            <div class="group">
              <div class="group-label">${e.label}</div>
              ${e.variants.map((s) => {
        const i = this.selectedFilters[e.uuid] === s.api_value;
        return l`
                  <button
                    class="variant-option"
                    ?data-selected=${i}
                    @click=${() => this._selectVariant(e.uuid, s.api_value)}
                  >
                    <span class="variant-label">${s.label}</span>
                    <span class="check-mark"
                      >${i ? l`<sfx-icon name="check" .size=${14}></sfx-icon>` : ""}</span
                    >
                  </button>
                `;
      })}
            </div>
          `
    )}
      </div>
    `;
  }
};
rt.styles = T`
    :host {
      position: relative;
      display: inline-block;
    }
    .trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .trigger:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .trigger.active {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .popover {
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      z-index: 50;
      min-width: 220px;
      max-height: 320px;
      overflow-y: auto;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
      padding: 0;
    }
    .popover.open {
      display: block;
    }
    .group {
      padding: 4px 0;
    }
    .group + .group {
      border-top: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .group-label {
      padding: 6px 12px 8px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .variant-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
      padding: 6px 16px 6px 24px;
      border: none;
      background: none;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-family: inherit;
      text-align: left;
      cursor: pointer;
      border-radius: 0;
    }
    .variant-label {
      flex: 1;
    }
    .variant-option:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .variant-option[data-selected] {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      font-weight: 400;
    }
    .check-mark {
      width: 16px;
      flex-shrink: 0;
    }
    .empty-msg {
      padding: 12px;
      font-size: 0.8125rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;
Qt([
  d({ type: Array })
], rt.prototype, "groups", 2);
Qt([
  d({ type: Object })
], rt.prototype, "selectedFilters", 2);
Qt([
  d({ attribute: !1 })
], rt.prototype, "t", 2);
Qt([
  x()
], rt.prototype, "_open", 2);
rt = Qt([
  P("ap-regional-settings")
], rt);
var so = Object.defineProperty, io = Object.getOwnPropertyDescriptor, se = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? io(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && so(e, s, r), r;
};
const ro = [
  { value: "assets", labelKey: "tabAssets", labelDefault: "Assets", icon: "gallery-vertical-end" },
  { value: "folders", labelKey: "tabFolders", labelDefault: "Folders", icon: "folder-open" },
  { value: "labels", labelKey: "tabLabels", labelDefault: "Labels", icon: "tag" },
  {
    value: "collections",
    labelKey: "tabCollections",
    labelDefault: "Collections",
    icon: "layout-grid"
  }
];
let H = class extends L {
  constructor() {
    super(...arguments), this.activeTab = "assets", this.tabs = ["assets", "folders"], this.isInsideLabel = !1, this.isInsideCollection = !1, this.isInsideCollectionLeaf = !1, this.viewMode = "grid", this.searchQuery = "", this.regionalGroups = [], this.regionalFilters = {}, this.hideClose = !1, this.enableAISearch = !1, this.isAISearchActive = !1, this.t = (t, e) => typeof e == "string" ? e : t, this._localSearch = "", this._debouncedSearch = $i((t) => {
      (t.length === 0 || t.length >= 3) && this.dispatchEvent(
        new CustomEvent("search-change", { detail: { value: t }, bubbles: !0, composed: !0 })
      );
    }, 300);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._debouncedSearch.cancel();
  }
  willUpdate(t) {
    t.has("searchQuery") && (this._localSearch = this.searchQuery);
  }
  _handleInput(t) {
    const e = t.target.value;
    this._localSearch = e, this._debouncedSearch(e);
  }
  _clearSearch() {
    this._localSearch = "", this._debouncedSearch.cancel(), this.dispatchEvent(
      new CustomEvent("search-change", { detail: { value: "" }, bubbles: !0, composed: !0 })
    );
  }
  _toggleView() {
    const t = this.viewMode === "grid" ? "list" : "grid";
    this.dispatchEvent(
      new CustomEvent("view-change", { detail: { mode: t }, bubbles: !0, composed: !0 })
    );
  }
  _handleTabChange(t) {
    this.dispatchEvent(
      new CustomEvent("tab-change", {
        detail: { tab: t.detail.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleRegionalChange(t) {
    this.dispatchEvent(
      new CustomEvent("regional-change", {
        detail: t.detail,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _toggleAISearch() {
    this.dispatchEvent(
      new CustomEvent("ai-search-toggle", {
        detail: { active: !this.isAISearchActive },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleClose() {
    this.dispatchEvent(new CustomEvent("ap-close", { bubbles: !0, composed: !0 }));
  }
  render() {
    const { t } = this, e = ro.filter((s) => this.tabs.includes(s.value)).map((s) => ({
      ...s,
      label: t(s.labelKey, s.labelDefault)
    }));
    return l`
      <div class="header-row">
        ${e.length > 1 ? l`<sfx-dropdown
              .value=${this.activeTab}
              .options=${e}
              @sfx-change=${this._handleTabChange}
            ></sfx-dropdown>` : g}
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${16}></sfx-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive ? this.activeTab === "folders" ? t("aiSearchFoldersPlaceholder", "AI search folders and assets") : t("aiSearchAssetsPlaceholder", "AI search assets") : this.activeTab === "labels" && !this.isInsideLabel ? t("searchLabelsPlaceholder", "Search labels") : this.activeTab === "collections" && !this.isInsideCollection ? t("searchCollectionsPlaceholder", "Search collections") : this.activeTab === "collections" && this.isInsideCollection && !this.isInsideCollectionLeaf ? t("searchCollectionFoldersPlaceholder", "Search collection folders") : this.activeTab === "folders" ? t("searchFoldersPlaceholder", "Search folders and assets") : t("searchAssetsPlaceholder", "Search assets")}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch ? l`
                  <button
                    class="clear-btn"
                    @click=${this._clearSearch}
                    aria-label=${t("clearSearch", "Clear search")}
                  >
                    <sfx-icon name="close" .size=${14}></sfx-icon>
                  </button>
                ` : ""}
            ${this.enableAISearch ? l`
                  <button
                    class="ai-toggle ${this.isAISearchActive ? "active" : ""}"
                    @click=${this._toggleAISearch}
                    aria-label=${this.isAISearchActive ? t("disableAISearch", "Disable AI search") : t("enableAISearch", "Enable AI search")}
                    title=${this.isAISearchActive ? t("aiSearchOn", "AI search on") : t("aiSearchOff", "AI search off")}
                  >
                    <sfx-icon name="sparkles" .size=${12}></sfx-icon>
                    <span>AI</span>
                  </button>
                ` : ""}
          </div>
        </div>
        <div class="actions">
          <ap-regional-settings
            .groups=${this.regionalGroups}
            .selectedFilters=${this.regionalFilters}
            .t=${t}
            @regional-change=${this._handleRegionalChange}
          ></ap-regional-settings>
          <button
            class="icon-btn"
            @click=${this._toggleView}
            aria-label=${this.viewMode === "grid" ? t("switchToListView", "Switch to list view") : t("switchToGridView", "Switch to grid view")}
            title=${this.viewMode === "grid" ? t("listView", "List view") : t("gridView", "Grid view")}
          >
            <sfx-icon
              name=${this.viewMode === "grid" ? "list" : "layout-grid"}
              .size=${18}
            ></sfx-icon>
          </button>
          ${this.hideClose ? g : l`
                <div class="divider"></div>
                <button
                  class="icon-btn icon-btn--muted"
                  @click=${this._handleClose}
                  aria-label=${t("close", "Close")}
                >
                  <sfx-icon name="close" .size=${18}></sfx-icon>
                </button>
              `}
        </div>
      </div>
    `;
  }
};
H.styles = [
  xe,
  T`
      :host {
        display: block;
        padding: 16px 20px;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }
      .header-row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .search-wrapper {
        flex: 1;
        min-width: 0;
        max-width: 548px;
        position: relative;
      }
      .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        pointer-events: none;
      }
      input {
        width: 100%;
        height: 36px;
        box-sizing: border-box;
        padding: 0 34px 0 38px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-background, oklch(1 0 0));
        outline: none;
      }
      input:hover {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      input:focus {
        border-color: var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
        box-shadow: 0 0 0 2px var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      }
      input:focus-visible {
        outline: none; /* already has focus ring via border-color + box-shadow */
      }
      input::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        font-weight: 400;
      }
      :host([ai-search]) input {
        padding-right: 90px;
      }
      .search-actions {
        position: absolute;
        right: 6px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        gap: 2px;
      }
      .clear-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border: none;
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        padding: 0;
      }
      .clear-btn:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .ai-toggle {
        display: flex;
        align-items: center;
        gap: 4px;
        height: 26px;
        padding: 0 8px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        font-size: 12px;
        font-weight: 500;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        cursor: pointer;
        white-space: nowrap;
      }
      .ai-toggle:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .ai-toggle.active {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: white;
        border-color: transparent;
      }
      .ai-toggle.active:hover {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: white;
        border-color: transparent;
        opacity: 0.9;
      }
      .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: 1px solid transparent;
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        cursor: pointer;
      }
      .icon-btn:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .icon-btn:focus-visible {
        outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
        outline-offset: -2px;
      }
      .tab-label {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        padding: 0 4px;
        white-space: nowrap;
      }
      .actions {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: auto;
      }
      .divider {
        width: 1px;
        height: 24px;
        background: var(--sfx-border, oklch(92.86% 0.009 247.92));
      }
      .icon-btn--muted {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
    `
];
se([
  d()
], H.prototype, "activeTab", 2);
se([
  d({ type: Array })
], H.prototype, "tabs", 2);
se([
  d({ type: Boolean })
], H.prototype, "isInsideLabel", 2);
se([
  d({ type: Boolean })
], H.prototype, "isInsideCollection", 2);
se([
  d({ type: Boolean })
], H.prototype, "isInsideCollectionLeaf", 2);
se([
  d()
], H.prototype, "viewMode", 2);
se([
  d()
], H.prototype, "searchQuery", 2);
se([
  d({ type: Array })
], H.prototype, "regionalGroups", 2);
se([
  d({ type: Object })
], H.prototype, "regionalFilters", 2);
se([
  d({ type: Boolean })
], H.prototype, "hideClose", 2);
se([
  d({ type: Boolean, reflect: !0, attribute: "ai-search" })
], H.prototype, "enableAISearch", 2);
se([
  d({ type: Boolean })
], H.prototype, "isAISearchActive", 2);
se([
  d({ attribute: !1 })
], H.prototype, "t", 2);
se([
  x()
], H.prototype, "_localSearch", 2);
H = se([
  P("ap-header")
], H);
var oo = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, Ts = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ao(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && oo(e, s, r), r;
};
let Rt = class extends L {
  constructor() {
    super(...arguments), this.title = "", this.open = !1;
  }
  render() {
    return this.open ? l`
      <div class="popover">
        ${this.title ? l`<div class="title">${this.title}</div>` : ""}
        <slot></slot>
      </div>
    ` : l``;
  }
};
Rt.styles = T`
    :host {
      display: block;
    }
    .popover {
      position: absolute;
      top: calc(100% + 4px);
      left: 20px;
      z-index: 50;
      width: 320px;
      max-height: 400px;
      overflow-y: auto;
      overscroll-behavior: contain;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .title {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 12px;
    }
  `;
Ts([
  d()
], Rt.prototype, "title", 2);
Ts([
  d({ type: Boolean })
], Rt.prototype, "open", 2);
Rt = Ts([
  P("ap-filter-popover")
], Rt);
var lo = Object.defineProperty, no = Object.getOwnPropertyDescriptor, mt = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? no(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && lo(e, s, r), r;
};
function Hs(t) {
  var i;
  const e = /* @__PURE__ */ new Map();
  for (const r of t) {
    const o = r.category || r.value.split("_")[0];
    if (!e.has(o)) {
      const n = is.find((c) => c.value === o);
      e.set(o, {
        key: o,
        labelKey: (n == null ? void 0 : n.labelKey) || o,
        label: (n == null ? void 0 : n.label) || o.charAt(0).toUpperCase() + o.slice(1),
        icon: (n == null ? void 0 : n.icon) || "file",
        extensions: [],
        totalCount: 0
      });
    }
    const a = e.get(o);
    a.extensions.push({
      value: r.value,
      label: r.label || ((i = r.value.split("_").pop()) == null ? void 0 : i.toUpperCase()) || r.value,
      count: r.count
    }), a.totalCount += r.count;
  }
  const s = is.map((r) => r.value);
  return [...e.values()].sort((r, o) => {
    const a = s.indexOf(r.key), n = s.indexOf(o.key);
    return (a === -1 ? 999 : a) - (n === -1 ? 999 : n);
  });
}
let Ve = class extends L {
  constructor() {
    super(...arguments), this.selected = [], this.fileTypes = [], this.t = (t, e) => typeof e == "string" ? e : t, this._search = "", this._expanded = /* @__PURE__ */ new Set();
  }
  // ── Selection helpers ───────────────────────────────────────────
  _extValues(t) {
    return t.extensions.map((e) => e.value);
  }
  _isGroupFullySelected(t) {
    if (this.selected.includes(t.key)) return !0;
    const e = this._extValues(t);
    return e.length > 0 && e.every((s) => this.selected.includes(s));
  }
  _isGroupPartial(t) {
    if (this.selected.includes(t.key)) return !1;
    const e = this._extValues(t), s = e.filter((i) => this.selected.includes(i)).length;
    return s > 0 && s < e.length;
  }
  _isExtSelected(t, e) {
    return this.selected.includes(e) || this.selected.includes(t);
  }
  // ── Toggle handlers ─────────────────────────────────────────────
  _toggleGroup(t) {
    const e = this._extValues(t), s = this._isGroupFullySelected(t);
    let i;
    if (s) {
      const r = /* @__PURE__ */ new Set([t.key, ...e]);
      i = this.selected.filter((o) => !r.has(o));
    } else {
      const r = new Set(e);
      i = this.selected.filter((o) => !r.has(o)), i.push(t.key);
    }
    this._emit(i);
  }
  _toggleExt(t, e) {
    const s = this._extValues(e);
    let i = [...this.selected];
    i.includes(e.key) && (i = i.filter((r) => r !== e.key), i.push(...s)), i.includes(t) ? i = i.filter((r) => r !== t) : (i.push(t), s.every((r) => i.includes(r)) && (i = i.filter((r) => !s.includes(r)), i.push(e.key))), this._emit(i);
  }
  _clearAll() {
    this._emit([]);
  }
  _emit(t) {
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: b.TYPE,
          values: t,
          operator: E.IS
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // ── Expand/collapse ─────────────────────────────────────────────
  _toggleExpand(t) {
    const e = new Set(this._expanded);
    e.has(t) ? e.delete(t) : e.add(t), this._expanded = e;
  }
  // ── Search filtering ────────────────────────────────────────────
  _filteredGroups(t) {
    const e = this._search.toLowerCase().trim();
    return e ? t.map((s) => {
      if (s.label.toLowerCase().includes(e) || s.key.toLowerCase().includes(e)) return s;
      const r = s.extensions.filter(
        (o) => o.label.toLowerCase().includes(e) || o.value.toLowerCase().includes(e)
      );
      return r.length === 0 ? null : { ...s, extensions: r };
    }).filter((s) => s !== null) : t;
  }
  // ── Fallback: flat category toggle (same as old behavior) ──────
  _toggleCategory(t) {
    const e = this.selected.includes(t) ? this.selected.filter((s) => s !== t) : [...this.selected, t];
    this._emit(e);
  }
  // ── Auto-expand groups with selections ─────────────────────────
  updated(t) {
    if (t.has("fileTypes") && this.fileTypes.length > 0) {
      const e = Hs(this.fileTypes), s = new Set(this._expanded);
      for (const i of e)
        (this._isGroupFullySelected(i) || this._isGroupPartial(i)) && s.add(i.key);
      this._expanded = s;
    }
  }
  // ── Render ──────────────────────────────────────────────────────
  render() {
    if (this.fileTypes.length === 0)
      return this._renderFallback();
    const t = Hs(this.fileTypes), e = this._filteredGroups(t), s = this.selected.length > 0;
    return l`
      <input
        class="search-input"
        type="text"
        .placeholder=${this.t("searchFormatsPlaceholder", "Search formats...")}
        .value=${this._search}
        @input=${(i) => {
      this._search = i.target.value;
    }}
      />
      <div class="header-row">
        <span class="section-label">${this.t("formats", "Formats")}</span>
        ${s ? l`<button class="clear-btn" @click=${this._clearAll}>
              ${this.t("clearAll", "Clear all")}
            </button>` : g}
      </div>
      <div class="groups">
        ${e.length === 0 && this._search.trim() ? l`<div class="no-results">${this.t("noFormatsFound", "No formats found")}</div>` : e.map((i) => this._renderGroup(i))}
      </div>
    `;
  }
  _renderGroup(t) {
    const e = this._expanded.has(t.key) || this._search.trim().length > 0, s = this._isGroupFullySelected(t), i = this._isGroupPartial(t);
    return l`
      <div
        class="group-header ${s || i ? "selected" : ""}"
        @click=${() => this._toggleExpand(t.key)}
      >
        <svg
          class="group-chevron ${e ? "expanded" : ""}"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        <sfx-icon name=${t.icon} size="16"></sfx-icon>
        <span class="group-label">${this.t(t.labelKey, t.label)}</span>
        <sfx-checkbox
          ?checked=${s}
          ?indeterminate=${i}
          @click=${(r) => r.stopPropagation()}
          @sfx-toggle=${() => this._toggleGroup(t)}
        ></sfx-checkbox>
      </div>
      ${e ? l`
            <div class="extensions">
              ${t.extensions.map(
      (r) => l`
                  <div class="ext-row" @click=${() => this._toggleExt(r.value, t)}>
                    <sfx-checkbox
                      ?checked=${this._isExtSelected(r.value, t.key)}
                      @click=${(o) => o.stopPropagation()}
                      @sfx-toggle=${() => this._toggleExt(r.value, t)}
                    ></sfx-checkbox>
                    <span class="ext-label">${r.label}</span>
                  </div>
                `
    )}
            </div>
          ` : g}
    `;
  }
  _renderFallback() {
    return l`
      <div class="options">
        <span class="section-label">${this.t("formats", "Formats")}</span>
        ${is.map(
      (t) => l`
            <div
              class="option ${this.selected.includes(t.value) ? "selected" : ""}"
              @click=${() => this._toggleCategory(t.value)}
            >
              <sfx-checkbox ?checked=${this.selected.includes(t.value)}></sfx-checkbox>
              <sfx-icon name=${t.icon} size="16"></sfx-icon>
              <span class="option-label">${t.label}</span>
            </div>
          `
    )}
      </div>
    `;
  }
};
Ve.styles = T`
    :host {
      display: block;
    }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .section-label {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: default;
    }

    .clear-btn {
      background: none;
      border: none;
      font-size: 0.75rem;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      padding: 2px 4px;
      border-radius: var(--sfx-radius-sm, 6px);
    }
    .clear-btn:hover {
      text-decoration: underline;
    }

    .search-input {
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      margin-bottom: 8px;
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: var(--sfx-radius-sm, 6px);
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      background: var(--sfx-background, oklch(1 0 0));
      outline: none;
    }
    .search-input:focus {
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .search-input::placeholder {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .groups {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .group-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--sfx-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
      user-select: none;
    }
    .group-header:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }

    .group-chevron {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      transition: transform 150ms;
    }
    .group-chevron.expanded {
      transform: rotate(90deg);
    }

    sfx-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .group-header.selected sfx-icon {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }

    .group-label {
      flex: 1;
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }

    .extensions {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding-left: 22px;
    }

    .ext-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 4px 8px;
      border-radius: var(--sfx-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .ext-row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }

    .ext-label {
      flex: 1;
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }

    /* Fallback flat list (no API data) */
    .options {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--sfx-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .option:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .option-label {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .option.selected sfx-icon {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }

    .no-results {
      padding: 12px;
      text-align: center;
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;
mt([
  d({ type: Array })
], Ve.prototype, "selected", 2);
mt([
  d({ type: Array })
], Ve.prototype, "fileTypes", 2);
mt([
  d({ attribute: !1 })
], Ve.prototype, "t", 2);
mt([
  x()
], Ve.prototype, "_search", 2);
mt([
  x()
], Ve.prototype, "_expanded", 2);
Ve = mt([
  P("ap-filter-type")
], Ve);
const Me = T`
  :host {
    display: block;
  }

  .filter-content {
    position: relative;
    padding: 0;
  }

  /* ── Clear all button ── */
  .clear-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 0;
    border: none;
    background: none;
    font-size: var(--sfx-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    cursor: pointer;
    opacity: 0.9;
  }
  .clear-btn:hover:not(:disabled) {
    opacity: 1;
    text-decoration: underline;
  }
  .clear-btn:disabled {
    opacity: 0.4;
    cursor: default;
  }

  /* ── Section label ── */
  .section-label {
    display: block;
    font-size: var(--sfx-font-size-sm, 0.875rem);
    font-weight: 400;
    color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
    margin-bottom: 8px;
    cursor: default;
  }

  /* ── Section header (label + clear-btn row) ── */
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .section-header .section-label {
    margin-bottom: 0;
  }
  .section-header .clear-btn {
    position: static;
  }

  /* ── Section spacing ── */
  .filter-section {
    position: relative;
    margin-bottom: 20px;
  }
  .filter-section:last-child {
    margin-bottom: 0;
  }

  /* ── Separator ── */
  .separator {
    height: 1px;
    background: var(--sfx-border, oklch(92.86% 0.009 247.92));
    margin: 16px 0;
  }

  /* ── Info alert ── */
  .info-alert {
    display: flex;
    gap: 8px;
    padding: 10px 12px;
    background: oklch(0.97 0.01 245);
    border: 1px solid oklch(0.92 0.015 245);
    border-radius: var(--sfx-radius-sm, 6px);
    font-size: 0.8125rem;
    color: var(--sfx-info-foreground, oklch(0.391 0.091 241.289));
    line-height: 1.4;
    margin-top: 16px;
  }
  .info-alert sfx-icon {
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--sfx-info, oklch(0.632 0.161 245.564));
  }

  /* ── Text/Number inputs ── */
  .filter-input {
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
    border-radius: var(--sfx-radius-sm, 6px);
    font-size: var(--sfx-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    background: var(--sfx-background, oklch(1 0 0));
    outline: none;
    transition: border-color 150ms;
  }
  .filter-input:focus {
    border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
  }
  .filter-input:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .filter-input::placeholder {
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    font-weight: 400;
  }

  /* ── Date input: Lucide calendar icon ── */
  .filter-input[type='date']::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .filter-input[type='date'] {
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px 16px;
    padding-right: 32px;
  }

  textarea.filter-input {
    min-height: 60px;
    resize: vertical;
  }

  /* ── Input label ── */
  .input-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
    margin-bottom: 4px;
  }
  .input-label[aria-disabled='true'] {
    opacity: 0.5;
  }

  /* ── Grid layouts ── */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  /* ── Removable chip ── */
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    border-radius: 9999px;
    font-size: 0.8125rem;
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    background: var(--sfx-background, oklch(1 0 0));
    max-width: 200px;
  }
  .chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .chip-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border: none;
    background: none;
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
  }
  .chip-remove:hover {
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
  }
  .chips-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* ── Error text ── */
  .error-text {
    font-size: 0.8125rem;
    color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
    margin-top: 4px;
  }

  /* ── Search input (flush with popover edges, like tags) ── */
  .search-wrapper {
    position: sticky;
    top: -10px;
    z-index: 2;
    background: var(--sfx-card, oklch(1 0 0));
    margin: -10px -8px 10px;
  }
  .search-wrapper .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    pointer-events: none;
  }
  .search-input {
    width: 100%;
    padding: 8px 32px 8px 32px;
    border: none;
    border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    border-radius: 0;
    font-size: var(--sfx-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    background: transparent;
    outline: none;
  }
  .search-input::placeholder {
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    font-weight: 400;
  }
  .search-clear {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
  }
  .search-clear:hover {
    color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
  }

  /* ── Options list (checkbox-based) ── */
  .options-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .options-list.short {
    max-height: none;
    overflow-y: visible;
  }
  .no-results {
    padding: 12px;
    text-align: center;
    font-size: var(--sfx-font-size-sm, 0.875rem);
    color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
  }
`;
var co = Object.defineProperty, po = Object.getOwnPropertyDescriptor, Qe = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? po(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && co(e, s, r), r;
};
function ms(t) {
  return t.toISOString().split("T")[0];
}
let Se = class extends L {
  constructor() {
    super(...arguments), this.filterKey = b.DATE, this.t = (t, e) => typeof e == "string" ? e : t, this.field = "created", this.kind = null, this.preset = "", this.from = "", this.to = "";
  }
  get _isLicenseExpiry() {
    return this.filterKey === b.LICENSE_EXPIRY;
  }
  get _rangeOptions() {
    return (this._isLicenseExpiry ? ci : Cs).map((e) => ({ ...e, label: this.t(e.labelKey, e.label) }));
  }
  get _fieldOptions() {
    return ni.map((t) => ({ ...t, label: this.t(t.labelKey, t.label) }));
  }
  get _todayStr() {
    return ms(/* @__PURE__ */ new Date());
  }
  get _hasFilter() {
    return !!(this.kind || this.preset || this.from || this.to);
  }
  /** Determine the DateKind from a preset/option value */
  _kindFromValue(t) {
    return ["before", "after", "between", "specific"].includes(t) ? t : "preset";
  }
  _selectField(t) {
    this.field = t, this._dispatchChange();
  }
  _selectPreset(t) {
    if (!t) {
      this._clearAll();
      return;
    }
    const e = this._kindFromValue(t);
    if (this.kind = e, this.preset = t, ["before", "after", "between", "specific"].includes(t)) {
      this.from = "", this.to = "", this.requestUpdate();
      return;
    }
    const s = Fs(t);
    s && (this.from = s.from, this.to = s.to ?? ""), this._dispatchChange();
  }
  _clearAll() {
    this.field = "created", this.kind = null, this.preset = "", this.from = "", this.to = "", this._dispatchChange();
  }
  _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: this.filterKey,
          values: {
            field: this.field,
            kind: this.kind,
            preset: this.preset,
            from: this.from,
            to: this.to
          }
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleDateInput(t, e) {
    const s = e.target.value, i = s ? (/* @__PURE__ */ new Date(s + "T00:00:00")).toISOString() : "";
    if (t === "from" ? this.from = i : this.to = i, this.preset === "specific" && t === "from" && i) {
      const r = /* @__PURE__ */ new Date(s + "T23:59:59");
      this.to = r.toISOString();
    }
    this.preset === "after" && t === "from" && i && (this.to = (/* @__PURE__ */ new Date()).toISOString()), this.preset === "before" && t === "to" && i && (this.from = (/* @__PURE__ */ new Date(0)).toISOString()), this._dispatchChange();
  }
  _renderDateTypeSection() {
    return this._isLicenseExpiry ? g : l`
      <div class="filter-section">
        <span class="section-label">${this.t("dateType", "Date type")}</span>
        <sfx-radio-group
          .options=${this._fieldOptions}
          .value=${this.field}
          @sfx-change=${(t) => this._selectField(t.detail.value)}
        ></sfx-radio-group>
      </div>
    `;
  }
  _renderRangeSection() {
    return l`
      <div class="filter-section">
        <span class="section-label">${this.t("dateRange", "Range")}</span>
        <sfx-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @sfx-change=${(t) => this._selectPreset(t.detail.value)}
        ></sfx-radio-group>
      </div>
    `;
  }
  _renderDateInputs() {
    const t = this.preset;
    if (!["before", "after", "between", "specific"].includes(t)) return g;
    const e = this.from ? ms(new Date(this.from)) : "", s = this.to ? ms(new Date(this.to)) : "", i = this._todayStr;
    return t === "specific" ? l`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("date", "Date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${e}
              @change=${(r) => this._handleDateInput("from", r)}
            />
          </div>
        </div>
      ` : t === "before" ? l`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("endDate", "End date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${s}
              @change=${(r) => this._handleDateInput("to", r)}
            />
          </div>
        </div>
      ` : t === "after" ? l`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("startDate", "Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${e}
              @change=${(r) => this._handleDateInput("from", r)}
            />
          </div>
        </div>
      ` : l`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">${this.t("startDate", "Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${s || i}
              .value=${e}
              @change=${(r) => this._handleDateInput("from", r)}
            />
          </div>
          <div>
            <span class="input-label">${this.t("endDate", "End date")}</span>
            <input
              type="date"
              class="filter-input"
              min=${e}
              max=${i}
              .value=${s}
              @change=${(r) => this._handleDateInput("to", r)}
            />
          </div>
        </div>
      </div>
    `;
  }
  render() {
    return l`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${() => this._clearAll()}>
          ${this.t("clearAll", "Clear all")}
        </button>
        ${this._renderDateTypeSection()} ${this._renderRangeSection()} ${this._renderDateInputs()}
      </div>
    `;
  }
};
Se.styles = [
  Me,
  T`
      .date-inputs {
        margin-top: 4px;
      }
    `
];
Qe([
  d()
], Se.prototype, "filterKey", 2);
Qe([
  d({ attribute: !1 })
], Se.prototype, "t", 2);
Qe([
  d()
], Se.prototype, "field", 2);
Qe([
  d()
], Se.prototype, "kind", 2);
Qe([
  d()
], Se.prototype, "preset", 2);
Qe([
  d()
], Se.prototype, "from", 2);
Qe([
  d()
], Se.prototype, "to", 2);
Se = Qe([
  P("ap-filter-date")
], Se);
var ho = Object.defineProperty, uo = Object.getOwnPropertyDescriptor, nt = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? uo(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && ho(e, s, r), r;
};
let Pe = class extends L {
  constructor() {
    super(...arguments), this.tags = [], this.selected = [], this.filterKey = b.TAGS, this.t = (t, e) => typeof e == "string" ? e : t, this._search = "";
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      var t;
      return (t = this._searchInput) == null ? void 0 : t.focus();
    });
  }
  get _suggestedTags() {
    return this.tags.filter((t) => t.primary);
  }
  get _otherTags() {
    return this.tags.filter((t) => !t.primary);
  }
  get _atLimit() {
    return this.selected.length >= hs;
  }
  get _isSearching() {
    return this._search.trim().length > 0;
  }
  _toggle(t) {
    const e = this.selected.includes(t);
    if (!e && this._atLimit) return;
    const s = e ? this.selected.filter((i) => i !== t) : [...this.selected, t];
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: this.filterKey,
          values: s,
          operator: E.IS
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _remove(t) {
    const e = this.selected.filter((s) => s !== t);
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: this.filterKey,
          values: e,
          operator: E.IS
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _clearAll() {
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: this.filterKey,
          values: [],
          operator: E.IS
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onSearchInput(t) {
    this._search = t.target.value;
  }
  _clearSearch() {
    this._search = "";
  }
  _getTagBySid(t) {
    return this.tags.find((e) => e.sid === t);
  }
  _renderTagItem(t) {
    const e = this.selected.includes(t.sid), s = !e && this._atLimit;
    return l`
      <div
        class="tag-item ${s ? "disabled" : ""}"
        title=${s ? `You can select up to ${hs} tags` : g}
        @click=${() => !s && this._toggle(t.sid)}
      >
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="tag-name">${t.label}</span>
      </div>
    `;
  }
  render() {
    const t = this._search.toLowerCase().trim();
    return l`
      <div class="filter-content">
        <div class="filter-header">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="tag-search"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder", "Search tags")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search ? l`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              ` : g}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching && this.selected.length > 0 ? l`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button class="clear-btn" @click=${this._clearAll}>Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map((e) => {
      const s = this._getTagBySid(e);
      return s ? l`
                      <div class="chip">
                        <span class="chip-label">${s.label}</span>
                        <button class="chip-remove" @click=${() => this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    ` : g;
    })}
                </div>
              </div>
            ` : g}
        ${this._isSearching ? this._renderSearchResults(t) : this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit ? l`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span>You can select up to ${hs} tags.</span>
              </div>
            ` : g}
      </div>
    `;
  }
  _renderSearchResults(t) {
    const e = (r) => r.toLowerCase().includes(t), s = this._suggestedTags.filter((r) => e(r.label)).slice(0, 50), i = this._otherTags.filter((r) => e(r.label)).slice(0, 50);
    return s.length === 0 && i.length === 0 ? l`<div class="no-results">${this.t("noTagsFound", "No tags found")}</div>` : l`
      ${s.length > 0 ? l`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">${this.t("suggestedTags", "Suggested tags")}</span>
                <button
                  class="clear-btn"
                  ?disabled=${this.selected.length === 0}
                  @click=${this._clearAll}
                >
                  ${this.t("clearAll", "Clear all")}
                </button>
              </div>
              <div class="options-list short">
                ${s.map((r) => this._renderTagItem(r))}
              </div>
            </div>
          ` : g}
      ${i.length > 0 ? l`
            <div class="filter-section">
              <div class="section-header">
                ${s.length === 0 ? l`<span class="section-label">${this.t("allTags", "All tags")}</span>
                      <button
                        class="clear-btn"
                        ?disabled=${this.selected.length === 0}
                        @click=${this._clearAll}
                      >
                        ${this.t("clearAll", "Clear all")}
                      </button>` : l`<span class="section-label">${this.t("allTags", "All tags")}</span>`}
              </div>
              <div class="options-list">
                ${i.map((r) => this._renderTagItem(r))}
              </div>
            </div>
          ` : g}
    `;
  }
  _renderSections() {
    if (this.tags.length === 0)
      return l`<div class="no-results">${this.t("noTagsAvailable", "No tags available")}</div>`;
    const t = this._suggestedTags.filter((e) => !this.selected.includes(e.sid));
    return l`
      <div class="filter-section">
        ${t.length > 0 ? l`<span class="section-label">${this.t("suggestedTags", "Suggested tags")}</span>` : g}
        ${t.length > 0 ? l`
              <div class="options-list short">
                ${t.map((e) => this._renderTagItem(e))}
              </div>
            ` : g}
      </div>

      ${t.length > 0 ? l`<div class="separator"></div>` : g}

      <div class="hint-message">
        ${this.t("findMoreTagsBySearch", "Find more tags by using search")}
      </div>
    `;
  }
};
Pe.styles = [
  xe,
  Me,
  T`
      .tag-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }

      .tag-item:hover:not(.disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .tag-item.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .tag-item.disabled:hover {
        background: none;
      }

      .tag-name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .hint-message {
        font-size: 0.8125rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        padding: 8px 0;
      }

      /* Sticky search within popover scroll */
      .filter-header {
        position: sticky;
        top: -10px;
        z-index: 1;
        background: var(--sfx-card, oklch(1 0 0));
        margin: -10px -8px 10px;
      }

      .filter-header .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        pointer-events: none;
      }

      .tag-search {
        width: 100%;
        padding: 8px 32px 8px 32px;
        border: none;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: transparent;
        outline: none;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
      }

      .tag-search::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        font-weight: 400;
      }

      .search-clear {
        top: 50%;
        transform: translateY(-50%);
        right: 8px;
      }

      .options-list {
        max-height: none;
        overflow-y: visible;
      }
    `
];
nt([
  d({ type: Array })
], Pe.prototype, "tags", 2);
nt([
  d({ type: Array })
], Pe.prototype, "selected", 2);
nt([
  d()
], Pe.prototype, "filterKey", 2);
nt([
  d({ attribute: !1 })
], Pe.prototype, "t", 2);
nt([
  lt(".tag-search")
], Pe.prototype, "_searchInput", 2);
nt([
  x()
], Pe.prototype, "_search", 2);
Pe = nt([
  P("ap-filter-tags")
], Pe);
var fo = Object.defineProperty, go = Object.getOwnPropertyDescriptor, bt = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? go(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && fo(e, s, r), r;
};
let qe = class extends L {
  constructor() {
    super(...arguments), this.labels = [], this.selected = [], this.t = (t, e) => typeof e == "string" ? e : t, this._search = "";
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      var t;
      return (t = this._searchInput) == null ? void 0 : t.focus();
    });
  }
  get _atLimit() {
    return this.selected.length >= Pt;
  }
  get _isSearching() {
    return this._search.trim().length > 0;
  }
  _toggle(t) {
    const e = this.selected.includes(t);
    if (!e && this._atLimit) return;
    const s = e ? this.selected.filter((i) => i !== t) : [...this.selected, t];
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: b.LABELS,
          values: s,
          operator: E.IS
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _remove(t) {
    const e = this.selected.filter((s) => s !== t);
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: b.LABELS,
          values: e,
          operator: E.IS
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _clearAll() {
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: b.LABELS,
          values: [],
          operator: E.IS
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onSearchInput(t) {
    this._search = t.target.value;
  }
  _clearSearch() {
    this._search = "";
  }
  _getLabelBySid(t) {
    return this.labels.find((e) => e.sid === t);
  }
  _renderLabelItem(t) {
    const e = this.selected.includes(t.sid), s = !e && this._atLimit;
    return l`
      <div
        class="label-item ${s ? "disabled" : ""}"
        title=${s ? this.t("labelsLimitTitle", `You can select up to ${Pt} labels`, {
      count: Pt
    }) : g}
        @click=${() => !s && this._toggle(t.sid)}
      >
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="label-icon" ${O({ color: t.color || "#94a3b8" })}>
          <sfx-icon name="tag" .size=${16}></sfx-icon>
        </span>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assets_count ?? 0}</span>
      </div>
    `;
  }
  render() {
    const t = this._search.toLowerCase().trim(), e = this.labels.filter((s) => s.name.toLowerCase().includes(t));
    return l`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchLabelsPlaceholder", "Search labels")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search ? l`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              ` : g}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching && this.selected.length > 0 ? l`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected", "Selected")}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t("clearAll", "Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map((s) => {
      const i = this._getLabelBySid(s);
      return i ? l`
                      <div class="chip">
                        <span class="chip-icon" ${O({ color: i.color || "#94a3b8" })}>
                          <sfx-icon name="tag" .size=${12}></sfx-icon>
                        </span>
                        <span class="chip-label">${i.name}</span>
                        <button class="chip-remove" @click=${() => this._remove(s)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    ` : g;
    })}
                </div>
              </div>
            ` : g}

        <!-- Labels list -->
        <div class="filter-section">
          <div class="section-header">
            <span class="section-label">${this.t("allLabels", "All labels")}</span>
            <button
              class="clear-btn"
              ?disabled=${this.selected.length === 0}
              @click=${this._clearAll}
            >
              ${this.t("clearAll", "Clear all")}
            </button>
          </div>
          <div class="options-list">
            ${e.length === 0 ? l`<div class="no-results">${this.t("noLabelsFound", "No labels found")}</div>` : e.map((s) => this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit ? l`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span
                  >${this.t(
      "labelsLimitAlert",
      `You can select up to ${Pt} labels.`,
      { count: Pt }
    )}</span
                >
              </div>
            ` : g}
      </div>
    `;
  }
};
qe.styles = [
  Me,
  T`
      .label-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }

      .label-item:hover:not(.disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .label-item.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .label-item.disabled:hover {
        background: none;
      }

      .label-icon {
        flex-shrink: 0;
        line-height: 0;
      }

      .label-name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .count {
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        flex-shrink: 0;
      }

      .chip-icon {
        flex-shrink: 0;
        line-height: 0;
      }
    `
];
bt([
  d({ type: Array })
], qe.prototype, "labels", 2);
bt([
  d({ type: Array })
], qe.prototype, "selected", 2);
bt([
  d({ attribute: !1 })
], qe.prototype, "t", 2);
bt([
  lt(".search-input")
], qe.prototype, "_searchInput", 2);
bt([
  x()
], qe.prototype, "_search", 2);
qe = bt([
  P("ap-filter-labels")
], qe);
var vo = Object.defineProperty, mo = Object.getOwnPropertyDescriptor, ct = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? mo(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && vo(e, s, r), r;
};
const bs = 3, ws = /^#[0-9A-Fa-f]{6}$/;
function bo(t) {
  const e = t.trim().split(/\s+/);
  return e.length < 1 || !ws.test(e[0]) ? null : {
    hex: e[0],
    tolerance: e[1] || es,
    coverage: e[3] || Jt
  };
}
let De = class extends L {
  constructor() {
    super(...arguments), this.values = [], this.t = (t, e) => typeof e == "string" ? e : t, this._colors = [], this._advanced = !1, this._showPalette = !1, this._initialized = !1;
  }
  get _hasSelection() {
    return this._colors.length > 0;
  }
  get _selectedHexes() {
    return new Set(this._colors.map((t) => t.hex));
  }
  willUpdate(t) {
    if (t.has("values")) {
      const e = [];
      for (const s of this.values) {
        const i = bo(s);
        i && e.push(i);
      }
      (!this._initialized || this.values.length === 0 && this._colors.length > 0) && (this._colors = e, e.length > 0 && (this._advanced = e.some(
        (s) => s.tolerance !== es || s.coverage !== Jt
      )), this._initialized = !0);
    }
  }
  _selectColor(t) {
    if (!ws.test(t)) return;
    const e = this._colors.findIndex((s) => s.hex.toLowerCase() === t.toLowerCase());
    if (e >= 0) {
      this._removeColor(e);
      return;
    }
    this._colors.length >= bs || (this._colors = [
      ...this._colors,
      {
        hex: t,
        tolerance: es,
        coverage: Jt
      }
    ], this._showPalette = !1, this._dispatchChange());
  }
  _removeColor(t) {
    this._colors = this._colors.filter((e, s) => s !== t), this._dispatchChange();
  }
  _clearAll() {
    this._colors = [], this._showPalette = !1, this._dispatchChange();
  }
  _toggleAdvanced() {
    this._advanced = !this._advanced, this._colors.length > 0 && this._dispatchChange();
  }
  _handleHexInput(t, e) {
    let i = e.target.value.trim();
    if (i.startsWith("#") || (i = "#" + i), !ws.test(i) || this._colors.some(
      (a, n) => n !== t && a.hex.toLowerCase() === i.toLowerCase()
    )) return;
    const o = [...this._colors];
    o[t] = { ...o[t], hex: i }, this._colors = o, this._dispatchChange();
  }
  _handleToleranceChange(t, e) {
    const s = [...this._colors];
    s[t] = { ...s[t], tolerance: e.detail.value }, this._colors = s, this._dispatchChange();
  }
  _handleCoverageInput(t, e) {
    const s = e.target.value, i = parseInt(s, 10);
    if (!isNaN(i) && i >= 1 && i <= 100) {
      const r = [...this._colors];
      r[t] = { ...r[t], coverage: String(i) }, this._colors = r, this._dispatchChange();
    }
  }
  _showAddPalette() {
    this._showPalette = !0;
  }
  _dispatchChange() {
    if (this._colors.length === 0) {
      this.dispatchEvent(
        new CustomEvent("filter-change", {
          detail: { key: "color", values: "", operator: ":" },
          bubbles: !0,
          composed: !0
        })
      );
      return;
    }
    const t = this._colors.map((e) => {
      const s = this._advanced ? e.tolerance : es, i = this._advanced ? e.coverage : Jt;
      return `${e.hex} ${s} ${s} ${i}`;
    });
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: { key: "color", values: t, operator: ":" },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _renderPalette() {
    const t = this._selectedHexes, e = this._colors.length >= bs;
    return l`
      <div class="palette">
        ${pr.map((s) => {
      const i = t.has(s), r = e && !i;
      return l`
            <button
              class="swatch ${i ? "selected" : ""} ${r ? "disabled" : ""}"
              ${O({
        background: s,
        ...s === "#ffffff" ? { border: "1px solid #e4e4e7" } : {}
      })}
              @click=${() => !r && this._selectColor(s)}
              title=${s}
              ?disabled=${r}
            ></button>
          `;
    })}
      </div>
    `;
  }
  _renderColorEntry(t, e) {
    return this._advanced ? l`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">${this.t("colorLabel", "Color")}</span>
          <div class="color-row">
            <div class="color-swatch-small" ${O({ background: t.hex })}></div>
            <input
              class="color-hex-input"
              type="text"
              .value=${t.hex}
              maxlength="7"
              @change=${(s) => this._handleHexInput(e, s)}
            />
          </div>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">${this.t("difference", "Difference")}</span>
          <sfx-dropdown
            .value=${t.tolerance}
            .options=${hr.map((s) => ({
      ...s,
      label: this.t(s.labelKey, s.label)
    }))}
            @sfx-change=${(s) => this._handleToleranceChange(e, s)}
          ></sfx-dropdown>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">${this.t("coverage", "Coverage")}</span>
          <div class="coverage-wrap">
            <span class="coverage-unit">%</span>
            <input
              type="number"
              class="coverage-input"
              min="1"
              max="100"
              .value=${t.coverage}
              @change=${(s) => this._handleCoverageInput(e, s)}
            />
          </div>
        </div>
        <button
          class="remove-btn"
          title=${this.t("removeColor", "Remove color")}
          @click=${() => this._removeColor(e)}
        >
          <sfx-icon name="close" .size=${14}></sfx-icon>
        </button>
      </div>
    ` : l`
        <div class="color-row">
          <div class="color-swatch-small" ${O({ background: t.hex })}></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${t.hex}
            maxlength="7"
            @change=${(s) => this._handleHexInput(e, s)}
          />
          <button
            class="remove-btn"
            title=${this.t("removeColor", "Remove color")}
            @click=${() => this._removeColor(e)}
          >
            <sfx-icon name="close" .size=${14}></sfx-icon>
          </button>
        </div>
      `;
  }
  render() {
    const t = this._colors.length === 0 || this._showPalette, e = this._colors.length < bs && !this._showPalette;
    return l`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t("clearAll", "Clear all")}
        </button>

        <span class="section-label">${this.t("colorLabel", "Color")}</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced ? "on" : ""}">
              <span class="toggle-thumb"></span>
            </span>
            ${this.t("advanced", "Advanced")}
          </label>
        </div>

        <div class="filter-section">${t ? this._renderPalette() : g}</div>

        ${this._colors.length > 0 ? l`
              <div class="filter-section">
                <div class="selected-colors">
                  ${this._colors.map((s, i) => this._renderColorEntry(s, i))}
                </div>
              </div>
            ` : g}
        ${e ? l`
              <div class="filter-section">
                <button class="add-color-btn" @click=${this._showAddPalette}>
                  <sfx-icon name="plus" .size=${14}></sfx-icon>
                  ${this.t("addColor", "Add color")}
                </button>
              </div>
            ` : g}

        <div class="info-alert">
          <sfx-icon name="info" .size=${14}></sfx-icon>
          <span
            >${this.t("requiresImageProcessing", "Requires image processing to be enabled.")}</span
          >
        </div>
      </div>
    `;
  }
};
De.styles = [
  xe,
  Me,
  T`
      /* ── Palette ── */
      .palette {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 12px;
        justify-items: center;
      }

      .swatch {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid transparent;
        cursor: pointer;
        transition: transform 100ms;
        padding: 0;
      }

      .swatch:hover {
        transform: scale(1.15);
      }

      .swatch.selected {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        box-shadow: 0 0 0 2px var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      }

      .swatch.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .swatch.disabled:hover {
        transform: none;
      }

      /* ── Advanced toggle (own row, pill-style) ── */
      .advanced-row {
        display: flex;
        align-items: center;
        margin-bottom: 14px;
      }

      .advanced-toggle {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        cursor: pointer;
        user-select: none;
      }

      .toggle-track {
        position: relative;
        width: 32px;
        height: 18px;
        border-radius: 9px;
        background: var(--sfx-border, oklch(92.86% 0.009 247.92));
        transition: background 150ms;
        flex-shrink: 0;
      }

      .toggle-track.on {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        transition: transform 150ms;
        box-shadow: 0 1px 2px rgb(0 0 0 / 0.15);
      }

      .toggle-track.on .toggle-thumb {
        transform: translateX(14px);
      }

      /* ── Selected colors list ── */
      .selected-colors {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      /* ── Color entry row (both modes) ── */
      .color-row {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .color-swatch-small {
        width: 36px;
        height: 36px;
        border-radius: var(--sfx-radius-sm, 6px);
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        flex-shrink: 0;
      }

      .color-hex-input {
        height: 36px;
        padding: 0 8px;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        background: var(--sfx-background, oklch(1 0 0));
        min-width: 0;
      }

      .color-hex-input:focus {
        outline: none;
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      /* Normal mode: hex input takes remaining space */
      .color-row:not(.advanced) .color-hex-input {
        flex: 1;
      }

      .remove-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border: none;
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        padding: 0;
        flex-shrink: 0;
        border-radius: 4px;
      }

      .remove-btn:hover {
        color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      /* ── Advanced layout: full-width grid ── */
      .color-row.advanced {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr auto;
        align-items: end;
        gap: 8px;
      }

      .color-row.advanced .remove-btn {
        align-self: end;
        margin-bottom: 8px;
      }

      .adv-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
      }

      .adv-field sfx-dropdown {
        display: block;
        width: 100%;
      }

      .adv-field-label {
        font-size: 0.6875rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        line-height: 1;
      }

      .coverage-wrap {
        display: flex;
        align-items: center;
        height: 36px;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        background: var(--sfx-background, oklch(1 0 0));
        overflow: hidden;
      }

      .coverage-wrap:focus-within {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .coverage-unit {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        padding-left: 8px;
        flex-shrink: 0;
        line-height: 36px;
      }

      .coverage-input {
        flex: 1;
        min-width: 0;
        height: 100%;
        padding: 0 6px 0 2px;
        border: none;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        background: transparent;
        outline: none;
      }

      .coverage-input::-webkit-inner-spin-button,
      .coverage-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .coverage-input {
        -moz-appearance: textfield;
      }

      /* ── Add color button ── */
      .add-color-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 6px 0;
        border: none;
        background: none;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        cursor: pointer;
        transition: opacity 150ms;
      }

      .add-color-btn:hover {
        opacity: 0.8;
      }
    `
];
ct([
  d({ type: Array })
], De.prototype, "values", 2);
ct([
  d({ attribute: !1 })
], De.prototype, "t", 2);
ct([
  x()
], De.prototype, "_colors", 2);
ct([
  x()
], De.prototype, "_advanced", 2);
ct([
  x()
], De.prototype, "_showPalette", 2);
ct([
  x()
], De.prototype, "_initialized", 2);
De = ct([
  P("ap-filter-color")
], De);
var xo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, He = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? _o(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && xo(e, s, r), r;
};
const yo = {
  KB: 1 / 1e3,
  MB: 1,
  GB: 1e3
}, $o = [
  // KB disabled until backend supports sub-MB precision
  { value: "MB", label: "MB" },
  { value: "GB", label: "GB" }
];
let Ce = class extends L {
  constructor() {
    super(...arguments), this.min = 0, this.max = 0, this.t = (t, e) => typeof e == "string" ? e : t, this._minVal = "", this._maxVal = "", this._unit = "MB", this._initialized = !1;
  }
  willUpdate(t) {
    !this._initialized && (t.has("min") || t.has("max")) && (this._initialized = !0, this.min > 0 && (this._minVal = String(this.min)), this.max > 0 && (this._maxVal = String(this.max)));
  }
  get _hasFilter() {
    return this._minVal !== "" || this._maxVal !== "";
  }
  _clearAll() {
    this._minVal = "", this._maxVal = "", this._emitChange();
  }
  _setUnit(t) {
    this._unit = t.detail.value, this._emitChange();
  }
  _emitChange() {
    const t = yo[this._unit], e = this._minVal !== "" ? parseFloat((parseFloat(this._minVal) * t).toFixed(2)).toString() : null, s = this._maxVal !== "" ? parseFloat((parseFloat(this._maxVal) * t).toFixed(2)).toString() : null;
    let i;
    if (e !== null && s !== null)
      i = `${e}..${s}`;
    else if (e !== null)
      i = `${e}..`;
    else if (s !== null)
      i = `..${s}`;
    else {
      this.dispatchEvent(
        new CustomEvent("filter-change", {
          detail: {
            key: b.SIZE,
            values: [],
            operator: E.RANGE
          },
          bubbles: !0,
          composed: !0
        })
      );
      return;
    }
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: b.SIZE,
          values: [i],
          operator: E.RANGE
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onMinInput(t) {
    this._minVal = t.target.value, this._emitChange();
  }
  _onMaxInput(t) {
    this._maxVal = t.target.value, this._emitChange();
  }
  render() {
    return l`
      <div class="filter-content">
        <span class="section-label">${this.t("sizeLabel", "Size")}</span>
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${this._clearAll}>
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="size-grid">
          <div>
            <span class="input-label">${this.t("sizeFrom", "From")}</span>
            <input
              class="filter-input"
              type="number"
              placeholder="0"
              min="0"
              step="0.1"
              .value=${this._minVal}
              @change=${this._onMinInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t("sizeTo", "To")}</span>
            <input
              class="filter-input"
              type="number"
              placeholder=${this.t("any", "Any")}
              min="0"
              step="0.1"
              .value=${this._maxVal}
              @change=${this._onMaxInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t("sizeUnit", "Unit")}</span>
            <sfx-dropdown
              .options=${$o}
              .value=${this._unit}
              @sfx-change=${this._setUnit}
            ></sfx-dropdown>
          </div>
        </div>
      </div>
    `;
  }
};
Ce.styles = [
  Me,
  T`
      /* Hide number input spinners */
      .filter-input[type='number']::-webkit-inner-spin-button,
      .filter-input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .filter-input[type='number'] {
        -moz-appearance: textfield;
      }
      .size-grid {
        display: grid;
        grid-template-columns: 1fr 1fr auto;
        gap: 12px;
      }
      .size-grid sfx-dropdown {
        display: block;
        width: 100%;
      }
    `
];
He([
  d({ type: Number })
], Ce.prototype, "min", 2);
He([
  d({ type: Number })
], Ce.prototype, "max", 2);
He([
  d({ attribute: !1 })
], Ce.prototype, "t", 2);
He([
  x()
], Ce.prototype, "_minVal", 2);
He([
  x()
], Ce.prototype, "_maxVal", 2);
He([
  x()
], Ce.prototype, "_unit", 2);
He([
  x()
], Ce.prototype, "_initialized", 2);
Ce = He([
  P("ap-filter-size")
], Ce);
var wo = Object.defineProperty, ko = Object.getOwnPropertyDescriptor, Ht = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ko(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && wo(e, s, r), r;
};
const So = as`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`, Co = as`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`, Fo = as`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`, Ao = as`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`, Eo = {
  portrait: So,
  landscape: Co,
  square: Fo,
  panorama: Ao
};
let ot = class extends L {
  constructor() {
    super(...arguments), this.selectedResolution = [], this.selectedOrientation = [], this.selectedFaces = [], this.t = (t, e) => typeof e == "string" ? e : t;
  }
  get _hasSelection() {
    return this.selectedResolution.length > 0 || this.selectedOrientation.length > 0 || this.selectedFaces.length > 0;
  }
  _toggle(t, e) {
    return t.includes(e) ? t.filter((s) => s !== e) : [...t, e];
  }
  _toggleResolution(t) {
    this.selectedResolution = this._toggle(this.selectedResolution, t), this._dispatchChange();
  }
  _toggleOrientation(t) {
    this.selectedOrientation = this._toggle(this.selectedOrientation, t), this._dispatchChange();
  }
  _toggleFaces(t) {
    this.selectedFaces = this._toggle(this.selectedFaces, t), this._dispatchChange();
  }
  _clearAll() {
    this.selectedResolution = [], this.selectedOrientation = [], this.selectedFaces = [], this._dispatchChange();
  }
  _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: "image",
          values: {
            resolution: this.selectedResolution,
            orientation: this.selectedOrientation,
            faces: this.selectedFaces
          }
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return l`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution", "Resolution")}</span>
          <div class="options-horizontal">
            ${nr.map(
      (t) => l`
                <sfx-checkbox
                  ?checked=${this.selectedResolution.includes(t.value)}
                  @sfx-toggle=${() => {
        this._toggleResolution(t.value);
      }}
                  >${this.t(t.labelKey, t.label)}</sfx-checkbox
                >
              `
    )}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageOrientation", "Orientation")}</span>
          <div class="options-vertical">
            ${cr.map(
      (t) => l`
                <sfx-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @sfx-toggle=${() => {
        this._toggleOrientation(t.value);
      }}
                  ><span class="orientation-label"
                    >${Eo[t.value]}${this.t(t.labelKey, t.label)}</span
                  ></sfx-checkbox
                >
              `
    )}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces", "Faces")}</span>
          <div class="options-horizontal">
            ${dr.map(
      (t) => l`
                <sfx-checkbox
                  ?checked=${this.selectedFaces.includes(t.value)}
                  @sfx-toggle=${() => {
        this._toggleFaces(t.value);
      }}
                  >${t.labelKey ? this.t(t.labelKey, t.label) : t.label}</sfx-checkbox
                >
              `
    )}
          </div>
        </div>

        <div class="info-alert">
          <sfx-icon name="info" .size=${14}></sfx-icon>
          <span
            >${this.t(
      "imageProcessingNotice",
      "Some images might not have been processed, so they won't be displayed."
    )}</span
          >
        </div>
      </div>
    `;
  }
};
ot.styles = [
  Me,
  T`
      .options-horizontal {
        display: flex;
        gap: 28px;
      }
      .options-vertical {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .options-vertical sfx-checkbox {
        --sfx-checkbox-gap: 12px;
      }
      .orientation-label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .orientation-label svg {
        flex-shrink: 0;
      }
    `
];
Ht([
  d({ type: Array })
], ot.prototype, "selectedResolution", 2);
Ht([
  d({ type: Array })
], ot.prototype, "selectedOrientation", 2);
Ht([
  d({ type: Array })
], ot.prototype, "selectedFaces", 2);
Ht([
  d({ attribute: !1 })
], ot.prototype, "t", 2);
ot = Ht([
  P("ap-filter-image")
], ot);
var To = Object.defineProperty, Io = Object.getOwnPropertyDescriptor, K = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Io(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && To(e, s, r), r;
};
function D(t) {
  return `${cs[t.type] || ""}${t.key}`;
}
let j = class extends L {
  constructor() {
    super(...arguments), this.fields = [], this.appliedFilters = {}, this.visibleFields = [], this.mode = "full", this.activeFieldKey = "", this.pinnedFields = [], this.appliedMetadata = {}, this.t = (t, e) => typeof e == "string" ? e : t, this._showFieldSelection = !1, this._fieldSearch = "", this._collapsedFields = /* @__PURE__ */ new Set(), this._tagInputs = {}, this._tagSuggestions = {}, this._tagLoading = {}, this._datePresets = {}, this._dateFroms = {}, this._dateTos = {}, this._specificModeFields = /* @__PURE__ */ new Set(), this._selectSearches = {}, this._tagDebounceTimers = {};
  }
  get _tTextOperatorOptions() {
    return fs.map((t) => ({ ...t, label: this.t(t.labelKey, t.label) }));
  }
  get _tNumberOperatorOptions() {
    return vs.map((t) => ({ ...t, label: this.t(t.labelKey, t.label) }));
  }
  get _tSingleSelectOperatorOptions() {
    return Ke.map((t) => ({
      ...t,
      label: this.t(t.labelKey, t.label)
    }));
  }
  get _tMultiSelectOperatorOptions() {
    return gs.map((t) => ({ ...t, label: this.t(t.labelKey, t.label) }));
  }
  get _tBooleanOptions() {
    return gr.map((t) => ({ ...t, label: this.t(t.labelKey, t.label) }));
  }
  get _tEmptyOptions() {
    return rs.map((t) => ({ ...t, label: this.t(t.labelKey, t.label) }));
  }
  get _tEmptyAndSpecificOptions() {
    return fr.map((t) => ({ ...t, label: this.t(t.labelKey, t.label) }));
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => this._focusSearch());
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const t of Object.values(this._tagDebounceTimers))
      clearTimeout(t);
  }
  _focusSearch() {
    const t = this.renderRoot.querySelector(
      ".field-search, .search-input"
    );
    t == null || t.focus();
  }
  // ── Computed helpers ─────────────────────────────────────────────
  get _atFieldLimit() {
    return this.visibleFields.length >= Xt;
  }
  _getField(t) {
    return this.fields.find((e) => D(e) === t);
  }
  _getUIType(t) {
    return vr[t.type];
  }
  _getApplied(t) {
    return this.appliedMetadata[t] || this.appliedFilters[t] || {};
  }
  _isSpecialValue(t) {
    return !t || t.length !== 1 ? !1 : t[0] === ue || t[0] === fe;
  }
  /** Get the "content" mode for a field: 'empty', 'not-empty', or 'specific' */
  _getContentMode(t) {
    var s, i;
    const e = this._getApplied(t);
    return ((s = e.values) == null ? void 0 : s[0]) === ue ? ue : ((i = e.values) == null ? void 0 : i[0]) === fe ? fe : this._specificModeFields.has(t) || e.values && e.values.length > 0 ? et : "";
  }
  // ── Event dispatchers ────────────────────────────────────────────
  _emitFilterChange(t, e, s) {
    const i = D(t);
    this.dispatchEvent(
      new CustomEvent("metadata-filter-change", {
        detail: {
          fieldKey: i,
          operator: e,
          values: s,
          metadataType: t.type
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _emitFieldToggle(t, e) {
    const s = D(t);
    this.dispatchEvent(
      new CustomEvent("metadata-field-toggle", {
        detail: { fieldKey: s, visible: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _emitFieldSelect(t) {
    const e = D(t);
    !this.visibleFields.includes(e) && this._atFieldLimit || (this.visibleFields.includes(e) || this._emitFieldToggle(t, !0), this.dispatchEvent(
      new CustomEvent("metadata-field-select", {
        detail: { fieldKey: e },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  _emitPin(t, e) {
    this.dispatchEvent(
      new CustomEvent("metadata-pin", {
        detail: { fieldKey: t, pinned: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // ── Field selection actions ──────────────────────────────────────
  _openFieldSelection() {
    this._showFieldSelection = !0, this._fieldSearch = "";
  }
  _closeFieldSelection() {
    this._showFieldSelection = !1, this._fieldSearch = "";
  }
  _addField(t) {
    if (this._atFieldLimit) return;
    const e = D(t);
    this.visibleFields.includes(e) || this._emitFieldToggle(t, !0);
  }
  _removeField(t) {
    this._emitFieldToggle(t, !1), this._emitFilterChange(t, void 0, []);
  }
  _toggleCollapse(t) {
    const e = new Set(this._collapsedFields);
    e.has(t) ? e.delete(t) : e.add(t), this._collapsedFields = e;
  }
  // ── Operator change (via radio group) ─────────────────────────────
  _onOperatorChange(t, e) {
    const i = this._getApplied(D(t)).values || [];
    this._emitFilterChange(t, e, i);
  }
  // ── Content mode change ─────────────────────────────────────────
  _onContentModeChange(t, e) {
    const s = D(t);
    if (e === et) {
      const i = new Set(this._specificModeFields);
      i.add(s), this._specificModeFields = i;
      const r = this._getApplied(s);
      this._isSpecialValue(r.values) && this._emitFilterChange(t, r.operator, []);
    } else {
      if (this._specificModeFields.has(s)) {
        const i = new Set(this._specificModeFields);
        i.delete(s), this._specificModeFields = i;
      }
      if (e)
        this._onEmptyOption(t, e);
      else {
        const i = this._getApplied(s);
        this._emitFilterChange(t, i.operator, []);
      }
    }
  }
  // ── Clear field filter ──────────────────────────────────────────
  _clearFieldFilter(t) {
    const e = D(t);
    if (this._specificModeFields.has(e)) {
      const p = new Set(this._specificModeFields);
      p.delete(e), this._specificModeFields = p;
    }
    const { [e]: s, ...i } = this._datePresets;
    this._datePresets = i;
    const { [e]: r, ...o } = this._dateFroms;
    this._dateFroms = o;
    const { [e]: a, ...n } = this._dateTos;
    this._dateTos = n;
    const { [e]: c, ...h } = this._selectSearches;
    this._selectSearches = h;
    const { [e]: u, ...f } = this._tagInputs;
    this._tagInputs = f, this._emitFilterChange(t, void 0, []);
  }
  // ── Text filter ──────────────────────────────────────────────────
  _onTextInput(t, e) {
    const s = e.target.value, r = this._getApplied(D(t)).operator || fs[0].value;
    this._emitFilterChange(t, r, s ? [s] : []);
  }
  // ── Number filter ────────────────────────────────────────────────
  _onNumberInput(t, e, s) {
    const i = e.target.value, r = D(t), o = this._getApplied(r), a = o.operator || vs[0].value, n = [...o.values || []];
    s === 0 ? n[0] = i : n[1] = i;
    const c = n.filter((h) => h !== "" && h !== void 0);
    if (c.length > 0) {
      const h = t.type === w.DECIMAL2;
      if (!c.every(
        (f) => h ? !isNaN(parseFloat(f)) : /^-?\d+$/.test(f)
      )) return;
    }
    this._emitFilterChange(t, a, n);
  }
  // ── Boolean filter ───────────────────────────────────────────────
  _onBooleanSelect(t, e) {
    var r;
    const s = this._getApplied(D(t)), i = (r = s.values) == null ? void 0 : r[0];
    !e || i === e ? this._emitFilterChange(t, void 0, []) : this._emitFilterChange(t, s.operator, [e]);
  }
  // ── Select-one filter ────────────────────────────────────────────
  _onSelectOneToggle(t, e) {
    const s = D(t), i = this._getApplied(s), r = i.operator || Ke[0].value, o = i.values || [];
    o.length === 1 && o[0] === e ? this._emitFilterChange(t, r, []) : this._emitFilterChange(t, r, [e]);
  }
  // ── Multi-select filter ──────────────────────────────────────────
  _onMultiSelectToggle(t, e) {
    const s = D(t), i = this._getApplied(s), r = i.operator || gs[0].value, o = i.values || [], a = o.includes(e) ? o.filter((n) => n !== e) : [...o, e];
    this._emitFilterChange(t, r, a);
  }
  // ── Tags filter ──────────────────────────────────────────────────
  _onTagKeydown(t, e) {
    const s = D(t);
    (e.key === "Enter" || e.key === ",") && (e.preventDefault(), this._commitTagInput(t, s));
  }
  _onTagInput(t, e, s) {
    const i = s.target.value;
    if (i.includes(",")) {
      const r = i.replace(/,/g, "").trim();
      r && (this._tagInputs = { ...this._tagInputs, [e]: r }, this._commitTagInput(t, e));
      return;
    }
    this._tagInputs = { ...this._tagInputs, [e]: i }, this._fetchTagSuggestions(t, e, i.trim());
  }
  _selectTagSuggestion(t, e) {
    const s = D(t), i = this._getApplied(s), r = i.operator || Ke[0].value, o = i.values || [];
    o.includes(e) || this._emitFilterChange(t, r, [...o, e]), this._tagInputs = { ...this._tagInputs, [s]: "" }, this._tagSuggestions = { ...this._tagSuggestions, [s]: [] };
  }
  _fetchTagSuggestions(t, e, s) {
    if (this._tagDebounceTimers[e] && clearTimeout(this._tagDebounceTimers[e]), !s || !this.apiClient) {
      this._tagSuggestions = { ...this._tagSuggestions, [e]: [] }, this._tagLoading = { ...this._tagLoading, [e]: !1 };
      return;
    }
    this._tagDebounceTimers[e] = setTimeout(async () => {
      this._tagLoading = { ...this._tagLoading, [e]: !0 };
      try {
        const i = `_${t.ckey || t.key}`, r = await this.apiClient.get(
          "/metadata/autocomplete",
          { q: s, meta_key: i }
        );
        (this._tagInputs[e] || "").trim() === s && (this._tagSuggestions = {
          ...this._tagSuggestions,
          [e]: (r.tags || []).map((o) => o.tag)
        });
      } catch {
        this._tagSuggestions = { ...this._tagSuggestions, [e]: [] };
      } finally {
        this._tagLoading = { ...this._tagLoading, [e]: !1 };
      }
    }, 300);
  }
  _commitTagInput(t, e) {
    const s = (this._tagInputs[e] || "").trim();
    if (!s) return;
    const i = this._getApplied(e), r = i.operator || Ke[0].value, o = i.values || [];
    o.includes(s) || this._emitFilterChange(t, r, [...o, s]), this._tagInputs = { ...this._tagInputs, [e]: "" }, this._tagSuggestions = { ...this._tagSuggestions, [e]: [] };
  }
  _removeTag(t, e) {
    const s = D(t), i = this._getApplied(s), r = i.operator || Ke[0].value, o = i.values || [];
    this._emitFilterChange(
      t,
      r,
      o.filter((a) => a !== e)
    );
  }
  _onTagOperatorChange(t, e) {
    const s = D(t), r = this._getApplied(s).values || [];
    this._emitFilterChange(t, e, r);
  }
  // ── Date filter ──────────────────────────────────────────────────
  _onDatePreset(t, e) {
    const s = D(t);
    if (!e) {
      this._clearFieldFilter(t);
      return;
    }
    if (this._datePresets = { ...this._datePresets, [s]: e }, ["before", "after", "between"].includes(e)) {
      this._dateFroms = { ...this._dateFroms, [s]: "" }, this._dateTos = { ...this._dateTos, [s]: "" };
      return;
    }
    if (e === "empty" || e === "non-empty") {
      this._emitFilterChange(t, void 0, [e]);
      return;
    }
    const i = /* @__PURE__ */ new Date();
    let r = "", o = "";
    switch (e) {
      case "today": {
        const a = new Date(i);
        a.setHours(0, 0, 0, 0), r = a.toISOString(), o = i.toISOString();
        break;
      }
      case "last_week": {
        const a = new Date(i), n = a.getDay();
        a.setDate(a.getDate() - (n === 0 ? 6 : n - 1)), a.setHours(0, 0, 0, 0);
        const c = new Date(a);
        c.setDate(c.getDate() - 7), r = c.toISOString(), o = a.toISOString();
        break;
      }
      case "last_month": {
        const a = new Date(i.getFullYear(), i.getMonth(), 1), n = new Date(a);
        n.setMonth(n.getMonth() - 1), r = n.toISOString(), o = a.toISOString();
        break;
      }
      case "last_year": {
        const a = new Date(i.getFullYear(), 0, 1), n = new Date(a);
        n.setFullYear(n.getFullYear() - 1), r = n.toISOString(), o = a.toISOString();
        break;
      }
    }
    r && o && (this._dateFroms = { ...this._dateFroms, [s]: r }, this._dateTos = { ...this._dateTos, [s]: o }, this._emitFilterChange(t, "..", [r, o]));
  }
  _onDateInput(t, e, s) {
    const i = s.target.value, r = D(t), o = this._datePresets[r] || "", a = i ? (/* @__PURE__ */ new Date(i + "T00:00:00")).toISOString() : "";
    e === "from" ? this._dateFroms = { ...this._dateFroms, [r]: a } : this._dateTos = { ...this._dateTos, [r]: a };
    let n = this._dateFroms[r] || "", c = this._dateTos[r] || "";
    o === "after" && n && (c = (/* @__PURE__ */ new Date()).toISOString(), this._dateTos = { ...this._dateTos, [r]: c }), o === "before" && c && (n = (/* @__PURE__ */ new Date(0)).toISOString(), this._dateFroms = { ...this._dateFroms, [r]: n }), n && c && this._emitFilterChange(t, "..", [n, c]);
  }
  // ── Geo filter ───────────────────────────────────────────────────
  _onGeoLocationInput(t, e) {
    var f;
    const s = e.target.value.trim(), i = D(t), r = (f = this.shadowRoot) == null ? void 0 : f.querySelector(
      `[data-geo-radius="${i}"]`
    ), o = (r == null ? void 0 : r.value) || "";
    if (!s) {
      this._emitFilterChange(t, void 0, []);
      return;
    }
    const a = s.split(",").map((p) => p.trim());
    if (a.length !== 2 || a.some((p) => isNaN(Number(p)) || p === ""))
      return;
    const [n, c] = a;
    let u = `${n},${c}..${o || "0"}`;
    this._emitFilterChange(t, E.IS, [u]);
  }
  _onGeoRadiusInput(t, e) {
    var c;
    const s = e.target.value, i = D(t), r = this._getApplied(i);
    if (!((c = r.values) != null && c[0])) return;
    const o = r.values[0], [a] = o.split("..");
    let n = a;
    s && (n += `..${s}`), this._emitFilterChange(t, E.IS, [n]);
  }
  // ── Empty/non-empty option click ─────────────────────────────────
  _onEmptyOption(t, e) {
    var r;
    const s = this._getApplied(D(t)), i = (r = s.values) == null ? void 0 : r[0];
    !e || i === e ? this._emitFilterChange(t, s.operator, []) : this._emitFilterChange(t, s.operator, [e]);
  }
  // ── Render: Field selection panel ────────────────────────────────
  _getGroupedFields(t) {
    const e = /* @__PURE__ */ new Map();
    for (const s of t) {
      const i = s.group || this.t("rootFields", "Root fields");
      e.has(i) || e.set(i, []), e.get(i).push(s);
    }
    return e;
  }
  _renderFieldSelection() {
    const t = this._fieldSearch.toLowerCase(), e = this.fields.filter((r) => r.label.toLowerCase().includes(t)), s = this._getGroupedFields(e), i = (r, o) => o.length === 0 ? g : l`
        <div class="field-group-label">${r}</div>
        ${o.map((a) => {
      const n = D(a), c = this.visibleFields.includes(n), h = !c && this._atFieldLimit;
      return l`
            <div
              class="field-item ${c ? "selected" : ""} ${h ? "disabled" : ""}"
              @click=${() => !h && !c && this._addField(a)}
            >
              ${c ? l`<sfx-icon name="check" .size=${14}></sfx-icon>` : l`<sfx-icon
                    name=${ts[a.type] || "file-text"}
                    .size=${14}
                    ${O({ color: "var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))" })}
                  ></sfx-icon>`}
              <span>${a.label}</span>
            </div>
          `;
    })}
      `;
    return l`
      <div class="field-selection">
        <div class="field-selection-header">
          <span class="field-selection-title"
            >${this.t("addMetadataField", "Add metadata field")}</span
          >
          <button class="field-selection-close" @click=${this._closeFieldSelection}>
            <sfx-icon name="close" .size=${16}></sfx-icon>
          </button>
        </div>
        <div class="field-search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder", "Search fields")}
            .value=${this._fieldSearch}
            @input=${(r) => {
      this._fieldSearch = r.target.value;
    }}
          />
        </div>
        <div class="field-list">
          ${e.length === 0 ? l`<div class="empty-msg">${this.t("noFieldsFound", "No fields found")}</div>` : l`${[...s.entries()].map(
      ([r, o]) => i(r, o)
    )}`}
        </div>
      </div>
    `;
  }
  // ── Render: Text filter ──────────────────────────────────────────
  _renderTextFilter(t) {
    var h, u;
    const e = D(t), s = this._getApplied(e), r = this._isSpecialValue(s.values) ? "" : ((h = s.values) == null ? void 0 : h[0]) || "", o = this._getContentMode(e), a = o === ue || o === fe, n = s.operator || fs[0].value, c = t.type === w.TEXT_AREA;
    return l`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((u = s.values) != null && u.length) && !s.operator}
          @click=${() => this._clearFieldFilter(t)}
        >
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("operator", "Operator")}</span>
          <sfx-radio-group
            direction="horizontal"
            .options=${this._tTextOperatorOptions}
            .value=${n}
            ?disabled=${a}
            @sfx-change=${(f) => this._onOperatorChange(t, f.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content", "Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${o}
            @sfx-change=${(f) => this._onContentModeChange(t, f.detail.value)}
          ></sfx-radio-group>
        </div>

        ${o === et ? l`
              <div class="filter-section">
                <span class="section-label">${this.t("value", "Value")}</span>
                ${c ? l`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue", "Enter value")}
                        .value=${r}
                        @change=${(f) => this._onTextInput(t, f)}
                      ></textarea>
                    ` : l`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t("enterValue", "Enter value")}
                        .value=${r}
                        @change=${(f) => this._onTextInput(t, f)}
                        @keydown=${(f) => {
      f.key === "Enter" && f.preventDefault();
    }}
                      />
                    `}
              </div>
            ` : g}
      </div>
    `;
  }
  // ── Render: Number filter ────────────────────────────────────────
  _renderNumberFilter(t) {
    var y, I, N;
    const e = D(t), s = this._getApplied(e), i = s.operator || vs[0].value, r = this._isSpecialValue(s.values), o = this._getContentMode(e), a = o === ue || o === fe, n = i === E.RANGE, c = i === E.GREATER_THAN_OR_EQUAL, h = i === E.LESS_THAN_OR_EQUAL, u = t.type === w.DECIMAL2, f = u ? "0.01" : "1", p = u ? "0.00" : "0", v = r ? "" : ((y = s.values) == null ? void 0 : y[0]) || "", m = r ? "" : ((I = s.values) == null ? void 0 : I[1]) || "", k = n || c || h, _ = n || c || h ? this.t("min", "Min") : this.t("value", "Value"), $ = this.t("max", "Max");
    return l`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((N = s.values) != null && N.length) && !s.operator}
          @click=${() => this._clearFieldFilter(t)}
        >
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition", "Condition")}</span>
          <sfx-radio-group
            columns="2"
            .options=${this._tNumberOperatorOptions}
            .value=${i}
            ?disabled=${a}
            @sfx-change=${(F) => this._onOperatorChange(t, F.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content", "Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${o}
            @sfx-change=${(F) => this._onContentModeChange(t, F.detail.value)}
          ></sfx-radio-group>
        </div>

        ${o === et ? l`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${h ? "true" : g}
                      >${_}</span
                    >
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${p}
                      .value=${v}
                      ?disabled=${h}
                      @change=${(F) => this._onNumberInput(t, F, 0)}
                    />
                  </div>
                  ${k ? l`
                        <div>
                          <span
                            class="input-label"
                            aria-disabled=${c ? "true" : g}
                            >${$}</span
                          >
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${p}
                            .value=${m}
                            ?disabled=${c}
                            @change=${(F) => this._onNumberInput(t, F, 1)}
                          />
                        </div>
                      ` : g}
                </div>
              </div>
            ` : g}
      </div>
    `;
  }
  // ── Render: Boolean filter ───────────────────────────────────────
  _renderBooleanFilter(t) {
    var i, r;
    const e = this._getApplied(D(t)), s = ((i = e.values) == null ? void 0 : i[0]) || "";
    return l`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((r = e.values) != null && r.length)}
          @click=${() => this._clearFieldFilter(t)}
        >
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("value", "Value")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tBooleanOptions}
            .value=${s}
            @sfx-change=${(o) => this._onBooleanSelect(t, o.detail.value)}
          ></sfx-radio-group>
        </div>
      </div>
    `;
  }
  // ── Render: Select-one filter ────────────────────────────────────
  _renderSelectOneFilter(t) {
    const e = D(t), s = this._getApplied(e), i = this._isSpecialValue(s.values), r = i ? [] : s.values || [], o = t.possible_values || [], a = s.operator || Ke[0].value, n = (this._selectSearches[e] || "").toLowerCase(), c = n.length > 0, h = r.length > 0 || i, u = n ? o.filter((p) => p.label.toLowerCase().includes(n)) : o, f = r.length >= Xt;
    return l`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder", "Search options")}
            .value=${this._selectSearches[e] || ""}
            @input=${(p) => {
      this._selectSearches = {
        ...this._selectSearches,
        [e]: p.target.value
      };
    }}
          />
          ${c ? l`
                <button
                  class="search-clear"
                  @click=${() => {
      this._selectSearches = { ...this._selectSearches, [e]: "" };
    }}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              ` : g}
        </div>

        ${c ? l`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h && !s.operator}
                  @click=${() => this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll", "Clear all")}
                </button>
              </div>
            ` : l`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator", "Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h && !s.operator}
                    @click=${() => this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll", "Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${a}
                  @sfx-change=${(p) => this._onOperatorChange(t, p.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length > 0 ? l`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected", "Selected")}</span>
                        <button class="clear-btn" @click=${() => this._clearFieldFilter(t)}>
                          ${this.t("clearAll", "Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map((p) => {
      const v = o.find((m) => m.api_value === p);
      return l`
                            <div class="chip">
                              <span class="chip-label">${(v == null ? void 0 : v.label) || p}</span>
                              <button
                                class="chip-remove"
                                @click=${() => this._onSelectOneToggle(t, p)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `;
    })}
                      </div>
                    </div>
                  ` : g}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions", "All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(
      (p) => {
        var v;
        return l`
                <div class="option-item" @click=${() => this._onEmptyOption(t, p.value)}>
                  <sfx-checkbox ?checked=${((v = s.values) == null ? void 0 : v[0]) === p.value}></sfx-checkbox>
                  <span>${p.label}</span>
                </div>
              `;
      }
    )}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${u.length === 0 ? l`<div class="no-results">${this.t("noOptionsFound", "No options found")}</div>` : u.map((p) => {
      const v = r.includes(p.api_value), m = !v && f;
      return l`
                    <div
                      class="option-item ${m ? "disabled" : ""}"
                      @click=${() => !m && this._onSelectOneToggle(t, p.api_value)}
                    >
                      <sfx-checkbox ?checked=${v}></sfx-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `;
    })}
          </div>
        </div>
      </div>
    `;
  }
  // ── Render: Multi-select filter ──────────────────────────────────
  _renderMultiSelectFilter(t) {
    const e = D(t), s = this._getApplied(e), i = this._isSpecialValue(s.values), r = i ? [] : s.values || [], o = t.possible_values || [], a = s.operator || gs[0].value, n = (this._selectSearches[e] || "").toLowerCase(), c = n.length > 0, h = r.length > 0 || i, u = n ? o.filter((p) => p.label.toLowerCase().includes(n)) : o, f = r.length >= Xt;
    return l`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder", "Search options")}
            .value=${this._selectSearches[e] || ""}
            @input=${(p) => {
      this._selectSearches = {
        ...this._selectSearches,
        [e]: p.target.value
      };
    }}
          />
          ${c ? l`
                <button
                  class="search-clear"
                  @click=${() => {
      this._selectSearches = { ...this._selectSearches, [e]: "" };
    }}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              ` : g}
        </div>

        ${c ? l`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h && !s.operator}
                  @click=${() => this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll", "Clear all")}
                </button>
              </div>
            ` : l`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator", "Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h && !s.operator}
                    @click=${() => this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll", "Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${a}
                  @sfx-change=${(p) => this._onOperatorChange(t, p.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length > 0 ? l`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected", "Selected")}</span>
                        <button class="clear-btn" @click=${() => this._clearFieldFilter(t)}>
                          ${this.t("clearAll", "Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map((p) => {
      const v = o.find((m) => m.api_value === p);
      return l`
                            <div class="chip">
                              <span class="chip-label">${(v == null ? void 0 : v.label) || p}</span>
                              <button
                                class="chip-remove"
                                @click=${() => this._onMultiSelectToggle(t, p)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `;
    })}
                      </div>
                    </div>
                  ` : g}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions", "All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(
      (p) => {
        var v;
        return l`
                <div class="option-item" @click=${() => this._onEmptyOption(t, p.value)}>
                  <sfx-checkbox ?checked=${((v = s.values) == null ? void 0 : v[0]) === p.value}></sfx-checkbox>
                  <span>${p.label}</span>
                </div>
              `;
      }
    )}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${u.length === 0 ? l`<div class="no-results">${this.t("noOptionsFound", "No options found")}</div>` : u.map((p) => {
      const v = r.includes(p.api_value), m = !v && f;
      return l`
                    <div
                      class="option-item ${m ? "disabled" : ""}"
                      @click=${() => !m && this._onMultiSelectToggle(t, p.api_value)}
                    >
                      <sfx-checkbox ?checked=${v}></sfx-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `;
    })}
          </div>
        </div>
      </div>
    `;
  }
  // ── Render: Tags filter ──────────────────────────────────────────
  _renderTagsFilter(t) {
    const e = D(t), s = this._getApplied(e), i = this._isSpecialValue(s.values), r = i ? [] : s.values || [], o = this._tagInputs[e] || "", a = s.operator || Ke[0].value, n = r.length > 0 || i, c = this._tagSuggestions[e] || [], h = this._tagLoading[e] || !1, u = o.trim().length > 0, f = r.length >= Xt;
    return l`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder", "Search tags")}
            .value=${o}
            @input=${(p) => this._onTagInput(t, e, p)}
            @keydown=${(p) => this._onTagKeydown(t, p)}
          />
          ${u ? l`
                <button
                  class="search-clear"
                  @click=${() => {
      this._tagInputs = { ...this._tagInputs, [e]: "" }, this._tagSuggestions = { ...this._tagSuggestions, [e]: [] };
    }}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              ` : g}
        </div>

        ${u ? l`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!n && !s.operator}
                  @click=${() => this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll", "Clear all")}
                </button>
              </div>
            ` : l`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("condition", "Condition")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!n && !s.operator}
                    @click=${() => this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll", "Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${a}
                  ?disabled=${i}
                  @sfx-change=${(p) => this._onTagOperatorChange(t, p.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length > 0 ? l`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected", "Selected")}</span>
                        <button class="clear-btn" @click=${() => this._clearFieldFilter(t)}>
                          ${this.t("clearAll", "Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(
      (p) => l`
                            <div class="chip">
                              <span class="chip-label">${p}</span>
                              <button
                                class="chip-remove"
                                @click=${() => this._removeTag(t, p)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `
    )}
                      </div>
                    </div>
                  ` : g}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">${this.t("allOptions", "All options")}</span>
                <div class="options-list short">
                  ${this._tEmptyOptions.map(
      (p) => {
        var v;
        return l`
                      <div
                        class="option-item"
                        @click=${() => this._onEmptyOption(t, p.value)}
                      >
                        <sfx-checkbox ?checked=${((v = s.values) == null ? void 0 : v[0]) === p.value}></sfx-checkbox>
                        <span>${p.label}</span>
                      </div>
                    `;
      }
    )}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${u ? l`
              <div class="filter-section">
                <div class="options-list">
                  ${h ? l`<div class="option-item disabled">
                        <span>${this.t("loading", "Loading...")}</span>
                      </div>` : c.length > 0 ? c.map((p) => {
      const v = r.includes(p), m = !v && f;
      return l`
                            <div
                              class="option-item ${m ? "disabled" : ""}"
                              @click=${() => !m && (v ? this._removeTag(t, p) : this._selectTagSuggestion(t, p))}
                            >
                              <sfx-checkbox ?checked=${v}></sfx-checkbox>
                              <span>${p}</span>
                            </div>
                          `;
    }) : l`<div class="option-item disabled">
                          <span>${this.t("noResults", "No results")}</span>
                        </div>`}
                </div>
              </div>
            ` : g}
      </div>
    `;
  }
  // ── Render: Date filter ──────────────────────────────────────────
  _renderDateFilter(t) {
    var u, f;
    const e = D(t), s = this._datePresets[e] || "", i = this._getApplied(e), o = this._isSpecialValue(i.values) ? ((u = i.values) == null ? void 0 : u[0]) || "" : s, a = [
      { value: "empty", label: "Empty" },
      { value: "non-empty", label: "Not empty" }
    ], n = this._dateFroms[e] ? new Date(this._dateFroms[e]).toISOString().split("T")[0] : "", c = this._dateTos[e] ? new Date(this._dateTos[e]).toISOString().split("T")[0] : "", h = ["before", "after", "between"].includes(o);
    return l`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!o && !((f = i.values) != null && f.length)}
          @click=${() => this._clearFieldFilter(t)}
        >
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            .options=${a}
            .value=${o === "empty" || o === "non-empty" ? o : ""}
            @sfx-change=${(p) => this._onDatePreset(t, p.detail.value)}
          ></sfx-radio-group>

          <div class="separator"></div>

          <sfx-radio-group
            clearable
            columns="2"
            .options=${Cs.map((p) => ({
      ...p,
      label: this.t(p.labelKey, p.label)
    }))}
            .value=${o !== "empty" && o !== "non-empty" ? o : ""}
            @sfx-change=${(p) => this._onDatePreset(t, p.detail.value)}
          ></sfx-radio-group>
        </div>

        ${h ? l`
              <div class="filter-section">
                <div class="grid-2">
                  ${o === "before" ? l`
                        <div>
                          <span class="input-label">${this.t("endDate", "End date")}</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${c}
                            @change=${(p) => this._onDateInput(t, "to", p)}
                          />
                        </div>
                      ` : o === "after" ? l`
                          <div>
                            <span class="input-label">${this.t("startDate", "Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${n}
                              @change=${(p) => this._onDateInput(t, "from", p)}
                            />
                          </div>
                        ` : l`
                          <div>
                            <span class="input-label">${this.t("startDate", "Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${n}
                              @change=${(p) => this._onDateInput(t, "from", p)}
                            />
                          </div>
                          <div>
                            <span class="input-label">${this.t("endDate", "End date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${c}
                              @change=${(p) => this._onDateInput(t, "to", p)}
                            />
                          </div>
                        `}
                </div>
              </div>
            ` : g}
      </div>
    `;
  }
  // ── Render: Geo filter ───────────────────────────────────────────
  _renderGeoFilter(t) {
    var u, f;
    const e = D(t), s = this._getApplied(e), i = this._isSpecialValue(s.values), r = this._getContentMode(e);
    let o = "", a = "";
    if (!i && ((u = s.values) != null && u[0])) {
      const p = s.values[0], [v, m] = p.split("..");
      o = v || "", a = m || "";
    }
    const n = o.length > 0, c = o.split(",").map((p) => p.trim()), h = !n || c.length === 2 && c.every((p) => !isNaN(Number(p)) && p !== "");
    return l`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((f = s.values) != null && f.length)}
          @click=${() => this._clearFieldFilter(t)}
        >
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("content", "Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${r}
            @sfx-change=${(p) => this._onContentModeChange(t, p.detail.value)}
          ></sfx-radio-group>
        </div>

        ${r === et ? l`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location", "Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder", "Latitude, longitude")}
                      .value=${o}
                      @change=${(p) => this._onGeoLocationInput(t, p)}
                    />
                    ${n && !h ? l`<div class="error-text">
                          ${this.t(
      "geoCoordinatesError",
      'Enter coordinates as "latitude, longitude"'
    )}
                        </div>` : g}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">${this.t("maxRadius", "Max radius")} (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${e}
                      .value=${a}
                      @change=${(p) => this._onGeoRadiusInput(t, p)}
                    />
                  </div>
                </div>
              </div>
            ` : g}
      </div>
    `;
  }
  // ── Render: Attachment filter ────────────────────────────────────
  _renderAttachmentFilter(t) {
    var i, r;
    const e = this._getApplied(D(t)), s = ((i = e.values) == null ? void 0 : i[0]) || "";
    return l`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((r = e.values) != null && r.length)}
          @click=${() => this._clearFieldFilter(t)}
        >
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            .options=${this._tEmptyOptions}
            .value=${s}
            @sfx-change=${(o) => this._onEmptyOption(t, o.detail.value)}
          ></sfx-radio-group>
        </div>
      </div>
    `;
  }
  // ── Render: Face matcher (integer-list with slug face_matcher) ──
  _renderFaceMatcherFilter(t) {
    const e = D(t), s = this._getApplied(e), i = s.values || [], r = s.operator || E.IS;
    return l`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${i.length === 0}
          @click=${() => this._clearFieldFilter(t)}
        >
          ${this.t("clearAll", "Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition", "Condition")}</span>
          <sfx-radio-group
            direction="horizontal"
            .options=${Ke}
            .value=${r}
            @sfx-change=${(o) => this._emitFilterChange(t, o.detail.value, i)}
          ></sfx-radio-group>
          <input
            class="filter-input"
            type="text"
            .placeholder=${this.t("searchFacesPlaceholder", "Search faces")}
            .value=${i.join(", ")}
            @change=${(o) => {
      const n = o.target.value.split(",").map((c) => c.trim()).filter(Boolean);
      this._emitFilterChange(t, r, n);
    }}
          />
        </div>
      </div>
    `;
  }
  // ── Render: Per-field filter control dispatcher ──────────────────
  _renderFieldControl(t) {
    switch (this._getUIType(t)) {
      case "text":
        return this._renderTextFilter(t);
      case "number":
        return this._renderNumberFilter(t);
      case "boolean":
        return this._renderBooleanFilter(t);
      case "select-one":
        return this._renderSelectOneFilter(t);
      case "multi-select":
        return this._renderMultiSelectFilter(t);
      case "tags":
        return this._renderTagsFilter(t);
      case "date":
        return this._renderDateFilter(t);
      case "geo":
        return this._renderGeoFilter(t);
      case "attachment":
        return t.type === w.INTEGER_LIST && t.slug === "face_matcher" ? this._renderFaceMatcherFilter(t) : this._renderAttachmentFilter(t);
      default:
        return g;
    }
  }
  // ── Render: Single field section ─────────────────────────────────
  _renderFieldSection(t) {
    const e = this._getField(t);
    if (!e) return g;
    const s = this._collapsedFields.has(t);
    return l`
      <div class="field-section">
        <div class="field-header" @click=${() => this._toggleCollapse(t)}>
          <div class="field-header-left">
            <sfx-icon
              class="chevron ${s ? "" : "expanded"}"
              name="chevron-right"
              .size=${14}
            ></sfx-icon>
            <sfx-icon
              name=${ts[e.type] || "file-text"}
              .size=${14}
              ${O({ color: "var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))" })}
            ></sfx-icon>
            <span>${e.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${(i) => {
      i.stopPropagation(), this._removeField(e);
    }}
              title=${this.t("removeField", "Remove field")}
            >
              <sfx-icon name="close" .size=${14}></sfx-icon>
            </button>
          </div>
        </div>
        <div class="field-body ${s ? "collapsed" : ""}">
          ${this._renderFieldControl(e)}
        </div>
      </div>
    `;
  }
  // ── Selector mode render ─────────────────────────────────────────
  _renderSelectorMode() {
    const t = this._fieldSearch.toLowerCase(), e = this.fields.filter((r) => r.label.toLowerCase().includes(t)), s = this._getGroupedFields(e), i = (r, o) => o.length === 0 ? g : l`
        <div class="field-group-label">${r}</div>
        ${o.map((a) => {
      const n = D(a), c = this.visibleFields.includes(n), h = !!this.appliedMetadata[n] || !!this.appliedFilters[n], u = this.pinnedFields.includes(n), f = !c && this._atFieldLimit;
      return l`
            <div
              class="field-item ${h ? "has-filter" : ""} ${f ? "disabled" : ""}"
              @click=${() => !f && this._emitFieldSelect(a)}
            >
              <sfx-icon
                name=${ts[a.type] || "file-text"}
                .size=${14}
                ${O({ color: "var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))" })}
              ></sfx-icon>
              <span class="field-item-label">${a.label}</span>
              <button
                class="field-item-pin ${u ? "pinned" : ""}"
                @click=${(p) => {
        p.stopPropagation(), this._emitPin(n, !u);
      }}
                title=${u ? this.t("unpinField", "Unpin field") : this.t("pinField", "Pin field")}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${h ? l`<sfx-icon name="check" .size=${14}></sfx-icon>` : g}
            </div>
          `;
    })}
      `;
    return l`
      <div class="selector-wrap">
        <div class="field-search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder", "Search fields")}
            .value=${this._fieldSearch}
            @input=${(r) => {
      this._fieldSearch = r.target.value;
    }}
          />
        </div>
        <div class="field-list">
          ${e.length === 0 ? l`<div class="empty-msg">${this.t("noFieldsFound", "No fields found")}</div>` : l`${[...s.entries()].map(
      ([r, o]) => i(r, o)
    )}`}
        </div>
      </div>
    `;
  }
  // ── Field mode render ──────────────────────────────────────────
  _renderFieldMode() {
    const t = this._getField(this.activeFieldKey);
    return t ? this._renderFieldControl(t) : l`<div class="empty-msg">${this.t("fieldNotFound", "Field not found")}</div>`;
  }
  // ── Main render ──────────────────────────────────────────────────
  render() {
    if (this.mode === "selector")
      return this._renderSelectorMode();
    if (this.mode === "field")
      return this._renderFieldMode();
    const t = this.visibleFields.length > 0;
    return l`
      ${this._showFieldSelection || !t ? this._renderFieldSelection() : g}
      ${t ? l`
            <div class="field-filters">
              ${this.visibleFields.map((e) => this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection && !this._atFieldLimit ? l`
                  <button class="add-field-btn" @click=${this._openFieldSelection}>
                    <sfx-icon name="filter" .size=${14}></sfx-icon>
                    ${this.t("addField", "Add field")}
                  </button>
                ` : g}
          ` : g}
    `;
  }
};
j.styles = [
  xe,
  Me,
  T`
      /* ── Field selection panel ─────────────────────────────── */

      .add-field-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border: 1px dashed var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        width: 100%;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        transition: all 150ms;
        margin-top: 8px;
      }

      .add-field-btn:hover {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .field-selection {
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        background: var(--sfx-background, oklch(1 0 0));
        margin-bottom: 12px;
      }

      .field-selection-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }

      .field-selection-title {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }

      .field-selection-close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        padding: 2px;
        display: flex;
        align-items: center;
      }

      .field-selection-close:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }

      .selector-wrap {
        margin: 0;
      }

      .field-search-wrapper {
        position: sticky;
        top: 0;
        z-index: 2;
      }

      .field-search-wrapper .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        pointer-events: none;
      }

      .field-search {
        width: 100%;
        height: 34px;
        padding: 0 20px 0 32px;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-card, oklch(1 0 0));
        outline: none;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
      }

      .field-search::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        font-weight: 400;
      }

      .field-list {
        padding: 12px 0;
      }

      .field-group-label {
        padding: 6px 12px 4px;
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }

      .field-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px 6px 24px;
        cursor: pointer;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        transition: background 100ms;
      }

      .field-item:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .field-item.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .field-item.selected {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .limit-note {
        padding: 8px 16px 8px 24px;
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }

      .limit-note.at-limit {
        color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
      }

      .empty-msg {
        padding: 16px 16px 16px 24px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }

      /* ── Per-field filter sections ─────────────────────────── */

      .field-filters {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .field-section {
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        overflow: hidden;
      }

      .field-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        cursor: pointer;
        user-select: none;
      }

      .field-header-left {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }

      .field-header-actions {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .icon-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        padding: 2px;
        display: flex;
        align-items: center;
        border-radius: 4px;
        transition: all 100ms;
      }

      .icon-btn:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-border, oklch(92.86% 0.009 247.92));
      }

      .icon-btn.remove:hover {
        color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
      }

      .field-body {
        padding: 10px 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .field-body.collapsed {
        display: none;
      }

      /* ── Tags input ─────────────────────────────────────── */

      .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 6px;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        min-height: 36px;
        align-items: center;
      }

      .tag-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 8px;
        border-radius: 9999px;
        font-size: 0.8125rem;
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .tag-chip-remove {
        background: none;
        border: none;
        cursor: pointer;
        color: inherit;
        padding: 0;
        display: flex;
        align-items: center;
        opacity: 0.7;
      }

      .tag-chip-remove:hover {
        opacity: 1;
      }

      .tag-input {
        border: none;
        outline: none;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        flex: 1;
        min-width: 80px;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: transparent;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
      }

      .tag-input::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }

      /* ── Geo inputs ─────────────────────────────────────── */

      .geo-row {
        display: flex;
        gap: 12px;
      }

      .geo-location {
        flex: 2;
      }

      .geo-radius {
        flex: 1;
      }

      /* ── Select option items ────────────────────────────── */

      .option-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        transition: background 150ms;
      }

      .option-item:hover:not(.disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .option-item.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      /* ── Chevron ────────────────────────────────────────── */

      .chevron {
        transition: transform 150ms;
      }

      .chevron.expanded {
        transform: rotate(90deg);
      }

      /* ── Selector mode ─────────────────────────────────── */

      .field-item-label {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .field-item-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        flex-shrink: 0;
      }

      .field-item-pin {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        border-radius: 4px;
        flex-shrink: 0;
        margin-left: auto;
        opacity: 0;
        transition: all 150ms;
      }

      .field-item:hover .field-item-pin,
      .field-item-pin.pinned {
        opacity: 1;
      }

      .field-item-pin:hover {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      }

      .field-item-pin.pinned {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .field-item.has-filter {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      }
    `
];
K([
  d({ type: Array })
], j.prototype, "fields", 2);
K([
  d({ type: Object })
], j.prototype, "appliedFilters", 2);
K([
  d({ type: Array })
], j.prototype, "visibleFields", 2);
K([
  d()
], j.prototype, "mode", 2);
K([
  d()
], j.prototype, "activeFieldKey", 2);
K([
  d({ type: Array })
], j.prototype, "pinnedFields", 2);
K([
  d({ type: Object })
], j.prototype, "appliedMetadata", 2);
K([
  d({ attribute: !1 })
], j.prototype, "apiClient", 2);
K([
  d({ attribute: !1 })
], j.prototype, "t", 2);
K([
  x()
], j.prototype, "_showFieldSelection", 2);
K([
  x()
], j.prototype, "_fieldSearch", 2);
K([
  x()
], j.prototype, "_collapsedFields", 2);
K([
  x()
], j.prototype, "_tagInputs", 2);
K([
  x()
], j.prototype, "_tagSuggestions", 2);
K([
  x()
], j.prototype, "_tagLoading", 2);
K([
  x()
], j.prototype, "_datePresets", 2);
K([
  x()
], j.prototype, "_dateFroms", 2);
K([
  x()
], j.prototype, "_dateTos", 2);
K([
  x()
], j.prototype, "_specificModeFields", 2);
K([
  x()
], j.prototype, "_selectSearches", 2);
j = K([
  P("ap-filter-metadata")
], j);
var Lo = Object.defineProperty, Oo = Object.getOwnPropertyDescriptor, Z = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Oo(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Lo(e, s, r), r;
};
let q = class extends L {
  constructor() {
    super(...arguments), this.t = (t, e) => typeof e == "string" ? e : t, this.selectedStatus = [], this.statusOperator = ":=", this.approverValues = [], this.approverOperator = E.IS_EXACT, this.approverUsers = [], this.requesterValues = [], this.requesterOperator = E.IS_EXACT, this.requesterUsers = [], this.dueDateKind = null, this.dueDatePreset = "", this.dueDateFrom = "", this.dueDateTo = "", this._approverSearch = "", this._requesterSearch = "";
  }
  // ── Computed ────────────────────────────────────────────────────────
  get _statusHasOnlyEmptyValues() {
    return this.selectedStatus.length > 0 && this.selectedStatus.every((t) => t === ue || t === fe);
  }
  get _dueDateNeedsInputs() {
    return ["before", "after", "between", "specific"].includes(this.dueDatePreset);
  }
  get _showApproverSection() {
    return this.approverUsers.length > 0;
  }
  get _showRequesterSection() {
    return this.requesterUsers.length > 0;
  }
  // ── Status handlers ────────────────────────────────────────────────
  _toggleStatus(t) {
    const e = this.selectedStatus.includes(t) ? this.selectedStatus.filter((s) => s !== t) : [...this.selectedStatus, t];
    this._emitChange(C.STATUS, e, this.statusOperator);
  }
  _handleStatusOperator(t) {
    const e = t.detail.value;
    this._emitChange(C.STATUS, this.selectedStatus, e);
  }
  _clearStatus() {
    this._emitChange(C.STATUS, [], this.statusOperator);
  }
  // ── Approver handlers ──────────────────────────────────────────────
  _toggleApprover(t) {
    const e = this.approverValues.includes(t) ? this.approverValues.filter((s) => s !== t) : [...this.approverValues, t];
    this._emitChange(C.APPROVER, e, this.approverOperator);
  }
  _handleApproverOperator(t) {
    const e = t.detail.value;
    this._emitChange(C.APPROVER, this.approverValues, e);
  }
  _clearApprover() {
    this._emitChange(C.APPROVER, [], this.approverOperator);
  }
  _onApproverSearchInput(t) {
    this._approverSearch = t.target.value;
  }
  _clearApproverSearch() {
    this._approverSearch = "";
  }
  // ── Requester handlers ─────────────────────────────────────────────
  _toggleRequester(t) {
    const e = this.requesterValues.includes(t) ? this.requesterValues.filter((s) => s !== t) : [...this.requesterValues, t];
    this._emitChange(C.REQUESTOR, e, this.requesterOperator);
  }
  _handleRequesterOperator(t) {
    const e = t.detail.value;
    this._emitChange(C.REQUESTOR, this.requesterValues, e);
  }
  _clearRequester() {
    this._emitChange(C.REQUESTOR, [], this.requesterOperator);
  }
  _onRequesterSearchInput(t) {
    this._requesterSearch = t.target.value;
  }
  _clearRequesterSearch() {
    this._requesterSearch = "";
  }
  // ── Due Date handlers ──────────────────────────────────────────────
  /** Map a radio value to its DateKind. Manual-input options keep their value as kind. */
  _kindFromDuedateValue(t) {
    return t === $e.BEFORE || t === $e.AFTER || t === $e.BETWEEN || t === $e.SPECIFIC ? t : $e.PRESET;
  }
  _handleDueDatePreset(t) {
    const e = t.detail.value;
    if (!e || this.dueDatePreset === e) {
      this._clearDueDate();
      return;
    }
    const s = this._kindFromDuedateValue(e);
    let i = "", r = "";
    if (s === $e.PRESET) {
      const o = Fs(e);
      o && (i = o.from, r = o.to ?? "");
    }
    this._emitDuedate({ kind: s, preset: e, from: i, to: r });
  }
  _handleDueDateFrom(t) {
    const e = t.target.value;
    this._emitDuedate({
      kind: this.dueDateKind,
      preset: this.dueDatePreset,
      from: e,
      to: this.dueDateTo
    });
  }
  _handleDueDateTo(t) {
    const e = t.target.value;
    this._emitDuedate({
      kind: this.dueDateKind,
      preset: this.dueDatePreset,
      from: this.dueDateFrom,
      to: e
    });
  }
  _clearDueDate() {
    this._emitDuedate({ kind: null, preset: "", from: "", to: "" });
  }
  _emitDuedate(t) {
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: C.DUE_DATE,
          values: {
            field: C.DUE_DATE,
            kind: t.kind,
            preset: t.preset || null,
            from: t.from,
            to: t.to
          }
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // ── Shared emit ────────────────────────────────────────────────────
  /** Emit a StringFilter-shaped change (status / approver / requester sub-keys). */
  _emitChange(t, e, s) {
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: { key: t, values: e, operator: s },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // ── User filtering helpers ─────────────────────────────────────────
  _filterUsers(t, e) {
    const s = e.trim().toLowerCase();
    return s ? t.filter(
      (i) => {
        var r;
        return i.name.toLowerCase().includes(s) || (((r = i.email) == null ? void 0 : r.toLowerCase().includes(s)) ?? !1);
      }
    ) : t;
  }
  _getInitials(t) {
    const e = t.name || t.email || "";
    if (!e) return "?";
    const s = e.split(/\s+/).filter(Boolean);
    return s.length === 0 ? "?" : s.length === 1 ? s[0].slice(0, 2).toUpperCase() : (s[0][0] + s[s.length - 1][0]).toUpperCase();
  }
  // ── Render ─────────────────────────────────────────────────────────
  _renderStatusSection() {
    const t = this.selectedStatus.length > 0;
    return l`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearStatus}>
          ${this.t("clearAll", "Clear all")}
        </button>

        <span class="section-label">${this.t("approvalStatus", "Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition", "Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${Bs.map((e) => ({
      ...e,
      label: this.t(e.labelKey, e.label)
    }))}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @sfx-change=${this._handleStatusOperator}
        ></sfx-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${rs.map(
      (e) => l`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @sfx-toggle=${() => this._toggleStatus(e.value)}
                >${this.t(e.labelKey, e.label)}</sfx-checkbox
              >
            `
    )}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${ur.map(
      (e) => l`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @sfx-toggle=${() => this._toggleStatus(e.value)}
              >
                <span class="status-icon-label">
                  <sfx-icon
                    name=${e.icon}
                    .size=${16}
                    ${O({ color: e.iconColor })}
                  ></sfx-icon>
                  ${this.t(e.labelKey, e.label)}
                </span>
              </sfx-checkbox>
            `
    )}
        </div>
      </div>
    `;
  }
  _renderUserItem(t, e, s) {
    return l`
      <div class="user-item" @click=${s}>
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="user-avatar">
          ${t.avatarUrl ? l`<img src=${t.avatarUrl} alt="" />` : l`<span>${this._getInitials(t)}</span>`}
        </span>
        <span class="user-text">
          <span class="user-name">${t.name}</span>
          ${t.email ? l`<span class="user-email">${t.email}</span>` : g}
        </span>
      </div>
    `;
  }
  _renderUserSelectedChips(t, e, s) {
    return e.length === 0 ? g : l`
      <div class="chips-wrap">
        ${e.map((i) => {
      const r = t.find((o) => o.uuid === i);
      return r ? l`
            <div class="chip">
              <span class="user-chip-avatar">
                ${r.avatarUrl ? l`<img src=${r.avatarUrl} alt="" />` : l`<span>${this._getInitials(r)}</span>`}
              </span>
              <span class="chip-label">${r.name}</span>
              <button class="chip-remove" @click=${() => s(i)}>
                <sfx-icon name="close" .size=${10}></sfx-icon>
              </button>
            </div>
          ` : g;
    })}
      </div>
    `;
  }
  _renderUserPickerSection(t) {
    const e = t.selectedValues.length > 0, s = this._filterUsers(t.users, t.search);
    return l`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!e} @click=${t.onClear}>
          ${this.t("clearAll", "Clear all")}
        </button>

        <span class="section-label">${t.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition", "Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${Bs.map((i) => ({
      ...i,
      label: this.t(i.labelKey, i.label)
    }))}
          .value=${t.operator}
          @sfx-change=${t.onOperatorChange}
        ></sfx-radio-group>

        ${this._renderUserSelectedChips(t.users, t.selectedValues, t.onToggle)}

        <div class="search-wrapper mt-12">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${t.searchPlaceholder}
            .value=${t.search}
            @input=${t.onSearchInput}
          />
          ${t.search ? l`
                <button class="search-clear" @click=${t.onSearchClear}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              ` : g}
        </div>

        <div class="options-list users-list">
          ${s.length === 0 ? l`<div class="no-results">${this.t("noUsersFound", "No users found")}</div>` : s.map(
      (i) => this._renderUserItem(
        i,
        t.selectedValues.includes(i.uuid),
        () => t.onToggle(i.uuid)
      )
    )}
        </div>
      </div>
    `;
  }
  _renderApproverSection() {
    return this._renderUserPickerSection({
      title: this.t("approver", "Approver"),
      searchPlaceholder: this.t("searchApproverPlaceholder", "Search approvers"),
      users: this.approverUsers,
      selectedValues: this.approverValues,
      operator: this.approverOperator,
      search: this._approverSearch,
      onClear: () => this._clearApprover(),
      onOperatorChange: (t) => this._handleApproverOperator(t),
      onSearchInput: (t) => this._onApproverSearchInput(t),
      onSearchClear: () => this._clearApproverSearch(),
      onToggle: (t) => this._toggleApprover(t)
    });
  }
  _renderRequesterSection() {
    return this._renderUserPickerSection({
      title: this.t("requester", "Requester"),
      searchPlaceholder: this.t("searchRequesterPlaceholder", "Search requesters"),
      users: this.requesterUsers,
      selectedValues: this.requesterValues,
      operator: this.requesterOperator,
      search: this._requesterSearch,
      onClear: () => this._clearRequester(),
      onOperatorChange: (t) => this._handleRequesterOperator(t),
      onSearchInput: (t) => this._onRequesterSearchInput(t),
      onSearchClear: () => this._clearRequesterSearch(),
      onToggle: (t) => this._toggleRequester(t)
    });
  }
  _renderDueDateSection() {
    const t = !!this.dueDatePreset || !!this.dueDateFrom || !!this.dueDateTo;
    return l`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearDueDate}>
          ${this.t("clearAll", "Clear all")}
        </button>

        <span class="section-label">${this.t("dueDate", "Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <sfx-radio-group
          clearable
          .options=${rs.map((e) => ({ ...e, label: this.t(e.labelKey, e.label) }))}
          .value=${this.dueDatePreset === ue || this.dueDatePreset === fe ? this.dueDatePreset : ""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <sfx-radio-group
          clearable
          columns="2"
          .options=${di.map((e) => ({
      ...e,
      label: this.t(e.labelKey, e.label)
    }))}
          .value=${this.dueDatePreset !== ue && this.dueDatePreset !== fe ? this.dueDatePreset : ""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs ? l`
              <div class="grid-2 mt-12">
                ${this.dueDatePreset !== "before" ? l`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("startDate", "Start date")}</span>
                        <input
                          class="filter-input"
                          type="date"
                          .value=${this.dueDateFrom}
                          @change=${this._handleDueDateFrom}
                        />
                      </div>
                    ` : g}
                ${this.dueDatePreset !== "after" && this.dueDatePreset !== "specific" ? l`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("endDate", "End date")}</span>
                        <input
                          class="filter-input"
                          type="date"
                          .value=${this.dueDateTo}
                          @change=${this._handleDueDateTo}
                        />
                      </div>
                    ` : g}
              </div>
            ` : g}
      </div>
    `;
  }
  render() {
    return l`
      <div class="filter-content">
        ${this._renderStatusSection()}
        ${this._showApproverSection ? l`<div class="separator"></div>
              ${this._renderApproverSection()}` : g}
        ${this._showRequesterSection ? l`<div class="separator"></div>
              ${this._renderRequesterSection()}` : g}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `;
  }
};
q.styles = [
  xe,
  Me,
  T`
      .options-list.short {
        max-height: none;
      }
      .date-input-col {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .date-input-col input[type='date'] {
        width: 100%;
      }
      .condition-label {
        font-weight: 500;
        margin-bottom: 8px;
      }
      .mt-12 {
        margin-top: 12px;
      }
      .status-icon-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .users-list {
        max-height: 220px;
        overflow-y: auto;
        overscroll-behavior: contain;
      }
      .user-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }
      .user-item:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .user-avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        overflow: hidden;
        font-size: 0.75rem;
        font-weight: 500;
      }
      .user-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .user-text {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        line-height: 1.2;
      }
      .user-name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .user-email {
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .user-chip-avatar {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        flex-shrink: 0;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        overflow: hidden;
        font-size: 0.625rem;
        font-weight: 500;
      }
      .user-chip-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `
];
Z([
  d({ attribute: !1 })
], q.prototype, "t", 2);
Z([
  d({ type: Array })
], q.prototype, "selectedStatus", 2);
Z([
  d()
], q.prototype, "statusOperator", 2);
Z([
  d({ type: Array })
], q.prototype, "approverValues", 2);
Z([
  d()
], q.prototype, "approverOperator", 2);
Z([
  d({ type: Array })
], q.prototype, "approverUsers", 2);
Z([
  d({ type: Array })
], q.prototype, "requesterValues", 2);
Z([
  d()
], q.prototype, "requesterOperator", 2);
Z([
  d({ type: Array })
], q.prototype, "requesterUsers", 2);
Z([
  d()
], q.prototype, "dueDateKind", 2);
Z([
  d()
], q.prototype, "dueDatePreset", 2);
Z([
  d()
], q.prototype, "dueDateFrom", 2);
Z([
  d()
], q.prototype, "dueDateTo", 2);
Z([
  x()
], q.prototype, "_approverSearch", 2);
Z([
  x()
], q.prototype, "_requesterSearch", 2);
q = Z([
  P("ap-filter-approval")
], q);
var Po = Object.defineProperty, Do = Object.getOwnPropertyDescriptor, ke = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Do(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Po(e, s, r), r;
};
const zo = 300;
function Mo(t) {
  return t.filter(
    (e) => e.toLowerCase().includes("*") || !t.some(
      (s) => s.toLowerCase().includes("*") && e.toLowerCase().startsWith(s.slice(0, -1).toLowerCase())
    )
  );
}
let ge = class extends L {
  constructor() {
    super(...arguments), this.selected = [], this.t = (t, e) => typeof e == "string" ? e : t, this._search = "", this._debouncedSearch = "", this._products = [], this._isLoading = !1, this._showAddList = !1, this._addListText = "";
  }
  connectedCallback() {
    super.connectedCallback(), this.updateComplete.then(() => {
      var t;
      return (t = this._searchInput) == null ? void 0 : t.focus();
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._debounceTimer && clearTimeout(this._debounceTimer);
  }
  get _isSearching() {
    return this._debouncedSearch.length > 0;
  }
  _emit(t) {
    const e = Mo(t);
    this.dispatchEvent(
      new CustomEvent("filter-change", {
        detail: {
          key: b.PRODUCT_REF,
          values: e,
          operator: E.IS
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _toggle(t) {
    const s = this.selected.includes(t) ? this.selected.filter((i) => i !== t) : [...this.selected, t];
    this._emit(s);
  }
  _remove(t) {
    this._emit(this.selected.filter((e) => e !== t));
  }
  _clearAll() {
    this._emit([]), this._search = "", this._debouncedSearch = "", this._products = [];
  }
  _onSearchInput(t) {
    const e = t.target.value;
    this._search = e, this._debounceTimer && clearTimeout(this._debounceTimer), this._debounceTimer = setTimeout(() => {
      const s = e.trim().toLowerCase();
      this._debouncedSearch = s, s ? this._fetchProducts(s) : (this._products = [], this._isLoading = !1);
    }, zo);
  }
  _clearSearch() {
    this._search = "", this._debouncedSearch = "", this._products = [], this._isLoading = !1, this._debounceTimer && clearTimeout(this._debounceTimer);
  }
  async _fetchProducts(t) {
    if (this.apiClient) {
      this._isLoading = !0;
      try {
        const e = await this.apiClient.get("/products", {
          q: `reference~^${t}`
        });
        this._debouncedSearch === t && (this._products = e.products ?? []);
      } catch {
        this._debouncedSearch === t && (this._products = []);
      } finally {
        this._debouncedSearch === t && (this._isLoading = !1);
      }
    }
  }
  // ── Add List Dialog ──
  _openAddList() {
    this._showAddList = !0, this._addListText = "";
  }
  _closeAddList() {
    this._showAddList = !1, this._addListText = "";
  }
  _onAddListInput(t) {
    this._addListText = t.target.value;
  }
  _onAddListKeydown(t) {
    t.key === "Enter" && !t.shiftKey && t.stopPropagation();
  }
  _submitAddList() {
    const t = this._addListText.split(`
`).map((e) => e.trim()).filter((e) => e !== "");
    if (t.length > 0) {
      const e = new Set(this.selected), s = [...this.selected, ...t.filter((i) => !e.has(i))];
      this._emit(s);
    }
    this._closeAddList();
  }
  _renderProductItem(t) {
    const e = this.selected.includes(t);
    return l`
      <div class="product-item" @click=${() => this._toggle(t)}>
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="product-name">${t}</span>
      </div>
    `;
  }
  render() {
    const t = this.selected.length === 0;
    return l`
      <div class="filter-content">
        <div class="filter-header">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="product-search"
            type="text"
            .placeholder=${this.t("searchProductRefsPlaceholder", "Search product references")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search ? l`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              ` : g}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching && !t ? l`
              <div class="section-header">
                <span class="section-label"></span>
                <button class="clear-btn" @click=${this._clearAll}>
                  ${this.t("clearAll", "Clear all")}
                </button>
              </div>
            ` : g}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching && this.selected.length > 0 ? l`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected", "Selected")}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t("clearAll", "Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(
      (e) => l`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${() => this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `
    )}
                </div>
              </div>
            ` : g}

        <!-- Search results -->
        ${this._isSearching ? l`
              <div class="filter-section">
                <span class="section-label"
                  >${this.t("productReferences", "Product references")}</span
                >
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length > 1 ? this._renderProductItem(`${this._search.trim()}*`) : g}
                  ${this._products.map(({ ref: e }) => this._renderProductItem(e))}
                </div>
              </div>
            ` : g}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching ? g : l`
              <div class="placeholder">
                ${t ? l`<sfx-icon
                      name="box"
                      .size=${40}
                      ${O({
      color: "var(--sfx-border, oklch(92.86% 0.009 247.92))",
      "margin-bottom": "4px"
    })}
                    ></sfx-icon>` : g}
                <div class="placeholder-title">
                  ${this.t("findProductRef", "Find product reference")}
                </div>
                <div class="placeholder-text">
                  ${this.t(
      "productRefSearchHint",
      "By using the search or pressing the button below to import the product references list."
    )}
                </div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <sfx-icon name="plus" .size=${14}></sfx-icon>
                  ${this.t("addList", "Add list")}
                </button>
              </div>
            `}

        <!-- Loading skeleton -->
        ${this._isLoading ? l`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            ` : g}

        <!-- No results -->
        ${this._isSearching && !this._isLoading && this._products.length === 0 ? l`<div class="no-results">${this.t("noResultsFound", "No results found")}</div>` : g}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList ? l`
            <div
              class="dialog-overlay"
              @click=${(e) => {
      e.target === e.currentTarget && this._closeAddList();
    }}
            >
              <div class="dialog">
                <div class="dialog-header">
                  ${this.t("addProductRefsList", "Add products references list")}
                </div>
                <div class="dialog-body">
                  <div class="info-alert" ${O({ "margin-top": "0" })}>
                    <sfx-icon name="info" .size=${14}></sfx-icon>
                    <span
                      >${this.t(
      "wildcardInfo",
      'Use "*" to select all references starting with your text.'
    )}</span
                    >
                  </div>
                  <label
                    class="input-label"
                    ${O({
      "margin-bottom": "0",
      "font-weight": "400",
      color: "var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89))"
    })}
                    >${this.t("productReferences", "Product references")}</label
                  >
                  <textarea
                    class="dialog-textarea"
                    .placeholder=${this.t(
      "productRefsTextareaPlaceholder",
      "Enter product references separated by new lines"
    )}
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>
                    ${this.t("cancel", "Cancel")}
                  </button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>
                    ${this.t("continue", "Continue")}
                  </button>
                </div>
              </div>
            </div>
          ` : g}
    `;
  }
};
ge.styles = [
  xe,
  Me,
  T`
      .product-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 8px;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        transition: background 150ms;
      }

      .product-item:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .product-name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* Sticky search within popover scroll */
      .filter-header {
        position: sticky;
        top: -10px;
        z-index: 2;
        background: var(--sfx-card, oklch(1 0 0));
        margin: -10px -8px 10px;
      }

      .filter-header .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        pointer-events: none;
      }

      .product-search {
        width: 100%;
        padding: 8px 32px 8px 32px;
        border: none;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: transparent;
        outline: none;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
      }

      .product-search::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        font-weight: 400;
      }

      .search-clear {
        top: 50%;
        transform: translateY(-50%);
        right: 8px;
      }

      .options-list {
        max-height: none;
        overflow-y: visible;
      }

      .placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 16px 8px 20px;
        gap: 4px;
      }

      .placeholder-title {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }

      .placeholder-text {
        font-size: 0.8125rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }

      .add-list-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
        padding: 6px 14px;
        border: none;
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        background: none;
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        cursor: pointer;
        transition: background 150ms;
      }

      .add-list-btn:hover {
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      }

      /* Add list dialog overlay */
      .dialog-overlay {
        position: fixed;
        inset: 0;
        z-index: 1360;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .dialog {
        background: var(--sfx-card, oklch(1 0 0));
        border-radius: var(--sfx-radius, 8px);
        box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
        width: 420px;
        max-width: 90vw;
        padding: 0;
      }

      .dialog-header {
        padding: 16px 20px;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        text-align: center;
      }

      .dialog-body {
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .dialog-body .info-alert {
        margin-bottom: 14px;
      }

      .dialog-textarea {
        width: 100%;
        min-height: 150px;
        max-height: 300px;
        padding: 8px 10px;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-background, oklch(1 0 0));
        resize: vertical;
        outline: none;
      }

      .dialog-textarea:focus {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }

      .dialog-textarea::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }

      .dialog-footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        padding: 12px 20px;
        border-top: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }

      .dialog-btn {
        padding: 8px 16px;
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        cursor: pointer;
        transition: background 150ms;
      }

      .dialog-btn-cancel {
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }

      .dialog-btn-cancel:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }

      .dialog-btn-primary {
        border: none;
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
      }

      .dialog-btn-primary:hover {
        opacity: 0.9;
      }

      .loading-skeleton {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px 0;
      }

      .skeleton-item {
        height: 32px;
        border-radius: var(--sfx-radius-sm, 6px);
        background: linear-gradient(
          90deg,
          var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
          #e8e8ea 50%,
          var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }

      @keyframes shimmer {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .skeleton-item {
          animation: none;
        }
      }

      .wildcard-tooltip {
        font-size: 0.75rem;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        margin-left: 4px;
      }
    `
];
ke([
  d({ type: Array })
], ge.prototype, "selected", 2);
ke([
  d({ attribute: !1 })
], ge.prototype, "apiClient", 2);
ke([
  d({ attribute: !1 })
], ge.prototype, "t", 2);
ke([
  lt(".product-search")
], ge.prototype, "_searchInput", 2);
ke([
  x()
], ge.prototype, "_search", 2);
ke([
  x()
], ge.prototype, "_debouncedSearch", 2);
ke([
  x()
], ge.prototype, "_products", 2);
ke([
  x()
], ge.prototype, "_isLoading", 2);
ke([
  x()
], ge.prototype, "_showAddList", 2);
ke([
  x()
], ge.prototype, "_addListText", 2);
ge = ke([
  P("ap-filter-product-ref")
], ge);
var Ro = Object.defineProperty, No = Object.getOwnPropertyDescriptor, R = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? No(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Ro(e, s, r), r;
};
let M = class extends L {
  constructor() {
    super(...arguments), this.totalCount = 0, this.totalFolderCount = 0, this.isLoading = !1, this.showUpload = !1, this.showCreateFolder = !1, this.showFilters = !0, this.countLabel = "", this.sortBy = "created_at", this.sortDirection = "desc", this.sortOptions = As, this.filters = {
      metadata: { pinned: [], visible: [], applied: {} },
      pinned: [],
      visible: [],
      applied: {}
    }, this.labels = [], this.tags = [], this.fileTypes = [], this.metadataFields = [], this.pinnedFilters = [], this.forcedFilterKeys = [], this.approverUsers = [], this.requesterUsers = [], this.t = (t, e) => typeof e == "string" ? e : t, this._showDropdown = !1, this._showMetadataSelector = !1, this._openFilter = null, this._openMetadataField = null, this._externalTrigger = !1, this._externalLeft = null, this._externalTop = null, this._outsideClickHandler = (t) => {
      const e = t.composedPath();
      if (this._externalTrigger && e.some(
        (o) => {
          var a;
          return o instanceof HTMLElement && o.classList.contains("chip") && ((a = o.closest) == null ? void 0 : a.call(o, "ap-filters-bar"));
        }
      ))
        return;
      const s = this._openFilter && e.some((r) => r instanceof HTMLElement ? r.classList.contains("popover-anchor") || r.classList.contains("popover-panel") : !1), i = (this._showDropdown || this._showMetadataSelector) && e.some(
        (r) => r instanceof HTMLElement && (r.classList.contains("dropdown-menu") || r.classList.contains("filter-dropdown") || r.classList.contains("metadata-selector-overlay"))
      );
      s || i || (this._openFilter && (this._openFilter = null, this._openMetadataField = null, this._externalTrigger = !1, this._externalLeft = null, this._externalTop = null), (this._showDropdown || this._showMetadataSelector) && (this._showDropdown = !1, this._showMetadataSelector = !1));
    };
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("mousedown", this._outsideClickHandler);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("mousedown", this._outsideClickHandler);
  }
  updated(t) {
    if ((t.has("_openFilter") || t.has("_externalTrigger") || t.has("_openMetadataField")) && this.dispatchEvent(
      new CustomEvent("filter-panel-change", {
        detail: {
          key: this._externalTrigger ? this._openFilter : null,
          metadataFieldKey: this._externalTrigger ? this._openMetadataField : null
        },
        bubbles: !0,
        composed: !0
      })
    ), this._externalTrigger && this._externalLeft != null && (t.has("_openFilter") || t.has("_externalLeft") || t.has("_openMetadataField"))) {
      const e = this.renderRoot.querySelector(".popover-panel");
      if (e) {
        const s = e.closest(".popover-anchor"), i = s ? s.offsetWidth : this.offsetWidth, r = e.offsetWidth;
        this._externalLeft + r > i - 8 && (e.style.left = `${Math.max(8, i - r - 8)}px`);
      }
    }
  }
  _closeAllDropdowns() {
    var t;
    this._showDropdown = !1, this._showMetadataSelector = !1, this._openFilter = null, this._openMetadataField = null, this._externalTrigger = !1, this._externalLeft = null, this._externalTop = null, (t = this._sortDropdown) == null || t.close();
  }
  _handleUploadClick() {
    this.dispatchEvent(new CustomEvent("upload-click", { bubbles: !0, composed: !0 }));
  }
  _handleCreateFolderClick() {
    this.dispatchEvent(new CustomEvent("create-folder-click", { bubbles: !0, composed: !0 }));
  }
  _toggleDropdown() {
    const t = this._showDropdown;
    this._closeAllDropdowns(), this._showDropdown = !t;
  }
  _toggleMetadataSelector() {
    this._showMetadataSelector = !this._showMetadataSelector;
  }
  /** Close any open filter panel */
  closeFilterPanel() {
    this._openFilter = null, this._openMetadataField = null, this._externalTrigger = !1, this._externalLeft = null, this._externalTop = null;
  }
  /** Open a specific filter panel (also used programmatically by parent) */
  openFilterPanel(t, e = !1, s, i) {
    if (e && this._externalTrigger && this._openFilter === t && !this._openMetadataField) {
      this.closeFilterPanel();
      return;
    }
    const r = t === "approval" && this._isApprovalActive();
    if (!e && !this._isFilterActive(t) && !r) {
      this._showDropdown = !1, this._showMetadataSelector = !1, this.dispatchEvent(
        new CustomEvent("filter-pending", {
          detail: { key: t },
          bubbles: !0,
          composed: !0
        })
      );
      return;
    }
    this._showDropdown = !1, this._showMetadataSelector = !1, this._openFilter = t, this._openMetadataField = null, this._externalTrigger = e, this._externalLeft = s ?? null, this._externalTop = i ?? null;
  }
  _handleSortOpen() {
    this._showDropdown = !1, this._showMetadataSelector = !1, this._openFilter = null, this._openMetadataField = null, this._externalTrigger = !1, this._externalLeft = null, this._externalTop = null;
  }
  _handleSort(t) {
    this.dispatchEvent(
      new CustomEvent("sort-change", { detail: t.detail, bubbles: !0, composed: !0 })
    );
  }
  _toggleSortDirection() {
    const t = this.sortDirection === "asc" ? "desc" : "asc";
    this.dispatchEvent(
      new CustomEvent("sort-direction-change", {
        detail: { value: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _isFilterActive(t) {
    return t in this.filters.applied && this.filters.applied[t] !== void 0;
  }
  /** True if any approval sub-key (status / approver / requester / due-date) is applied. */
  _isApprovalActive() {
    const t = this.filters.applied;
    return C.STATUS in t || C.APPROVER in t || C.REQUESTOR in t || C.DUE_DATE in t;
  }
  _handleFilterChange(t) {
    t.stopPropagation();
    const { key: e, values: s, operator: i } = t.detail;
    this.dispatchEvent(
      new CustomEvent("filter-update", {
        detail: { key: e, values: s, operator: i },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleMetadataFilterChange(t) {
    t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("metadata-filter-change", {
        detail: t.detail,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleMetadataFieldToggle(t) {
    t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("metadata-field-toggle", {
        detail: t.detail,
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleMetadataFieldSelect(t) {
    t.stopPropagation(), this._openMetadataField = t.detail.fieldKey;
  }
  _handleMetadataSelectorFieldSelect(t) {
    var s;
    t.stopPropagation();
    const e = t.detail.fieldKey;
    if (this._showMetadataSelector = !1, this._showDropdown = !1, !(e in (((s = this.filters.metadata) == null ? void 0 : s.applied) || {}))) {
      this.dispatchEvent(
        new CustomEvent("filter-pending", {
          detail: { metadataFieldKey: e },
          bubbles: !0,
          composed: !0
        })
      );
      return;
    }
    this._openFilter = "metadata", this._openMetadataField = e;
  }
  _handleMetadataPin(t) {
    t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("metadata-pin", {
        detail: t.detail,
        bubbles: !0,
        composed: !0
      })
    );
  }
  openMetadataFieldPanel(t, e = !1, s, i) {
    if (e && this._externalTrigger && this._openMetadataField === t) {
      this.closeFilterPanel();
      return;
    }
    this._showDropdown = !1, this._showMetadataSelector = !1, this._openFilter = "metadata", this._openMetadataField = t, this._externalTrigger = e, this._externalLeft = s ?? null, this._externalTop = i ?? null;
  }
  _getMetadataFieldLabel(t) {
    for (const e of this.metadataFields)
      if (`${cs[e.type] || ""}${e.key}` === t) return e.label;
    return t;
  }
  _togglePin(t, e) {
    e.stopPropagation();
    const s = this.pinnedFilters.includes(t);
    this.dispatchEvent(
      new CustomEvent("filter-pin", {
        detail: { key: t, pinned: !s },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _getFilterIcon(t) {
    const e = zt.find((s) => s.key === t);
    return (e == null ? void 0 : e.icon) || "filter";
  }
  _renderFilterContent(t) {
    var o;
    const { t: e } = this, s = this.filters.applied, i = t;
    switch (i === C.STATUS || i === C.APPROVER || i === C.REQUESTOR || i === C.DUE_DATE ? "approval" : t) {
      case "type": {
        const a = s.type;
        return l`<ap-filter-type
          .selected=${(a == null ? void 0 : a.values) || []}
          .fileTypes=${this.fileTypes}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`;
      }
      case "tags": {
        const a = s.tags;
        return l`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(a == null ? void 0 : a.values) || []}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`;
      }
      case "labels": {
        const a = s.labels;
        return l`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(a == null ? void 0 : a.values) || []}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`;
      }
      case "color": {
        const a = s.color;
        return l`<ap-filter-color
          .values=${(a == null ? void 0 : a.values) || []}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`;
      }
      case "date": {
        const a = s.date;
        return l`<ap-filter-date
          .filterKey=${"date"}
          .field=${(a == null ? void 0 : a.field) || "created"}
          .kind=${(a == null ? void 0 : a.kind) || null}
          .from=${(a == null ? void 0 : a.from) || ""}
          .to=${(a == null ? void 0 : a.to) || ""}
          .preset=${(a == null ? void 0 : a.preset) || ""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`;
      }
      case "asset_expiration": {
        const a = s.asset_expiration;
        return l`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(a == null ? void 0 : a.kind) || null}
          .from=${(a == null ? void 0 : a.from) || ""}
          .to=${(a == null ? void 0 : a.to) || ""}
          .preset=${(a == null ? void 0 : a.preset) || ""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`;
      }
      case "size": {
        const a = s.size, n = ((o = a == null ? void 0 : a.values) == null ? void 0 : o[0]) || "", [c, h] = n.split(".."), u = c ? parseFloat(c) / 1e6 : 0, f = h ? parseFloat(h) / 1e6 : 0;
        return l`<ap-filter-size
          .min=${u}
          .max=${f}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`;
      }
      case "image": {
        const a = s.image, n = a && "resolution" in a ? a : null;
        return l`<ap-filter-image
          .selectedResolution=${(n == null ? void 0 : n.resolution) || []}
          .selectedOrientation=${(n == null ? void 0 : n.orientation) || []}
          .selectedFaces=${(n == null ? void 0 : n.faces) || []}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`;
      }
      case "approval": {
        const a = s.approval_status, n = s.task_approver, c = s.task_requester, h = s.task_duedate;
        return l`<ap-filter-approval
          .selectedStatus=${(a == null ? void 0 : a.values) || []}
          .statusOperator=${(a == null ? void 0 : a.operator) || ":="}
          .approverValues=${(n == null ? void 0 : n.values) || []}
          .approverOperator=${(n == null ? void 0 : n.operator) || ":="}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(c == null ? void 0 : c.values) || []}
          .requesterOperator=${(c == null ? void 0 : c.operator) || ":="}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(h == null ? void 0 : h.kind) ?? null}
          .dueDatePreset=${(h == null ? void 0 : h.preset) || ""}
          .dueDateFrom=${(h == null ? void 0 : h.from) || ""}
          .dueDateTo=${(h == null ? void 0 : h.to) || ""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`;
      }
      case "metadata":
        return this._openMetadataField ? l`<ap-filter-metadata
            mode="field"
            .activeFieldKey=${this._openMetadataField}
            .fields=${this.metadataFields}
            .appliedMetadata=${this.filters.metadata.applied}
            .visibleFields=${this.filters.metadata.visible}
            .pinnedFields=${this.filters.metadata.pinned}
            .apiClient=${this.apiClient}
            .t=${e}
            @metadata-filter-change=${this._handleMetadataFilterChange}
            @metadata-field-toggle=${this._handleMetadataFieldToggle}
          ></ap-filter-metadata>` : l`<ap-filter-metadata
          mode="selector"
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          .pinnedFields=${this.filters.metadata.pinned}
          .apiClient=${this.apiClient}
          .t=${e}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;
      case "product_ref": {
        const a = s.product_ref;
        return l`<ap-filter-product-ref
          .selected=${(a == null ? void 0 : a.values) || []}
          .apiClient=${this.apiClient}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`;
      }
      default:
        return g;
    }
  }
  _renderFilterButton(t) {
    const { t: e } = this, s = t.key === "metadata", i = t.key === "approval", r = s ? Object.keys(this.filters.metadata.applied).length > 0 : i ? this._isApprovalActive() : this._isFilterActive(t.key), o = this.pinnedFilters.includes(t.key), a = l`
      <button
        class="filter-btn ${r ? "active" : ""} ${o ? "pinned" : ""}"
        @click=${() => s ? this._toggleMetadataSelector() : this.openFilterPanel(t.key)}
      >
        <span class="filter-btn-icon">
          <sfx-icon name=${t.icon} .size=${18}></sfx-icon>
        </span>
        <span class="filter-btn-label"> ${e(t.labelKey, t.label)} </span>
        ${s ? l`<span class="submenu-chevron"
              ><sfx-icon name="chevron-right" .size=${14}></sfx-icon
            ></span>` : l`
              <span
                class="pin-btn ${o ? "pinned" : ""}"
                title=${o ? e("unpinFilter", "Unpin filter") : e("pinFilter", "Pin filter")}
                @click=${(n) => this._togglePin(t.key, n)}
              >
                <sfx-icon name="pin" .size=${14}></sfx-icon>
              </span>
            `}
      </button>
    `;
    return s ? l`
      <div class="filter-btn-wrapper">
        ${a}
        ${this._showMetadataSelector ? l`
              <div class="metadata-selector-overlay">
                <ap-filter-metadata
                  mode="selector"
                  .fields=${this.metadataFields}
                  .appliedMetadata=${this.filters.metadata.applied}
                  .visibleFields=${this.filters.metadata.visible}
                  .pinnedFields=${this.filters.metadata.pinned}
                  .t=${this.t}
                  @metadata-field-select=${this._handleMetadataSelectorFieldSelect}
                  @metadata-field-toggle=${this._handleMetadataFieldToggle}
                  @metadata-pin=${this._handleMetadataPin}
                ></ap-filter-metadata>
              </div>
            ` : g}
      </div>
    ` : a;
  }
  render() {
    const { t } = this, e = Object.keys(this.filters.applied).length + Object.keys(this.filters.metadata.applied).length;
    return l`
      <div class="toolbar-row">
        ${this.isLoading ? l`<span class="count-skeleton"></span>` : l`<span class="count"
              >${this.countLabel || [
      this.totalFolderCount > 0 ? t("folderCount", {
        count: this.totalFolderCount,
        defaultValue_one: "{{count}} folder",
        defaultValue_other: "{{count}} folders"
      }) : "",
      this.totalCount > 0 || this.totalFolderCount === 0 ? t("assetCount", {
        count: this.totalCount,
        defaultValue_one: "{{count}} asset",
        defaultValue_other: "{{count}} assets"
      }) : ""
    ].filter(Boolean).join(", ")}</span
            >`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters ? l`
                <div class="filter-dropdown">
                  <button
                    class="add-btn ${this._showDropdown ? "open" : ""}"
                    @click=${this._toggleDropdown}
                  >
                    <sfx-icon name="filter" .size=${16}></sfx-icon>
                    ${t("filters", "Filters")}
                    ${e > 0 ? l`<span class="filter-count">${e}</span>` : l`<sfx-icon name="chevron-down" .size=${16}></sfx-icon>`}
                  </button>
                  ${this._showDropdown ? l`
                        <div class="dropdown-menu">
                          ${zt.filter(
      (s) => !this.forcedFilterKeys.includes(s.key)
    ).map((s) => this._renderFilterButton(s))}
                        </div>
                      ` : g}
                </div>
              ` : g}
          <sfx-dropdown
            variant="borderless"
            .label=${t("sort", "Sort")}
            .value=${this.sortBy}
            .options=${this.sortOptions.map((s) => ({ ...s, label: t(s.labelKey, s.label) }))}
            @sfx-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></sfx-dropdown>
          <button
            class="icon-btn"
            @click=${this._toggleSortDirection}
            aria-label=${this.sortDirection === "asc" ? t("sortAscending", "Sort ascending") : t("sortDescending", "Sort descending")}
            title=${this.sortDirection === "asc" ? t("ascending", "Ascending") : t("descending", "Descending")}
          >
            <sfx-icon
              name=${this.sortDirection === "asc" ? "sort-asc" : "sort-desc"}
              .size=${18}
            ></sfx-icon>
          </button>
          ${this.showCreateFolder ? l`
                <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
                  <sfx-icon name="folder-plus" .size=${16}></sfx-icon>
                  New folder
                </button>
              ` : g}
          ${this.showUpload ? l`
                <button class="upload-btn" @click=${this._handleUploadClick}>
                  <sfx-icon name="upload" .size=${16}></sfx-icon>
                  ${t("upload", "Upload")}
                </button>
              ` : g}
        </div>
      </div>
      ${this._openFilter ? l`
            <div
              class="popover-anchor ${this._externalTrigger ? "external" : ""}"
              ${O(
      this._externalTrigger && this._externalTop != null ? { top: `${this._externalTop + 4}px` } : null
    )}
            >
              ${this._externalTrigger ? g : l`
                    <div class="anchor-tab">
                      ${this._openFilter === "metadata" && this._openMetadataField ? l`
                            <button
                              class="anchor-back"
                              @click=${(s) => {
      s.stopPropagation(), this._openMetadataField = null;
    }}
                              title="Back to fields"
                            >
                              <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                            </button>
                            ${this._getMetadataFieldLabel(this._openMetadataField)}
                          ` : l`
                            <sfx-icon
                              name=${this._getFilterIcon(this._openFilter)}
                              .size=${16}
                            ></sfx-icon>
                            ${t(
      Dt[this._openFilter] ?? this._openFilter,
      ut[this._openFilter] || this._openFilter
    )}
                          `}
                      <button
                        class="anchor-close"
                        @click=${() => {
      this._openFilter = null, this._openMetadataField = null, this._externalTrigger = !1, this._externalLeft = null, this._externalTop = null;
    }}
                        title="Close"
                      >
                        <sfx-icon name="close" .size=${14}></sfx-icon>
                      </button>
                    </div>
                  `}
              <div
                class="popover-panel"
                ${O(
      this._externalTrigger && this._externalLeft != null ? { left: `${this._externalLeft}px` } : null
    )}
              >
                ${this._renderFilterContent(this._openFilter)}
              </div>
            </div>
          ` : g}
    `;
  }
};
M.styles = T`
    :host {
      display: block;
      padding: 8px 20px 6px;
    }
    .toolbar-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
    }
    .count-skeleton {
      display: inline-block;
      width: 80px;
      height: 14px;
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .count-skeleton {
        animation: none;
      }
    }
    .spacer {
      flex: 1;
    }
    .controls {
      display: flex;
      align-items: center;
      gap: 0;
      min-width: 0;
    }

    /* Filter dropdown trigger */
    .filter-dropdown {
      position: relative;
      display: inline-block;
    }
    .add-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 36px;
      padding: 0 14px;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: none;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .add-btn:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .add-btn sfx-icon {
      transition: transform 200ms;
    }
    .add-btn.open sfx-icon:last-child {
      transform: rotate(180deg);
    }
    .add-btn .filter-count {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      border-radius: 9px;
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      color: var(--sfx-primary-foreground, oklch(1 0 0));
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1;
    }
    .dropdown-menu {
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      z-index: 50;
      min-width: 480px;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow:
        0 10px 25px -5px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      padding: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      overscroll-behavior: contain;
    }
    .filter-btn-wrapper {
      position: relative;
      display: flex;
    }
    .filter-btn-wrapper .filter-btn {
      flex: 1;
    }
    .metadata-selector-overlay {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 60;
      width: 280px;
      max-height: 400px;
      overflow-y: auto;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow:
        0 10px 25px -5px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    /* Filter button in dropdown */
    .filter-btn {
      display: flex;
      align-items: center;
      text-align: left;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.9375rem;
      cursor: pointer;
      transition: all 150ms;
      min-height: 40px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .filter-btn:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn.active {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .filter-btn.active:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn.pinned {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .filter-btn.pinned:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn-icon {
      display: flex;
      align-items: center;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .filter-btn.active .filter-btn-icon,
    .filter-btn.pinned .filter-btn-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn-label {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }
    .filter-btn-label sfx-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .pin-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-radius: 4px;
      flex-shrink: 0;
      margin-left: auto;
      transition: all 150ms;
      opacity: 0;
    }
    .filter-btn:hover .pin-btn,
    .pin-btn.pinned {
      opacity: 1;
    }
    .pin-btn:hover {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .pin-btn.pinned {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .submenu-chevron {
      display: flex;
      align-items: center;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: auto;
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .upload-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
      padding: 6px 14px;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: var(--sfx-primary, oklch(0.65 0.19 258));
      color: var(--sfx-primary-foreground, #fff);
      cursor: pointer;
      white-space: nowrap;
      transition: opacity 150ms;
    }
    .upload-btn:hover {
      opacity: 0.9;
    }
    .upload-btn:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.65 0.19 258));
      outline-offset: 2px;
    }

    .new-folder-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
      padding: 6px 14px;
      border: 1px solid var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .new-folder-btn:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .new-folder-btn:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }

    /* Popover anchor row */
    .popover-anchor {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      display: flex;
      align-items: flex-start;
      padding: 0 20px;
      z-index: 50;
    }
    .anchor-tab {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-bottom: 1px solid var(--sfx-card, oklch(1 0 0));
      border-radius: 8px 8px 0 0;
      background: var(--sfx-card, oklch(1 0 0));
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      position: relative;
      z-index: 51;
      margin-bottom: -1px;
    }
    .anchor-close {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-close:hover {
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .anchor-back {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-back:hover {
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .popover-panel {
      position: absolute;
      top: 100%;
      left: 20px;
      z-index: 50;
      width: 360px;
      max-height: 400px;
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: 0 8px 8px 8px;
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .popover-anchor.external {
      padding: 0;
      top: 0;
    }
    .popover-anchor.external .popover-panel {
      border-radius: 8px;
      top: 0;
    }
  `;
R([
  d({ type: Number })
], M.prototype, "totalCount", 2);
R([
  d({ type: Number })
], M.prototype, "totalFolderCount", 2);
R([
  d({ type: Boolean })
], M.prototype, "isLoading", 2);
R([
  d({ type: Boolean })
], M.prototype, "showUpload", 2);
R([
  d({ type: Boolean })
], M.prototype, "showCreateFolder", 2);
R([
  d({ type: Boolean })
], M.prototype, "showFilters", 2);
R([
  d()
], M.prototype, "countLabel", 2);
R([
  d()
], M.prototype, "sortBy", 2);
R([
  d()
], M.prototype, "sortDirection", 2);
R([
  d({ type: Array })
], M.prototype, "sortOptions", 2);
R([
  d({ type: Object })
], M.prototype, "filters", 2);
R([
  d({ type: Array })
], M.prototype, "labels", 2);
R([
  d({ type: Array })
], M.prototype, "tags", 2);
R([
  d({ type: Array })
], M.prototype, "fileTypes", 2);
R([
  d({ type: Array })
], M.prototype, "metadataFields", 2);
R([
  d({ type: Array })
], M.prototype, "pinnedFilters", 2);
R([
  d({ type: Array })
], M.prototype, "forcedFilterKeys", 2);
R([
  d({ type: Array })
], M.prototype, "approverUsers", 2);
R([
  d({ type: Array })
], M.prototype, "requesterUsers", 2);
R([
  d({ attribute: !1 })
], M.prototype, "apiClient", 2);
R([
  d({ attribute: !1 })
], M.prototype, "t", 2);
R([
  lt("sfx-dropdown")
], M.prototype, "_sortDropdown", 2);
R([
  x()
], M.prototype, "_showDropdown", 2);
R([
  x()
], M.prototype, "_showMetadataSelector", 2);
R([
  x()
], M.prototype, "_openFilter", 2);
R([
  x()
], M.prototype, "_openMetadataField", 2);
R([
  x()
], M.prototype, "_externalTrigger", 2);
R([
  x()
], M.prototype, "_externalLeft", 2);
R([
  x()
], M.prototype, "_externalTop", 2);
M = R([
  P("ap-content-toolbar")
], M);
var Uo = Object.defineProperty, jo = Object.getOwnPropertyDescriptor, J = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? jo(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Uo(e, s, r), r;
};
let G = class extends L {
  constructor() {
    super(...arguments), this.appliedFilters = {}, this.appliedMetadata = {}, this.forcedFilters = {}, this.metadataFields = [], this.pinnedFilters = [], this.pinnedMetadataFields = [], this.tags = [], this.labels = [], this.approverUsers = [], this.requesterUsers = [], this.activeFilter = null, this.activeMetadataField = null, this.pendingFilter = null, this.pendingMetadataField = null, this.t = (t, e) => typeof e == "string" ? e : t;
  }
  _mapTypeLabel(t) {
    var i;
    const e = (i = is.find((r) => r.value === t)) == null ? void 0 : i.label;
    if (e) return e;
    const s = t.indexOf("_");
    return s !== -1 ? t.slice(s + 1).toUpperCase() : t;
  }
  _getSizeSummary(t) {
    if (t.values.length === 0) return "";
    const e = t.values[0], [s, i] = e.split(".."), r = s ? parseFloat(s) : null, o = i ? parseFloat(i) : null, a = (n) => n >= 1e3 ? `${(n / 1e3).toFixed(n % 1e3 === 0 ? 0 : 1)} GB` : `${n} MB`;
    return r !== null && o !== null ? `${a(r)} – ${a(o)}` : r !== null ? `> ${a(r)}` : o !== null ? `< ${a(o)}` : "";
  }
  _getFilterSummary(t, e) {
    if (t.type === "string") {
      const s = t;
      if (s.values.length === 0) return "";
      if (e === b.SIZE) return this._getSizeSummary(s);
      if (e === b.COLOR) {
        const o = s.values.map((a) => a.split(" ")[0]).filter(Boolean);
        return o.length === 0 ? "" : o.length === 1 ? o[0] : `${o[0]} +${o.length - 1}`;
      }
      const i = (o) => o === ue ? this.t("empty", "Empty") : o === fe ? this.t("notEmpty", "Not empty") : null, r = e === b.TYPE ? (o) => i(o) ?? this._mapTypeLabel(o) : e === b.TAGS ? (o) => {
        var a;
        return i(o) ?? (((a = this.tags.find((n) => n.sid === o)) == null ? void 0 : a.label) || o);
      } : e === b.LABELS ? (o) => {
        var a;
        return i(o) ?? (((a = this.labels.find((n) => n.sid === o)) == null ? void 0 : a.name) || o);
      } : e === C.APPROVER ? (o) => {
        var a;
        return i(o) ?? (((a = this.approverUsers.find((n) => n.uuid === o)) == null ? void 0 : a.name) || o);
      } : e === C.REQUESTOR ? (o) => {
        var a;
        return i(o) ?? (((a = this.requesterUsers.find((n) => n.uuid === o)) == null ? void 0 : a.name) || o);
      } : (o) => i(o) ?? o;
      return s.values.length === 1 ? r(s.values[0]) : `${r(s.values[0])} +${s.values.length - 1}`;
    }
    if (t.type === "date")
      return e === C.DUE_DATE ? this._getDuedateSummary(t) : this._getDateSummary(t);
    if (typeof t == "object" && "resolution" in t) {
      const s = t, i = [...s.resolution, ...s.orientation, ...s.faces];
      return i.length === 0 ? "" : i.length === 1 ? i[0] : `${i[0]} +${i.length - 1}`;
    }
    return "";
  }
  _getDuedateSummary(t) {
    const e = (i) => i.split("T")[0], s = t.preset || "";
    if (s === ue) return this.t("empty", "Empty");
    if (s === fe) return this.t("notEmpty", "Not empty");
    if (t.kind === "preset") {
      const i = di.find((r) => r.value === s);
      return i ? this.t(i.labelKey, i.label) : s;
    }
    if (t.kind === "between") {
      if (t.from && t.to) return `${e(t.from)} – ${e(t.to)}`;
      if (t.from) return `${this.t("afterDate", "After date")}: ${e(t.from)}`;
      if (t.to) return `${this.t("beforeDate", "Before date")}: ${e(t.to)}`;
    }
    return t.kind === "after" && t.from ? `${this.t("afterDate", "After date")}: ${e(t.from)}` : t.kind === "before" && t.to ? `${this.t("beforeDate", "Before date")}: ${e(t.to)}` : t.kind === "specific" && t.from ? e(t.from) : "";
  }
  _getDateSummary(t) {
    const e = ni.find((c) => c.value === t.field), s = e ? this.t(e.labelKey, e.label) : "", i = [...Cs, ...ci], r = t.preset ? i.find((c) => c.value === t.preset) : null, o = r ? this.t(r.labelKey, r.label) : t.preset || "", a = (c) => {
      try {
        return c.split("T")[0];
      } catch {
        return c;
      }
    };
    let n = "";
    switch (t.kind) {
      case "preset":
        n = o;
        break;
      case "before":
        n = t.to ? `${this.t("beforeDate", "Before date")}: ${a(t.to)}` : o;
        break;
      case "after":
        n = t.from ? `${this.t("afterDate", "After date")}: ${a(t.from)}` : o;
        break;
      case "between":
        t.from && t.to ? n = `${a(t.from)} – ${a(t.to)}` : t.from ? n = `${this.t("afterDate", "After date")}: ${a(t.from)}` : t.to && (n = `${this.t("beforeDate", "Before date")}: ${a(t.to)}`);
        break;
      case "specific":
        n = t.from ? a(t.from) : "";
        break;
      default:
        n = o;
    }
    return n ? s ? `${s}: ${n}` : n : "";
  }
  _getFilterIcon(t) {
    var e, s;
    return t === C.STATUS || t === C.APPROVER || t === C.REQUESTOR || t === C.DUE_DATE ? ((e = zt.find((i) => i.key === b.APPROVAL)) == null ? void 0 : e.icon) || "filter" : ((s = zt.find((i) => i.key === t)) == null ? void 0 : s.icon) || "filter";
  }
  _getMetadataLabel(t) {
    const e = this._stripMetadataPrefix(t), s = this.metadataFields.find((i) => i.key === e);
    return (s == null ? void 0 : s.label) || e;
  }
  _getMetadataIcon(t) {
    const e = this._stripMetadataPrefix(t), s = this.metadataFields.find((i) => i.key === e);
    return s && ts[s.type] || "file-text";
  }
  _stripMetadataPrefix(t) {
    for (const e of ri)
      if (t.startsWith(e)) return t.slice(e.length);
    return t;
  }
  _removeFilter(t) {
    this.dispatchEvent(
      new CustomEvent("filter-remove", {
        detail: { key: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _removeMetadataFilter(t) {
    this.dispatchEvent(
      new CustomEvent("metadata-filter-remove", {
        detail: { fieldKey: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _clearAll() {
    this.dispatchEvent(
      new CustomEvent("filters-clear-all", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openFilter(t, e) {
    const i = e.currentTarget.getBoundingClientRect();
    this.dispatchEvent(
      new CustomEvent("filter-open", {
        detail: {
          key: t,
          chipRect: { left: i.left, right: i.right, bottom: i.bottom, width: i.width }
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openMetadataFilter(t, e) {
    const i = e.currentTarget.getBoundingClientRect();
    this.dispatchEvent(
      new CustomEvent("metadata-filter-open", {
        detail: {
          fieldKey: t,
          chipRect: { left: i.left, right: i.right, bottom: i.bottom, width: i.width }
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _renderForcedChip(t, e) {
    const { t: s } = this, i = this._getFilterSummary(e, t), r = e.type === "date";
    return l`
      <span class="chip forced">
        ${(r || t === b.TYPE || t === b.SIZE) && i ? l`<span class="chip-label">${i}</span>` : l`
              <span class="chip-label"
                >${s(Dt[t] ?? t, ut[t] || t)}</span
              >
              ${i ? l`<span class="chip-summary">${i}</span>` : g}
            `}
        <span class="chip-lock">
          <sfx-icon name="lock" .size=${12}></sfx-icon>
        </span>
      </span>
    `;
  }
  _renderFilterChip(t, e) {
    const { t: s } = this;
    if (!e)
      return l`
        <span
          class="chip pinned-empty ${t === this.activeFilter ? "active" : ""}"
          @click=${(o) => this._openFilter(t, o)}
        >
          <span class="chip-icon"
            ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
          ></span>
          <span class="chip-label"
            >${s(Dt[t] ?? t, ut[t] || t)}</span
          >
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `;
    const i = this._getFilterSummary(e, t), r = e.type === "date";
    return l`
      <span
        class="chip ${t === this.activeFilter ? "active" : ""}"
        @click=${(o) => this._openFilter(t, o)}
      >
        ${(r || t === b.TYPE || t === b.SIZE) && i ? l` <span class="chip-icon"
                ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
              ></span>
              <span class="chip-label">${i}</span>` : l`
              <span class="chip-label"
                >${s(Dt[t] ?? t, ut[t] || t)}</span
              >
              ${i ? l`<span class="chip-summary">${i}</span>` : g}
            `}
        <button
          class="chip-remove"
          @click=${(o) => {
      o.stopPropagation(), this._removeFilter(t);
    }}
          title=${s("removeFilter", "Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `;
  }
  _renderMetadataChip(t, e) {
    if (!e) {
      const o = this._getMetadataLabel(t), a = this._getMetadataIcon(t);
      return l`
        <span
          class="chip pinned-empty ${t === this.activeMetadataField ? "active" : ""}"
          @click=${(n) => this._openMetadataFilter(t, n)}
        >
          <span class="chip-icon"><sfx-icon name=${a} .size=${16}></sfx-icon></span>
          <span class="chip-label">${o}</span>
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `;
    }
    const s = this._getFilterSummary(e), i = this._getMetadataLabel(t), r = this._getMetadataIcon(t);
    return l`
      <span
        class="chip ${t === this.activeMetadataField ? "active" : ""}"
        @click=${(o) => this._openMetadataFilter(t, o)}
      >
        <span class="chip-icon"><sfx-icon name=${r} .size=${16}></sfx-icon></span>
        <span class="chip-label">${i}</span>
        ${s ? l`<span class="chip-summary">${s}</span>` : g}
        <button
          class="chip-remove"
          @click=${(o) => {
      o.stopPropagation(), this._removeMetadataFilter(t);
    }}
          title=${this.t("removeFilter", "Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `;
  }
  render() {
    const t = $s(this.forcedFilters), e = new Set(Object.keys(t)), s = Object.keys(this.appliedFilters).filter(
      (v) => !e.has(v)
    ), i = Object.keys(this.appliedMetadata), r = new Set(this.pinnedFilters), o = new Set(this.pinnedMetadataFields), a = this.pinnedFilters.filter((v) => !e.has(v)), n = s.filter((v) => !r.has(v)), c = i.filter((v) => !o.has(v)), h = this.pendingFilter && !r.has(this.pendingFilter) && !(this.pendingFilter in this.appliedFilters), u = this.pendingMetadataField && !o.has(this.pendingMetadataField) && !(this.pendingMetadataField in this.appliedMetadata), f = s.length + i.length > 0;
    return e.size + a.length + this.pinnedMetadataFields.length + n.length + c.length + (h ? 1 : 0) + (u ? 1 : 0) === 0 ? g : l`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map((v) => this._renderForcedChip(v, t[v]))}
          ${a.map(
      (v) => this._renderFilterChip(v, this.appliedFilters[v])
    )}
          ${this.pinnedMetadataFields.map(
      (v) => this._renderMetadataChip(v, this.appliedMetadata[v])
    )}
          ${n.map((v) => this._renderFilterChip(v, this.appliedFilters[v]))}
          ${h ? l`
                <span
                  class="chip pinned-empty active pending"
                  @click=${(v) => this._openFilter(this.pendingFilter, v)}
                >
                  <span class="chip-icon"
                    ><sfx-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this.t(
      Dt[this.pendingFilter] ?? this.pendingFilter,
      ut[this.pendingFilter] || this.pendingFilter
    )}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              ` : g}
          ${c.map(
      (v) => this._renderMetadataChip(v, this.appliedMetadata[v])
    )}
          ${u ? l`
                <span
                  class="chip pinned-empty active pending"
                  @click=${(v) => this._openMetadataFilter(this.pendingMetadataField, v)}
                >
                  <span class="chip-icon"
                    ><sfx-icon
                      name=${this._getMetadataIcon(this.pendingMetadataField)}
                      .size=${16}
                    ></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this._getMetadataLabel(this.pendingMetadataField)}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              ` : g}
          ${f ? l`<button class="clear-all" @click=${this._clearAll}>
                ${this.t("clearFilters", "Clear filters")}
              </button>` : g}
        </div>
      </div>
    `;
  }
};
G.styles = T`
    :host {
      display: block;
    }
    :host([hidden]) {
      display: none;
    }
    .chips-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 20px 16px;
    }
    .chips {
      display: flex;
      align-items: center;
      gap: 12px;
      overflow-x: auto;
      scrollbar-width: none;
      min-width: 0;
      flex: 1;
    }
    .chips::-webkit-scrollbar {
      display: none;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 32px;
      padding: 0 12px;
      border: 1px solid var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      border-radius: 6px;
      font-size: 0.8125rem;
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .chip:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.15));
    }
    .chip.active {
      background: var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip-label {
      font-weight: 500;
    }
    .chip-summary {
      opacity: 0.8;
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chip-remove {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 2px;
      color: inherit;
      opacity: 0.7;
      transition: opacity 150ms;
      border-radius: 4px;
      margin-left: 4px;
    }
    .chip-remove:hover {
      opacity: 1;
    }
    .clear-all {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 34px;
      padding: 0 10px;
      border: none;
      border-radius: 6px;
      font-size: 0.8125rem;
      background: none;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .clear-all:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .chip.forced {
      cursor: default;
      opacity: 0.85;
    }
    .chip.forced:hover {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    .chip-lock {
      display: flex;
      align-items: center;
      color: inherit;
      opacity: 0.6;
      margin-left: 4px;
    }
    .chip.pinned-empty {
      height: 32px;
      padding: 0 12px;
      gap: 6px;
      border-style: solid;
      border-radius: 6px;
      background: transparent;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--sfx-input, oklch(0.871 0.016 241.798));
      font-weight: 400;
    }
    .chip .chip-icon {
      display: flex;
      align-items: center;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .chip.pinned-empty .chip-icon {
      display: flex;
      align-items: center;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--sfx-input, oklch(0.871 0.016 241.798));
    }
    .chip.pinned-empty:hover .chip-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty.active {
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip.pinned-empty.active .chip-icon {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .chip-chevron {
      display: flex;
      align-items: center;
      opacity: 0.6;
    }
  `;
J([
  d({ type: Object })
], G.prototype, "appliedFilters", 2);
J([
  d({ type: Object })
], G.prototype, "appliedMetadata", 2);
J([
  d({ type: Object })
], G.prototype, "forcedFilters", 2);
J([
  d({ type: Array })
], G.prototype, "metadataFields", 2);
J([
  d({ type: Array })
], G.prototype, "pinnedFilters", 2);
J([
  d({ type: Array })
], G.prototype, "pinnedMetadataFields", 2);
J([
  d({ type: Array })
], G.prototype, "tags", 2);
J([
  d({ type: Array })
], G.prototype, "labels", 2);
J([
  d({ type: Array })
], G.prototype, "approverUsers", 2);
J([
  d({ type: Array })
], G.prototype, "requesterUsers", 2);
J([
  d()
], G.prototype, "activeFilter", 2);
J([
  d()
], G.prototype, "activeMetadataField", 2);
J([
  d()
], G.prototype, "pendingFilter", 2);
J([
  d()
], G.prototype, "pendingMetadataField", 2);
J([
  d({ attribute: !1 })
], G.prototype, "t", 2);
G = J([
  P("ap-filters-bar")
], G);
var Ko = Object.defineProperty, Bo = Object.getOwnPropertyDescriptor, ve = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Bo(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Ko(e, s, r), r;
};
const Vo = 6;
let te = class extends L {
  constructor() {
    super(...arguments), this.t = (t, e) => typeof e == "string" ? e : t, this.assets = [], this.folders = [], this.folderPreviews = {}, this.selectedIds = [], this.selectedFolderIds = [], this.disabledAssetIds = [], this.disabledFolderIds = [], this.isLoading = !1, this.multiSelect = !0, this.folderSelectable = !1, this.gridSize = "normal", this._prevCount = 0;
  }
  willUpdate(t) {
    if (t.has("assets")) {
      const e = t.get("assets");
      e && this.assets.length > e.length ? this._prevCount = e.length : this._prevCount = 0;
    }
  }
  render() {
    const t = this.gridSize === "large" ? "280px" : "220px";
    return l`
      <div
        class="grid"
        role="list"
        aria-label="Assets"
        ${O({ "--sfx-grid-min-col": String(t) })}
      >
        ${this.folders.map(
      (e, s) => l`
            <ap-folder-card
              .folder=${e}
              .previews=${this.folderPreviews[e.uuid] || []}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              ?selected=${this.selectedFolderIds.includes(e.uuid)}
              ?disabled=${this.disabledFolderIds.includes(e.uuid)}
              .index=${s}
              data-folder-uuid=${e.uuid}
              @folder-open=${(i) => {
        i.stopPropagation(), this.dispatchEvent(
          new CustomEvent("folder-open", {
            detail: i.detail,
            bubbles: !0,
            composed: !0
          })
        );
      }}
              @folder-select=${(i) => {
        i.stopPropagation(), this.dispatchEvent(
          new CustomEvent("folder-select", {
            detail: i.detail,
            bubbles: !0,
            composed: !0
          })
        );
      }}
            ></ap-folder-card>
          `
    )}
        ${this.assets.map((e, s) => {
      const i = s >= this._prevCount ? Math.min(s - this._prevCount, 20) : Math.min(s, 20);
      return l`
            <ap-asset-card
              .asset=${e}
              .t=${this.t}
              .index=${this.folderSelectable ? this.folders.length + s : s}
              ?selected=${this.selectedIds.includes(e.uuid)}
              ?disabled=${this.disabledAssetIds.includes(e.uuid)}
              .multiSelect=${this.multiSelect}
              ${O({ "--sfx-stagger-index": String(i) })}
              data-asset-uuid=${e.uuid}
              @asset-select=${(r) => this.dispatchEvent(
        new CustomEvent("asset-select", {
          detail: r.detail,
          bubbles: !0,
          composed: !0
        })
      )}
              @asset-preview=${(r) => this.dispatchEvent(
        new CustomEvent("asset-preview", {
          detail: r.detail,
          bubbles: !0,
          composed: !0
        })
      )}
              @asset-quick-select=${(r) => this.dispatchEvent(
        new CustomEvent("asset-quick-select", {
          detail: r.detail,
          bubbles: !0,
          composed: !0
        })
      )}
            ></ap-asset-card>
          `;
    })}
        ${this.isLoading ? Array.from(
      { length: Vo },
      () => l`<div class="ghost-card">
                  <div class="ghost-thumb"></div>
                  <div class="ghost-info">
                    <div class="ghost-line ghost-name"></div>
                    <div class="ghost-line ghost-meta"></div>
                  </div>
                </div>`
    ) : g}
      </div>
    `;
  }
};
te.styles = T`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .ghost-card {
      border-radius: var(--sfx-radius, 8px);
      overflow: hidden;
    }
    .ghost-thumb {
      aspect-ratio: 6/4;
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .ghost-info {
      padding: 10px 12px;
    }
    .ghost-line {
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    .ghost-name {
      height: 14px;
      width: 70%;
    }
    .ghost-meta {
      height: 12px;
      width: 50%;
      margin-top: 6px;
    }
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-thumb,
      .ghost-line {
        animation: none;
      }
    }
  `;
ve([
  d({ attribute: !1 })
], te.prototype, "t", 2);
ve([
  d({ type: Array })
], te.prototype, "assets", 2);
ve([
  d({ type: Array })
], te.prototype, "folders", 2);
ve([
  d({ type: Object })
], te.prototype, "folderPreviews", 2);
ve([
  d({ type: Array })
], te.prototype, "selectedIds", 2);
ve([
  d({ type: Array })
], te.prototype, "selectedFolderIds", 2);
ve([
  d({ type: Array })
], te.prototype, "disabledAssetIds", 2);
ve([
  d({ type: Array })
], te.prototype, "disabledFolderIds", 2);
ve([
  d({ type: Boolean })
], te.prototype, "isLoading", 2);
ve([
  d({ type: Boolean })
], te.prototype, "multiSelect", 2);
ve([
  d({ type: Boolean })
], te.prototype, "folderSelectable", 2);
ve([
  d({ type: String })
], te.prototype, "gridSize", 2);
te = ve([
  P("ap-grid-view")
], te);
var qo = Object.defineProperty, Go = Object.getOwnPropertyDescriptor, ie = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Go(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && qo(e, s, r), r;
};
const Qo = 5;
let Y = class extends L {
  constructor() {
    super(...arguments), this.t = (t, e) => typeof e == "string" ? e : t, this.assets = [], this.folders = [], this.selectedIds = [], this.selectedFolderIds = [], this.disabledAssetIds = [], this.disabledFolderIds = [], this.isLoading = !1, this.multiSelect = !0, this.folderSelectable = !1, this.totalCount = 0, this.isSelectingAll = !1, this.folderPreviews = {}, this._compactLevel = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this._resizeObserver = new ResizeObserver((t) => {
      var i;
      const e = ((i = t[0]) == null ? void 0 : i.contentRect.width) ?? 0, s = e < 550 ? 2 : e < 680 ? 1 : 0;
      s !== this._compactLevel && (this._compactLevel = s);
    }), this._resizeObserver.observe(this);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._resizeObserver) == null || t.disconnect();
  }
  _getGridColumns(t) {
    const e = [];
    return t && e.push("32px"), e.push("48px"), e.push("minmax(120px, 1fr)"), e.push("72px"), this._compactLevel < 2 && e.push("100px"), this._compactLevel < 1 && e.push("120px"), e.push("64px"), e.join(" ");
  }
  get _allVisibleSelected() {
    if (this.assets.length === 0 && this.folders.length === 0 || this.selectedIds.length === 0 && this.selectedFolderIds.length === 0) return !1;
    const t = new Set(this.selectedIds), e = this.assets.length === 0 || this.assets.every((r) => t.has(r.uuid));
    if (!this.folderSelectable) return e && this.assets.length > 0;
    const s = new Set(this.selectedFolderIds), i = this.folders.length === 0 || this.folders.every((r) => s.has(r.uuid));
    return e && i;
  }
  _handleHeaderCheckboxClick() {
    if (this.isSelectingAll) return;
    const t = this.folderSelectable ? this.totalCount + this.folders.length : this.totalCount, e = this.folderSelectable ? this.selectedIds.length + this.selectedFolderIds.length : this.selectedIds.length;
    this._allVisibleSelected && e >= t ? this.dispatchEvent(new CustomEvent("selection-clear", { bubbles: !0, composed: !0 })) : this.dispatchEvent(
      new CustomEvent("select-all", { detail: { scope: "all" }, bubbles: !0, composed: !0 })
    );
  }
  render() {
    const t = this.folderSelectable ? this.totalCount + this.folders.length : this.totalCount, e = this.folderSelectable ? this.selectedIds.length + this.selectedFolderIds.length : this.selectedIds.length, s = this._allVisibleSelected && e >= t;
    return l`
      <div
        class="list-header"
        ${O({ "grid-template-columns": this._getGridColumns(this.multiSelect) })}
        role="row"
        aria-label="Column headers"
      >
        ${this.multiSelect ? l`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div
                class="header-check-box ${s ? "checked" : e > 0 ? "indeterminate" : ""}"
              >
                <svg
                  class="header-check-icon check"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg
                  class="header-check-icon dash"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </span>` : g}
        <span></span>
        <span>${this.t("name", "Name")}</span>
        <span>${this.t("type", "Type")}</span>
        ${this._compactLevel < 2 ? l`<span>${this.t("size", "Size")}</span>` : g}
        ${this._compactLevel < 1 ? l`<span>${this.t("date", "Date")}</span>` : g}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map(
      (i, r) => l`
            <ap-folder-row
              .folder=${i}
              .previews=${this.folderPreviews[i.uuid] || []}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(i.uuid)}
              ?disabled=${this.disabledFolderIds.includes(i.uuid)}
              .index=${r}
              data-folder-uuid=${i.uuid}
              @folder-open=${(o) => {
        o.stopPropagation(), this.dispatchEvent(
          new CustomEvent("folder-open", {
            detail: o.detail,
            bubbles: !0,
            composed: !0
          })
        );
      }}
              @folder-select=${(o) => {
        o.stopPropagation(), this.dispatchEvent(
          new CustomEvent("folder-select", {
            detail: o.detail,
            bubbles: !0,
            composed: !0
          })
        );
      }}
            ></ap-folder-row>
          `
    )}
        ${this.assets.map(
      (i, r) => l`
            <ap-asset-row
              .asset=${i}
              .t=${this.t}
              .index=${this.folderSelectable ? this.folders.length + r : r}
              ?selected=${this.selectedIds.includes(i.uuid)}
              ?disabled=${this.disabledAssetIds.includes(i.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              data-asset-uuid=${i.uuid}
              @asset-select=${(o) => this.dispatchEvent(
        new CustomEvent("asset-select", {
          detail: o.detail,
          bubbles: !0,
          composed: !0
        })
      )}
              @asset-preview=${(o) => this.dispatchEvent(
        new CustomEvent("asset-preview", {
          detail: o.detail,
          bubbles: !0,
          composed: !0
        })
      )}
              @asset-quick-select=${(o) => this.dispatchEvent(
        new CustomEvent("asset-quick-select", {
          detail: o.detail,
          bubbles: !0,
          composed: !0
        })
      )}
            ></ap-asset-row>
          `
    )}
        ${this.isLoading ? Array.from({ length: Qo }, (i, r) => {
      const o = ["70%", "55%", "80%", "45%", "65%"];
      return l`
                <div
                  class="ghost-row"
                  ${O({ "grid-template-columns": this._getGridColumns(this.multiSelect) })}
                >
                  ${this.multiSelect ? l`<div class="ghost-el ghost-check"></div>` : g}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${O({ width: o[r] })}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel < 2 ? l`<div class="ghost-el ghost-size"></div>` : g}
                  ${this._compactLevel < 1 ? l`<div class="ghost-el ghost-date"></div>` : g}
                  <div></div>
                </div>
              `;
    }) : g}
      </div>
    `;
  }
};
Y.styles = T`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .list-header {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .list-header span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header-checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .header-check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--sfx-background, oklch(1 0 0));
    }
    .header-check-box.checked,
    .header-check-box.indeterminate {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .header-check-icon {
      display: none;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    .header-check-box.checked .header-check-icon.check {
      display: block;
    }
    .header-check-box.indeterminate .header-check-icon.dash {
      display: block;
    }
    .list-body {
      display: flex;
      flex-direction: column;
    }
    .ghost-row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .ghost-el {
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 4px;
    }
    .ghost-check {
      width: 22px;
      height: 22px;
    }
    .ghost-thumb {
      width: 40px;
      height: 40px;
    }
    .ghost-name {
      height: 14px;
      border-radius: 4px;
    }
    .ghost-type {
      height: 12px;
      width: 40px;
    }
    .ghost-size {
      height: 12px;
      width: 48px;
    }
    .ghost-date {
      height: 12px;
      width: 72px;
    }
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-el {
        animation: none;
      }
    }
  `;
ie([
  d({ attribute: !1 })
], Y.prototype, "t", 2);
ie([
  d({ type: Array })
], Y.prototype, "assets", 2);
ie([
  d({ type: Array })
], Y.prototype, "folders", 2);
ie([
  d({ type: Array })
], Y.prototype, "selectedIds", 2);
ie([
  d({ type: Array })
], Y.prototype, "selectedFolderIds", 2);
ie([
  d({ type: Array })
], Y.prototype, "disabledAssetIds", 2);
ie([
  d({ type: Array })
], Y.prototype, "disabledFolderIds", 2);
ie([
  d({ type: Boolean })
], Y.prototype, "isLoading", 2);
ie([
  d({ type: Boolean })
], Y.prototype, "multiSelect", 2);
ie([
  d({ type: Boolean })
], Y.prototype, "folderSelectable", 2);
ie([
  d({ type: Number })
], Y.prototype, "totalCount", 2);
ie([
  d({ type: Boolean })
], Y.prototype, "isSelectingAll", 2);
ie([
  d({ type: Object })
], Y.prototype, "folderPreviews", 2);
ie([
  x()
], Y.prototype, "_compactLevel", 2);
Y = ie([
  P("ap-list-view")
], Y);
function Is(t) {
  if (t === 0) return "0 B";
  const e = ["B", "KB", "MB", "GB", "TB"], s = 1024, i = Math.floor(Math.log(t) / Math.log(s));
  return `${(t / Math.pow(s, i)).toFixed(i === 0 ? 0 : 1)} ${e[i]}`;
}
function os(t) {
  if (!t) return "—";
  const e = new Date(t);
  return isNaN(e.getTime()) ? "—" : e.toLocaleDateString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
function mi(t, e) {
  return !t || !e ? "" : `${t} x ${e}`;
}
var Ho = Object.defineProperty, Yo = Object.getOwnPropertyDescriptor, dt = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Yo(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Ho(e, s, r), r;
};
let ze = class extends L {
  constructor() {
    super(...arguments), this.t = (t, e) => typeof e == "string" ? e : t, this.index = 0, this.selected = !1, this.disabled = !1, this.multiSelect = !0;
  }
  _handleSelect(t) {
    if (t.stopPropagation(), t.composedPath().some(
      (i) => i instanceof HTMLElement && (i.classList.contains("check") || i.classList.contains("check-box"))
    )) {
      this.dispatchEvent(
        new CustomEvent("asset-select", {
          detail: {
            asset: this.asset,
            index: this.index,
            event: new MouseEvent("click", { ctrlKey: !0, metaKey: !0, shiftKey: t.shiftKey })
          },
          bubbles: !0
        })
      );
      return;
    }
    this.dispatchEvent(
      new CustomEvent("asset-select", {
        detail: { asset: this.asset, index: this.index, event: t },
        bubbles: !0
      })
    );
  }
  _handlePreview(t) {
    t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("asset-preview", {
        detail: { asset: this.asset },
        bubbles: !0
      })
    );
  }
  _formatDuration(t) {
    const e = Math.floor(t / 3600), s = Math.floor(t % 3600 / 60), i = Math.floor(t % 60), r = (o) => String(o).padStart(2, "0");
    return e > 0 ? `${e}:${r(s)}:${r(i)}` : `${r(s)}:${r(i)}`;
  }
  _handleQuickSelect(t) {
    t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("asset-quick-select", {
        detail: { asset: this.asset },
        bubbles: !0
      })
    );
  }
  render() {
    var h, u, f, p, v, m, k, _;
    const t = this.asset;
    if (!t) return l``;
    const s = ft(t.type) === "video", i = ((h = t.extension) == null ? void 0 : h.toLowerCase()) === "pdf", r = !!((u = t.info) != null && u.thumbnail || (f = t.info) != null && f.image_thumbnail || (p = t.info) != null && p.preview), o = Js(t.extension || "") || r;
    let a = "";
    s ? a = ti(t) : i ? a = Ss(t) : o && (a = ss(t));
    const n = Gt(t.extension || ""), c = ks(t.extension || "");
    return l`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${c && a ? "chess" : ""}">
          ${a ? l`<img
                src=${a}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${c ? "transparent-asset" : ""}"
                @error=${($) => {
      const y = $.target, I = gt();
      y.src !== n && y.src !== I ? (y.src = n, y.classList.add("icon-fallback")) : y.src !== I && (y.src = I);
    }}
              />` : l`<img
                src=${n}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${($) => {
      const y = $.target, I = gt();
      y.src !== I && (y.src = I);
    }}
              />`}
          ${s && (((v = t.info) == null ? void 0 : v.video_duration) ?? ((m = t.info) == null ? void 0 : m.duration)) != null ? l`<span class="duration"
                >${this._formatDuration(t.info.video_duration ?? t.info.duration)}</span
              >` : g}
          <div class="overlay">
            <button
              class="overlay-btn"
              @click=${this._handlePreview}
              aria-label=${this.t("preview", "Preview")}
            >
              <sfx-icon name="preview" .size=${16}></sfx-icon>
              ${this.t("preview", "Preview")}
            </button>
            <button
              class="overlay-btn select-btn"
              @click=${this._handleQuickSelect}
              aria-label=${this.t("select", "Select")}
            >
              <sfx-icon name="select" .size=${16}></sfx-icon>
              ${this.t("select", "Select")}
            </button>
          </div>
          ${this.multiSelect ? l`
                <div class="check">
                  <div class="check-box">
                    <svg
                      class="check-icon"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                </div>
              ` : g}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="meta">
            ${(k = t.extension) == null ? void 0 : k.toUpperCase()}${(() => {
      var N, F, Q, A;
      const $ = ((N = t.info) == null ? void 0 : N.img_w) || ((F = t.info) == null ? void 0 : F.video_w), y = ((Q = t.info) == null ? void 0 : Q.img_h) || ((A = t.info) == null ? void 0 : A.video_h), I = mi($, y);
      return I ? ` · ${I}` : "";
    })()}
            · ${Is(((_ = t.size) == null ? void 0 : _.bytes) || 0)}
          </div>
        </div>
      </div>
    `;
  }
};
ze.styles = T`
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--sfx-stagger-index, 0) * 50ms);
    }
    @keyframes ap-card-in {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .card {
      position: relative;
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition:
        box-shadow 150ms,
        border-color 150ms;
      background: var(--sfx-card, oklch(1 0 0));
    }
    .card:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
    }
    :host([selected]) .card {
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      box-shadow: 0 0 0 2px var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
      animation: none;
    }
    :host([disabled]) .overlay-btn {
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumbnail {
      aspect-ratio: 6/4;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .thumb-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      -webkit-user-drag: none;
    }
    .thumb-img.transparent-asset {
      padding: 12px;
    }
    .thumb-img.icon-fallback {
      width: auto;
      height: auto;
      max-width: 100px;
      max-height: 100%;
      padding: 16px;
      object-fit: scale-down;
    }
    .overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 150ms;
    }
    .card:hover .overlay {
      opacity: 1;
    }
    .overlay-btn {
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 20px;
      min-width: 120px;
      border: none;
      border-radius: var(--sfx-radius, 8px);
      background: var(--sfx-card, rgba(255, 255, 255, 0.9));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      border: 1px solid var(--sfx-border, transparent);
      cursor: pointer;
      transition: transform 100ms;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
    }
    .overlay-btn:hover {
      transform: scale(1.05);
    }
    .overlay-btn.select-btn {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    .info {
      padding: 10px 12px;
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.75rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      margin-top: 6px;
    }
    .check {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 10;
      cursor: pointer;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--sfx-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
    .thumbnail.chess {
      background-image: conic-gradient(
        var(--sfx-chess-a, #f0f0f0) 25%,
        var(--sfx-chess-b, #fff) 25% 50%,
        var(--sfx-chess-a, #f0f0f0) 50% 75%,
        var(--sfx-chess-b, #fff) 75%
      );
      background-size: 16px 16px;
    }
    .type-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .duration {
      position: absolute;
      bottom: 8px;
      right: 12px;
      z-index: 1;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      font-size: 0.6875rem;
      font-weight: 500;
      line-height: 1.2;
      font-variant-numeric: tabular-nums;
    }
    @media (prefers-reduced-motion: reduce) {
      :host {
        animation: none;
      }
      .overlay {
        transition: none;
      }
    }
  `;
dt([
  d({ attribute: !1 })
], ze.prototype, "t", 2);
dt([
  d({ type: Object })
], ze.prototype, "asset", 2);
dt([
  d({ type: Number })
], ze.prototype, "index", 2);
dt([
  d({ type: Boolean, reflect: !0 })
], ze.prototype, "selected", 2);
dt([
  d({ type: Boolean, reflect: !0 })
], ze.prototype, "disabled", 2);
dt([
  d({ type: Boolean })
], ze.prototype, "multiSelect", 2);
ze = dt([
  P("ap-asset-card")
], ze);
var Wo = Object.defineProperty, Xo = Object.getOwnPropertyDescriptor, Ye = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Xo(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Wo(e, s, r), r;
};
let Fe = class extends L {
  constructor() {
    super(...arguments), this.t = (t, e) => typeof e == "string" ? e : t, this.index = 0, this.selected = !1, this.disabled = !1, this.multiSelect = !0, this.compactLevel = 0;
  }
  _getGridColumns() {
    const t = [];
    return this.multiSelect && t.push("32px"), t.push("48px"), t.push("minmax(120px, 1fr)"), t.push("72px"), this.compactLevel < 2 && t.push("100px"), this.compactLevel < 1 && t.push("120px"), t.push("64px"), t.join(" ");
  }
  _handleSelect(t) {
    if (t.composedPath().some(
      (i) => i instanceof HTMLElement && (i.classList.contains("check") || i.classList.contains("check-box"))
    )) {
      this.dispatchEvent(
        new CustomEvent("asset-select", {
          detail: {
            asset: this.asset,
            index: this.index,
            event: new MouseEvent("click", { ctrlKey: !0, metaKey: !0, shiftKey: t.shiftKey })
          },
          bubbles: !0
        })
      );
      return;
    }
    this.dispatchEvent(
      new CustomEvent("asset-select", {
        detail: { asset: this.asset, index: this.index, event: t },
        bubbles: !0
      })
    );
  }
  _handlePreview(t) {
    t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("asset-preview", {
        detail: { asset: this.asset },
        bubbles: !0
      })
    );
  }
  _handleQuickSelect(t) {
    t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("asset-quick-select", {
        detail: { asset: this.asset },
        bubbles: !0
      })
    );
  }
  render() {
    var h, u, f, p, v, m;
    const t = this.asset;
    if (!t) return l``;
    const s = ft(t.type) === "video", i = ((h = t.extension) == null ? void 0 : h.toLowerCase()) === "pdf", r = !!((u = t.info) != null && u.thumbnail || (f = t.info) != null && f.image_thumbnail || (p = t.info) != null && p.preview), o = Js(t.extension || "") || r;
    let a = "";
    s ? a = ti(t) : i ? a = Ss(t) : o && (a = ss(t));
    const n = Gt(t.extension || ""), c = ks(t.extension || "");
    return l`
      <div
        class="row"
        ${O({ "grid-template-columns": this._getGridColumns() })}
        @click=${this._handleSelect}
      >
        ${this.multiSelect ? l`
              <div class="check">
                <div class="check-box">
                  <svg
                    class="check-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>
            ` : g}
        <div class="thumb ${c && a ? "chess" : ""}">
          ${a ? l`<img
                src=${a}
                alt=${t.name}
                class="${c ? "transparent-asset" : ""}"
                loading="lazy"
                @error=${(k) => {
      const _ = k.target, $ = gt();
      _.src !== n && _.src !== $ ? (_.src = n, _.classList.add("icon-fallback")) : _.src !== $ && (_.src = $);
    }}
              />` : l`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${(k) => {
      const _ = k.target, $ = gt();
      _.src !== $ && (_.src = $);
    }}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(v = t.extension) == null ? void 0 : v.toUpperCase()}</div>
        ${this.compactLevel < 2 ? l`<div class="desc">${Is(((m = t.size) == null ? void 0 : m.bytes) || 0)}</div>` : g}
        ${this.compactLevel < 1 ? l`<div class="date">${os(t.created_at || "")}</div>` : g}
        <div class="actions">
          <button
            class="icon-btn select-btn"
            @click=${this._handleQuickSelect}
            aria-label=${this.t("select", "Select")}
            title=${this.t("select", "Select")}
          >
            <sfx-icon name="select" .size=${16}></sfx-icon>
          </button>
          <button
            class="icon-btn"
            @click=${this._handlePreview}
            aria-label=${this.t("preview", "Preview")}
            title=${this.t("preview", "Preview")}
          >
            <sfx-icon name="preview" .size=${16}></sfx-icon>
          </button>
        </div>
      </div>
    `;
  }
};
Fe.styles = T`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      -webkit-user-drag: none;
    }
    .thumb img.transparent-asset {
      padding: 4px;
    }
    .thumb img.icon-fallback {
      object-fit: scale-down;
      padding: 4px;
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .type {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc,
    .date {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .actions {
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 100ms;
    }
    .row:hover .actions {
      opacity: 1;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 4px;
      background: none;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn.select-btn {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .thumb.chess {
      background-image: conic-gradient(
        var(--sfx-chess-a, #f0f0f0) 25%,
        var(--sfx-chess-b, #fff) 25% 50%,
        var(--sfx-chess-a, #f0f0f0) 50% 75%,
        var(--sfx-chess-b, #fff) 75%
      );
      background-size: 12px 12px;
    }
    .check {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--sfx-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;
Ye([
  d({ attribute: !1 })
], Fe.prototype, "t", 2);
Ye([
  d({ type: Object })
], Fe.prototype, "asset", 2);
Ye([
  d({ type: Number })
], Fe.prototype, "index", 2);
Ye([
  d({ type: Boolean, reflect: !0 })
], Fe.prototype, "selected", 2);
Ye([
  d({ type: Boolean, reflect: !0 })
], Fe.prototype, "disabled", 2);
Ye([
  d({ type: Boolean })
], Fe.prototype, "multiSelect", 2);
Ye([
  d({ type: Number })
], Fe.prototype, "compactLevel", 2);
Fe = Ye([
  P("ap-asset-row")
], Fe);
var Zo = Object.defineProperty, Jo = Object.getOwnPropertyDescriptor, We = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Jo(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Zo(e, s, r), r;
};
let Ae = class extends L {
  constructor() {
    super(...arguments), this.previews = [], this.selected = !1, this.disabled = !1, this.selectable = !1, this.multiSelect = !0, this.index = 0;
  }
  _handleClick(t) {
    if (!this.selectable) {
      this._handleOpen();
      return;
    }
    if (t.composedPath().some(
      (i) => i instanceof HTMLElement && (i.classList.contains("check") || i.classList.contains("check-box"))
    )) {
      t.stopPropagation(), this.dispatchEvent(
        new CustomEvent("folder-select", {
          detail: {
            folder: this.folder,
            index: this.index,
            event: new MouseEvent("click", { ctrlKey: !0, metaKey: !0, shiftKey: t.shiftKey })
          },
          bubbles: !0,
          composed: !0
        })
      );
      return;
    }
    this._handleOpen();
  }
  _handleOpen() {
    this.dispatchEvent(
      new CustomEvent("folder-open", {
        detail: { folder: this.folder },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _getPreviewUrl(t) {
    return si(t, "200");
  }
  _renderPreviewImg(t) {
    const e = ei(t.file_type), s = this._getPreviewUrl(t), i = Gt(ns(t.file_type)), r = gt();
    return l`<div class="preview-slot ${e ? "icon-bg" : ""}">
      <img
        class="preview-img ${e ? "icon-mode" : ""}"
        src="${s || i}"
        alt=""
        loading="lazy"
        @error=${(o) => {
      const a = o.target, n = a.parentElement;
      a.src !== i && a.src !== r ? (a.src = i, a.classList.add("icon-mode"), n == null || n.classList.add("icon-bg")) : a.src !== r && (a.src = r, a.classList.add("icon-mode"), n == null || n.classList.add("icon-bg"));
    }}
        @load=${(o) => {
      const a = o.target, n = a.parentElement;
      a.src.includes("assets/file-types") && (a.classList.add("icon-mode"), n == null || n.classList.add("icon-bg"));
    }}
      />
    </div>`;
  }
  _renderPreviews() {
    if (this.previews.length === 0)
      return l`<div class="empty-preview"><sfx-icon name="inbox" .size=${64}></sfx-icon></div>`;
    const t = this.previews.slice(0, 3);
    return t.length === 1 ? l`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>` : l`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2] ? l`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>` : g}
        </div>
      </div>
    `;
  }
  render() {
    var r, o;
    const t = this.folder;
    if (!t) return l``;
    const e = ((r = t.count) == null ? void 0 : r.files_direct) ?? 0, i = (((o = t.count) == null ? void 0 : o.files_recursive) ?? 0) - e;
    return l`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
            rx="3"
            ry="3"
          />
        </svg>
        ${this.selectable && this.multiSelect ? l`
              <div class="check">
                <div class="check-box">
                  <svg
                    class="check-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>
            ` : g}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${t.name}>${t.name}</div>
            <div class="counts">
              <span>${e} asset${e !== 1 ? "s" : ""}</span>
              ${i > 0 ? l`<span>${i} sub-asset${i !== 1 ? "s" : ""}</span>` : g}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
Ae.styles = [
  xe,
  T`
      :host {
        display: block;
      }
      .card {
        position: relative;
        cursor: pointer;
        transition: filter 150ms;
      }
      :host([selected]) .card {
        filter: drop-shadow(2px 0 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(-2px 0 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 2px 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 -2px 0 var(--sfx-primary, oklch(0.578 0.198 268.129)));
      }
      /* Folder shape SVG fills card */
      .folder-svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
      }
      .folder-svg path {
        fill: var(--sfx-folder-bg, #e3e8ed);
      }
      .preview-overlay {
        position: absolute;
        inset: 0;
        z-index: 2;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        opacity: 0;
        transition: opacity 150ms;
        pointer-events: none;
      }
      .card:hover {
        filter: drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
      }
      :host([selected]) .card:hover {
        filter: drop-shadow(2px 0 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(-2px 0 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 2px 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 -2px 0 var(--sfx-primary, oklch(0.578 0.198 268.129)))
          drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
      }
      :host([disabled]) {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
      }
      :host([disabled]) .check-box {
        background: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      :host([disabled]) .check-icon {
        display: block;
      }
      .card:hover .preview-overlay {
        opacity: 1;
      }
      .card-content {
        position: relative;
        z-index: 1;
        padding: 12% 3.5% 12px;
        display: flex;
        flex-direction: column;
      }
      .preview-container {
        position: relative;
        aspect-ratio: 16/9;
        display: flex;
        overflow: hidden;
        border-radius: 4px;
      }
      .preview-grid {
        display: flex;
        width: 100%;
        height: 100%;
        gap: 6px;
      }
      .preview-left {
        flex: 1;
        min-width: 0;
        min-height: 0;
        overflow: hidden;
        border-radius: 4px;
      }
      .preview-right {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .preview-right-item {
        flex: 1;
        min-height: 0;
        overflow: hidden;
        border-radius: 4px;
      }
      .preview-left > .preview-slot,
      .preview-right-item > .preview-slot {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 4px;
      }
      .preview-slot {
        display: flex;
        position: relative;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .preview-slot.icon-bg {
        background: var(--sfx-card, oklch(1 0 0));
      }
      .preview-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
      }
      .preview-img.icon-mode {
        object-fit: contain;
        padding: 8px;
      }
      .empty-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        border-radius: 4px;
        color: var(--sfx-input, oklch(0.871 0.016 241.798));
      }
      .info {
        flex-shrink: 0;
        padding-top: 8px;
      }
      .name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 400;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .counts {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin-top: 6px;
      }
      .check {
        position: absolute;
        top: 8px;
        left: 8px;
        z-index: 3;
        cursor: pointer;
      }
      .check-box {
        width: 22px;
        height: 22px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--sfx-background, oklch(1 0 0));
      }
      .check:hover .check-box {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      :host([selected]) .check-box {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .check-icon {
        display: none;
        color: var(--sfx-primary-foreground, oklch(1 0 0));
      }
      :host([selected]) .check-icon {
        display: block;
      }
    `
];
We([
  d({ type: Object })
], Ae.prototype, "folder", 2);
We([
  d({ type: Array })
], Ae.prototype, "previews", 2);
We([
  d({ type: Boolean, reflect: !0 })
], Ae.prototype, "selected", 2);
We([
  d({ type: Boolean, reflect: !0 })
], Ae.prototype, "disabled", 2);
We([
  d({ type: Boolean })
], Ae.prototype, "selectable", 2);
We([
  d({ type: Boolean })
], Ae.prototype, "multiSelect", 2);
We([
  d({ type: Number })
], Ae.prototype, "index", 2);
Ae = We([
  P("ap-folder-card")
], Ae);
var ea = Object.defineProperty, ta = Object.getOwnPropertyDescriptor, Re = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ta(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && ea(e, s, r), r;
};
let we = class extends L {
  constructor() {
    super(...arguments), this.previews = [], this.selected = !1, this.disabled = !1, this.selectable = !1, this.multiSelect = !0, this.index = 0, this.compactLevel = 0;
  }
  _getGridColumns() {
    const t = [];
    return this.multiSelect && t.push("32px"), t.push("48px"), t.push("minmax(120px, 1fr)"), t.push("72px"), this.compactLevel < 2 && t.push("100px"), this.compactLevel < 1 && t.push("120px"), t.push("64px"), t.join(" ");
  }
  _renderPreviewImg(t) {
    const e = ei(t.file_type), s = si(t, "80"), i = Gt(ns(t.file_type)), r = gt();
    return l`<div class="preview-slot ${e ? "icon-bg" : ""}">
      <img
        class="preview-img ${e ? "icon-mode" : ""}"
        src="${s || i}"
        alt=""
        loading="lazy"
        @error=${(o) => {
      const a = o.target, n = a.parentElement;
      a.src !== i && a.src !== r ? (a.src = i, a.classList.add("icon-mode"), n == null || n.classList.add("icon-bg")) : a.src !== r && (a.src = r, a.classList.add("icon-mode"), n == null || n.classList.add("icon-bg"));
    }}
      />
    </div>`;
  }
  _renderThumb() {
    const t = l`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
        />
      </svg>
    `, e = this.previews.slice(0, 2);
    return l`
      ${t}
      <div class="preview-area">
        ${e.length > 0 ? e.map((s) => this._renderPreviewImg(s)) : l`<div class="empty-preview">
              <sfx-icon name="inbox" .size=${14}></sfx-icon>
            </div>`}
      </div>
    `;
  }
  _handleClick(t) {
    if (!this.selectable) {
      this._handleOpen();
      return;
    }
    if (t.composedPath().some(
      (i) => i instanceof HTMLElement && (i.classList.contains("check") || i.classList.contains("check-box"))
    )) {
      t.stopPropagation(), this.dispatchEvent(
        new CustomEvent("folder-select", {
          detail: {
            folder: this.folder,
            index: this.index,
            event: new MouseEvent("click", { ctrlKey: !0, metaKey: !0, shiftKey: t.shiftKey })
          },
          bubbles: !0,
          composed: !0
        })
      );
      return;
    }
    this._handleOpen();
  }
  _handleOpen() {
    this.dispatchEvent(
      new CustomEvent("folder-open", {
        detail: { folder: this.folder },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    var e, s;
    const t = this.folder;
    return t ? l`
      <div
        class="row"
        ${O({ "grid-template-columns": this._getGridColumns() })}
        @click=${this._handleClick}
      >
        ${this.multiSelect ? this.selectable ? l` <div class="check">
                <div class="check-box">
                  <svg
                    class="check-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>` : l`<div></div>` : g}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel < 2 ? l`<div class="meta">
              ${((e = t.count) == null ? void 0 : e.files_recursive) ?? ((s = t.count) == null ? void 0 : s.files_direct) ?? 0} items
            </div>` : g}
        ${this.compactLevel < 1 ? l`<div class="meta">${os(t.modified_at || t.updated_at || "")}</div>` : g}
        <div></div>
      </div>
    ` : l``;
  }
};
we.styles = T`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
    }
    .thumb {
      width: 40px;
      height: 36px;
      position: relative;
      flex-shrink: 0;
    }
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .preview-area {
      position: absolute;
      top: 30%;
      left: 4%;
      right: 4%;
      bottom: 8%;
      overflow: hidden;
      border-radius: 1.5px;
      display: flex;
      gap: 1px;
    }
    .preview-slot {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .preview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .preview-img.icon-mode {
      object-fit: contain;
      padding: 2px;
    }
    .empty-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-input, oklch(0.871 0.016 241.798));
    }
    .folder-svg path {
      fill: var(--sfx-folder-bg, #e3e8ed);
    }
    .preview-slot.icon-bg {
      background: var(--sfx-card, oklch(1 0 0));
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .check {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .check-box {
      width: 22px;
      height: 22px;
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--sfx-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;
Re([
  d({ type: Object })
], we.prototype, "folder", 2);
Re([
  d({ type: Array })
], we.prototype, "previews", 2);
Re([
  d({ type: Boolean, reflect: !0 })
], we.prototype, "selected", 2);
Re([
  d({ type: Boolean, reflect: !0 })
], we.prototype, "disabled", 2);
Re([
  d({ type: Boolean })
], we.prototype, "selectable", 2);
Re([
  d({ type: Boolean })
], we.prototype, "multiSelect", 2);
Re([
  d({ type: Number })
], we.prototype, "index", 2);
Re([
  d({ type: Number })
], we.prototype, "compactLevel", 2);
we = Re([
  P("ap-folder-row")
], we);
var sa = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, Ls = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ia(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && sa(e, s, r), r;
};
let Nt = class extends L {
  constructor() {
    super(...arguments), this.index = 0;
  }
  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("label-open", {
        detail: { label: this.label },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const t = this.label;
    if (!t) return l``;
    const e = t.assets_count ?? 0, s = t.color || "#94a3b8";
    return l`
      <div class="card" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${O({ background: `color-mix(in srgb, ${s} 10%, transparent)` })}
        >
          <sfx-icon name="tag" .size=${18} ${O({ color: s })}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e !== 1 ? "s" : ""}</div>
        </div>
      </div>
    `;
  }
};
Nt.styles = [
  xe,
  T`
      :host {
        display: block;
      }
      .card {
        position: relative;
        cursor: pointer;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
        transition:
          box-shadow 150ms,
          border-color 150ms,
          background 150ms;
        background: var(--sfx-card, oklch(1 0 0));
        overflow: hidden;
      }
      .card:hover {
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .icon-wrapper {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .info {
        min-width: 0;
        flex: 1;
      }
      .name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .count {
        font-size: 0.75rem;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin-top: 2px;
      }
    `
];
Ls([
  d({ type: Object })
], Nt.prototype, "label", 2);
Ls([
  d({ type: Number })
], Nt.prototype, "index", 2);
Nt = Ls([
  P("ap-label-card")
], Nt);
var ra = Object.defineProperty, oa = Object.getOwnPropertyDescriptor, Os = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? oa(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && ra(e, s, r), r;
};
let Ut = class extends L {
  constructor() {
    super(...arguments), this.index = 0;
  }
  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("label-open", {
        detail: { label: this.label },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const t = this.label;
    if (!t) return l``;
    const e = t.assets_count ?? 0, s = t.color || "#94a3b8";
    return l`
      <div class="row" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${O({ background: `color-mix(in srgb, ${s} 10%, transparent)` })}
        >
          <sfx-icon name="tag" .size=${16} ${O({ color: s })}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e !== 1 ? "s" : ""}</div>
      </div>
    `;
  }
};
Ut.styles = T`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      text-align: right;
    }
  `;
Os([
  d({ type: Object })
], Ut.prototype, "label", 2);
Os([
  d({ type: Number })
], Ut.prototype, "index", 2);
Ut = Os([
  P("ap-label-row")
], Ut);
var aa = Object.defineProperty, la = Object.getOwnPropertyDescriptor, Ps = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? la(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && aa(e, s, r), r;
};
let jt = class extends L {
  constructor() {
    super(...arguments), this.index = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.style.setProperty("--sfx-stagger-index", String(this.index));
  }
  updated(t) {
    t.has("index") && this.style.setProperty("--sfx-stagger-index", String(this.index));
  }
  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("collection-open", {
        detail: { collection: this.collection },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const t = this.collection;
    return t ? l`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="layout-grid" .size=${22}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.title}>${t.title}</div>
        </div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    ` : l``;
  }
};
jt.styles = [
  xe,
  T`
      @keyframes ap-card-in {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      :host {
        display: block;
        animation: ap-card-in 300ms ease-out both;
        animation-delay: calc(var(--sfx-stagger-index, 0) * 50ms);
      }
      .card {
        position: relative;
        cursor: pointer;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 14px;
        transition:
          box-shadow 150ms,
          border-color 150ms;
        background: var(--sfx-card, oklch(1 0 0));
      }
      .card:hover {
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .card:hover .chevron {
        opacity: 1;
      }
      .icon-wrapper {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: linear-gradient(
          135deg,
          var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
          var(--sfx-accent, oklch(0.578 0.198 268.129 / 0.07))
        );
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .info {
        min-width: 0;
        flex: 1;
      }
      .name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chevron {
        flex-shrink: 0;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        opacity: 0.5;
        transition: opacity 150ms;
      }
    `
];
Ps([
  d({ type: Object })
], jt.prototype, "collection", 2);
Ps([
  d({ type: Number })
], jt.prototype, "index", 2);
jt = Ps([
  P("ap-collection-card")
], jt);
var na = Object.defineProperty, ca = Object.getOwnPropertyDescriptor, Ds = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ca(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && na(e, s, r), r;
};
let Kt = class extends L {
  constructor() {
    super(...arguments), this.index = 0;
  }
  _formatDate(t) {
    if (!t) return "";
    try {
      return new Date(t).toLocaleDateString(void 0, {
        month: "short",
        day: "numeric",
        year: "numeric"
      });
    } catch {
      return "";
    }
  }
  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("collection-open", {
        detail: { collection: this.collection },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const t = this.collection;
    return t ? l`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="layout-grid" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${t.title}>${t.title}</div>
        <div class="date">${this._formatDate(t.updated_at)}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    ` : l``;
  }
};
Kt.styles = T`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .row:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: linear-gradient(
        135deg,
        var(--sfx-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
        var(--sfx-accent, oklch(0.578 0.198 268.129 / 0.07))
      );
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .date {
      font-size: 0.75rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      white-space: nowrap;
      text-align: right;
    }
    .chevron {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `;
Ds([
  d({ type: Object })
], Kt.prototype, "collection", 2);
Ds([
  d({ type: Number })
], Kt.prototype, "index", 2);
Kt = Ds([
  P("ap-collection-row")
], Kt);
var da = Object.defineProperty, pa = Object.getOwnPropertyDescriptor, zs = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? pa(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && da(e, s, r), r;
};
let Bt = class extends L {
  constructor() {
    super(...arguments), this.index = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.style.setProperty("--sfx-stagger-index", String(this.index));
  }
  updated(t) {
    t.has("index") && this.style.setProperty("--sfx-stagger-index", String(this.index));
  }
  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("collection-folder-open", {
        detail: { folder: this.folder },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const t = this.folder;
    return t ? l`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${22}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
        </div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    ` : l``;
  }
};
Bt.styles = [
  xe,
  T`
      @keyframes ap-card-in {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      :host {
        display: block;
        animation: ap-card-in 300ms ease-out both;
        animation-delay: calc(var(--sfx-stagger-index, 0) * 50ms);
      }
      .card {
        position: relative;
        cursor: pointer;
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 14px;
        transition:
          box-shadow 150ms,
          border-color 150ms;
        background: var(--sfx-card, oklch(1 0 0));
      }
      .card:hover {
        box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .card:hover .chevron {
        opacity: 1;
      }
      .icon-wrapper {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      .info {
        min-width: 0;
        flex: 1;
      }
      .name {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .chevron {
        flex-shrink: 0;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        opacity: 0.5;
        transition: opacity 150ms;
      }
    `
];
zs([
  d({ type: Object })
], Bt.prototype, "folder", 2);
zs([
  d({ type: Number })
], Bt.prototype, "index", 2);
Bt = zs([
  P("ap-collection-folder-card")
], Bt);
var ha = Object.defineProperty, ua = Object.getOwnPropertyDescriptor, Ms = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ua(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && ha(e, s, r), r;
};
let Vt = class extends L {
  constructor() {
    super(...arguments), this.index = 0;
  }
  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("collection-folder-open", {
        detail: { folder: this.folder },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const t = this.folder;
    return t ? l`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    ` : l``;
  }
};
Vt.styles = T`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .row:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .name {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `;
Ms([
  d({ type: Object })
], Vt.prototype, "folder", 2);
Ms([
  d({ type: Number })
], Vt.prototype, "index", 2);
Vt = Ms([
  P("ap-collection-folder-row")
], Vt);
var fa = Object.defineProperty, ga = Object.getOwnPropertyDescriptor, xt = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ga(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && fa(e, s, r), r;
};
let Ge = class extends L {
  constructor() {
    super(...arguments), this.t = (t, e) => typeof e == "string" ? e : t, this.variant = "grid", this.gridSize = "normal", this.multiSelect = !0, this.folderCount = 0;
  }
  render() {
    if (this.variant === "grid") {
      const a = this.gridSize === "large" ? "280px" : "220px";
      return l`
        <div class="grid-skeleton" ${O({ "--sfx-grid-min-col": String(a) })}>
          ${Array.from(
        { length: 18 },
        () => l`<div class="card-skel">
                <div class="skeleton card-skel-thumb"></div>
                <div class="card-skel-info">
                  <div class="skeleton card-skel-name"></div>
                  <div class="skeleton card-skel-meta"></div>
                </div>
              </div>`
      )}
        </div>
      `;
    }
    const t = [];
    this.multiSelect && t.push("32px"), t.push("48px", "minmax(120px, 1fr)", "72px", "100px", "120px", "36px");
    const e = t.join(" "), s = l`
      <div class="row-skel" ${O({ "grid-template-columns": e })}>
        ${this.multiSelect ? l`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>` : ""}
        <div class="row-skel-folder-thumb">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
            />
          </svg>
        </div>
        <div class="skeleton row-skel-name row-skel-folder-name"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `, i = (a) => l`
      <div class="row-skel" ${O({ "grid-template-columns": e })}>
        ${this.multiSelect ? l`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>` : ""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${O({ width: a })}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `, r = [
      "70%",
      "55%",
      "80%",
      "45%",
      "65%",
      "50%",
      "75%",
      "60%",
      "85%",
      "40%",
      "72%",
      "58%"
    ], o = 12 - this.folderCount;
    return l`
      <div class="list-header" ${O({ "grid-template-columns": e })}>
        ${this.multiSelect ? l`<div class="header-check-wrap"><div class="header-check-box"></div></div>` : ""}
        <span></span>
        <span>${this.t("name", "Name")}</span>
        <span>${this.t("type", "Type")}</span>
        <span>${this.t("size", "Size")}</span>
        <span>${this.t("date", "Date")}</span>
        <span></span>
      </div>
      ${Array.from({ length: this.folderCount }, () => s)}
      ${Array.from({ length: o }, (a, n) => i(r[n % r.length]))}
    `;
  }
};
Ge.styles = T`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .skeleton {
      background: linear-gradient(
        90deg,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--sfx-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: var(--sfx-radius, 8px);
    }
    @keyframes shimmer {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
    .grid-skeleton {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--sfx-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .card-skel {
      border-radius: var(--sfx-radius, 8px);
      overflow: hidden;
    }
    .card-skel-thumb {
      aspect-ratio: 6/4;
    }
    .card-skel-info {
      padding: 10px 12px;
    }
    .card-skel-name {
      height: 14px;
      width: 70%;
      border-radius: 4px;
    }
    .card-skel-meta {
      height: 12px;
      width: 50%;
      border-radius: 4px;
      margin-top: 6px;
    }
    .row-skel {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .row-skel-check-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .row-skel-check {
      width: 22px;
      height: 22px;
      border-radius: 4px;
    }
    .row-skel-thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
    }
    .row-skel-name {
      height: 14px;
      width: 70%;
      border-radius: 4px;
    }
    .row-skel-folder-name {
      width: 55%;
    }
    .row-skel-type {
      height: 12px;
      width: 40px;
      border-radius: 4px;
    }
    .row-skel-size {
      height: 12px;
      width: 48px;
      border-radius: 4px;
    }
    .row-skel-date {
      height: 12px;
      width: 72px;
      border-radius: 4px;
    }
    .row-skel-folder-thumb {
      width: 40px;
      height: 36px;
      position: relative;
    }
    .row-skel-folder-thumb svg {
      width: 100%;
      height: 100%;
    }
    .row-skel-folder-thumb svg path {
      fill: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .list-header {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
    }
    .list-header span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .header-check-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header-check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      background: var(--sfx-background, oklch(1 0 0));
    }
    @media (prefers-reduced-motion: reduce) {
      .skeleton {
        animation: none;
      }
    }
  `;
xt([
  d({ attribute: !1 })
], Ge.prototype, "t", 2);
xt([
  d({ reflect: !0 })
], Ge.prototype, "variant", 2);
xt([
  d({ type: String })
], Ge.prototype, "gridSize", 2);
xt([
  d({ type: Boolean })
], Ge.prototype, "multiSelect", 2);
xt([
  d({ type: Number })
], Ge.prototype, "folderCount", 2);
Ge = xt([
  P("ap-skeleton")
], Ge);
var va = Object.defineProperty, ma = Object.getOwnPropertyDescriptor, W = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ma(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && va(e, s, r), r;
};
let B = class extends L {
  constructor() {
    super(...arguments), this.asset = null, this.assets = [], this.selectedIds = [], this.containerToken = "", this.showMetadata = !0, this.metadataFields = [], this.labels = [], this.regionalFilters = {}, this.multiSelect = !0, this.t = (t, e) => typeof e == "string" ? e : t, this._isFullscreen = !1, this._fsImageLoaded = !1, this._previewLoading = !1, this._openSections = /* @__PURE__ */ new Set(["file-info", "metadata"]), this._hls = null;
  }
  connectedCallback() {
    super.connectedCallback(), this._onFullscreenChange = this._onFullscreenChange.bind(this), this._onKeyDown = this._onKeyDown.bind(this), document.addEventListener("fullscreenchange", this._onFullscreenChange), document.addEventListener("keydown", this._onKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("fullscreenchange", this._onFullscreenChange), document.removeEventListener("keydown", this._onKeyDown), this._destroyHls();
  }
  _onKeyDown(t) {
    if (t.key !== "ArrowLeft" && t.key !== "ArrowRight") return;
    const e = t.composedPath()[0];
    if (!e) return;
    const s = e.tagName;
    s === "INPUT" || s === "TEXTAREA" || s === "SELECT" || e.getAttribute("role") === "radio" || e.getAttribute("role") === "listbox" || e.isContentEditable || (t.preventDefault(), t.key === "ArrowLeft" ? this._prev() : this._next());
  }
  _destroyHls() {
    this._hls && (this._hls.destroy(), this._hls = null);
  }
  updated(t) {
    if (super.updated(t), t.has("asset") && (this._destroyHls(), this._previewLoading = !0, this.asset)) {
      const e = ft(this.asset.type);
      e === "video" && this._setupHls(this.asset), e !== "image" && e !== "video" && (this._previewLoading = !1);
    }
  }
  async _setupHls(t) {
    var i, r;
    const e = ls(t);
    if (!e || (await this.updateComplete, ((i = this.asset) == null ? void 0 : i.uuid) !== t.uuid)) return;
    const s = this._videoEl;
    if (s) {
      if (s.canPlayType("application/vnd.apple.mpegurl")) {
        s.src = e;
        return;
      }
      try {
        const { default: o } = await import("./hls.light-rLeTuUbK.js");
        if (!o.isSupported() || ((r = this.asset) == null ? void 0 : r.uuid) !== t.uuid || !this.isConnected) return;
        const a = new o();
        this._hls = a, a.loadSource(e), a.attachMedia(s), a.on(o.Events.ERROR, (n, c) => {
          var h;
          c.fatal && (this._destroyHls(), s.src = ((h = t.url) == null ? void 0 : h.cdn) || "");
        });
      } catch {
      }
    }
  }
  _onFullscreenChange() {
    this._isFullscreen = !!document.fullscreenElement, this._isFullscreen && (this._fsImageLoaded = !1);
  }
  _close() {
    this.dispatchEvent(new CustomEvent("preview-close", { bubbles: !0, composed: !0 }));
  }
  _exitFullscreen() {
    var t;
    (t = document.exitFullscreen) == null || t.call(document);
  }
  _fullscreen() {
    var e, s, i, r, o, a;
    if (((s = (e = this.asset) == null ? void 0 : e.extension) == null ? void 0 : s.toLowerCase()) === "pdf" && ((r = (i = this.asset) == null ? void 0 : i.url) != null && r.cdn)) {
      window.open(this.asset.url.cdn, "_blank", "noopener");
      return;
    }
    this._fsImageLoaded = !1, (a = (o = this.previewArea) == null ? void 0 : o.requestFullscreen) == null || a.call(o);
  }
  _select() {
    if (!this.asset) return;
    if (!this.multiSelect) {
      this.dispatchEvent(
        new CustomEvent("asset-quick-select", {
          detail: { asset: this.asset },
          bubbles: !0,
          composed: !0
        })
      );
      return;
    }
    const t = this._getCurrentIndex();
    this.dispatchEvent(
      new CustomEvent("asset-select", {
        detail: {
          asset: this.asset,
          index: t,
          event: new MouseEvent("click", { ctrlKey: !0, metaKey: !0 })
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _getCurrentIndex() {
    return !this.asset || this.assets.length === 0 ? -1 : this.assets.findIndex((t) => t.uuid === this.asset.uuid);
  }
  _navigateTo(t) {
    this._fsImageLoaded = !1, this.dispatchEvent(
      new CustomEvent("preview-navigate", {
        detail: { asset: t },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /** Check if an asset supports inline fullscreen preview (not PDF/other). */
  _supportsFullscreen(t) {
    const e = ft(t.type);
    return e === "image" || e === "video" || e === "audio";
  }
  /**
   * Find the nearest navigable asset index in a given direction.
   * In fullscreen, skips assets that don't support fullscreen preview.
   * Returns -1 if no valid target exists.
   */
  _findNavTarget(t, e) {
    const s = e === 1 ? this.assets.length : -1;
    for (let i = t + e; i !== s; i += e)
      if (!this._isFullscreen || this._supportsFullscreen(this.assets[i]))
        return i;
    return -1;
  }
  _prev() {
    const t = this._getCurrentIndex();
    if (t <= 0) return;
    const e = this._findNavTarget(t, -1);
    e >= 0 && this._navigateTo(this.assets[e]);
  }
  _next() {
    const t = this._getCurrentIndex();
    if (t < 0 || t >= this.assets.length - 1) return;
    const e = this._findNavTarget(t, 1);
    e >= 0 && this._navigateTo(this.assets[e]);
  }
  _getFullscreenImageUrl(t) {
    var r, o;
    const e = (r = t.url) == null ? void 0 : r.cdn;
    if (!e) return ss(t) || "";
    const s = { source: "asset", asset: t };
    if (((o = t.extension) == null ? void 0 : o.toLowerCase()) === "svg") return Oe(e, s);
    const i = it(e, this.containerToken);
    return Oe(
      Be(i, {
        w: String(window.screen.width),
        dpr: String(window.devicePixelRatio || 1),
        org_if_sml: "1"
      }),
      s
    );
  }
  _getBlurDimensions(t) {
    var a, n;
    const e = (a = t.info) == null ? void 0 : a.img_w, s = (n = t.info) == null ? void 0 : n.img_h;
    if (!e || !s) return { width: "100vw", height: "100vh" };
    const i = window.innerWidth, r = window.innerHeight, o = Math.min(i / e, r / s, 1);
    return { width: `${Math.round(e * o)}px`, height: `${Math.round(s * o)}px` };
  }
  _onFsImageLoad() {
    this._fsImageLoaded = !0;
  }
  _getTagEntries(t) {
    if (!t) return [];
    if (Array.isArray(t))
      return this._parseTagArray(t);
    const e = Object.values(t);
    if (e.length > 0 && Array.isArray(e[0])) {
      const s = e.flat(), i = /* @__PURE__ */ new Set();
      return s.filter((r) => !r.label || i.has(r.sid) ? !1 : (i.add(r.sid), !0));
    }
    return e.map((s) => ({ label: s.label, sid: s.sid })).filter((s) => s.label);
  }
  _parseTagArray(t) {
    return t.map((e) => {
      if (typeof e == "string") return { label: e, sid: e };
      const s = e;
      return { label: s.label || Object.values(s.names || {})[0] || "", sid: s.sid || "" };
    }).filter((e) => e.label);
  }
  _applyTagFilter(t) {
    this.dispatchEvent(
      new CustomEvent("filter-update", {
        detail: { key: b.TAGS, values: [t], operator: E.IS },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _applyLabelFilter(t) {
    this.dispatchEvent(
      new CustomEvent("filter-update", {
        detail: { key: b.LABELS, values: [t], operator: E.IS },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _toggleSection(t) {
    const e = new Set(this._openSections);
    e.has(t) ? e.delete(t) : e.add(t), this._openSections = e;
  }
  _renderFileInfoSection(t) {
    const e = this._getFileInfoRows(t);
    if (e.length === 0) return g;
    const s = this._openSections.has("file-info");
    return l`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${s ? "true" : "false"}
          @click=${() => this._toggleSection("file-info")}
        >
          <span>${this.t("fileInfo", "File info")}</span>
          <svg
            class="accordion-chevron"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${s ? "open" : ""}">
          ${e.map(
      (i) => l`
              <div class="meta-row">
                <span class="meta-label" title=${i.label}>${i.label}</span>
                <span class="meta-value" title=${i.value}>${i.value}</span>
              </div>
            `
    )}
          ${this._renderTagsRow(t)} ${this._renderLabelsRow(t)}
        </div>
      </div>
    `;
  }
  _renderAccordion(t, e, s) {
    if (s.length === 0) return g;
    const i = this._openSections.has(t);
    return l`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${i ? "true" : "false"}
          @click=${() => this._toggleSection(t)}
        >
          <span>${e}</span>
          <svg
            class="accordion-chevron"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${i ? "open" : ""}">
          ${s.map(
      (r) => l`
              <div class="meta-row">
                <span class="meta-label" title=${r.label}>${r.label}</span>
                <span class="meta-value" title=${r.value}>${r.value}</span>
              </div>
            `
    )}
        </div>
      </div>
    `;
  }
  _getFileInfoRows(t) {
    var s, i, r, o, a, n;
    const e = [];
    return e.push({ label: this.t("fileName", "File name"), value: t.name }), t.extension && e.push({ label: this.t("fileType", "Type"), value: t.extension.toUpperCase() }), (s = t.size) != null && s.bytes && e.push({ label: this.t("fileSize", "Size"), value: Is(t.size.bytes) }), (i = t.info) != null && i.img_w && e.push({
      label: this.t("dimensions", "Dimensions"),
      value: mi(t.info.img_w, t.info.img_h)
    }), (r = t.info) != null && r.video_w && e.push({
      label: this.t("videoResolution", "Video resolution"),
      value: `${t.info.video_w} x ${t.info.video_h}`
    }), (((o = t.info) == null ? void 0 : o.video_duration) ?? ((a = t.info) == null ? void 0 : a.duration)) != null && e.push({
      label: this.t("duration", "Duration"),
      value: `${Math.round(t.info.video_duration ?? t.info.duration)}s`
    }), (n = t.info) != null && n.color_space && e.push({ label: this.t("colorSpace", "Color space"), value: t.info.color_space }), t.created_at && e.push({ label: this.t("created", "Created"), value: os(t.created_at) }), t.modified_at && e.push({ label: this.t("modified", "Modified"), value: os(t.modified_at) }), e;
  }
  /**
   * Build a lookup map from metadata field key → field definition.
   * Maps by key, ckey, and slug.
   */
  _buildFieldMap() {
    const t = /* @__PURE__ */ new Map();
    for (const e of this.metadataFields)
      t.set(e.key, e), e.ckey && t.set(e.ckey, e), e.slug && t.set(e.slug, e);
    return t;
  }
  /**
   * Resolve a single slug like "@itm_v1_xxx@" to its label via possible_values.
   */
  _resolveSlug(t, e) {
    var i;
    if (!((i = e.possible_values) != null && i.length) || !t.startsWith("@")) return t;
    const s = e.possible_values.find(
      (r) => r.internal_unique_value === t || r.api_value === t
    );
    return (s == null ? void 0 : s.label) ?? t;
  }
  /**
   * Resolve a metadata field value, handling regional variants and slug→label mapping.
   */
  _resolveFieldValue(t, e) {
    var s;
    if (t == null || t === "") return "";
    if (e.regionalVariantsGroupUuid && typeof t == "object" && t !== null && !Array.isArray(t)) {
      const i = this.regionalFilters[e.regionalVariantsGroupUuid];
      if (i) {
        const r = t[i];
        if (r != null && r !== "")
          return this._resolveFieldValue(r, {
            ...e,
            regionalVariantsGroupUuid: void 0
          });
      }
      return "";
    }
    if ((s = e.possible_values) != null && s.length)
      return Array.isArray(t) ? t.map((r) => this._resolveSlug(String(r), e)).filter(Boolean).join(", ") : this._resolveSlug(String(t), e);
    if (Array.isArray(t)) return t.join(", ");
    if (typeof t == "object") {
      const i = JSON.stringify(t);
      return i === "{}" || i === "[]" ? "" : i;
    }
    return String(t);
  }
  _getAllMetadataRows(t) {
    var o, a, n, c;
    const e = [], s = this._buildFieldMap(), i = /* @__PURE__ */ new Set();
    if (this.metadataFields.length > 0) {
      const h = t;
      for (const u of this.metadataFields) {
        const f = h[u.key] ?? ((a = (o = t.info) == null ? void 0 : o.metadata) == null ? void 0 : a[u.key]) ?? ((n = t.meta) == null ? void 0 : n[u.key]), p = this._resolveFieldValue(f, u);
        if (!p) continue;
        i.add(u.key), u.slug && i.add(u.slug);
        const v = p.length > 50;
        e.push({ label: u.label, value: p, wrap: v });
      }
    }
    if (t.meta)
      for (const [h, u] of Object.entries(t.meta)) {
        if (i.has(h) || u == null || u === "") continue;
        const f = s.get(h);
        if (f) {
          const p = this._resolveFieldValue(u, f);
          if (!p) continue;
          i.add(h);
          const v = p.length > 50;
          e.push({ label: f.label, value: p, wrap: v });
        } else {
          const p = typeof u == "object" ? JSON.stringify(u) : String(u);
          if (!p || p === "{}" || p === "[]") continue;
          i.add(h);
          const v = h.charAt(0).toUpperCase() + h.slice(1).replace(/_/g, " "), m = p.length > 50;
          e.push({ label: v, value: p, wrap: m });
        }
      }
    const r = (c = t.info) == null ? void 0 : c.metadata;
    if (r && typeof r == "object")
      for (const [h, u] of Object.entries(r)) {
        if (i.has(h) || u == null || u === "") continue;
        const f = s.get(h);
        if (f) {
          const p = this._resolveFieldValue(u, f);
          if (!p) continue;
          i.add(h);
          const v = p.length > 50;
          e.push({ label: f.label, value: p, wrap: v });
        } else {
          const p = typeof u == "object" ? JSON.stringify(u) : String(u);
          if (!p || p === "{}" || p === "[]") continue;
          i.add(h);
          const v = h.charAt(0).toUpperCase() + h.slice(1).replace(/_/g, " "), m = p.length > 50;
          e.push({ label: v, value: p, wrap: m });
        }
      }
    return e;
  }
  _getAssetLabels(t) {
    return !t.labels || t.labels.length === 0 ? [] : t.labels.map((e) => this.labels.find((s) => s.sid === e || s.uuid === e)).filter((e) => !!e);
  }
  _renderLabelsRow(t) {
    const e = this._getAssetLabels(t);
    return e.length === 0 ? g : l`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t("labels", "Labels")}</span>
        <div class="tags-list">
          ${e.map(
      (s) => l`
              <sfx-badge
                class="tag-link"
                ${O({
        "--sfx-muted": `${s.color || "#94a3b8"}22`,
        "--sfx-muted-foreground": s.color || "#94a3b8"
      })}
                @click=${() => this._applyLabelFilter(s.sid || s.uuid)}
              >
                <span class="label-content">
                  <sfx-icon name="tag" .size=${12} ${O({ color: s.color || "#94a3b8" })}></sfx-icon>
                  ${s.name}
                </span>
              </sfx-badge>
            `
    )}
        </div>
      </div>
    `;
  }
  _renderTagsRow(t) {
    const e = this._getTagEntries(t.tags);
    return e.length === 0 ? g : l`
      <div class="meta-row">
        <span class="meta-label">${this.t("tags", "Tags")}</span>
        <div class="tags-list">
          ${e.map(
      (s) => l`
              <sfx-badge class="tag-link" @click=${() => this._applyTagFilter(s.sid)}
                >${s.label}</sfx-badge
              >
            `
    )}
        </div>
      </div>
    `;
  }
  render() {
    var N, F, Q, A, U, z, S, ne;
    const t = this.asset;
    if (!t) return g;
    const e = ft(t.type), s = e === "image", i = e === "video", r = e === "audio", o = ((N = t.extension) == null ? void 0 : N.toLowerCase()) === "pdf", a = Gt(t.extension || ""), n = ks(t.extension || ""), c = ((F = t.extension) == null ? void 0 : F.toLowerCase()) === "svg", h = ss(t), u = s ? c ? Oe(((Q = t.url) == null ? void 0 : Q.cdn) || "", { source: "asset", asset: t }) : h || Oe(
      it(((A = t.url) == null ? void 0 : A.cdn) || "", this.containerToken),
      { source: "asset", asset: t }
    ) : "", f = s ? this._getFullscreenImageUrl(t) : "", p = s && !c ? this._getBlurDimensions(t) : null, v = i && ((U = t.url) == null ? void 0 : U.cdn) || "", m = i ? Oe(((z = t.info) == null ? void 0 : z.video_thumbnail) || ((S = t.info) == null ? void 0 : S.preview) || "", {
      source: "video",
      asset: t
    }) : "", k = o && !s ? Ss(t) : "", _ = this._getCurrentIndex(), $ = _ > 0 && this._findNavTarget(_, -1) >= 0, y = _ >= 0 && this._findNavTarget(_, 1) >= 0, I = this.assets.length > 1;
    return l`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button
              class="icon-btn"
              @click=${this._fullscreen}
              ?disabled=${!s && !i && !r && !o}
              aria-label=${this.t("fullscreen", "Fullscreen")}
              title=${this.t("fullscreen", "Fullscreen")}
            >
              <sfx-icon name="fullscreen" .size=${16}></sfx-icon>
            </button>
            <button
              class="icon-btn ${this.asset && this.selectedIds.includes(this.asset.uuid) ? "selected" : ""}"
              @click=${this._select}
              aria-label=${this.t("select", "Select")}
              title=${this.t("selectAsset", "Select the asset")}
            >
              <sfx-icon name="select" .size=${16}></sfx-icon>
            </button>
            <div class="header-divider"></div>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <sfx-icon name="close" .size=${16}></sfx-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${s && n ? "chess" : ""}">
          ${I ? l`
                <button
                  class="nav-btn prev"
                  @click=${this._prev}
                  ?disabled=${!$}
                  aria-label=${this.t("previous", "Previous")}
                >
                  <sfx-icon name="chevron-left" .size=${16}></sfx-icon>
                </button>
                <button
                  class="nav-btn next"
                  @click=${this._next}
                  ?disabled=${!y}
                  aria-label=${this.t("next", "Next")}
                >
                  <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
                </button>
              ` : g}
          ${this._isFullscreen ? l`
                <button
                  class="fs-close-btn"
                  @click=${this._exitFullscreen}
                  aria-label=${this.t("exitFullscreen", "Exit fullscreen")}
                >
                  <sfx-icon name="close" .size=${16}></sfx-icon>
                </button>
              ` : g}
          ${this._previewLoading ? l`<div class="preview-loading"><div class="spinner"></div></div>` : g}
          ${s ? l`
                <img
                  src=${u}
                  alt=${t.name}
                  @load=${(ce) => {
      ce.target.classList.remove("icon-fallback"), this._previewLoading = !1;
    }}
                  @error=${(ce) => {
      const V = ce.target;
      this._previewLoading = !1, V.src !== a && (V.src = a, V.classList.add("icon-fallback"));
    }}
                />
                <div class="fs-wrapper">
                  ${c ? g : l`
                        <img
                          class="fs-blur ${this._fsImageLoaded ? "hidden" : ""}"
                          src=${u}
                          alt=""
                          ${O({ width: p.width, height: p.height })}
                        />
                      `}
                  <img
                    class="fs-full ${c || this._fsImageLoaded ? "loaded" : ""}"
                    src=${this._isFullscreen ? f : ""}
                    alt=${t.name}
                    ${O(c ? { width: "100vw", height: "100vh" } : null)}
                    @load=${this._onFsImageLoad}
                  />
                </div>
              ` : g}
          ${i ? l`<video
                src=${v}
                poster=${m || g}
                controls
                controlsList="nofullscreen"
                @loadeddata=${() => {
      this._previewLoading = !1;
    }}
                @error=${() => {
      this._previewLoading = !1;
    }}
              ></video>` : g}
          ${r ? l`<audio src=${((ne = t.url) == null ? void 0 : ne.cdn) || ""} controls></audio>` : g}
          ${o && !s ? l`
                <img
                  src=${k || a}
                  alt=${t.name}
                  class=${k ? "" : "icon-fallback"}
                  @error=${(ce) => {
      const V = ce.target;
      V.src !== a && (V.src = a, V.classList.add("icon-fallback"));
    }}
                />
              ` : g}
          ${!s && !i && !r && !o ? l`<img src=${a} alt=${t.name} class="icon-fallback" />` : g}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata ? l`
              ${this._renderAccordion(
      "metadata",
      this.t("metadata", "Metadata"),
      this._getAllMetadataRows(t)
    )}
            ` : g}
      </div>
    `;
  }
};
B.styles = T`
    :host {
      display: block;
    }
    .panel {
      width: 420px;
      min-width: 420px;
      max-width: 100%;
      height: 100%;
      background: var(--sfx-background, oklch(1 0 0));
      border-left: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      display: flex;
      flex-direction: column;
      animation: ap-panel-in 300ms ease-out;
      overflow-y: auto;
      user-select: none;
    }
    @keyframes ap-panel-in {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      height: 50px;
      min-height: 50px;
      padding: 0 16px;
    }
    .panel-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .header-divider {
      width: 1px;
      height: 16px;
      background: var(--sfx-border, oklch(92.86% 0.009 247.92));
      margin: 0 2px;
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover:not(:disabled) {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .icon-btn.selected {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      color: #fff;
    }
    .icon-btn.selected:hover {
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      color: #fff;
      opacity: 0.9;
    }
    .preview-area {
      position: relative;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      min-height: 300px;
      height: 300px;
      flex-shrink: 0;
      overflow: hidden;
    }
    .preview-loading {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      z-index: 3;
    }
    .preview-loading .spinner {
      width: 24px;
      height: 24px;
      border: 2.5px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-top-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-radius: 50%;
      animation: ap-spin 0.6s linear infinite;
    }
    @keyframes ap-spin {
      to {
        transform: rotate(360deg);
      }
    }
    .preview-area img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: var(--sfx-radius-sm, 6px);
      -webkit-user-drag: none;
      pointer-events: none;
    }
    .preview-area.chess {
      background-image: conic-gradient(
        var(--sfx-chess-a, #f0f0f0) 25%,
        var(--sfx-chess-b, #fff) 25% 50%,
        var(--sfx-chess-a, #f0f0f0) 50% 75%,
        var(--sfx-chess-b, #fff) 75%
      );
      background-size: 16px 16px;
    }
    .preview-area img.icon-fallback {
      object-fit: scale-down;
      padding: 16px;
      max-width: 100px;
    }
    .preview-area video {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    /* Fullscreen styles */
    .preview-area:fullscreen {
      background: #000;
      padding: 0;
    }
    .preview-area:fullscreen .fs-wrapper {
      position: relative;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .preview-area:fullscreen .fs-wrapper .fs-blur {
      position: absolute;
      inset: 0;
      margin: auto;
      object-fit: contain;
      filter: blur(8px);
      overflow: hidden;
      clip-path: inset(0);
      transition: opacity 0.3s ease;
    }
    .preview-area:fullscreen .fs-wrapper .fs-blur.hidden {
      opacity: 0;
      pointer-events: none;
    }
    .preview-area:fullscreen .fs-wrapper .fs-full {
      position: relative;
      z-index: 1;
      max-width: 100vw;
      max-height: 100vh;
      object-fit: contain;
      border-radius: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .preview-area:fullscreen .fs-wrapper .fs-full.loaded {
      opacity: 1;
    }
    /* Hide panel img in fullscreen, show fs-wrapper instead */
    .preview-area:fullscreen > img {
      display: none;
    }
    .fs-wrapper {
      display: none;
    }
    .preview-area:fullscreen .fs-wrapper {
      display: flex;
    }
    .preview-area:fullscreen img {
      max-height: 100vh;
      max-width: 100vw;
      border-radius: 0;
    }
    .preview-area:fullscreen video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .preview-area:fullscreen .nav-btn {
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      width: 40px;
      height: 40px;
    }
    .preview-area:fullscreen .nav-btn:hover:not(:disabled) {
      background: rgba(0, 0, 0, 0.7);
    }
    .fs-close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      right: 16px;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      cursor: pointer;
      z-index: 3;
    }
    .fs-close-btn:hover {
      background: rgba(0, 0, 0, 0.7);
    }
    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      z-index: 2;
    }
    .nav-btn:hover:not(:disabled) {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .nav-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .nav-btn.prev {
      left: 8px;
    }
    .nav-btn.next {
      right: 8px;
    }
    .tags-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .meta-row--col {
      flex-direction: column;
      gap: 6px;
    }
    .label-content {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .tag-link {
      cursor: pointer;
      transition: opacity 150ms;
    }
    .tag-link:hover {
      opacity: 0.75;
    }
    /* Accordion styles */
    .accordion-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 16px;
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      text-align: left;
    }
    .accordion-trigger:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .accordion-chevron {
      transition: transform 200ms;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .accordion-trigger[aria-expanded='true'] .accordion-chevron {
      transform: rotate(180deg);
    }
    .accordion-content {
      display: none;
      padding: 0 16px 12px;
    }
    .accordion-content.open {
      display: block;
    }
    .meta-row {
      display: flex;
      gap: 12px;
      padding: 6px 0;
    }
    .meta-label {
      font-size: 0.8125rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta-value {
      font-size: 0.8125rem;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      min-width: 0;
      user-select: text;
      word-break: break-word;
    }
    @media (prefers-reduced-motion: reduce) {
      .panel {
        animation: none;
      }
      .accordion-chevron {
        transition: none;
      }
    }
  `;
W([
  d({ type: Object })
], B.prototype, "asset", 2);
W([
  d({ type: Array })
], B.prototype, "assets", 2);
W([
  d({ type: Array })
], B.prototype, "selectedIds", 2);
W([
  d()
], B.prototype, "containerToken", 2);
W([
  d({ type: Boolean })
], B.prototype, "showMetadata", 2);
W([
  d({ type: Array })
], B.prototype, "metadataFields", 2);
W([
  d({ type: Array })
], B.prototype, "labels", 2);
W([
  d({ type: Object })
], B.prototype, "regionalFilters", 2);
W([
  d({ type: Boolean })
], B.prototype, "multiSelect", 2);
W([
  d({ attribute: !1 })
], B.prototype, "t", 2);
W([
  lt(".preview-area")
], B.prototype, "previewArea", 2);
W([
  lt("video")
], B.prototype, "_videoEl", 2);
W([
  x()
], B.prototype, "_isFullscreen", 2);
W([
  x()
], B.prototype, "_fsImageLoaded", 2);
W([
  x()
], B.prototype, "_previewLoading", 2);
W([
  x()
], B.prototype, "_openSections", 2);
B = W([
  P("ap-preview-panel")
], B);
var ba = Object.defineProperty, xa = Object.getOwnPropertyDescriptor, Ie = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? xa(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && ba(e, s, r), r;
};
let be = class extends L {
  constructor() {
    super(...arguments), this.selectedAssets = [], this.selectedFolders = [], this.totalCount = 0, this.totalFolderCount = 0, this.isSelectingAll = !1, this.multiSelect = !0, this.showTransform = !1, this.t = (t, e) => typeof e == "string" ? e : t;
  }
  get _totalSelected() {
    return this.selectedAssets.length + this.selectedFolders.length;
  }
  _formatCount() {
    const { t } = this, e = this.selectedAssets.length, s = this.selectedFolders.length;
    if (s === 0)
      return t("assetsSelected", {
        count: e,
        defaultValue_one: "{{count}} asset selected",
        defaultValue_other: "{{count}} assets selected"
      });
    if (e === 0)
      return t("foldersSelected", {
        count: s,
        defaultValue_one: "{{count}} folder selected",
        defaultValue_other: "{{count}} folders selected"
      });
    const i = t("foldersCount", {
      count: s,
      defaultValue_one: "{{count}} folder",
      defaultValue_other: "{{count}} folders"
    }), r = t("assetsCount", {
      count: e,
      defaultValue_one: "{{count}} asset",
      defaultValue_other: "{{count}} assets"
    });
    return t("foldersAndAssetsSelected", "{{folders}} and {{assets}} selected", {
      folders: i,
      assets: r
    });
  }
  _confirm() {
    this.dispatchEvent(
      new CustomEvent("selection-confirm", {
        detail: { assets: this.selectedAssets, folders: this.selectedFolders },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _transform() {
    this.dispatchEvent(
      new CustomEvent("selection-transform", {
        detail: { assets: this.selectedAssets, folders: this.selectedFolders },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _clear() {
    this.dispatchEvent(new CustomEvent("selection-clear", { bubbles: !0, composed: !0 }));
  }
  _canSelectMore() {
    if (this.maxSelections && this._totalSelected >= this.maxSelections) return !1;
    const t = this._selectScope;
    return t === "assets" ? this.selectedAssets.length < this.totalCount : t === "folders" ? this.selectedFolders.length < this.totalFolderCount : this._totalSelected < this.totalCount + this.totalFolderCount;
  }
  get _scopeTotal() {
    const t = this._selectScope;
    return t === "assets" ? this.totalCount : t === "folders" ? this.totalFolderCount : this.totalCount + this.totalFolderCount;
  }
  get _selectScope() {
    const t = this.selectedAssets.length > 0, e = this.selectedFolders.length > 0;
    return t && !e ? "assets" : e && !t ? "folders" : "all";
  }
  _selectAll() {
    this.dispatchEvent(
      new CustomEvent("select-all", {
        detail: { scope: this._selectScope },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return this._totalSelected === 0 ? g : l`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect ? l`
              <span class="divider"></span>
              <span class="select-label">${this.t("selectColon", "Select:")}</span>
              ${this._canSelectMore() ? l`<button
                    class="bar-btn"
                    ?disabled=${this.isSelectingAll}
                    @click=${this._selectAll}
                  >
                    <sfx-icon name="check-check" .size=${14}></sfx-icon>${this.isSelectingAll ? this.t("selecting", "Selecting...") : this.maxSelections && this.maxSelections < this._scopeTotal ? this.t("selectFirst", `First ${this.maxSelections}`, {
      count: this.maxSelections
    }) : this._selectScope === "assets" ? this.t("selectAllAssets", "Select all assets") : this._selectScope === "folders" ? this.t("selectAllFolders", "Select all folders") : this.t("selectAll", "Select all")}
                  </button>` : g}
              <button class="bar-btn" @click=${this._clear}>
                <sfx-icon name="close" .size=${14}></sfx-icon>${this.t("deselectAll", "Deselect all")}
              </button>
              ${this.maxSelections && this._totalSelected >= this.maxSelections ? l`<span class="limit-notice"
                    >${this.t("maxSelectionsAllowed", `Max ${this.maxSelections} allowed`, {
      count: this.maxSelections
    })}</span
                  >` : g}
            ` : g}
        <div class="spacer"></div>
        ${this.showTransform ? l`
              <button class="btn-confirm btn-transform" @click=${this._transform}>
                ${this.t("transform", "Transform")}
              </button>
            ` : g}
        <button class="btn-confirm" @click=${this._confirm}>${this.t("confirm", "Confirm")}</button>
      </div>
    `;
  }
};
be.styles = T`
    :host {
      display: block;
      padding: 0 8px 8px;
    }
    .bar {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      border-radius: var(--sfx-radius-lg, 12px);
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
    .count {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
      white-space: nowrap;
    }
    .divider {
      width: 1px;
      height: 20px;
      background: oklch(1 0 0 / 0.3);
      margin: 0 16px;
      flex-shrink: 0;
    }
    .select-label {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: oklch(1 0 0 / 0.7);
      white-space: nowrap;
    }
    .bar-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-primary-foreground, oklch(1 0 0));
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 14px;
      margin-left: 8px;
      font-weight: 500;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      white-space: nowrap;
      border-radius: var(--sfx-radius-sm, 6px);
      transition: background 100ms;
    }
    .bar-btn:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .bar-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .limit-notice {
      font-size: var(--sfx-font-size-xs, 0.75rem);
      color: oklch(1 0 0 / 0.7);
      margin-left: 8px;
      white-space: nowrap;
    }
    .spacer {
      flex: 1;
    }
    .btn-confirm {
      padding: 8px 24px;
      border: 1.5px solid var(--sfx-primary-foreground, oklch(1 0 0));
      border-radius: var(--sfx-radius-sm, 6px);
      font-size: var(--sfx-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      background: transparent;
      color: var(--sfx-primary-foreground, oklch(1 0 0));
    }
    .btn-confirm:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .btn-transform {
      margin-right: 8px;
      border-color: oklch(1 0 0 / 0.5);
    }
    @media (prefers-reduced-motion: reduce) {
      .bar {
        animation: none;
      }
    }
  `;
Ie([
  d({ type: Array })
], be.prototype, "selectedAssets", 2);
Ie([
  d({ type: Array })
], be.prototype, "selectedFolders", 2);
Ie([
  d({ type: Number })
], be.prototype, "totalCount", 2);
Ie([
  d({ type: Number })
], be.prototype, "totalFolderCount", 2);
Ie([
  d({ type: Boolean })
], be.prototype, "isSelectingAll", 2);
Ie([
  d({ type: Boolean })
], be.prototype, "multiSelect", 2);
Ie([
  d({ type: Number })
], be.prototype, "maxSelections", 2);
Ie([
  d({ type: Boolean })
], be.prototype, "showTransform", 2);
Ie([
  d({ attribute: !1 })
], be.prototype, "t", 2);
be = Ie([
  P("ap-selection-bar")
], be);
var _a = Object.defineProperty, ya = Object.getOwnPropertyDescriptor, Rs = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? ya(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && _a(e, s, r), r;
};
let qt = class extends L {
  constructor() {
    super(...arguments), this.active = !1, this.rect = { x: 0, y: 0, width: 0, height: 0 };
  }
  render() {
    return !this.active || this.rect.width < 5 || this.rect.height < 5 ? g : l`
      <div
        class="marquee"
        ${O({
      left: `${this.rect.x}px`,
      top: `${this.rect.y}px`,
      width: `${this.rect.width}px`,
      height: `${this.rect.height}px`
    })}
      ></div>
    `;
  }
};
qt.styles = T`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      pointer-events: none;
      z-index: 10;
    }
    .marquee {
      position: absolute;
      border: 2px solid var(--sfx-primary, oklch(0.578 0.198 268.129));
      background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      border-radius: 2px;
    }
  `;
Rs([
  d({ type: Boolean })
], qt.prototype, "active", 2);
Rs([
  d({ type: Object })
], qt.prototype, "rect", 2);
qt = Rs([
  P("ap-marquee-overlay")
], qt);
var $a = Object.defineProperty, wa = Object.getOwnPropertyDescriptor, Yt = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? wa(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && $a(e, s, r), r;
};
let at = class extends L {
  constructor() {
    super(...arguments), this.folders = [], this.loading = !1, this.t = (t, e) => typeof e == "string" ? e : t, this._mode = "recursive";
  }
  _handleConfirm() {
    this.dispatchEvent(
      new CustomEvent("folder-resolve-confirm", {
        detail: { mode: this._mode },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleCancel() {
    this.dispatchEvent(
      new CustomEvent("folder-resolve-cancel", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleModeChange(t) {
    this._mode = t.detail.value;
  }
  render() {
    const t = this.folders.length;
    return l`
      <div
        class="backdrop"
        @click=${(e) => {
      e.target === e.currentTarget && this._handleCancel();
    }}
      >
        <div class="dialog">
          <div class="title">${this.t("addFolderContents", "Add folder contents")}</div>
          <div class="description">
            ${this.t(
      "folderResolveDescription",
      "You selected {{count}} folder(s). How would you like to add the assets?",
      { count: t }
    )}
          </div>
          <div class="options">
            <sfx-radio-group
              .value=${this._mode}
              .options=${[
      { value: "direct", label: this.t("directAssetsOnly", "Direct assets only") },
      {
        value: "recursive",
        label: this.t(
          "allAssetsIncludingSubfolders",
          "All assets (including subfolders)"
        )
      }
    ]}
              @sfx-change=${this._handleModeChange}
            ></sfx-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>
              ${this.t("cancel", "Cancel")}
            </button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading ? l`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.t("loading", "Loading...")}</span
                  >` : this.t("addAssets", "Add assets")}
            </button>
          </div>
        </div>
      </div>
    `;
  }
};
at.styles = [
  xe,
  T`
      :host {
        display: block;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 100;
        background: oklch(0 0 0 / 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .dialog {
        background: var(--sfx-background, oklch(1 0 0));
        border-radius: var(--sfx-radius-lg, 12px);
        padding: 28px 32px;
        max-width: 440px;
        width: 90%;
        box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
      }
      .title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 8px;
      }
      .description {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin-bottom: 20px;
        line-height: 1.5;
      }
      .options {
        margin-bottom: 24px;
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
      }
      .btn {
        padding: 8px 20px;
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        cursor: pointer;
        transition: background 100ms;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .btn:not(.btn-primary):hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .btn-primary {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .btn-primary:hover {
        opacity: 0.9;
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: default;
      }
      .btn-primary .loading-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `
];
Yt([
  d({ type: Array })
], at.prototype, "folders", 2);
Yt([
  d({ type: Boolean })
], at.prototype, "loading", 2);
Yt([
  d({ attribute: !1 })
], at.prototype, "t", 2);
Yt([
  x()
], at.prototype, "_mode", 2);
at = Yt([
  P("ap-folder-resolve-dialog")
], at);
var ka = Object.defineProperty, Sa = Object.getOwnPropertyDescriptor, _e = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Sa(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && ka(e, s, r), r;
};
const Ca = ["webp", "jpeg", "png", "gif"];
function Fa(t) {
  const e = (t ?? "").toLowerCase();
  return Ca.includes(e) ? e : "jpeg";
}
let le = class extends L {
  constructor() {
    super(...arguments), this.assets = [], this.isMultiSelect = !1, this.t = (t, e) => typeof e == "string" ? e : t, this._format = "jpeg", this._quality = "excellent", this._lockAspect = !0, this._activePreset = "original", this._defaultFormat = "jpeg";
  }
  get _ratio() {
    const t = this.assets.find((i) => ht(i));
    if (!t) return 1.5;
    const e = xs(t), s = _s(t);
    return e && s ? e / s : 1.5;
  }
  get _isDirty() {
    return this._format !== this._defaultFormat || this._quality !== "excellent" || this._width !== this._defaultWidth || this._height !== this._defaultHeight;
  }
  willUpdate(t) {
    t.has("assets") && this._initDefaults();
  }
  _initDefaults() {
    const t = this.assets.find((e) => ht(e));
    if (this._defaultFormat = Fa(t == null ? void 0 : t.extension), this._format = this._defaultFormat, this._quality = "excellent", this._lockAspect = !0, this._activePreset = "original", this.isMultiSelect)
      this._defaultWidth = void 0, this._defaultHeight = void 0;
    else if (t) {
      const e = xs(t), s = _s(t);
      this._defaultWidth = e || void 0, this._defaultHeight = s || void 0;
    } else
      this._defaultWidth = void 0, this._defaultHeight = void 0;
    this._width = this._defaultWidth, this._height = this._defaultHeight;
  }
  _handleFormatChange(t) {
    this._format = t.detail.value;
  }
  _handleQualityChange(t) {
    this._quality = t.detail.value;
  }
  _handleWidthInput(t) {
    const e = t.target.value, s = parseInt(e, 10), i = e === "" || isNaN(s) || s <= 0 ? void 0 : s;
    this._width = i, this._activePreset = "", this._lockAspect && i && (this._height = Math.round(i / this._ratio));
  }
  _handleHeightInput(t) {
    const e = t.target.value, s = parseInt(e, 10), i = e === "" || isNaN(s) || s <= 0 ? void 0 : s;
    this._height = i, this._activePreset = "", this._lockAspect && i && (this._width = Math.round(i * this._ratio));
  }
  _handleMaxSizeInput(t) {
    const e = t.target.value, s = parseInt(e, 10), i = e === "" || isNaN(s) || s <= 0 ? void 0 : s;
    this._width = i, this._height = i, this._activePreset = "";
  }
  _toggleLock() {
    this._lockAspect = !this._lockAspect;
  }
  _handlePreset(t) {
    this._activePreset = t.value, t.value === "original" ? (this._width = this._defaultWidth, this._height = this._defaultHeight) : t.width && (this._width = t.width, this._height = Math.round(t.width / this._ratio));
  }
  _handleApply() {
    const t = {
      format: this._format,
      quality: this._format !== "png" ? this._quality : void 0,
      width: this._width,
      height: this._height
    };
    this.dispatchEvent(
      new CustomEvent("transform-confirm", {
        detail: { params: t, isAspectLocked: this._lockAspect },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleSkip() {
    this.dispatchEvent(
      new CustomEvent("transform-skip", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleClose() {
    this.dispatchEvent(
      new CustomEvent("transform-cancel", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleBackdropClick(t) {
    t.target === t.currentTarget && this._handleClose();
  }
  render() {
    const t = this._format === "png";
    return l`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">${this.t("exportOptions", "Export Options")}</div>
            <button class="close-btn" @click=${this._handleClose} title=${this.t("close", "Close")}>
              <sfx-icon name="close" .size=${16}></sfx-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">${this.t("format", "Format")}</span>
            <sfx-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${Qi}
              @sfx-change=${this._handleFormatChange}
            ></sfx-radio-group>
          </div>

          ${t ? g : l`
                <div class="section">
                  <span class="section-label">${this.t("quality", "Quality")}</span>
                  <sfx-dropdown
                    .value=${this._quality}
                    .options=${Hi}
                    @sfx-change=${this._handleQualityChange}
                  ></sfx-dropdown>
                </div>
              `}

          <div class="section">
            <span class="section-label">${this.t("size", "Size")}</span>
            ${this.isMultiSelect ? l`
                  <div class="input-group half-width">
                    <span class="input-label">${this.t("maxSize", "Max Size")}</span>
                    <div class="input-wrapper">
                      <input
                        type="number"
                        min="1"
                        .value=${this._width != null ? String(this._width) : ""}
                        placeholder=${this.t("original", "Original")}
                        @input=${this._handleMaxSizeInput}
                      />
                      <span class="input-suffix">px</span>
                    </div>
                  </div>
                ` : l`
                  <div class="dimensions-row">
                    <div class="input-group">
                      <span class="input-label">${this.t("width", "Width")}</span>
                      <div class="input-wrapper">
                        <input
                          type="number"
                          min="1"
                          .value=${this._width != null ? String(this._width) : ""}
                          @input=${this._handleWidthInput}
                        />
                        <span class="input-suffix">px</span>
                      </div>
                    </div>
                    <button
                      class="lock-btn ${this._lockAspect ? "locked" : ""}"
                      @click=${this._toggleLock}
                      title=${this._lockAspect ? this.t("unlockAspectRatio", "Unlock aspect ratio") : this.t("lockAspectRatio", "Lock aspect ratio")}
                    >
                      <sfx-icon name=${this._lockAspect ? "lock" : "link-2"} .size=${16}></sfx-icon>
                    </button>
                    <div class="input-group">
                      <span class="input-label">${this.t("height", "Height")}</span>
                      <div class="input-wrapper">
                        <input
                          type="number"
                          min="1"
                          .value=${this._height != null ? String(this._height) : ""}
                          @input=${this._handleHeightInput}
                        />
                        <span class="input-suffix">px</span>
                      </div>
                    </div>
                  </div>
                `}
            <div class="presets-row">
              ${Yi.map(
      (e) => l`
                  <button
                    class="preset-btn ${this._activePreset === e.value ? "active" : ""}"
                    @click=${() => this._handlePreset(e)}
                  >
                    ${e.label}
                  </button>
                `
    )}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>
              ${this.exportOriginalLabel ?? this.t("exportOriginal", "Export Original")}
            </button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>
              ${this.applyExportLabel ?? this.t("applyAndExport", "Apply & Export")}
            </button>
          </div>
        </div>
      </div>
    `;
  }
};
le.styles = [
  xe,
  T`
      :host {
        display: block;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: 100;
        background: oklch(0 0 0 / 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .dialog {
        background: var(--sfx-background, oklch(1 0 0));
        border-radius: var(--sfx-radius-lg, 12px);
        padding: 28px 32px;
        max-width: 520px;
        width: 90%;
        box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 16px;
        margin-bottom: 20px;
        margin-left: -32px;
        margin-right: -32px;
        padding-left: 32px;
        padding-right: 32px;
        border-bottom: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }
      .title {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 600;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .close-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: none;
        background: none;
        cursor: pointer;
        border-radius: var(--sfx-radius-sm, 6px);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        transition:
          color 100ms,
          background 100ms;
      }
      .close-btn:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .section {
        margin-bottom: 16px;
      }
      .section-label {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 8px;
        display: block;
      }
      .dimensions-row {
        display: flex;
        align-items: flex-end;
        gap: 8px;
      }
      .input-group {
        flex: 1;
        min-width: 0;
      }
      .input-group.half-width {
        flex: none;
        width: 50%;
      }
      .input-label {
        font-size: var(--sfx-font-size-xs, 0.75rem);
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin-bottom: 4px;
        display: block;
      }
      .input-wrapper {
        display: flex;
        align-items: center;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        overflow: hidden;
        background: var(--sfx-background, oklch(1 0 0));
      }
      .input-wrapper input {
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        padding: 8px 12px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        background: transparent;
        -moz-appearance: textfield;
      }
      .input-wrapper input::-webkit-inner-spin-button,
      .input-wrapper input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .input-wrapper input::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .input-suffix {
        padding: 0 10px;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        user-select: none;
      }
      .lock-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 36px;
        border: none;
        background: none;
        cursor: pointer;
        border-radius: var(--sfx-radius-sm, 6px);
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        flex-shrink: 0;
        transition: color 100ms;
      }
      .lock-btn:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .lock-btn.locked {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .presets-row {
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 10px;
        flex-wrap: wrap;
      }
      .preset-btn {
        padding: 4px 10px;
        border: none;
        background: none;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        cursor: pointer;
        border-radius: var(--sfx-radius-sm, 6px);
        transition:
          color 100ms,
          background 100ms;
      }
      .preset-btn:hover {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .preset-btn.active {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        font-weight: 600;
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 24px;
        margin-left: -32px;
        margin-right: -32px;
        padding: 20px 32px 0;
        border-top: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      }
      .btn {
        padding: 8px 20px;
        border-radius: var(--sfx-radius-sm, 6px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-weight: 500;
        cursor: pointer;
        transition:
          background 100ms,
          opacity 100ms;
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .btn:not(.btn-primary):hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .btn-primary {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .btn-primary:hover {
        opacity: 0.9;
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: default;
      }
      sfx-dropdown {
        display: block;
        width: 100%;
      }
    `
];
_e([
  d({ type: Array })
], le.prototype, "assets", 2);
_e([
  d({ type: Boolean })
], le.prototype, "isMultiSelect", 2);
_e([
  d({ attribute: !1 })
], le.prototype, "t", 2);
_e([
  d({ attribute: !1 })
], le.prototype, "exportOriginalLabel", 2);
_e([
  d({ attribute: !1 })
], le.prototype, "applyExportLabel", 2);
_e([
  x()
], le.prototype, "_format", 2);
_e([
  x()
], le.prototype, "_quality", 2);
_e([
  x()
], le.prototype, "_width", 2);
_e([
  x()
], le.prototype, "_height", 2);
_e([
  x()
], le.prototype, "_lockAspect", 2);
_e([
  x()
], le.prototype, "_activePreset", 2);
le = _e([
  P("ap-transformation-dialog")
], le);
var Aa = Object.defineProperty, Ea = Object.getOwnPropertyDescriptor, Xe = (t, e, s, i) => {
  for (var r = i > 1 ? void 0 : i ? Ea(e, s) : e, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = (i ? a(e, s, r) : a(r)) || r);
  return i && r && Aa(e, s, r), r;
};
const Ta = /[/\\\x00-\x1f]/;
let Ee = class extends L {
  constructor() {
    super(...arguments), this.t = (t, e) => typeof e == "string" ? e : t, this.currentFolderPath = "/", this.loading = !1, this.error = null, this._name = "", this._localError = null, this._apiErrorDismissed = !1;
  }
  updated(t) {
    t.has("error") && this.error && (this._apiErrorDismissed = !1);
  }
  _onInput(t) {
    this._name = t.detail.value, this._localError && (this._localError = null), this.error && !this._apiErrorDismissed && (this._apiErrorDismissed = !0);
  }
  _validateName(t) {
    return Ta.test(t) ? this.t("folderNameInvalidChars", `Folder name can't contain "/" or "\\".`) : t === "." || t === ".." ? this.t("folderNameReserved", `Folder name can't be "." or "..".`) : null;
  }
  _onConfirm(t) {
    if (this.loading) return;
    const e = t.detail.value.trim();
    if (!e) return;
    const s = this._validateName(e);
    if (s) {
      this._localError = s;
      return;
    }
    this.dispatchEvent(
      new CustomEvent("create-folder-confirm", {
        detail: { name: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _onCancel() {
    this.dispatchEvent(
      new CustomEvent("create-folder-cancel", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    const t = this._localError ?? (this._apiErrorDismissed ? null : this.error);
    return l`
      <sfx-dialog
        kind="prompt"
        heading=${this.t("createFolder", "Create folder")}
        placeholder=${this.t("folderName", "Folder name")}
        confirmLabel=${this.t("create", "Create")}
        .loading=${this.loading}
        .error=${t}
        .confirmDisabled=${this._name.trim().length === 0}
        @sfx-dialog-input=${this._onInput}
        @sfx-dialog-confirm=${this._onConfirm}
        @sfx-dialog-cancel=${this._onCancel}
      >
        <div class="description">${this.t("inFolder", "In")} <code>${this.currentFolderPath || "/"}</code></div>
      </sfx-dialog>
    `;
  }
};
Ee.styles = T`
    :host {
      display: block;
    }
    .description {
      font-size: var(--sfx-font-size-sm, 0.875rem);
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      line-height: 1.5;
      word-break: break-all;
      overflow-wrap: anywhere;
    }
    .description code {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.8125rem;
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      padding: 1px 6px;
      border-radius: 4px;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
  `;
Xe([
  d({ attribute: !1 })
], Ee.prototype, "t", 2);
Xe([
  d()
], Ee.prototype, "currentFolderPath", 2);
Xe([
  d({ type: Boolean })
], Ee.prototype, "loading", 2);
Xe([
  d()
], Ee.prototype, "error", 2);
Xe([
  x()
], Ee.prototype, "_name", 2);
Xe([
  x()
], Ee.prototype, "_localError", 2);
Xe([
  x()
], Ee.prototype, "_apiErrorDismissed", 2);
Ee = Xe([
  P("ap-create-folder-dialog")
], Ee);
var Ia = Object.defineProperty, Ze = (t, e, s, i) => {
  for (var r = void 0, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (r = a(e, s, r) || r);
  return r && Ia(e, s, r), r;
};
const Ns = class Ns extends L {
  constructor() {
    super(), this._initFailed = !1, this._loadId = 0, this._loadMoreId = 0, this._selectAllId = 0, this._loadDataTimer = null, this._pendingFilter = null, this._pendingMetadataField = null, this._normalizedForcedFilters = {}, this._uploaderEl = null, this._uploaderImportPromise = null, this._dragCounter = 0, this._isDragOver = !1, this._isUploaderOpen = !1, this._folderResolveOpen = !1, this._transformOpen = !1, this._createFolderOpen = !1, this._isCreatingFolder = !1, this._createFolderError = null, this._transformAssets = [], this._transformFolders = [], this._transformAfterResolve = !1, this._onDragEnter = (e) => {
      var s;
      !((s = this.config) != null && s.uploader) || !this._hasFileTransfer(e) || (e.preventDefault(), this._dragCounter++, this._dragCounter === 1 && (this._isDragOver = !0));
    }, this._onDragOver = (e) => {
      var s;
      !((s = this.config) != null && s.uploader) || !this._hasFileTransfer(e) || (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
    }, this._onDragLeave = (e) => {
      var s;
      !((s = this.config) != null && s.uploader) || !this._hasFileTransfer(e) || (e.preventDefault(), this._dragCounter--, this._dragCounter <= 0 && (this._dragCounter = 0, this._isDragOver = !1));
    }, this._onDrop = (e) => {
      var i, r;
      if (!((i = this.config) != null && i.uploader) || !this._hasFileTransfer(e)) return;
      e.preventDefault(), this._dragCounter = 0, this._isDragOver = !1;
      const s = Array.from(((r = e.dataTransfer) == null ? void 0 : r.files) ?? []);
      s.length > 0 && this._openUploader(s);
    }, this._cancelCreateFolderRequested = !1, this.store = Ti(), this.storeCtrl = new Di(this, this.store), this.selectionCtrl = new Mi(this, this.store), this.infiniteScrollCtrl = new _i(this, () => this._loadMore()), this.marqueeCtrl = new yi(this, {
      // Asset/folder cards live inside the grid/list-view shadow roots, so pierce each
      // child root for `data-asset-uuid` / `data-folder-uuid` (with a flat fallback).
      queryCards: (e) => {
        const s = [], i = (o, a, n) => o.querySelectorAll(`[${a}]`).forEach((c) => {
          const h = c.dataset[n];
          h && s.push({ uuid: h, el: c });
        });
        let r = !1;
        for (const o of Array.from(e.children))
          o.shadowRoot && (i(o.shadowRoot, "data-asset-uuid", "assetUuid"), i(o.shadowRoot, "data-folder-uuid", "folderUuid"), r = !0);
        return (!r || s.length === 0) && (i(e, "data-asset-uuid", "assetUuid"), i(e, "data-folder-uuid", "folderUuid")), s;
      },
      // asset-picker's marquee is always additive — it extends the current selection.
      getSelection: () => {
        const e = this.store.getState();
        return [...e.selectedAssets.keys(), ...e.selectedFolders.keys()];
      },
      // Resolve covered uuids back to assets/folders: keep already-selected objects (they
      // survive folder navigation), add newly-covered from the current page (skipping
      // disabled), then honour folderSelection + the maxSelections cap (folders kept first).
      setSelection: (e) => {
        var h, u;
        const s = this.store.getState(), i = ((h = s.config) == null ? void 0 : h.folderSelection) === !0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
        for (const f of e) {
          const p = s.selectedAssets.get(f);
          if (p) {
            r.set(f, p);
            continue;
          }
          const v = s.selectedFolders.get(f);
          if (i && v) {
            o.set(f, v);
            continue;
          }
          if (!s.disabledAssetIds.has(f)) {
            const m = s.assets.find((k) => k.uuid === f);
            if (m) {
              r.set(f, m);
              continue;
            }
          }
          if (i && !s.disabledFolderIds.has(f)) {
            const m = s.folders.find((k) => k.uuid === f);
            m && o.set(f, m);
          }
        }
        const a = (u = s.config) == null ? void 0 : u.maxSelections, n = r.size + (i ? o.size : 0), c = a && n > a ? new Map(
          Array.from(r.entries()).slice(
            0,
            Math.max(0, a - o.size)
          )
        ) : r;
        this.store.setState({
          selectedAssets: c,
          ...i ? { selectedFolders: o } : {}
        });
      },
      // No marquee in single-select mode; otherwise clicks on cards or their checkboxes
      // keep their own behaviour (open/toggle) instead of starting a drag-select.
      isInteractiveTarget: (e) => {
        var s;
        return (((s = this.store.getState().config) == null ? void 0 : s.multiSelect) ?? !0) === !1 ? !0 : e.composedPath().some((i) => {
          if (!(i instanceof HTMLElement)) return !1;
          if (i instanceof HTMLButtonElement || i instanceof HTMLInputElement) return !0;
          const r = i.tagName.toLowerCase();
          return r.startsWith("ap-asset-") || r.startsWith("ap-folder-") ? !0 : i.classList.contains("check") || i.classList.contains("check-box");
        });
      }
    });
  }
  get _isInline() {
    var e;
    return ((e = this.config) == null ? void 0 : e.displayMode) === "inline";
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._uploaderEl && (this._uploaderEl.remove(), this._uploaderEl = null), this._uploaderImportPromise = null, this._dragCounter = 0, this._isDragOver = !1, this._isUploaderOpen = !1;
  }
  updated(e) {
    super.updated(e), e.has("config") && this.config && this._initConfig(this.config);
    const s = this.renderRoot.querySelector("#sentinel");
    if (s && s !== this._lastSentinel) {
      this._lastSentinel = s;
      const r = this.renderRoot.querySelector(".main-content");
      this.infiniteScrollCtrl.observe(s, r);
    }
    const i = this.renderRoot.querySelector(".main-content");
    i && i !== this._lastMarqueeContainer && (this._lastMarqueeContainer = i, this.marqueeCtrl.attach(i));
  }
  _initConfig(e) {
    const s = { folderSelection: !0, ...e };
    this._initFailed = !1, this.store.setState({
      disabledAssetIds: new Set(s.disabledAssetIds ?? []),
      disabledFolderIds: new Set(s.disabledFolderIds ?? [])
    }), tr(s.transformRemoteThumbnail), this._normalizedForcedFilters = $s(s.forcedFilters), this._initPromise = this._doInit(s).catch(() => {
      this._initFailed = !0;
    }), this._initI18n(s.locale), this.toggleAttribute("inline", s.displayMode === "inline"), s.displayMode === "inline" && !this.store.getState().isOpen && this.open();
  }
  async _initI18n(e) {
    try {
      const { i18n: s, isNew: i } = await Oi(e || "en");
      i && s.on(
        "missingKey",
        (o, a, n, c, h, u) => {
          const f = n.match(/_(?:zero|one|two|few|many|other)$/), p = f && (u != null && u[`defaultValue${f[0]}`]) ? String(u[`defaultValue${f[0]}`]) : c;
          Pi.handleMissingKey(n, p, a);
        }
      );
      const r = (o, a, n) => typeof a == "string" ? s.t(o, a, n ?? {}) : s.t(o, a ?? {});
      this.store.setState({ t: r });
    } catch {
    }
  }
  async _doInit(e) {
    const s = jr(), i = s.sortBy ?? e.defaultSortBy ?? "created_at", r = s.sortDirection ?? e.defaultSortDirection ?? "desc";
    this.store.setState({
      config: e,
      projectToken: e.auth.projectToken,
      viewMode: e.rememberLastView && Vr(e.auth.projectToken) || e.defaultViewMode || "grid",
      sortBy: i,
      sortDirection: r
    });
    const o = e.apiBase || `https://api.filerobot.com/${e.auth.projectToken}/v5`;
    let a;
    if (e.auth.mode === "securityTemplate") {
      const { key: n, permissions: c } = await Ki(e.auth, o);
      a = n, this.store.setState({ sassKey: n, permissions: c });
    } else
      a = e.auth.sassKey;
    this.apiClient = new wi({
      apiBase: o.replace(/\/v5$/, ""),
      headers: { "X-Filerobot-Key": a }
    });
    try {
      const [n, c, h, u, f] = await Promise.allSettled([
        xr(this.apiClient),
        ki(this.apiClient),
        Ui(this.apiClient),
        mr(this.apiClient),
        Ri(this.apiClient)
      ]), p = {};
      if (n.status === "fulfilled") {
        const { fields: $, regionalVariantGroups: y, regionalFilters: I, brandColor: N } = n.value;
        p.metadataFields = $, p.regionalVariantGroups = y, p.regionalFilters = I, N && (p.brandColor = N);
      }
      c.status === "fulfilled" && (p.labels = c.value || []), h.status === "fulfilled" && (p.tags = h.value), f.status === "fulfilled" && (p.collections = f.value.collections || []), u.status === "fulfilled" && (p.fileTypes = u.value);
      const { pinnedFilters: v, pinnedMetadata: m } = Rr(e.auth.projectToken ?? null), k = this.store.getState().filters;
      p.filters = {
        ...k,
        pinned: v,
        visible: [...v],
        metadata: {
          ...k.metadata,
          pinned: m,
          visible: [...m]
        }
      }, this.store.setState(p);
      const _ = e.brandColor || p.brandColor || this.store.getState().brandColor;
      _ && (p.brandColor || this.store.setState({ brandColor: _ }), Ai(this, _));
    } catch (n) {
      throw this.dispatchEvent(
        new CustomEvent("ap-error", {
          detail: { error: n, context: "init" },
          bubbles: !0,
          composed: !0
        })
      ), n;
    }
  }
  // ── Uploader integration ────────────────────────────────────────────
  /**
   * Ensure the uploader module is loaded (dynamic import).
   * Only called when config.uploader is set — zero cost otherwise.
   * Guards against concurrent calls via a shared promise.
   */
  _ensureUploaderImport() {
    return customElements.get("sfx-uploader") ? Promise.resolve() : this._uploaderImportPromise ? this._uploaderImportPromise : (this._uploaderImportPromise = import("@scaleflex/uploader/define").then(
      () => {
      },
      (e) => {
        throw this._uploaderImportPromise = null, e;
      }
    ), this._uploaderImportPromise);
  }
  /** Build the uploader config from asset-picker state + user config. */
  _buildUploaderConfig() {
    const e = this.config, s = e.uploader, i = this.store.getState();
    let r;
    return e.auth.mode === "securityTemplate" ? r = {
      mode: "security-template",
      container: e.auth.projectToken,
      securityTemplateId: e.auth.securityTemplateKey
    } : r = {
      mode: "sass-key",
      container: e.auth.projectToken,
      sassKey: e.auth.sassKey
    }, {
      auth: r,
      targetFolder: i.currentFolderPath || "/",
      mode: "inline",
      restrictions: s.restrictions,
      concurrency: s.concurrency,
      autoProceed: s.autoProceed,
      showFillMetadata: s.showFillMetadata,
      connectors: s.connectors,
      sourcesLayout: s.sourcesLayout,
      header: s.header ?? "back",
      clearOnClose: s.clearOnClose,
      clearOnComplete: s.clearOnComplete,
      closeOnComplete: s.closeOnComplete,
      rejectedFileAutoRemoveDelay: s.rejectedFileAutoRemoveDelay,
      lastUploadReview: s.lastUploadReview,
      showLocateButton: s.showLocateButton,
      showCopyCdnButton: s.showCopyCdnButton,
      getLocateUrl: s.getLocateUrl,
      minimizeOnUpload: s.minimizeOnUpload,
      metadataConfig: s.metadataConfig,
      tusConfig: s.tusConfig,
      locale: s.locale ?? e.locale,
      // Forward the picker's thumbnail rewriter; the uploader passes its own
      // ('url-import' | 'connector') contexts to the same function.
      transformRemoteThumbnail: e.transformRemoteThumbnail
    };
  }
  /** Open the uploader panel, optionally pre-loading files (from drop). */
  async _openUploader(e) {
    var i;
    if (!((i = this.config) != null && i.uploader) || this._isUploaderOpen) return;
    try {
      await this._ensureUploaderImport();
    } catch (r) {
      this.dispatchEvent(
        new CustomEvent("ap-error", {
          detail: {
            error: r instanceof Error ? r : new Error(String(r)),
            context: "uploader-load"
          },
          bubbles: !0,
          composed: !0
        })
      );
      return;
    }
    this._uploaderEl = document.createElement("sfx-uploader");
    const s = this._uploaderEl;
    s.addEventListener("sfx-all-complete", () => {
      this.store.getState().isOpen && this._loadData();
    }), s.addEventListener("sfx-complete-action", () => {
      this._closeUploader();
    }), s.addEventListener("sfx-cancel", () => {
      this._closeUploader();
    }), this._isUploaderOpen = !0, await this.updateComplete, s.config = this._buildUploaderConfig(), await s.updateComplete, e != null && e.length && s.addFiles(e);
  }
  /** Close the uploader panel and return to the asset picker. */
  _closeUploader() {
    this._isUploaderOpen = !1, this._uploaderEl && (this._uploaderEl.remove(), this._uploaderEl = null);
  }
  _handleUploadClick() {
    this._openUploader();
  }
  // ── Drop zone handlers ──────────────────────────────────────────────
  /** Check if the drag event contains files (not text selections, links, etc.). */
  _hasFileTransfer(e) {
    var s, i;
    return !!((i = (s = e.dataTransfer) == null ? void 0 : s.types) != null && i.includes("Files"));
  }
  async open() {
    var h, u, f, p, v, m, k, _;
    const e = this.store.getState(), s = new Set(Object.keys(this._normalizedForcedFilters)), i = {}, r = $s((h = this.config) == null ? void 0 : h.defaultFilters);
    for (const [$, y] of Object.entries(r))
      s.has($) || (i[$] = y);
    const o = Object.keys(i), a = ((u = this.config) == null ? void 0 : u.tabs) ?? ["assets", "folders"], n = (f = this.config) != null && f.rememberLastTab ? Gr(this.config.auth.projectToken) : null, c = (n && a.includes(n) ? n : null) ?? ((p = this.config) != null && p.defaultTab && a.includes(this.config.defaultTab) ? this.config.defaultTab : null) ?? ((v = this.config) != null && v.initialFolderPath && a.includes("folders") ? "folders" : null) ?? a[0] ?? "assets";
    this.store.setState({
      isOpen: !0,
      activeTab: c,
      searchQuery: "",
      isAISearchActive: !!((m = this.config) != null && m.enableAISearch && ((k = this.config) != null && k.defaultAISearch)),
      filters: {
        metadata: {
          pinned: e.filters.metadata.pinned,
          visible: [...e.filters.metadata.pinned],
          applied: {}
        },
        pinned: e.filters.pinned,
        visible: [.../* @__PURE__ */ new Set([...e.filters.pinned, ...o])],
        applied: i
      },
      offset: 0,
      assets: [],
      folders: [],
      currentFolder: null,
      currentFolderPath: this._resolveInitialFolderPath(c),
      activeLabelUuid: null,
      activeCollectionUuid: null,
      activeCollectionFolders: [],
      activeCollectionFolder: null,
      isLoadingCollectionFolders: !1,
      breadcrumb: this._buildBreadcrumbFromPath(
        this._resolveInitialFolderPath(c),
        ((_ = this.config) == null ? void 0 : _.rootFolderPath) || "/"
      ),
      selectedAssets: /* @__PURE__ */ new Map(),
      selectedFolders: /* @__PURE__ */ new Map(),
      isResolvingFolders: !1,
      folderPreviews: {},
      isPreviewOpen: !1,
      previewAsset: null,
      isLoading: !0,
      isSelectingAll: !1
    }), this._dragCounter = 0, this._isDragOver = !1, this.dispatchEvent(
      new CustomEvent("ap-open", {
        detail: { timestamp: Date.now() },
        bubbles: !0,
        composed: !0
      })
    ), await this.updateComplete, !this._initPromise && this.config && this._initConfig(this.config), !(this._initPromise && (await this._initPromise, this._initFailed)) && this._loadData();
  }
  close() {
    this.store.setState({ isOpen: !1 }), this._dragCounter = 0, this._isDragOver = !1, this._isUploaderOpen = !1, this._folderResolveOpen = !1, this._transformOpen = !1, this._transformAssets = [], this._transformFolders = [], this._transformAfterResolve = !1, this._selectAllId++;
  }
  _scrollToTop() {
    var e;
    (e = this.renderRoot.querySelector(".main-content")) == null || e.scrollTo({ top: 0 });
  }
  async _loadData() {
    var i, r, o, a, n, c, h, u, f, p, v, m, k, _, $, y, I, N, F, Q, A, U, z, S, ne, ce, V, Ne, Ue, _t, yt, $t, wt, kt, St, Ct, Ft, At, Et, Tt, It, Lt, Ot;
    if (!this.apiClient) return;
    const e = ++this._loadId, s = this.store.getState();
    this._scrollToTop(), this.store.setState({ isLoading: !0 });
    try {
      const Le = s.activeTab;
      if (Le === "assets") {
        const re = this._buildSearchNotation(), je = s.currentFolderPath || "/", ye = s.isAISearchActive && !!s.searchQuery, me = Je(this.apiClient, {
          fields: (i = this.config) == null ? void 0 : i.apiFields,
          folder: je,
          offset: 0,
          limit: s.limit,
          sort_by: s.sortBy,
          sort_direction: s.sortDirection,
          search: s.searchQuery || void 0,
          q: re || void 0,
          recursive: 1,
          ...ye && {
            with_ai: !0,
            ai_query: s.searchQuery,
            ai_lang: ((r = s.config) == null ? void 0 : r.locale) ?? "en"
          }
        }), oe = Wt(this.apiClient, {
          folder: je,
          q: re || void 0,
          search: s.searchQuery || void 0,
          recursive: 1,
          ...ye && {
            with_ai: !0,
            ai_query: s.searchQuery,
            ai_lang: ((o = s.config) == null ? void 0 : o.locale) ?? "en"
          }
        }).catch(() => null), [ee, de] = await Promise.all([me, oe]);
        if (e !== this._loadId) return;
        const pe = ((a = ee.files) == null ? void 0 : a.length) ?? 0, X = pe >= s.limit, he = ((n = de == null ? void 0 : de.stats) == null ? void 0 : n.approx_files_count) ?? ((c = de == null ? void 0 : de.info) == null ? void 0 : c.total_files_count) ?? ((h = ee.info) == null ? void 0 : h.total_files_count) ?? ((f = (u = ee.base) == null ? void 0 : u.count) == null ? void 0 : f.files_recursive) ?? ((v = (p = ee.base) == null ? void 0 : p.count) == null ? void 0 : v.files_direct) ?? pe;
        this.store.setState({
          assets: ee.files || [],
          folders: [],
          totalCount: he,
          totalFolderCount: 0,
          offset: 0,
          hasMore: X,
          isLoading: !1
        });
      } else if (Le === "folders") {
        const re = this._buildSearchNotation(), je = s.currentFolderPath || "/", [ye, me, oe] = await Promise.all([
          Si(this.apiClient, {
            folderPath: s.currentFolderPath,
            q: s.searchQuery || void 0,
            recursive: s.searchQuery ? 1 : 0,
            sort_by: s.sortBy,
            sort_direction: s.sortDirection
          }),
          Je(this.apiClient, {
            fields: (m = this.config) == null ? void 0 : m.apiFields,
            folder: je,
            offset: 0,
            limit: s.limit,
            sort_by: s.sortBy,
            sort_direction: s.sortDirection,
            search: s.searchQuery || void 0,
            q: re || void 0,
            recursive: 0,
            ...s.isAISearchActive && s.searchQuery && {
              with_ai: !0,
              ai_query: s.searchQuery,
              ai_lang: ((k = s.config) == null ? void 0 : k.locale) ?? "en"
            }
          }),
          Wt(this.apiClient, {
            folder: je,
            q: re || void 0,
            search: s.searchQuery || void 0,
            recursive: 0,
            ...s.isAISearchActive && s.searchQuery && {
              with_ai: !0,
              ai_query: s.searchQuery,
              ai_lang: ((_ = s.config) == null ? void 0 : _.locale) ?? "en"
            }
          }).catch(() => null)
        ]);
        if (e !== this._loadId) return;
        const ee = ye.folders || [];
        let de = {};
        if (ee.length > 0)
          try {
            de = await Ci(
              this.apiClient,
              ee.map((pt) => pt.uuid)
            );
          } catch {
          }
        if (e !== this._loadId) return;
        const pe = (($ = me.files) == null ? void 0 : $.length) ?? 0, X = pe >= s.limit, he = ((y = oe == null ? void 0 : oe.stats) == null ? void 0 : y.approx_files_count) ?? ((I = oe == null ? void 0 : oe.info) == null ? void 0 : I.total_files_count) ?? ((N = me.info) == null ? void 0 : N.total_files_count) ?? ((Q = (F = me.base) == null ? void 0 : F.count) == null ? void 0 : Q.files_direct) ?? pe;
        this.store.setState({
          assets: me.files || [],
          folders: ee,
          folderPreviews: de,
          totalCount: he,
          totalFolderCount: ye.total ?? ee.length,
          offset: 0,
          hasMore: X,
          isLoading: !1
        });
      } else if (Le === "labels") {
        if (!s.activeLabelUuid) {
          this.store.setState({
            assets: [],
            folders: [],
            totalCount: s.labels.length,
            totalFolderCount: 0,
            offset: 0,
            hasMore: !1,
            isLoading: !1
          });
          return;
        }
        const re = s.labels.find((ps) => ps.uuid === s.activeLabelUuid);
        if (!re) {
          this.store.setState({ isLoading: !1 });
          return;
        }
        const je = re.sid.replace("#", ""), ye = this._buildSearchNotation(), me = `labels:${je}${ye ? " " + ye : ""}`, oe = s.isAISearchActive && !!s.searchQuery, ee = Je(this.apiClient, {
          fields: (A = this.config) == null ? void 0 : A.apiFields,
          folder: "/",
          offset: 0,
          limit: s.limit,
          sort_by: s.sortBy,
          sort_direction: s.sortDirection,
          search: s.searchQuery || void 0,
          q: me,
          recursive: 1,
          ...oe && {
            with_ai: !0,
            ai_query: s.searchQuery,
            ai_lang: ((U = s.config) == null ? void 0 : U.locale) ?? "en"
          }
        }), de = Wt(this.apiClient, {
          folder: "/",
          q: me,
          search: s.searchQuery || void 0,
          recursive: 1,
          ...oe && {
            with_ai: !0,
            ai_query: s.searchQuery,
            ai_lang: ((z = s.config) == null ? void 0 : z.locale) ?? "en"
          }
        }).catch(() => null), [pe, X] = await Promise.all([ee, de]);
        if (e !== this._loadId) return;
        const he = ((S = pe.files) == null ? void 0 : S.length) ?? 0, pt = he >= s.limit, ds = ((ne = X == null ? void 0 : X.stats) == null ? void 0 : ne.approx_files_count) ?? ((ce = X == null ? void 0 : X.info) == null ? void 0 : ce.total_files_count) ?? ((V = pe.info) == null ? void 0 : V.total_files_count) ?? ((Ue = (Ne = pe.base) == null ? void 0 : Ne.count) == null ? void 0 : Ue.files_recursive) ?? ((yt = (_t = pe.base) == null ? void 0 : _t.count) == null ? void 0 : yt.files_direct) ?? he;
        this.store.setState({
          assets: pe.files || [],
          folders: [],
          totalCount: ds,
          totalFolderCount: 0,
          offset: 0,
          hasMore: pt,
          isLoading: !1
        });
      } else if (Le === "collections") {
        if (!s.activeCollectionUuid) {
          this.store.setState({
            assets: [],
            folders: [],
            totalCount: 0,
            totalFolderCount: 0,
            offset: 0,
            hasMore: !1,
            isLoading: !1
          });
          return;
        }
        const re = s.activeCollectionFolder;
        if (!(re && !(($t = re.children) != null && $t.length))) {
          this.store.setState({
            assets: [],
            folders: [],
            totalCount: 0,
            totalFolderCount: 0,
            offset: 0,
            hasMore: !1,
            isLoading: !1
          });
          return;
        }
        const ye = s.activeCollectionUuid, me = re.filters || void 0, oe = this._buildSearchNotation(), ee = s.isAISearchActive && !!s.searchQuery, de = Je(this.apiClient, {
          fields: (wt = this.config) == null ? void 0 : wt.apiFields,
          offset: 0,
          limit: s.limit,
          sort_by: s.sortBy,
          sort_direction: s.sortDirection,
          search: s.searchQuery || void 0,
          q: oe || void 0,
          recursive: 1,
          collection_uuid: ye,
          f64: me,
          ...ee && {
            with_ai: !0,
            ai_query: s.searchQuery,
            ai_lang: ((kt = s.config) == null ? void 0 : kt.locale) ?? "en"
          }
        }), pe = Wt(this.apiClient, {
          q: oe || void 0,
          search: s.searchQuery || void 0,
          recursive: 1,
          collection_uuid: ye,
          f64: me,
          ...ee && {
            with_ai: !0,
            ai_query: s.searchQuery,
            ai_lang: ((St = s.config) == null ? void 0 : St.locale) ?? "en"
          }
        }).catch(() => null), [X, he] = await Promise.all([de, pe]);
        if (e !== this._loadId) return;
        const pt = ((Ct = X.files) == null ? void 0 : Ct.length) ?? 0, ds = pt >= s.limit, ps = ((Ft = he == null ? void 0 : he.stats) == null ? void 0 : Ft.approx_files_count) ?? ((At = he == null ? void 0 : he.info) == null ? void 0 : At.total_files_count) ?? ((Et = X.info) == null ? void 0 : Et.total_files_count) ?? ((It = (Tt = X.base) == null ? void 0 : Tt.count) == null ? void 0 : It.files_recursive) ?? ((Ot = (Lt = X.base) == null ? void 0 : Lt.count) == null ? void 0 : Ot.files_direct) ?? pt;
        this.store.setState({
          assets: X.files || [],
          folders: [],
          totalCount: ps,
          totalFolderCount: 0,
          offset: 0,
          hasMore: ds,
          isLoading: !1
        });
      }
    } catch (Le) {
      if (e !== this._loadId) return;
      this.store.setState({ isLoading: !1 }), this.dispatchEvent(
        new CustomEvent("ap-error", {
          detail: { error: Le, context: "loadData" },
          bubbles: !0,
          composed: !0
        })
      );
    }
  }
  async _loadMore() {
    var r, o, a;
    const e = this.store.getState();
    if (e.isLoading || !e.hasMore || !this.apiClient || e.activeTab === "labels" && !e.activeLabelUuid || e.activeTab === "collections" && !(e.activeCollectionFolder && !((r = e.activeCollectionFolder.children) != null && r.length)))
      return;
    const s = ++this._loadMoreId, i = e.offset + e.limit;
    this.store.setState({ isLoading: !0 });
    try {
      const n = this._buildSearchNotation();
      let c = n || void 0, h = e.currentFolderPath || "/", u = e.activeTab === "folders" ? 0 : 1;
      if (e.activeTab === "labels" && e.activeLabelUuid) {
        const y = e.labels.find((I) => I.uuid === e.activeLabelUuid);
        y && (c = `labels:${y.sid.replace("#", "")}${n ? " " + n : ""}`), h = "/", u = 1;
      }
      let f, p;
      e.activeTab === "collections" && e.activeCollectionFolder && (f = e.activeCollectionUuid || void 0, p = e.activeCollectionFolder.filters || void 0, h = "", u = 1);
      const v = await Je(this.apiClient, {
        fields: (o = this.config) == null ? void 0 : o.apiFields,
        ...h ? { folder: h } : {},
        offset: i,
        limit: e.limit,
        sort_by: e.sortBy,
        sort_direction: e.sortDirection,
        search: e.searchQuery || void 0,
        q: c,
        recursive: u,
        ...f && { collection_uuid: f },
        ...p && { f64: p },
        ...e.isAISearchActive && e.searchQuery && {
          with_ai: !0,
          ai_query: e.searchQuery,
          ai_lang: ((a = e.config) == null ? void 0 : a.locale) ?? "en"
        }
      });
      if (s !== this._loadMoreId) return;
      const m = this.store.getState().assets, k = v.files || [], _ = k.length >= e.limit, $ = [...m, ...k];
      this.store.setState({
        assets: $,
        offset: i,
        hasMore: _,
        isLoading: !1
      });
    } catch {
      if (s !== this._loadMoreId) return;
      this.store.setState({ isLoading: !1 });
    }
  }
  _debouncedLoadData(e = 120) {
    this._loadDataTimer && clearTimeout(this._loadDataTimer), this._loadDataTimer = setTimeout(() => {
      this._loadDataTimer = null, this._loadData();
    }, e);
  }
  _handleCancel(e) {
    var s, i;
    this.close(), (i = (s = this.config) == null ? void 0 : s.onCancel) == null || i.call(s), this.dispatchEvent(
      new CustomEvent("ap-cancel", {
        detail: { reason: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleSearchChange(e) {
    var r;
    const s = this.store.getState();
    if (s.activeTab === "labels" && !s.activeLabelUuid) {
      this.store.setState({ searchQuery: e.detail.value });
      return;
    }
    if (s.activeTab === "collections" && !(s.activeCollectionFolder && !((r = s.activeCollectionFolder.children) != null && r.length))) {
      this.store.setState({ searchQuery: e.detail.value });
      return;
    }
    const i = {
      searchQuery: e.detail.value,
      offset: 0,
      assets: [],
      folders: [],
      isLoading: !0
    };
    s.isAISearchActive && e.detail.value && (i.sortBy = "relevance"), this.store.setState(i), this.selectionCtrl.resetRange(), this._debouncedLoadData();
  }
  _handleAISearchToggle(e) {
    var o;
    const s = e.detail.active, i = this.store.getState(), r = { isAISearchActive: s };
    i.searchQuery && (s ? r.sortBy = "relevance" : i.sortBy === "relevance" && (r.sortBy = ((o = this.config) == null ? void 0 : o.defaultSortBy) ?? "created_at"), r.offset = 0, r.assets = [], r.folders = [], r.isLoading = !0), this.store.setState(r), i.searchQuery && this._debouncedLoadData();
  }
  _handleViewChange(e) {
    var i;
    const s = e.detail.mode;
    this.store.setState({ viewMode: s }), (i = this.config) != null && i.rememberLastView && Br(s, this.config.auth.projectToken), this._scrollToTop();
  }
  _handleRegionalChange(e) {
    const { groupUuid: s, value: i } = e.detail, r = this.store.getState().regionalFilters;
    this.store.setState({
      regionalFilters: { ...r, [s]: i }
    });
  }
  _handleSortChange(e) {
    const s = e.detail.value, i = this.store.getState();
    this.store.setState({
      sortBy: s,
      offset: 0,
      assets: [],
      folders: []
    }), Gs(s, i.sortDirection), this.selectionCtrl.resetRange(), this._loadData();
  }
  _handleSortDirectionChange(e) {
    const s = e.detail.value, i = this.store.getState();
    this.store.setState({
      sortDirection: s,
      offset: 0,
      assets: [],
      folders: []
    }), Gs(i.sortBy, s), this.selectionCtrl.resetRange(), this._loadData();
  }
  _handleTabChange(e) {
    var i, r;
    const s = e.detail.tab;
    (i = this.config) != null && i.rememberLastTab && qr(s, this.config.auth.projectToken), this._selectAllId++, this.store.setState({
      activeTab: s,
      activeLabelUuid: null,
      activeCollectionUuid: null,
      activeCollectionFolders: [],
      activeCollectionFolder: null,
      isLoadingCollectionFolders: !1,
      currentFolder: null,
      currentFolderPath: ((r = this.config) == null ? void 0 : r.rootFolderPath) ?? "/",
      breadcrumb: [],
      offset: 0,
      assets: [],
      folders: []
    }), this.selectionCtrl.resetRange(), this._loadData();
  }
  _handleAssetSelect(e) {
    this.selectionCtrl.handleSelect(e.detail.asset, e.detail.index, e.detail.event);
  }
  _handleFolderSelect(e) {
    this.selectionCtrl.handleFolderSelect(e.detail.folder, e.detail.index, e.detail.event);
  }
  _handleAssetPreview(e) {
    this.store.setState({
      previewAsset: e.detail.asset,
      isPreviewOpen: !0
    });
  }
  get _transformationsConfig() {
    var s;
    const e = (s = this.config) == null ? void 0 : s.transformations;
    return typeof e == "object" ? e : void 0;
  }
  _handleQuickSelect(e) {
    var i;
    const s = e.detail.asset;
    if ((i = this.config) != null && i.transformations && ht(s)) {
      this._transformAssets = [s], this._transformFolders = [], this._transformOpen = !0;
      return;
    }
    this._emitSelect([s]);
  }
  _emitSelect(e, s) {
    var r, o;
    const i = { assets: e };
    s != null && s.length && (i.folders = s), (o = (r = this.config) == null ? void 0 : r.onSelect) == null || o.call(r, e, s != null && s.length ? s : void 0), this.dispatchEvent(
      new CustomEvent("ap-select", {
        detail: i,
        bubbles: !0,
        composed: !0
      })
    ), this._isInline || this.close();
  }
  _handleFolderOpen(e) {
    var o;
    const s = e.detail.folder, i = this.store.getState(), r = s.path || `${i.currentFolderPath}${s.name}/`;
    (o = this.config) != null && o.rememberLastFolder && Qs(r, this.config.auth.projectToken), this._selectAllId++, this.store.setState({
      currentFolder: s.uuid,
      currentFolderPath: r,
      breadcrumb: [...i.breadcrumb, { uuid: s.uuid, name: s.name, path: r }],
      searchQuery: "",
      offset: 0,
      assets: [],
      folders: []
    }), this.selectionCtrl.resetRange(), this._loadData();
  }
  _handleBreadcrumbNavigate(e) {
    var n, c;
    const s = e.detail.uuid, i = this.store.getState();
    if (i.activeTab === "labels") {
      this._selectAllId++, this.store.setState({
        activeLabelUuid: null,
        breadcrumb: [],
        searchQuery: "",
        offset: 0,
        assets: [],
        folders: []
      }), this.selectionCtrl.resetRange(), this._loadData();
      return;
    }
    if (i.activeTab === "collections") {
      if (this._selectAllId++, !s) {
        this.store.setState({
          activeCollectionUuid: null,
          activeCollectionFolder: null,
          activeCollectionFolders: [],
          breadcrumb: [],
          searchQuery: "",
          offset: 0,
          assets: [],
          folders: [],
          isLoading: !1
        }), this.selectionCtrl.resetRange();
        return;
      }
      if (s === i.activeCollectionUuid) {
        this.store.setState({
          activeCollectionFolder: null,
          breadcrumb: [i.breadcrumb[0]],
          searchQuery: "",
          offset: 0,
          assets: [],
          folders: [],
          isLoading: !1
        }), this.selectionCtrl.resetRange();
        return;
      }
      const h = this._findCollectionFolder(i.activeCollectionFolders, s);
      if (h) {
        const u = i.breadcrumb.findIndex((p) => p.uuid === s), f = i.breadcrumb.slice(0, u + 1);
        this.store.setState({
          activeCollectionFolder: h,
          breadcrumb: f,
          searchQuery: "",
          offset: 0,
          assets: [],
          folders: []
        }), this.selectionCtrl.resetRange(), this._loadData();
      }
      return;
    }
    const r = s ? i.breadcrumb.findIndex((h) => h.uuid === s) : -1, o = s ? i.breadcrumb.slice(0, r + 1) : [], a = o.length > 0 ? o[o.length - 1].path : ((n = this.config) == null ? void 0 : n.rootFolderPath) || "/";
    (c = this.config) != null && c.rememberLastFolder && Qs(a, this.config.auth.projectToken), this._selectAllId++, this.store.setState({
      currentFolder: s || null,
      currentFolderPath: a,
      breadcrumb: o,
      offset: 0,
      assets: [],
      folders: []
    }), this.selectionCtrl.resetRange(), this._loadData();
  }
  _handleLabelOpen(e) {
    const s = e.detail.label;
    this._selectAllId++, this.store.setState({
      activeLabelUuid: s.uuid,
      breadcrumb: [{ uuid: s.uuid, name: s.name, path: "" }],
      searchQuery: "",
      offset: 0,
      assets: [],
      folders: []
    }), this.selectionCtrl.resetRange(), this._loadData();
  }
  async _handleCollectionOpen(e) {
    const s = e.detail.collection;
    if (this.apiClient) {
      this._selectAllId++, this.store.setState({
        activeCollectionUuid: s.uuid,
        activeCollectionFolder: null,
        activeCollectionFolders: [],
        isLoadingCollectionFolders: !0,
        breadcrumb: [{ uuid: s.uuid, name: s.title, path: "" }],
        searchQuery: "",
        offset: 0,
        assets: [],
        folders: [],
        isLoading: !0
      }), this.selectionCtrl.resetRange();
      try {
        const i = await Ni(this.apiClient, s.uuid), r = Zs(i.folders || []);
        this.store.setState({
          activeCollectionFolders: r,
          isLoadingCollectionFolders: !1,
          isLoading: !1
        });
      } catch (i) {
        this.store.setState({ isLoadingCollectionFolders: !1, isLoading: !1 }), this.dispatchEvent(
          new CustomEvent("ap-error", {
            detail: { error: i, context: "loadCollectionFolders" },
            bubbles: !0,
            composed: !0
          })
        );
      }
    }
  }
  _handleCollectionFolderOpen(e) {
    var n;
    const s = e.detail.folder, i = this.store.getState(), r = s.path.split(" -> ").filter(Boolean), o = [
      {
        uuid: i.activeCollectionUuid,
        name: ((n = i.breadcrumb[0]) == null ? void 0 : n.name) || "Collection",
        path: ""
      }
    ];
    let a = "";
    for (const c of r)
      a = a ? `${a} -> ${c}` : c, o.push({
        uuid: a,
        name: c,
        path: a
      });
    this._selectAllId++, this.store.setState({
      activeCollectionFolder: s,
      breadcrumb: o,
      searchQuery: "",
      offset: 0,
      assets: [],
      folders: []
    }), this.selectionCtrl.resetRange(), this._loadData();
  }
  _findCollectionFolder(e, s) {
    for (const i of e) {
      if (i.path === s) return i;
      if (i.children) {
        const r = this._findCollectionFolder(i.children, s);
        if (r) return r;
      }
    }
    return null;
  }
  _getVisibleCollectionFolders() {
    const e = this.store.getState();
    return e.activeCollectionUuid ? e.activeCollectionFolder ? e.activeCollectionFolder.children ?? [] : e.activeCollectionFolders : [];
  }
  _resolveInitialFolderPath(e) {
    var s, i, r;
    return e === "folders" && ((s = this.config) == null ? void 0 : s.rememberLastFolder) && Kr(this.config.auth.projectToken) || ((i = this.config) == null ? void 0 : i.initialFolderPath) || ((r = this.config) == null ? void 0 : r.rootFolderPath) || "/";
  }
  /**
   * Build breadcrumb items from a folder path relative to the root folder path.
   * Used to restore breadcrumbs when opening the picker into a remembered/configured folder.
   */
  _buildBreadcrumbFromPath(e, s) {
    if (!e || e === s || e === "/") return [];
    const r = (e.startsWith(s) ? e.slice(s.length) : e.replace(/^\//, "")).split("/").filter(Boolean), o = [];
    let a = s.endsWith("/") ? s : s + "/";
    for (const n of r)
      a += n + "/", o.push({ uuid: a, name: n, path: a });
    return o;
  }
  _handlePreviewClose() {
    this.store.setState({ isPreviewOpen: !1, previewAsset: null });
  }
  _handlePreviewNavigate(e) {
    this.store.setState({ previewAsset: e.detail.asset });
  }
  _handleSelectionConfirm(e) {
    var r, o;
    const s = e.detail.assets, i = e.detail.folders || [];
    if (i.length > 0 && ((r = this.config) == null ? void 0 : r.folderSelection) !== !1 && ((o = this.config) == null ? void 0 : o.folderSelectionMode) === "assets") {
      this._folderResolveOpen = !0;
      return;
    }
    this._emitSelect(s, i.length ? i : void 0);
  }
  _handleSelectionTransform(e) {
    var o, a;
    const s = e.detail.assets, i = e.detail.folders || [];
    if (i.length > 0 && ((o = this.config) == null ? void 0 : o.folderSelection) !== !1 && ((a = this.config) == null ? void 0 : a.folderSelectionMode) === "assets") {
      this._transformAfterResolve = !0, this._folderResolveOpen = !0;
      return;
    }
    if (s.filter(ht).length === 0) {
      this._emitSelect(s, i.length ? i : void 0);
      return;
    }
    this._transformAssets = s, this._transformFolders = i, this._transformOpen = !0;
  }
  async _handleFolderResolveConfirm(e) {
    var o;
    const s = e.detail.mode, i = this.selectionCtrl.getSelectedFolders(), r = this.selectionCtrl.getSelectedAssets();
    this.store.setState({ isResolvingFolders: !0 });
    try {
      const a = await Promise.all(
        i.map(
          (p) => {
            var v;
            return Je(this.apiClient, {
              fields: (v = this.config) == null ? void 0 : v.apiFields,
              folder: p.path,
              recursive: s === "recursive" ? 1 : 0,
              limit: 1e4
            });
          }
        )
      ), n = [];
      for (const p of a)
        n.push(...p.files);
      const c = [...r], h = new Set(c.map((p) => p.uuid));
      for (const p of n)
        h.has(p.uuid) || (c.push(p), h.add(p.uuid));
      const u = (o = this.config) == null ? void 0 : o.maxSelections, f = u ? c.slice(0, u) : c;
      if (this._folderResolveOpen = !1, this.store.setState({ isResolvingFolders: !1 }), this._transformAfterResolve) {
        this._transformAfterResolve = !1, this._transformAssets = f, this._transformFolders = [], this._transformOpen = !0;
        return;
      }
      this._emitSelect(f);
    } catch (a) {
      this.store.setState({ isResolvingFolders: !1 }), this.dispatchEvent(
        new CustomEvent("ap-error", {
          detail: { error: a, context: "folderResolve" },
          bubbles: !0,
          composed: !0
        })
      );
    }
  }
  _handleFolderResolveCancel() {
    this._folderResolveOpen = !1, this._transformAfterResolve = !1;
  }
  _handleTransformConfirm(e) {
    const s = e.detail.params, i = e.detail.isAspectLocked ?? !0, r = this._transformAssets, o = this._transformFolders, a = r.length > 1, n = ii(s, { isMultiSelect: a, isAspectLocked: i }), c = r.map((h) => {
      var v, m;
      if (!ht(h)) return h;
      const u = (v = h.url) == null ? void 0 : v.cdn, f = (m = h.url) == null ? void 0 : m.permalink, p = {
        cdn: u ? Be(u, n) : ""
      };
      return f && (p.permalink_cdn = Be(f, n)), { ...h, transformation: { params: s, url: p } };
    });
    this._transformOpen = !1, this._transformAssets = [], this._transformFolders = [], this._emitSelect(c, o.length ? o : void 0);
  }
  _handleTransformSkip() {
    const e = this._transformAssets, s = this._transformFolders;
    this._transformOpen = !1, this._transformAssets = [], this._transformFolders = [], this._emitSelect(e, s.length ? s : void 0);
  }
  _handleTransformCancel() {
    this._transformOpen = !1, this._transformAssets = [], this._transformFolders = [];
  }
  _openCreateFolderDialog() {
    this._createFolderError = null, this._createFolderOpen = !0;
  }
  _handleCreateFolderCancel() {
    this._isCreatingFolder && (this._cancelCreateFolderRequested = !0), this._createFolderOpen = !1, this._createFolderError = null;
  }
  async _handleCreateFolderConfirm(e) {
    const s = e.detail.name;
    if (!s || this._isCreatingFolder || !this.apiClient) return;
    const i = this.store.getState().currentFolderPath || "/";
    this._isCreatingFolder = !0, this._cancelCreateFolderRequested = !1, this._createFolderError = null;
    try {
      await Fi(this.apiClient, s, i), this._cancelCreateFolderRequested || (this._createFolderOpen = !1), this._loadData();
    } catch (r) {
      this._cancelCreateFolderRequested || (this._createFolderError = this._mapCreateFolderError(r));
    } finally {
      this._isCreatingFolder = !1, this._cancelCreateFolderRequested = !1;
    }
  }
  _mapCreateFolderError(e) {
    const s = (e == null ? void 0 : e.message) ?? "";
    if (/timed out/i.test(s)) return "Request timed out. Please try again.";
    const i = s.match(/^API error: (\d+)/);
    if (i)
      switch (Number(i[1])) {
        case 400:
          return "Invalid folder name.";
        case 401:
          return "Authentication failed. Please reload the page.";
        case 403:
          return "You do not have permission to create a folder here.";
        case 409:
          return "A folder with this name already exists.";
        default:
          return "Failed to create folder. Please try again.";
      }
    return s || "Failed to create folder. Please try again.";
  }
  async _handleSelectAll(e) {
    var c, h, u;
    const s = this.store.getState();
    if (s.isSelectingAll || !this.apiClient || !(((c = s.config) == null ? void 0 : c.multiSelect) ?? !0)) return;
    const r = ((h = e == null ? void 0 : e.detail) == null ? void 0 : h.scope) ?? "all", o = r !== "assets" && ((u = this.config) == null ? void 0 : u.folderSelection) !== !1 && s.folders.length > 0;
    if (!(r !== "folders")) {
      o && this.selectionCtrl.selectAllFolders(s.folders);
      return;
    }
    if (s.assets.length >= s.totalCount) {
      o && this.selectionCtrl.selectAllFolders(s.folders), this.selectionCtrl.selectAll(s.assets);
      return;
    }
    const n = ++this._selectAllId;
    this.store.setState({ isSelectingAll: !0 });
    try {
      const f = this._buildSearchNotation();
      let p = s.currentFolderPath || "/";
      const v = s.limit, m = s.assets, k = s.totalCount;
      let _ = s.activeTab === "folders" ? 0 : 1, $ = f || void 0;
      if (s.activeTab === "labels" && s.activeLabelUuid) {
        const S = s.labels.find((ne) => ne.uuid === s.activeLabelUuid);
        S && ($ = `labels:${S.sid.replace("#", "")}${f ? " " + f : ""}`), p = "/", _ = 1;
      }
      let y, I;
      s.activeTab === "collections" && s.activeCollectionFolder && (y = s.activeCollectionUuid || void 0, I = s.activeCollectionFolder.filters || void 0, p = "", _ = 1);
      const N = [];
      for (let S = m.length; S < k; S += v)
        N.push(S);
      const F = 4, Q = [];
      for (let S = 0; S < N.length; S += F) {
        if (n !== this._selectAllId) return;
        const ne = N.slice(S, S + F), ce = await Promise.all(
          ne.map(
            (V) => {
              var Ne, Ue;
              return Je(this.apiClient, {
                fields: (Ne = this.config) == null ? void 0 : Ne.apiFields,
                ...p ? { folder: p } : {},
                offset: V,
                limit: v,
                sort_by: s.sortBy,
                sort_direction: s.sortDirection,
                search: s.searchQuery || void 0,
                q: $,
                recursive: _,
                ...y && { collection_uuid: y },
                ...I && { f64: I },
                ...s.isAISearchActive && s.searchQuery && {
                  with_ai: !0,
                  ai_query: s.searchQuery,
                  ai_lang: ((Ue = s.config) == null ? void 0 : Ue.locale) ?? "en"
                }
              });
            }
          )
        );
        if (n !== this._selectAllId) return;
        for (const V of ce)
          V.files && Q.push(...V.files);
      }
      if (n !== this._selectAllId) return;
      const A = new Set(m.map((S) => S.uuid)), U = Q.filter((S) => A.has(S.uuid) ? !1 : (A.add(S.uuid), !0)), z = [...m, ...U];
      this.store.setState({
        assets: z,
        offset: Math.max(0, z.length - v),
        hasMore: !1,
        isSelectingAll: !1
      }), o && this.selectionCtrl.selectAllFolders(s.folders), this.selectionCtrl.selectAll(z);
    } catch (f) {
      if (n !== this._selectAllId) return;
      this.store.setState({ isSelectingAll: !1 }), this.dispatchEvent(
        new CustomEvent("ap-error", {
          detail: { error: f, context: "selectAll" },
          bubbles: !0,
          composed: !0
        })
      );
    }
  }
  _handleSelectionClear() {
    this.selectionCtrl.clearSelection();
  }
  _handleSelectionDeselect(e) {
    const s = new Map(this.store.getState().selectedAssets);
    s.delete(e.detail.uuid), this.store.setState({ selectedAssets: s });
  }
  // ── Filter Handlers ──────────────────────────────────────────────────
  _isDateFilterKey(e) {
    return e === b.DATE || e === b.LICENSE_EXPIRY || e === C.DUE_DATE;
  }
  _handleFilterUpdate(e) {
    const { key: s, values: i, operator: r } = e.detail, a = { ...this.store.getState().filters };
    let n = i === "" || i === null || i === void 0 || Array.isArray(i) && i.length === 0 || typeof i == "object" && !Array.isArray(i) && Object.values(i).every(
      (h) => h == null || h === "" || Array.isArray(h) && h.length === 0
    );
    if (!n && this._isDateFilterKey(s) && typeof i == "object" && !Array.isArray(i)) {
      const { kind: h, preset: u, from: f, to: p } = i;
      n = !h && !u && !f && !p;
    }
    if (n) {
      const h = { ...a.applied };
      delete h[s], a.applied = h, a.pinned.includes(s) || (a.visible = a.visible.filter((u) => u !== s));
    } else {
      const h = { ...a.applied };
      this._isDateFilterKey(s) && typeof i == "object" && !Array.isArray(i) ? h[s] = {
        type: "date",
        field: i.field || "created",
        kind: i.kind || null,
        preset: i.preset || null,
        from: i.from || null,
        to: i.to || null
      } : s === b.IMAGE && typeof i == "object" && !Array.isArray(i) ? h[s] = i : h[s] = {
        type: "string",
        values: Array.isArray(i) ? i : [i],
        operator: r || ":"
      }, a.applied = h, a.visible.includes(s) || (a.visible = [...a.visible, s]);
    }
    this.store.setState({ filters: a, offset: 0, assets: [], folders: [], isLoading: !0 }), this.selectionCtrl.resetRange(), this._debouncedLoadData();
    const c = s === C.STATUS || s === C.APPROVER || s === C.REQUESTOR || s === C.DUE_DATE;
    if (this._pendingFilter === s || this._pendingFilter === b.APPROVAL && c) {
      this._pendingFilter = null;
      const h = this.renderRoot.querySelector("ap-filters-bar");
      h && (h.pendingFilter = null);
    }
  }
  _handleFilterOpen(e) {
    const s = e.detail.key, i = e.detail.chipRect, r = this.renderRoot.querySelector("ap-content-toolbar");
    let o, a;
    if (i) {
      const n = this.renderRoot.querySelector(".toolbar-filters-wrapper");
      if (n) {
        const c = n.getBoundingClientRect();
        o = i.left - c.left, a = i.bottom - c.top;
      }
    }
    r == null || r.openFilterPanel(s, !0, o, a);
  }
  _handleMetadataFilterOpen(e) {
    const { fieldKey: s, chipRect: i } = e.detail, r = this.renderRoot.querySelector("ap-content-toolbar");
    let o, a;
    if (i) {
      const n = this.renderRoot.querySelector(".toolbar-filters-wrapper");
      if (n) {
        const c = n.getBoundingClientRect();
        o = i.left - c.left, a = i.bottom - c.top;
      }
    }
    r == null || r.openMetadataFieldPanel(s, !0, o, a);
  }
  _handleFilterPanelChange(e) {
    const s = this.renderRoot.querySelector("ap-filters-bar");
    s && (s.activeFilter = e.detail.key, s.activeMetadataField = e.detail.metadataFieldKey || null), !e.detail.key && !e.detail.metadataFieldKey && (this._pendingFilter || this._pendingMetadataField) && (this._pendingFilter = null, this._pendingMetadataField = null, s && (s.pendingFilter = null, s.pendingMetadataField = null));
  }
  async _handleFilterPending(e) {
    var p, v, m;
    const { key: s, metadataFieldKey: i } = e.detail, r = this.renderRoot.querySelector("ap-filters-bar"), o = this.renderRoot.querySelector("ap-content-toolbar");
    if (!r || !o) return;
    i ? (this._pendingMetadataField = i, r.pendingMetadataField = i) : s && (this._pendingFilter = s, r.pendingFilter = s), await r.updateComplete;
    let a = r.renderRoot.querySelector(".chip.pending");
    if (!a) {
      const k = r.renderRoot.querySelectorAll(".chip.pinned-empty"), _ = i ? (p = r._getMetadataLabel) == null ? void 0 : p.call(r, i) : void 0;
      for (const $ of k) {
        const y = (m = (v = $.querySelector(".chip-label")) == null ? void 0 : v.textContent) == null ? void 0 : m.trim();
        if (i && y === _) {
          a = $;
          break;
        }
        if (s && y === (ut[s] || s)) {
          a = $;
          break;
        }
      }
    }
    if (!a) return;
    const n = a.getBoundingClientRect(), c = this.renderRoot.querySelector(".toolbar-filters-wrapper"), h = c == null ? void 0 : c.getBoundingClientRect(), u = h ? n.left - h.left : n.left, f = h ? n.bottom - h.top : void 0;
    i ? o.openMetadataFieldPanel(i, !0, u, f) : s && o.openFilterPanel(s, !0, u, f);
  }
  _handleFilterRemove(e) {
    var a;
    const s = e.detail.key;
    if (s in (((a = this.config) == null ? void 0 : a.forcedFilters) ?? {})) return;
    const r = { ...this.store.getState().filters }, o = { ...r.applied };
    delete o[s], r.applied = o, r.pinned.includes(s) || (r.visible = r.visible.filter((n) => n !== s)), this.store.setState({ filters: r, offset: 0, assets: [], folders: [], isLoading: !0 }), this.selectionCtrl.resetRange(), this._debouncedLoadData();
  }
  _handleMetadataFilterChange(e) {
    const { fieldKey: s, operator: i, values: r, metadataType: o } = e.detail, n = { ...this.store.getState().filters }, c = { ...n.metadata }, h = { ...c.applied };
    if (!r || Array.isArray(r) && r.length === 0 ? (delete h[s], c.applied = h, c.pinned.includes(s) || (c.visible = c.visible.filter((f) => f !== s))) : (h[s] = {
      type: "string",
      values: Array.isArray(r) ? r : [r],
      operator: i || ":",
      metadataType: o
    }, c.applied = h, c.visible.includes(s) || (c.visible = [...c.visible, s])), n.metadata = c, this.store.setState({ filters: n, offset: 0, assets: [], folders: [], isLoading: !0 }), this.selectionCtrl.resetRange(), this._debouncedLoadData(), this._pendingMetadataField === s) {
      this._pendingMetadataField = null;
      const f = this.renderRoot.querySelector("ap-filters-bar");
      f && (f.pendingMetadataField = null);
    }
  }
  _handleMetadataFieldToggle(e) {
    const { fieldKey: s, visible: i } = e.detail, o = { ...this.store.getState().filters }, a = { ...o.metadata };
    i ? a.visible.includes(s) || (a.visible = [...a.visible, s]) : a.visible = a.visible.filter((n) => n !== s), o.metadata = a, this.store.setState({ filters: o });
  }
  _handleMetadataFilterRemove(e) {
    const { fieldKey: s } = e.detail, r = { ...this.store.getState().filters }, o = { ...r.metadata }, a = { ...o.applied };
    delete a[s], o.applied = a, o.pinned.includes(s) || (o.visible = o.visible.filter((n) => n !== s)), r.metadata = o, this.store.setState({ filters: r, offset: 0, assets: [], folders: [], isLoading: !0 }), this.selectionCtrl.resetRange(), this._debouncedLoadData();
  }
  _handleFilterPin(e) {
    var n, c;
    const { key: s, pinned: i } = e.detail, o = { ...this.store.getState().filters };
    i ? o.pinned.includes(s) || (o.pinned = [...o.pinned, s]) : (o.pinned = o.pinned.filter((h) => h !== s), s in o.applied || (o.visible = o.visible.filter((h) => h !== s))), this.store.setState({ filters: o });
    const a = ((c = (n = this.store.getState().config) == null ? void 0 : n.auth) == null ? void 0 : c.projectToken) ?? null;
    Nr(a, o.pinned);
  }
  _handleMetadataPin(e) {
    var c, h;
    const { fieldKey: s, pinned: i } = e.detail, o = { ...this.store.getState().filters }, a = { ...o.metadata };
    i ? a.pinned.includes(s) || (a.pinned = [...a.pinned, s]) : (a.pinned = a.pinned.filter((u) => u !== s), s in a.applied || (a.visible = a.visible.filter((u) => u !== s))), o.metadata = a, this.store.setState({ filters: o });
    const n = ((h = (c = this.store.getState().config) == null ? void 0 : c.auth) == null ? void 0 : h.projectToken) ?? null;
    Ur(n, a.pinned);
  }
  _handleFiltersClearAll() {
    const e = this.store.getState();
    this.store.setState({
      filters: {
        ...e.filters,
        applied: {},
        visible: [...e.filters.pinned],
        metadata: {
          ...e.filters.metadata,
          applied: {},
          visible: [...e.filters.metadata.pinned]
        }
      },
      offset: 0,
      assets: [],
      folders: [],
      isLoading: !0
    });
    const s = this.renderRoot.querySelector("ap-filters-bar");
    s && (s.activeFilter = null), this.selectionCtrl.resetRange(), this._debouncedLoadData();
  }
  _handleFilterDeactivate(e) {
    const s = e.detail.key, r = { ...this.store.getState().filters };
    r.visible = r.visible.filter((o) => o !== s), this.store.setState({ filters: r });
  }
  _handleMetadataFieldDeactivate(e) {
    const { fieldKey: s } = e.detail, r = { ...this.store.getState().filters }, o = { ...r.metadata };
    o.visible = o.visible.filter((a) => a !== s), r.metadata = o, this.store.setState({ filters: r });
  }
  _handleFiltersSet(e) {
    var h;
    const { applied: s, metadata: i } = e.detail, o = { ...this.store.getState().filters }, a = new Set(Object.keys(((h = this.config) == null ? void 0 : h.forcedFilters) ?? {})), n = { ...s };
    for (const u of a) delete n[u];
    o.applied = n;
    const c = Object.keys(s);
    if (o.visible = [.../* @__PURE__ */ new Set([...o.pinned, ...c])], i) {
      const u = { ...o.metadata };
      u.applied = i.applied;
      const f = Object.keys(i.applied);
      u.visible = [.../* @__PURE__ */ new Set([...u.pinned, ...f])], o.metadata = u;
    }
    this.store.setState({ filters: o, offset: 0, assets: [], folders: [], isLoading: !0 }), this.selectionCtrl.resetRange(), this._debouncedLoadData();
  }
  // ── Sort Options ────────────────────────────────────────────────────
  _getSortOptions() {
    var s;
    const e = this.storeCtrl.state;
    if (e.activeTab === "labels" && !e.activeLabelUuid)
      return Yr;
    if (e.activeTab === "collections") {
      if (!e.activeCollectionUuid) return Wr;
      if (!(e.activeCollectionFolder && !((s = e.activeCollectionFolder.children) != null && s.length))) return Xr;
    }
    return e.searchQuery ? Qr : e.activeTab === "folders" ? Hr : As;
  }
  // ── Search Notation Builder ──────────────────────────────────────────
  _buildSearchNotation() {
    const e = this.store.getState(), s = { ...this._normalizedForcedFilters, ...e.filters.applied };
    return $r(s, e.filters.metadata.applied).join(" ");
  }
  render() {
    var I, N, F, Q, A, U, z, S, ne, ce, V, Ne, Ue, _t, yt, $t, wt, kt, St, Ct, Ft, At, Et, Tt, It, Lt, Ot, Le;
    const e = this.storeCtrl.state, s = e.t, i = Array.from(e.selectedAssets.keys()), r = Array.from(e.selectedFolders.keys()), o = ((I = this.config) == null ? void 0 : I.disabledAssetIds) ?? [], a = ((N = this.config) == null ? void 0 : N.disabledFolderIds) ?? [], n = this.selectionCtrl.getSelectedAssets(), c = this.selectionCtrl.getSelectedFolders(), h = ((F = this.config) == null ? void 0 : F.folderSelection) !== !1, u = l`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((Q = this.config) == null ? void 0 : Q.tabs) ?? ["assets", "folders"]}
        .isInsideLabel=${e.activeTab === "labels" && !!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab === "collections" && !!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab === "collections" && !!e.activeCollectionFolder && !((A = e.activeCollectionFolder.children) != null && A.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((U = this.config) != null && U.enableAISearch)}
        .isAISearchActive=${e.isAISearchActive}
        .regionalGroups=${e.regionalVariantGroups}
        .regionalFilters=${e.regionalFilters}
        .hideClose=${this._isInline}
        .t=${s}
        @tab-change=${this._handleTabChange}
        @search-change=${this._handleSearchChange}
        @ai-search-toggle=${this._handleAISearchToggle}
        @view-change=${this._handleViewChange}
        @regional-change=${this._handleRegionalChange}
        @ap-close=${() => this._handleCancel("close-button")}
      ></ap-header>
    `, f = !!((z = this.config) != null && z.uploader), p = ((S = this.config) == null ? void 0 : S.folderCreation) === !0, v = ((ne = this.config) == null ? void 0 : ne.auth.mode) === "sassKey", m = e.activeTab === "folders", k = p && m && (v || Bi(e.permissions, Vi.FOLDER_CREATE)), _ = l`
      <div
        class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver ? l`
              <div class="drop-zone-overlay">
                <div class="drop-zone-label">
                  <sfx-icon name="upload" .size=${32}></sfx-icon>
                  ${s("dropFilesToUpload", "Drop files to upload")}
                </div>
              </div>
            ` : g}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(ce = this.config) != null && ce.stickyFilters ? " sticky" : ""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${f}
              .showCreateFolder=${k}
              .showFilters=${!(e.activeTab === "labels" && !e.activeLabelUuid) && !(e.activeTab === "collections" && !(e.activeCollectionFolder && !((V = e.activeCollectionFolder.children) != null && V.length)))}
              .countLabel=${e.activeTab === "labels" && !e.activeLabelUuid ? s("labelCount", {
      count: e.labels.length,
      defaultValue_one: "{{count}} label",
      defaultValue_other: "{{count}} labels"
    }) : e.activeTab === "collections" && !e.activeCollectionUuid ? s("collectionCount", {
      count: e.collections.length,
      defaultValue_one: "{{count}} collection",
      defaultValue_other: "{{count}} collections"
    }) : e.activeTab === "collections" && e.activeCollectionUuid && !(e.activeCollectionFolder && !((Ne = e.activeCollectionFolder.children) != null && Ne.length)) ? s("folderCount", {
      count: this._getVisibleCollectionFolders().length,
      defaultValue_one: "{{count}} folder",
      defaultValue_other: "{{count}} folders"
    }) : ""}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .filters=${e.filters}
              .labels=${e.labels}
              .tags=${e.tags}
              .fileTypes=${e.fileTypes}
              .metadataFields=${e.metadataFields}
              .pinnedFilters=${e.filters.pinned}
              .apiClient=${this.apiClient}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .approverUsers=${((Ue = this.config) == null ? void 0 : Ue.approverUsers) ?? []}
              .requesterUsers=${((_t = this.config) == null ? void 0 : _t.requesterUsers) ?? []}
              .t=${s}
              @sort-change=${this._handleSortChange}
              @sort-direction-change=${this._handleSortDirectionChange}
              @filter-update=${this._handleFilterUpdate}
              @filter-pin=${this._handleFilterPin}
              @metadata-filter-change=${this._handleMetadataFilterChange}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
              @metadata-pin=${this._handleMetadataPin}
              @filter-panel-change=${this._handleFilterPanelChange}
              @filter-pending=${this._handleFilterPending}
              @upload-click=${this._handleUploadClick}
              @create-folder-click=${this._openCreateFolderDialog}
            ></ap-content-toolbar>

            ${e.activeTab === "labels" && !e.activeLabelUuid || e.activeTab === "collections" && !(e.activeCollectionFolder && !((yt = e.activeCollectionFolder.children) != null && yt.length)) ? g : l`
                  <ap-filters-bar
                    .appliedFilters=${e.filters.applied}
                    .appliedMetadata=${e.filters.metadata.applied}
                    .metadataFields=${e.metadataFields}
                    .tags=${e.tags}
                    .labels=${e.labels}
                    .approverUsers=${(($t = this.config) == null ? void 0 : $t.approverUsers) ?? []}
                    .requesterUsers=${((wt = this.config) == null ? void 0 : wt.requesterUsers) ?? []}
                    .pinnedFilters=${e.filters.pinned}
                    .pinnedMetadataFields=${e.filters.metadata.pinned}
                    .forcedFilters=${((kt = this.config) == null ? void 0 : kt.forcedFilters) ?? {}}
                    .t=${s}
                    @filter-remove=${this._handleFilterRemove}
                    @filter-deactivate=${this._handleFilterDeactivate}
                    @filter-open=${this._handleFilterOpen}
                    @metadata-filter-open=${this._handleMetadataFilterOpen}
                    @metadata-filter-remove=${this._handleMetadataFilterRemove}
                    @metadata-field-deactivate=${this._handleMetadataFieldDeactivate}
                    @metadata-pin=${this._handleMetadataPin}
                    @filters-clear-all=${this._handleFiltersClearAll}
                    @filters-set=${this._handleFiltersSet}
                  ></ap-filters-bar>
                `}
            ${e.breadcrumb.length > 0 ? l`<sfx-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab === "labels" ? s("tabLabels", "Labels") : e.activeTab === "collections" ? s("tabCollections", "Collections") : s("rootFolder", "Root")}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></sfx-breadcrumb>` : g}
          </div>

          ${e.isLoading && e.assets.length === 0 && e.folders.length === 0 && !(e.activeTab === "labels" && !e.activeLabelUuid) && !(e.activeTab === "collections" && !(e.activeCollectionFolder && !((St = e.activeCollectionFolder.children) != null && St.length))) ? l`<ap-skeleton
                .variant=${e.viewMode}
                .gridSize=${((Ct = this.config) == null ? void 0 : Ct.gridSize) ?? "normal"}
                .multiSelect=${((Ft = this.config) == null ? void 0 : Ft.multiSelect) !== !1}
                .folderCount=${2}
                .t=${s}
              ></ap-skeleton>` : this._renderContent(
      e,
      i,
      r,
      h,
      o,
      a
    )}

          <ap-marquee-overlay
            .active=${this.marqueeCtrl.isActive}
            .rect=${this.marqueeCtrl.rect}
          ></ap-marquee-overlay>
          ${this._folderResolveOpen ? l`
                <ap-folder-resolve-dialog
                  .folders=${c}
                  .loading=${e.isResolvingFolders}
                  .t=${s}
                  @folder-resolve-confirm=${this._handleFolderResolveConfirm}
                  @folder-resolve-cancel=${this._handleFolderResolveCancel}
                ></ap-folder-resolve-dialog>
              ` : g}
          ${this._transformOpen ? l`
                <ap-transformation-dialog
                  .assets=${this._transformAssets}
                  .isMultiSelect=${this._transformAssets.length > 1}
                  .t=${s}
                  .exportOriginalLabel=${(At = this._transformationsConfig) == null ? void 0 : At.exportOriginalLabel}
                  .applyExportLabel=${(Et = this._transformationsConfig) == null ? void 0 : Et.applyExportLabel}
                  @transform-confirm=${this._handleTransformConfirm}
                  @transform-skip=${this._handleTransformSkip}
                  @transform-cancel=${this._handleTransformCancel}
                ></ap-transformation-dialog>
              ` : g}
          ${this._createFolderOpen ? l`
                <ap-create-folder-dialog
                  .t=${e.t}
                  .currentFolderPath=${e.currentFolderPath}
                  .loading=${this._isCreatingFolder}
                  .error=${this._createFolderError}
                  @create-folder-confirm=${this._handleCreateFolderConfirm}
                  @create-folder-cancel=${this._handleCreateFolderCancel}
                ></ap-create-folder-dialog>
              ` : g}
        </div>

        ${e.isPreviewOpen && e.previewAsset ? l`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${i}
              .containerToken=${e.projectToken}
              .showMetadata=${((Tt = this.config) == null ? void 0 : Tt.showMetadata) !== !1}
              .metadataFields=${e.metadataFields}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((It = this.config) == null ? void 0 : It.multiSelect) ?? !0}
              .t=${s}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>` : g}
      </div>
    `, $ = l`
      <ap-selection-bar
        .selectedAssets=${n}
        .selectedFolders=${c}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((Lt = this.config) == null ? void 0 : Lt.multiSelect) ?? !0}
        .maxSelections=${(Ot = this.config) == null ? void 0 : Ot.maxSelections}
        .showTransform=${!!((Le = this.config) != null && Le.transformations) && n.some(ht)}
        .t=${s}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `, y = this._isUploaderOpen ? l`
          <div class="uploader-overlay">
            <div class="uploader-body">${this._uploaderEl}</div>
          </div>
        ` : g;
    return this._isInline ? e.isOpen ? l`
        <div class="ap-inline">
          ${this._isUploaderOpen ? y : l`
                <div class="inline-header">${u}</div>
                <div class="inline-content">${_}</div>
                <div class="inline-footer">${$}</div>
              `}
        </div>
      ` : g : l`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${(re) => this._handleCancel(re.detail.reason)}
      >
        ${this._isUploaderOpen ? y : l`
              <div slot="header">${u}</div>
              ${_}
              <div slot="footer">${$}</div>
            `}
      </ap-modal>
    `;
  }
  _renderContent(e, s, i = [], r = !1, o = [], a = []) {
    var c, h, u, f, p, v, m, k, _, $, y, I, N;
    const n = e.t;
    if (e.activeTab === "assets")
      return !e.isLoading && e.assets.length === 0 ? l`
          <div class="empty-state">
            <sfx-icon name="search" .size=${48}></sfx-icon>
            <div class="empty-title">${n("noAssetsFound", "No assets found")}</div>
            <div class="empty-desc">
              ${n("noAssetsFoundDesc", "Try adjusting your search or filters")}
            </div>
          </div>
        ` : e.viewMode === "grid" ? l`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${a}
            .isLoading=${e.isLoading}
            .multiSelect=${((c = this.config) == null ? void 0 : c.multiSelect) ?? !0}
            .folderSelectable=${r}
            .gridSize=${((h = this.config) == null ? void 0 : h.gridSize) ?? "normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        ` : l`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${a}
          .isLoading=${e.isLoading}
          .multiSelect=${((u = this.config) == null ? void 0 : u.multiSelect) ?? !0}
          .folderSelectable=${r}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;
    if (e.activeTab === "folders")
      return !e.isLoading && e.folders.length === 0 && e.assets.length === 0 ? l`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">${n("emptyFolder", "This folder is empty")}</div>
            <div class="empty-desc">${n("emptyFolderDesc", "No folders or files found here")}</div>
          </div>
        ` : e.viewMode === "grid" ? l`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${a}
            .isLoading=${e.isLoading}
            .multiSelect=${((f = this.config) == null ? void 0 : f.multiSelect) ?? !0}
            .folderSelectable=${r}
            .gridSize=${((p = this.config) == null ? void 0 : p.gridSize) ?? "normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        ` : l`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${a}
          .isLoading=${e.isLoading}
          .multiSelect=${((v = this.config) == null ? void 0 : v.multiSelect) ?? !0}
          .folderSelectable=${r}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-open=${this._handleFolderOpen}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;
    if (e.activeTab === "labels") {
      if (!e.activeLabelUuid) {
        let F = e.labels;
        if (e.searchQuery) {
          const A = e.searchQuery.toLowerCase();
          F = e.labels.filter((U) => U.name.toLowerCase().includes(A));
        }
        const Q = e.sortDirection === "asc" ? 1 : -1;
        return F = [...F].sort((A, U) => Q * A.name.localeCompare(U.name)), F.length === 0 ? l`
            <div class="empty-state">
              <sfx-icon name="tag" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery ? n("noLabelsMatchSearch", "No labels match your search") : n("noLabelsFound", "No labels found")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery ? n("tryDifferentSearch", "Try a different search term") : n("labelsWillAppear", "Labels will appear here once created")}
              </div>
            </div>
          ` : e.viewMode === "grid" ? l`
            <div class="labels-grid">
              ${F.map(
          (A, U) => l`
                  <ap-label-card
                    .label=${A}
                    .index=${U}
                    @label-open=${this._handleLabelOpen}
                  ></ap-label-card>
                `
        )}
            </div>
          ` : l`
          <div class="labels-list">
            ${F.map(
          (A, U) => l`
                <ap-label-row
                  .label=${A}
                  .index=${U}
                  @label-open=${this._handleLabelOpen}
                ></ap-label-row>
              `
        )}
          </div>
        `;
      }
      return !e.isLoading && e.assets.length === 0 ? l`
          <div class="empty-state">
            <sfx-icon name="tag" .size=${48}></sfx-icon>
            <div class="empty-title">${n("noAssetsInLabel", "No assets in this label")}</div>
            <div class="empty-desc">
              ${n("noAssetsInLabelDesc", "Assets added to this label will appear here")}
            </div>
          </div>
        ` : e.viewMode === "grid" ? l`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${a}
            .isLoading=${e.isLoading}
            .multiSelect=${((m = this.config) == null ? void 0 : m.multiSelect) ?? !0}
            .folderSelectable=${!1}
            .gridSize=${((k = this.config) == null ? void 0 : k.gridSize) ?? "normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        ` : l`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${a}
          .isLoading=${e.isLoading}
          .multiSelect=${((_ = this.config) == null ? void 0 : _.multiSelect) ?? !0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;
    }
    if (e.activeTab === "collections") {
      if (!e.activeCollectionUuid) {
        let A = e.collections;
        if (e.searchQuery) {
          const z = e.searchQuery.toLowerCase();
          A = e.collections.filter((S) => S.title.toLowerCase().includes(z));
        }
        const U = e.sortDirection === "asc" ? 1 : -1;
        return e.sortBy === "created_at" ? A = [...A].sort(
          (z, S) => U * (new Date(z.created_at).getTime() - new Date(S.created_at).getTime())
        ) : e.sortBy === "updated_at" ? A = [...A].sort(
          (z, S) => U * (new Date(z.updated_at).getTime() - new Date(S.updated_at).getTime())
        ) : A = [...A].sort(
          (z, S) => U * z.title.localeCompare(S.title)
        ), A.length === 0 ? l`
            <div class="empty-state">
              <sfx-icon name="layout-grid" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery ? n("noCollectionsMatchSearch", "No collections match your search") : n("noCollectionsFound", "No collections found")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery ? n("tryDifferentSearch", "Try a different search term") : n("collectionsWillAppear", "Collections will appear here once created")}
              </div>
            </div>
          ` : e.viewMode === "grid" ? l`
            <div class="collections-grid">
              ${A.map(
          (z, S) => l`
                  <ap-collection-card
                    .collection=${z}
                    .index=${S}
                    @collection-open=${this._handleCollectionOpen}
                  ></ap-collection-card>
                `
        )}
            </div>
          ` : l`
          <div class="collections-list">
            ${A.map(
          (z, S) => l`
                <ap-collection-row
                  .collection=${z}
                  .index=${S}
                  @collection-open=${this._handleCollectionOpen}
                ></ap-collection-row>
              `
        )}
          </div>
        `;
      }
      if (e.isLoadingCollectionFolders)
        return l`<div class="loading-center"><sfx-spinner></sfx-spinner></div>`;
      const F = this._getVisibleCollectionFolders();
      if (!e.activeCollectionFolder || ((($ = e.activeCollectionFolder.children) == null ? void 0 : $.length) ?? 0) > 0) {
        let A = F;
        if (e.searchQuery) {
          const z = e.searchQuery.toLowerCase();
          A = F.filter((S) => S.name.toLowerCase().includes(z));
        }
        const U = e.sortDirection === "asc" ? 1 : -1;
        return A = [...A].sort((z, S) => U * z.name.localeCompare(S.name)), A.length === 0 ? l`
            <div class="empty-state">
              <sfx-icon name="folder" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery ? n("noFoldersMatchSearch", "No folders match your search") : n("noFoldersInCollection", "No folders in this collection")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery ? n("tryDifferentSearch", "Try a different search term") : n("collectionFoldersWillAppear", "Collection folders will appear here")}
              </div>
            </div>
          ` : e.viewMode === "grid" ? l`
            <div class="collection-folders-grid">
              ${A.map(
          (z, S) => l`
                  <ap-collection-folder-card
                    .folder=${z}
                    .index=${S}
                    @collection-folder-open=${this._handleCollectionFolderOpen}
                  ></ap-collection-folder-card>
                `
        )}
            </div>
          ` : l`
          <div class="collection-folders-list">
            ${A.map(
          (z, S) => l`
                <ap-collection-folder-row
                  .folder=${z}
                  .index=${S}
                  @collection-folder-open=${this._handleCollectionFolderOpen}
                ></ap-collection-folder-row>
              `
        )}
          </div>
        `;
      }
      return !e.isLoading && e.assets.length === 0 ? l`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">
              ${n("noAssetsInCollectionFolder", "No assets in this collection folder")}
            </div>
            <div class="empty-desc">
              ${n(
        "noAssetsInCollectionFolderDesc",
        "Assets matching this collection's criteria will appear here"
      )}
            </div>
          </div>
        ` : e.viewMode === "grid" ? l`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${a}
            .isLoading=${e.isLoading}
            .multiSelect=${((y = this.config) == null ? void 0 : y.multiSelect) ?? !0}
            .folderSelectable=${!1}
            .gridSize=${((I = this.config) == null ? void 0 : I.gridSize) ?? "normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        ` : l`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${a}
          .isLoading=${e.isLoading}
          .multiSelect=${((N = this.config) == null ? void 0 : N.multiSelect) ?? !0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;
    }
    return g;
  }
};
Ns.styles = [
  T`
      :host {
        display: contents;
        font-family: var(--sfx-font-family, system-ui, -apple-system, sans-serif);
      }
      :host([inline]) {
        display: block;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        height: var(--sfx-inline-height, 600px);
      }
      .content-area {
        position: relative;
        flex: 1;
        display: flex;
        overflow: hidden;
        min-height: 0;
      }
      .main-content {
        position: relative;
        flex: 1;
        min-width: 0;
        overflow-y: auto;
      }
      .toolbar-filters-wrapper {
        position: relative;
        z-index: 10;
      }
      .toolbar-filters-wrapper.sticky {
        position: sticky;
        top: 0;
        z-index: 20;
        background: var(--sfx-background, oklch(1 0 0));
      }
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }
      .empty-state sfx-icon {
        margin-bottom: 16px;
        opacity: 0.5;
      }
      .empty-title {
        font-size: var(--sfx-font-size-base, 1rem);
        font-weight: 500;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 4px;
      }
      .empty-desc {
        font-size: var(--sfx-font-size-sm, 0.875rem);
      }
      .labels-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
        padding: 0 20px 16px;
      }
      .labels-list {
        padding: 0 20px 16px;
      }
      .collections-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 12px;
        padding: 0 20px 16px;
      }
      .collections-list {
        padding: 0 20px 16px;
      }
      .collection-folders-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 12px;
        padding: 0 20px 16px;
      }
      .collection-folders-list {
        padding: 0 20px 16px;
      }
      .loading-center {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
      }
      .ap-inline {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background: var(--sfx-background, oklch(1 0 0));
        font-family: var(--sfx-font-family, system-ui, -apple-system, sans-serif);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .ap-inline .inline-header {
        flex-shrink: 0;
      }
      .ap-inline .inline-content {
        flex: 1;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      .ap-inline .inline-footer {
        flex-shrink: 0;
      }

      /* Upload drop zone overlay */
      .drop-zone-overlay {
        position: absolute;
        inset: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--sfx-primary-10, oklch(0.65 0.19 258 / 0.08));
        border: 2px dashed var(--sfx-primary, oklch(0.65 0.19 258));
        border-radius: var(--sfx-radius, 8px);
        pointer-events: none;
        animation: drop-zone-in 150ms ease-out;
      }
      .drop-zone-overlay .drop-zone-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        color: var(--sfx-primary, oklch(0.65 0.19 258));
        font-size: 1rem;
        font-weight: 500;
      }
      @keyframes drop-zone-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .drop-zone-overlay {
          animation: none;
        }
      }

      /* Uploader overlay panel — fills the entire modal/inline container */
      .uploader-overlay {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        background: var(--sfx-background, oklch(1 0 0));
        animation: uploader-slide-in 250ms ease-out;
      }
      @keyframes uploader-slide-in {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .uploader-overlay {
          animation: none;
        }
      }
      .uploader-body {
        flex: 1;
        overflow: hidden;
        min-height: 0;
      }
      .uploader-body sfx-uploader {
        display: block;
        width: 100%;
        height: 100%;
      }
    `
];
let Te = Ns;
Ze([
  x()
], Te.prototype, "_isDragOver");
Ze([
  x()
], Te.prototype, "_isUploaderOpen");
Ze([
  x()
], Te.prototype, "_folderResolveOpen");
Ze([
  x()
], Te.prototype, "_transformOpen");
Ze([
  x()
], Te.prototype, "_createFolderOpen");
Ze([
  x()
], Te.prototype, "_isCreatingFolder");
Ze([
  x()
], Te.prototype, "_createFolderError");
Ze([
  d({ type: Object })
], Te.prototype, "config");
export {
  Te as A,
  Be as a,
  ii as b,
  Qa as c,
  Ba as d,
  _s as e,
  xs as f,
  Ka as g,
  Ga as h,
  qi as i,
  qa as j,
  ja as k,
  ht as l,
  Va as m,
  Ua as n
};
