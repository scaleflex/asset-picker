# Changelog

All notable changes to `@scaleflex/asset-picker` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
