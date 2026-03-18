# Changelog

All notable changes to `@scaleflex/asset-picker` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Select-all functionality for asset selection
- Stats endpoint integration
- Tags filter with suggested and other tags from API
- GitHub Pages demo

### Changed

- Improved filter UX: temporary chips, search focus, "Clear all" placement, and outside click handling
- Improved sort system
- Filter validation and debounced filter application
- SVG preview rendering

### Fixed

- Filter popover overflowing right edge of widget
- Filter popover not closing on filters-bar empty area click
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
