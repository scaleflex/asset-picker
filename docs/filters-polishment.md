# Filters Polishment: asset-picker vs js-admin-react-filerobot-v5

Deep code-level comparison of filter logic between the original Filerobot v5 admin (React) and the new asset-picker (Lit Web Component).

Legend: ✅ Parity | ⚠️ Logic difference | ❌ Missing

---

## 1. Filter Serialization (API query notation)

### 1.1 Date filter serialization

| Aspect | filerobot-v5 | asset-picker | Impact |
|--------|-------------|--------------|--------|
| **Metadata date quoting** | Wraps entire expression: `"fieldName:2024-01-01"` | Quotes only value: `fieldName:"2024-01-01"` | ⚠️ Different API notation |
| **Date format** | Date-only `YYYY-MM-DD` via `toLocaleDateString('en-CA')` | Full ISO `YYYY-MM-DDTHH:mm:ss.sssZ` via `toISOString()` | ⚠️ Backend may handle both, but not identical |
| **`last_*` presets** | Sets `from` only, sends as `>` (greater-than): `created>"2024-01-01"` | Sets both `from` and `to`, sends as range: `created:"2024-01-01..2024-01-08"` | ⚠️ Different query semantics |
| **`empty`/`non-empty` presets** | Handled: sends `field:"empty"` or `field:"non-empty"` | Not handled in serializer — silently produces malformed output | ❌ Missing |

### 1.2 Date preset computation

| Preset | filerobot-v5 | asset-picker | Match? |
|--------|-------------|--------------|--------|
| `today` | `from = startOfDayUtc(now)`, `to = null` | `from = startOfDay(now, local)`, `to = now` | ⚠️ UTC vs local; `to` differs |
| `last_week` | `now - 7 days` (rolling) | Previous calendar week Mon→Mon | ⚠️ Different semantics |
| `last_month` | `now - 30 days` (rolling) | Previous calendar month boundaries | ⚠️ Different semantics |
| `last_year` | `now - 365 days` (rolling) | Previous calendar year boundaries | ⚠️ Different semantics |
| `within_week` | `from = today`, `to = now + 7 days` (FUTURE) | `from = now - 7 days`, `to = now` (PAST) | ❌ **Opposite direction** |
| `within_month` | `from = today`, `to = now + 30 days` (FUTURE) | `from = now - 30 days`, `to = now` (PAST) | ❌ **Opposite direction** |
| `within_year` | `from = today`, `to = now + 365 days` (FUTURE) | `from = now - 365 days`, `to = now` (PAST) | ❌ **Opposite direction** |

### 1.3 Type + MIME merge

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Merge** | Joins type and mimetype with ` , ` (OR): `type:"image" , mimetype:"image/png"` | No merge — separate array entries | ⚠️ |

### 1.4 Faces serialization

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Format** | Values inside single quote pair: `faces:"1,2"` | Each value quoted: `faces:"1","2"` | ⚠️ |

### 1.5 Tags hash stripping

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Regex** | `/#/g` — removes ALL `#` characters anywhere | `/^#/` — removes only leading `#` | ⚠️ Edge case: `#my#tag` → `mytag` vs `my#tag` |

### 1.6 Numeric/Decimal range operator

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Range format** | Remaps `..` to `:`, values comma-separated: `field:"10","20"` | Keeps `..` as join: `field:"10..20"` | ⚠️ Different API notation |

### 1.7 AND logic output

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Format** | Single string: `key:"val1" key:"val2"` | Array of strings: `['key:"val1"', 'key:"val2"']` | ✅ Same after join |

### 1.8 Image filter storage & serialization

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Storage** | Indexed array with pipe-separated values: `["small\|medium", "portrait", "1"]` | Object: `{ resolution: ['small','medium'], orientation: ['portrait'], faces: ['1'] }` | ⚠️ |
| **Pipe split** | Splits `\|` to produce multiple values per sub-key | No pipe logic — values are already arrays | ⚠️ Different internal representation |
| **Multi-value output** | `resolution:"small,medium"` (comma inside quotes) | `resolution:"small" resolution:"medium"` (repeated key) | ⚠️ Different API notation |

### 1.9 Filter validation

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Pre-serialization validation** | `validateFilter()` checks date ranges, hex colors, geopoints, non-empty arrays | Only `if (!filter) continue` — no content validation | ❌ Missing — invalid filters produce malformed output |

### 1.10 Encoding support

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **URL encoding** | `shouldApplyEncoding` param → `encodeURIComponent` on values | No encoding support | ⚠️ |

---

## 2. URL Sync

### 2.1 Operator parsing

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Method** | Regex with named groups, extracts optional `filterKey` from value (critical for date: `created>"2024-01-01"`) | Simple `startsWith` prefix match, no key extraction | ⚠️ |
| **Products filter** | Uses restricted operator list (`IS`, `STARTS_WITH` only) | Same operator list for all filter keys | ⚠️ |

### 2.2 AND/OR priority

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Detection** | Checks `,` first (OR wins) | Checks `+` first (AND wins) | ⚠️ Reversed priority for values containing both `,` and `+` |

### 2.3 Quote stripping

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Order** | Strip quotes from whole string, then split, then trim whitespace | Split first, then strip quotes per value, no trim | ⚠️ Edge case differences with quoted separators |

### 2.4 Date URL format

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Format** | Operator-based: `created>"2024-01-01"`, `created:"2024-01-01..2024-12-31"` | Key-value pairs: `field:created,kind:preset,preset:today` | ❌ **Incompatible formats** — URLs from one system cannot be parsed by the other |

### 2.5 Duplicate param merging

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Behavior** | Merges duplicate params for same key (combines values, deduplicates) | Last value wins (standard `set` behavior) | ⚠️ |

### 2.6 URL param method

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Method** | `searchParams.append()` — allows multiple entries per key | `searchParams.set()` — overwrites | ⚠️ |

### 2.7 Image sub-filters in URL

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Parsing** | Parses `resolution`, `orientation`, `faces` as separate URL params, merges into single `IMAGE` filter with pipe-separated indices | No image sub-filter URL parsing | ❌ Missing |

### 2.8 Filter validation before URL serialization

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Validation** | Calls `validateFilter()` before producing URL string | No validation | ❌ Missing |

### 2.9 Metadata prefix in URL

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Serialization** | Strips metadata type prefix from key | Keeps full key with prefix | ⚠️ |

---

## 3. Filter State Management

### 3.1 Visibility management

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Activate filter** | Explicit `activateFilter` reducer — adds to `visible` without setting value | No standalone activate — visibility is side effect of setting a value | ⚠️ |
| **Deactivate filter** | Explicit `deactivateFilter` — removes from `visible`, keeps `applied` value | ❌ Not implemented — remove always clears value | ❌ |
| **Metadata field toggle** | `deactivateMetadataField` only removes from `visible`, keeps `applied` | `_handleMetadataFieldToggle(visible:false)` removes from BOTH `visible` AND `applied` | ⚠️ Different behavior |

### 3.2 Unpin visibility check

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Logic** | `isFilterApplied(state.applied[key])` — semantic check (inspects values, date fields, etc.) | `!(key in filters.applied)` — key-existence check only | ⚠️ Empty-valued filter in `applied` keeps it visible on unpin |

### 3.3 Clear all

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Skip reload** | Accepts `{ skipListenerEffect: true }` to suppress data reload | Always reloads | ⚠️ |

### 3.4 Bulk operations

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **`setFilters` (bulk replace)** | ✅ Replaces all filters at once, recomputes `visible` from union of pinned + applied | ❌ Not implemented — one filter at a time only | ❌ |
| **`resetFiltersToInitial`** | ✅ Re-derives from URL + localStorage | ❌ Not implemented | ❌ |

### 3.5 Data reload

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Mechanism** | RTK listener middleware with 120ms debounce, URL sync | Direct `_loadData()` call inline, no debounce, no URL push | ⚠️ |

### 3.6 Initialization

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **From URL** | Reads applied filters from URL query params on init | No URL parsing — always starts with empty `applied` | ⚠️ |

---

## 4. Filter Components — Logic Differences

### 4.1 Type filter

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Sub-format selection** | Shows per-category sub-types (e.g., jpeg, png under image) from backend config | Top-level categories only, no sub-types | ⚠️ |
| **Search** | Search input filters types AND sub-formats, Enter toggles first match | No search in type filter | ⚠️ |

### 4.2 Date filter

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Empty/not-empty options** | Supported on date filter (for license expiry, approval due-date) | Not supported | ❌ |
| **"Between" auto-correction** | On popover close, auto-converts "between" with one date to "before"/"after" | No auto-correction | ⚠️ |
| **Calendar picker** | Full `DatePicker` component with locale, min/max constraints | Native `<input type="date">` with no constraints | ⚠️ |
| **Date picker constraints** | `maxDate` on start (capped to end or today), `minDate` on end (capped to start) | No constraints | ⚠️ |

### 4.3 Size filter

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Unit selection** | MB and GB with dropdown selector | Hardcoded MB only | ⚠️ |
| **Multiplier** | `SIZE_MULTIPLIER = 1000` (stores values in MB) | `BYTES_PER_MB = 1_000_000` (converts to bytes) | ⚠️ Different stored values |
| **Debounce** | 850ms debounce on input | Fires on `change` event (blur/enter), no debounce | ⚠️ |

### 4.4 Color filter

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Multi-color** | Up to 3 colors simultaneously | 1 color at a time | ⚠️ |
| **Custom hex picker** | Full `ColorPicker` component for arbitrary hex | Preset palette only (13 swatches) | ⚠️ |
| **Advanced mode toggle** | Toggle to show/hide tolerance+coverage controls | Always shown | ⚠️ |
| **Debounce** | 300ms debounce on changes | Immediate dispatch | ⚠️ |
| **Coverage range** | 1–100 (min 1) | 0–100 (min 0) | ⚠️ |
| **Default coverage** | 30% (tooltip mentions) | 20% | ⚠️ |
| **Hex validation** | Validates `#[0-9A-Fa-f]{6}` before applying | No hex validation | ⚠️ |

### 4.5 Tags filter

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Tag identification** | Uses tag `sid` (server ID) as value | Uses tag string (display name) as value | ⚠️ |
| **Suggested vs all** | Two groups: "Suggested tags" (folder context) + "All tags" (search) | Flat list, no grouping | ⚠️ |
| **Search debounce** | `useDeferredValue` + 200ms debounce | Synchronous on every keystroke | ⚠️ |
| **Result limit** | Capped at 50 per group | No limit | ⚠️ |
| **Limit check** | `> LIMIT` (off-by-one: allows 11) | `>= LIMIT` (correct: disables at 10) | ⚠️ v5 has a bug here |

### 4.6 Labels filter

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Label identification** | Uses label `sid` | Uses label `uuid` | ⚠️ Data model difference |
| **Asset count** | Not displayed | Shows `label.assetsCount` | ✅ AP has more info |
| **Limit check** | `> LIMIT` (off-by-one) | `>= LIMIT` (correct) | ⚠️ v5 has a bug |

### 4.7 Approval filter

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Status options** | `APPROVED`, `PENDING`, `REJECTED`, `CANCELLED` (uppercase) | `approved`, `pending`, `rejected` (lowercase, no cancelled) | ❌ Missing `CANCELLED`; ⚠️ case mismatch |
| **Status empty/not-empty** | Includes "Empty" and "Not empty" options | Not included | ❌ |
| **Status operator** | Is / Is not (`SINGLE_SELECT_OPERATOR_OPTIONS`) | Contains / Does not contain | ⚠️ Different semantics |
| **Approver/Requester input** | `ComboboxUsers` — loads company users with names, emails, photos; stores UUIDs | Plain text input, no autocomplete; stores raw text | ⚠️ |
| **Due date presets** | Uses `withinDateRanges` (`within_week`, `within_month`, `within_year`, `specific`) + empty/not-empty | Uses `DATE_RANGE_OPTIONS` (`last_week`, `last_month`, `last_year`) + empty options | ⚠️ Different presets |
| **Kanban guard** | Disables status filter when kanban forbids it | No kanban integration | ⚠️ |

### 4.8 Metadata filter

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Metadata date presets** | Uses `withinDateRanges` (`within_*`, `specific`) | Uses `DATE_RANGE_OPTIONS` (`last_*`) | ⚠️ Different preset sets |
| **Metadata autocomplete** | Backend API: `GET metadata/autocomplete?q=&meta_key=` | No metadata autocomplete endpoint | ❌ |
| **Field activation delay** | 100ms setTimeout before activating (for dropdown close animation) | Immediate | ⚠️ Minor |

### 4.9 Filter popover close behavior

| Aspect | filerobot-v5 | asset-picker |
|--------|-------------|--------------|
| **Auto-deactivation** | Closing popover of "only visible" (added but not configured) filter auto-removes it | No auto-deactivation logic | ⚠️ |

---

## 5. Constants & Types

| Aspect | filerobot-v5 | asset-picker | Impact |
|--------|-------------|--------------|--------|
| **`ATTACHMENTS_ASSETS` value** | `'attachments-assets'` (hyphen) | `'attachments_assets'` (underscore) | ⚠️ Could affect metadata prefix matching |
| **Approval status values** | Uppercase: `'APPROVED'` | Lowercase: `'approved'` | ⚠️ Must match backend expectations |
| **Products operators** | 2 options: Is exact, Starts with | 3 options: + Contains | ⚠️ AP has extra operator (may be correct) |

---

## 6. Search

| Feature | filerobot-v5 | asset-picker | Status |
|---------|-------------|--------------|--------|
| **Quick Search** (`SCM_QUICK`) | Real-time exact matches (`relevance === 1`) | Not implemented | ❌ |
| **Extended Search** (`SCM_EXTENDED`) | Broader fuzzy results, separate section | Not implemented | ❌ |
| **AI Text Search** | `with_ai: true`, `ai_query`, `ai_lang` params | Not implemented | ❌ |
| **Similarity Search** | `ai_origin_file_uuid`, sort by `relevance:desc` | Not implemented | ❌ |
| **Search Suggestions** | Suggestion filters + tags in search bar, appended to `q` param | Not implemented | ❌ |
| **Search URL persistence** | Query, tags, filters persisted in URL query params | Not implemented | ❌ |
| **Default search query** | `defaultSearchQuery` from plugin config | Not implemented | ❌ |
| **`method` API param** | Sent as `SCM_QUICK` or `SCM_EXTENDED` | Not sent | ❌ |

---

## 7. Sorting

| Feature | filerobot-v5 | asset-picker | Status |
|---------|-------------|--------------|--------|
| **Sort fields** | `relevance`, `name`, `title`, `created_at`, `color`, `updated_at`, `uploaded`, `modified_at`, `size`, `type`, `files_count_recursive`, `files_size_recursive` | `name`, `created_at`, `modified_at`, `size`, `type` | ⚠️ Missing 7 fields |
| **Per-view sort options** | Different options per view (assets, folders, collections, labels, search, folder tree) | Same 5 options for all views | ⚠️ |
| **Relevance in search** | Prepended as first sort option when searching | Not available | ❌ |
| **Sort persistence** | localStorage (`sort-by`, `sort-order`) | Not persisted — resets to config defaults on `open()` | ⚠️ |
| **Default sort** | `name:asc` | `created_at:desc` | ⚠️ Different defaults |

---

## 8. API Integration

| Feature | filerobot-v5 | asset-picker | Status |
|---------|-------------|--------------|--------|
| **Filter config endpoint** | `GET /filters?filter_by=filetype&lang=en&format=list&limit=200` | `GET /filters/config` | ⚠️ Different endpoints |
| **Tags fetch** | `GET /tags` (all tags, no filtering) | `GET /tags?q=&limit=20` (autocomplete-style) | ⚠️ Different approach |
| **Metadata autocomplete** | `GET /metadata/autocomplete?q=&meta_key=&limit=` | Not implemented | ❌ |
| **`filterKeysToDisregard`** | Selectively omits certain filter keys (e.g., labels in labels view) | Not implemented | ⚠️ |
| **`noPagination` mode** | Supported | Not implemented | ⚠️ |
| **API format param** | Dynamic | Hardcoded: `'json,regvar:api,select:internal'` | ⚠️ |
| **Limit default** | From plugin config | Hardcoded 100 | ⚠️ |

---

## Summary: All Gaps Ranked by Severity

### Critical — Logic bugs / wrong behavior

| # | Issue | Description |
|---|-------|-------------|
| 1 | **`within_*` presets reversed** | v5: future-looking (`today → today+N`). AP: past-looking (`now-N → now`). Completely opposite semantics for license expiry "within week/month/year" filters. |
| 2 | **Approval status case mismatch** | v5 sends `'APPROVED'` (uppercase), AP sends `'approved'` (lowercase). Must match backend. |
| 3 | **Date format in serialization** | v5: date-only `YYYY-MM-DD`. AP: full ISO with time. May cause range mismatches. |
| 4 | **Numeric range serialization** | v5: `field:"10","20"` (two values). AP: `field:"10..20"` (range). Different BE interpretation. |
| 5 | **Metadata date quoting** | v5: `"fieldName:value"` (whole expression quoted). AP: `fieldName:"value"`. Different BE notation. |

### High — Missing features that affect filter correctness

| # | Issue |
|---|-------|
| 6 | Missing `CANCELLED` approval status |
| 7 | Missing `empty`/`non-empty` handling in date serializer |
| 8 | Missing filter validation before serialization (invalid filters produce malformed queries) |
| 9 | `last_*` presets use calendar boundaries (AP) vs rolling days (v5) — different results |
| 10 | Image filter multi-value format: `resolution:"small,medium"` (v5) vs `resolution:"small" resolution:"medium"` (AP) |
| 11 | Type+MIME merge missing — separate entries instead of OR-joined |
| 12 | Faces serialization: `faces:"1,2"` (v5) vs `faces:"1","2"` (AP) |
| 13 | Date URL format incompatible between the two systems |
| 14 | AND/OR priority reversed in URL parsing (`+` vs `,` checked first) |
| 15 | Approval status operator: Is/Is not (v5) vs Contains/Does not contain (AP) |
| 16 | Approval approver/requester: user UUID autocomplete (v5) vs plain text (AP) |

### Medium — Missing features / UX gaps

| # | Issue |
|---|-------|
| 17 | No `deactivateFilter` (hide without clearing value) |
| 18 | No filter type sub-format selection (jpeg, png under image) |
| 19 | No date "between" auto-correction on popover close |
| 20 | Size filter: no GB unit, different multiplier (1000 vs 1000000) |
| 21 | Color filter: single color only (v5 supports 3), no custom hex picker |
| 22 | Color coverage min 0 (AP) vs min 1 (v5), default 20% vs 30% |
| 23 | Tags use display name (AP) vs server ID (v5) |
| 24 | No metadata autocomplete API |
| 25 | No debounce on filter-triggered data reload |
| 26 | Missing 7 sort fields (relevance, title, color, uploaded, etc.) |
| 27 | No per-view sort options |
| 28 | No sort persistence in localStorage |
| 29 | Quick/Extended/AI/Similarity search modes missing |
| 30 | Search suggestions missing |
| 31 | `setFilters` bulk replace missing |
| 32 | `ATTACHMENTS_ASSETS` value mismatch (hyphen vs underscore) |
| 33 | Approval due date uses `last_*` presets (AP) vs `within_*` presets (v5) |
| 34 | No URL filter initialization on open |
| 35 | No `filterKeysToDisregard` mechanism |
