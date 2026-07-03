# Changelog

## 1.4.1

### Patch Changes

- 2986ac6: Implement `metadataConfig.defaults` — default metadata values (backend format, same keys as the upload `meta` payload) are now seeded into every newly added file across all add paths (local ingest, URL import, connectors). Seeded values pre-fill the metadata form and are sent with the upload; non-empty values also satisfy required-field enforcement. Previously the option was documented but had no effect. Also fixed docs: the airbox example used the nonexistent `targetDir` key (now `targetFolder`), and the `similarityCheck` confidence table showed 0.90 for `'high'` while the code uses 0.85.

## 1.4.0

### Minor Changes

- Add tags-item support (FRA-10513), fix CDN URL conversion regex (FRA-10579), add missing asset-picker translations (FRA-10565), and add `pnpm release:cdn` to upload all widget CDN bundles at once.

### Patch Changes

- Updated dependencies
  - @scaleflex/dam-core@0.3.0
  - @scaleflex/dam-ui@0.3.0

## 1.3.0

### Minor Changes

- 293caf4: Deduplication & reuse — Wave 1 (delete-now wins). See `plan/12-deduplication-and-reuse-plan.md`.

  **`@scaleflex/dam-metadata`** — the product-field surface is now fully exported from the
  package barrel: `ProductFieldKey`, `validateProductRef`, `validateProductPosition`,
  `mergeProductPatch`, `compactProduct`, `hasProductData`, and the `SfxProductFieldsForm`
  element (whose import registers `<sfx-product-fields-form>`). Additive; existing exports
  are unchanged. The dead `UploaderMissingKeysHelper` (`i18n/missing-keys-helper.ts`, never
  exported) and the duplicated `i18n/translate.ts` + `i18n/i18n-controller.ts` were removed —
  the package now re-exports `t` and `I18nController` directly from the `createI18n` bundle
  (`i18n/i18n.ts`); both public symbols keep the same names and types.

  **`@scaleflex/asset-picker`** — first real adoption of `@scaleflex/dam-core`. The duplicate
  `ap-*` Lit primitives now resolve to `@scaleflex/dam-ui`'s `sfx-*` set, the local
  `brand-color` util to `@scaleflex/dam-ui/theme`, the REST client to dam-core's `DamClient`,
  and the labels service + `Label` type to dam-core. The publicly re-exported `Label` type now
  comes from dam-core, where `color` / `shape` / `assets_count` are optional rather than
  required (a relaxation — consumers reading these fields should treat them as possibly
  undefined). All CSS custom properties moved from the `--ap-*` to the `--sfx-*` prefix.
  No change to the `<sfx-asset-picker>` element API, config, or events.

  **`@scaleflex/uploader`** — its private copy of the `product/` field engine was deleted in
  favour of `@scaleflex/dam-metadata` (the canonical home), and the duplicated
  `i18n/translate.ts` + `i18n/i18n-controller.ts` were collapsed onto the `createI18n` bundle.
  The public API is unchanged: the same product symbols are re-exported, now sourced from
  `@scaleflex/dam-metadata`.

### Patch Changes

- 293caf4: Deduplication & reuse — Wave 2 (the shared UI/controller layer). See
  `plan/12-deduplication-and-reuse-plan.md`.

  **`@scaleflex/dam-core`** — adds a shared `debounce` helper, and is now the single home of the
  89-entry file-type → CDN icon-URL map (asset-picker's byte-identical copy was deleted and
  re-points to `getFileTypeIconUrl` / `getDefaultFileTypeIconUrl`). Additive.

  **`@scaleflex/dam-ui`** — new shared building blocks (all additive):
  - `<sfx-breadcrumb>` (`SfxBreadcrumb` + `BreadcrumbItem`), promoted from asset-picker's
    `ap-breadcrumb`.
  - `<sfx-dialog>` (`SfxDialog`) — a shared confirm/prompt modal (overlay, Escape/Enter,
    loading/error/danger states, content slot).
  - 7 icons added to `<sfx-icon>` (`link`, `move`, `pencil`, `unlock`, `star`, `star-filled`,
    `dot`) plus `fill` support on path glyphs.
  - a new `@scaleflex/dam-ui/controllers` subpath exporting headless Lit controllers:
    `MarqueeController` (drag-select, with injected query / selection / interactive-target
    strategies so it serves both apps' shadow-DOM layouts and selection models) and
    `InfiniteScrollController`. Both apps consume both controllers.

  **`@scaleflex/asset-picker`** — consumes the shared `<sfx-breadcrumb>`, the dam-core icon map,
  and `<sfx-dialog>` (its `ap-create-folder-dialog` is now a thin wrapper over it); drops its local
  `debounce`, its duplicate file-type icon map, and both its `InfiniteScrollController` and
  `MarqueeController` (now from `@scaleflex/dam-ui/controllers`, with asset-picker's asset/folder +
  disabled + max-cap + single-select logic supplied via the injected callbacks). No public
  element/config/event change.

  **`@scaleflex/light-dam`** — replaced its local Lucide icon set with `<sfx-icon>` (deleted
  `ui/icons.ts`), its inline breadcrumb with `<sfx-breadcrumb>`, and its local marquee + inline
  infinite-scroll observer with the shared `@scaleflex/dam-ui/controllers`. No public API change.

  Deferred (tracked in plan/12): light-dam's prompt/confirm dialog (shares CSS with its
  move/upload/download modal family — a broader modal unification), the file-type **classifiers**
  that return `AssetType` (Wave 3 / D16), and D9's button/focus style refactor (low value, high
  churn).

- c0e160b: Deduplication — Wave 3, step 2 (D15′): share the file/folder browse service plumbing, keep the
  raw contract. See `plan/12` Wave 3.

  **`@scaleflex/dam-core`** — adds a raw Filerobot browse service (`api/filerobot-browse.service.ts`,
  additive): `getFilesRaw`, `getFilesStats`, `getFoldersRaw`, `getFolderPreviews` return the
  un-normalized wire response (`FilerobotAsset`/`FilerobotFolder`) and accept the full Filerobot
  query surface (`with_ai`/`ai_query`/`ai_lang`, `collection_uuid`, `f64`, `select:internal`
  format + `cdn_permalink` fields). The normalized `getFilesPage`/`getFolders` (for the headless
  core + light-dam) are unchanged.

  **`@scaleflex/asset-picker`** — deleted its local `files.service.ts` + `folders.service.ts`; it
  now imports the raw-browse functions from `@scaleflex/dam-core` (aliased to the existing names,
  so call sites are untouched) and reuses dam-core's `createFolder` (its local copy was a
  byte-identical duplicate). The query-building is byte-identical, so the API results and the raw
  `ap-select` payload are unchanged — verified against the live API (same `/files` request, same
  files load).

- d36b7fd: Deduplication — Wave 3, step 1 (D16′): unify the raw type _definitions_ in dam-core, keep the
  shapes. See `plan/12` Wave 3 + the Q-ASSET-MODEL decision (`plan/10` D13).

  **`@scaleflex/dam-core`** — now the canonical home for the raw Filerobot wire shapes (additive):
  `FilerobotAsset`, `FilerobotFolder`, and the nested `AssetInfo`/`AssetMeta`/`AssetSize`/
  `FolderOwner`/`FolderPreviewImage`. These were verified field-for-field against a live
  `/files?format=…select:internal` response (`size` is `{bytes,pretty}`, `url`/`info`/`meta`/`owner`
  are objects; `transformation` is not a wire field). The shared `AssetType` union is widened to
  `image|video|audio|document|archive|font|model|other` (covers both widgets' classifications).
  The existing flat, normalized `Asset`/`Folder` are unchanged — light-dam is unaffected.

  **`@scaleflex/asset-picker`** — its `Asset`/`Folder`/`AssetType`/`AssetInfo`/`AssetMeta` are now
  re-exported from `@scaleflex/dam-core` instead of being defined locally (≈150 fewer lines).
  `Asset` extends the wire `FilerobotAsset` with the one UI-only field it attaches
  (`transformation`), so the **public type is byte-identical** and the raw `ap-select` payload is
  unchanged. No breaking change.

  **`@scaleflex/light-dam`** — no code change; its `./core` re-export of `@scaleflex/dam-core`
  transitively surfaces the new wire types and the widened `AssetType` (additive).

- Updated dependencies [313999a]
- Updated dependencies [12d0589]
- Updated dependencies [86252c7]
- Updated dependencies [293caf4]
- Updated dependencies [293caf4]
- Updated dependencies [c0e160b]
- Updated dependencies [d36b7fd]
  - @scaleflex/dam-core@0.2.0
  - @scaleflex/dam-ui@0.2.0
  - @scaleflex/uploader@1.9.0

All notable changes to `@scaleflex/asset-picker` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.2] - 2026-06-10

### Added

- `transformRemoteThumbnail` config option to rewrite thumbnail/preview image URLs before they render as `<img src>` (e.g. wrap them in a CSP-permitted proxy). Applies to grid cards, list rows, folder previews and the preview panel — including the fullscreen image and video poster — and is forwarded to the integrated uploader (`'url-import'`/`'connector'` contexts).
- `apiFields` config option — extra Files API fields to request on top of the default set (defaults to `['cdn_permalink']`, so the signed CDN permalink is now included on selected assets in the `onSelect`/`ap-select` payload). Set it to request additional computed fields, or `[]` to opt out.

### Fixed

- Uploader not opening when loaded via CDN script tags

## [0.2.0] - 2026-03-22

### Added

- `@scaleflex/uploader` integration with drop zone and upload panel
- Uploader uses built-in header with back button; close (X) button in modal mode
- Select-all functionality for asset selection
- Stats endpoint integration
- Tags filter with suggested and other tags from API
- Resolution info on asset cards
- Custom theming example
- GitHub Pages demo with centered layout and auth UX

### Changed

- Adopted Scaleflex design system with oklch color tokens across all components
- Polished header: search sizing, close button, box-shadow replaced with border-bottom
- Styled filter system: rounded pinned chips, accent backgrounds, icon colors, Clear filters button
- Styled selection bar: primary background, outline Confirm button
- Styled dropdowns: metadata field selector, regional settings, filter options
- Styled list view: checkbox borders, header labels, type column color
- Increased asset checkbox size to 22x22px in grid and list views
- Used Lucide icons for checkboxes, calendar, grid view, and select button
- Improved filter UX: temporary chips, search focus, "Clear all" placement, and outside click handling
- Improved sort system, filter validation, and debounced filter application
- SVG preview rendering improvements

### Fixed

- Filter popover overflowing right edge of widget
- Filter popover not closing on filters-bar empty area click
- Size filter inputs overlapping
- List view checkboxes rendering at exact 22x22px with border-box sizing
- Metadata field selector dropdown being clipped at the top
- Approval filter and filter constants
- Date presets and serialization
- Filter component UX issues

## [0.1.0] - 2026-03-10

Initial release.

### Added

- `<sfx-asset-picker>` web component built with Lit 3 and Shadow DOM
- Reactive store-based state management with `StoreController`
- Asset browsing with grid and list view modes
- Folder navigation with breadcrumb trail
- Multi-select with checkbox, marquee, and keyboard shortcuts
- Infinite scroll pagination
- Advanced filtering system (format, date, resolution, orientation, labels, approval status, tags)
- Sort by name, date, size, format, resolution
- Search with debounced input
- Asset preview with metadata display
- Collection support
- Session-based and security-template authentication
- Tailwind CSS v4 theming with `--ap-*` CSS custom properties (oklch color space)
- React wrapper with `forwardRef` support
- Vite 6 library build (ESM + CJS)
- Package exports: `.`, `./react`, `./define`
