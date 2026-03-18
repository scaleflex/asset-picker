# Filters Specification

> Derived from `js-admin-v5/src/features/filters/`

## Overview

The filter system provides 11 filter types for narrowing down assets in the DAM. Filters follow a unified architecture with three visibility states (pinned, visible, applied), URL synchronization, and backend serialization.

### Architecture

```
User interaction
  -> Redux state (FiltersSlice)
  -> URL sync (f_/m_ prefixed query params)
  -> Backend serialization (search notation string)
  -> API request
```

### State Structure

```typescript
interface FiltersSliceState {
  // Standard filters
  pinned: FilterKey[]       // Persist across sessions (localStorage)
  visible: FilterKey[]      // Currently shown in UI (pinned + applied)
  applied: Partial<Filters> // Filters with active values

  // Metadata filters (separate namespace)
  metadata: {
    pinned: string[]
    visible: string[]
    applied: MetadataFilters  // Record<string, AnyFilter>
  }
}
```

### Filter Data Types

Every filter is either a **StringFilter** or a **DateFilter**:

```typescript
interface BaseFilter {
  metadataType?: MetadataFieldType
  operator?: string
  logic?: 'OR' | 'AND'
  values?: string[]
}

type StringFilter = BaseFilter & { type: 'string'; values: string[] }
type DateFilter = BaseFilter & {
  type: 'date'
  field: 'created' | 'updated'
  kind: 'preset' | 'after' | 'before' | 'between' | 'specific' | null
  preset: DatePreset | null
  from: string | null   // ISO date string
  to: string | null     // ISO date string
}
```

### Pin System

- **Default pinned**: `date`, `type`, `metadata`
- **Storage key**: `filters:pinned:<projectId>` (standard), `metadata:pinned:<projectId>` (metadata fields)
- Pinned filters remain visible even when cleared
- Unpinning a filter with no applied values hides it

---

## Filter Types

### 1. Date Filter

**Key**: `date`
**Type**: DateFilter
**Icon**: CalendarDays

**Fields**: `created` (Created at), `updated` (Updated at)

**Kinds & Presets**:

| Kind | UI | Values |
|------|-----|--------|
| `preset` | Quick-select buttons | `today`, `last_week`, `within_week`, `last_month`, `within_month`, `last_year`, `within_year`, `empty`, `non-empty` |
| `after` | Single date picker | Date as ISO string |
| `before` | Single date picker | Date as ISO string |
| `between` | Two date pickers | `from` + `to` as ISO strings |
| `specific` | Single date picker | Exact date |

**Date ranges displayed for standard date**:
Today, Before date, Last week, After date, Last month, Between dates, Last year

**Date ranges displayed for license expiry** (uses "within" variants):
Today, Before date, Within week, After date, Within month, Between dates, Within year, Specific date

**Backend serialization**: Custom mapper converts presets to ISO timestamp ranges. Format: `created>="2024-01-01T00:00:00.000Z" created<="2024-01-07T23:59:59.999Z"`

**URL format**: `f_date=<serialized_date_string>`

---

### 2. Format Filter (Type)

**Key**: `type`
**Type**: StringFilter
**Icon**: FileType2

**Asset type categories** (top-level checkboxes):

| Value | Label |
|-------|-------|
| `image` | Image |
| `video` | Video |
| `audio` | Audio |
| `document` | Document |
| `archive` | Archive |
| `template_fdt` | Design template |
| `font` | Fonts |
| `other` | Other |

Each category expands to show specific file types (e.g., Image -> PSD, PNG, JPG, SVG, etc.) fetched from `GET /v5/filters/config` which returns `fileTypes[]` with `{ name, value, count, category?, label? }`.

**Backend serialization**: `type:"image","video"` (values joined with `","`)

**URL format**: `f_type=:image,video`

---

### 3. Size Filter

**Key**: `size`
**Type**: StringFilter
**Icon**: Scaling

**Value format**: Range in bytes, e.g., `0..1000000`

**Operators**: Range separator `..`, accepts falsy values (for open-ended ranges like `..5000000` = up to 5MB or `1000000..` = over 1MB)

**Backend serialization**: `size:"0..5000000"`

**URL format**: `f_size=:0..5000000`

---

### 4. License Expiry Filter

**Key**: `asset_expiration`
**Type**: DateFilter
**Icon**: History

Same structure as Date filter but:
- Uses literal date format (`YYYY-MM-DD`) instead of ISO timestamps
- Considers future dates (uses "within" date presets)
- Accepts falsy values for open-ended ranges

**URL format**: `f_asset_expiration=<serialized_date_string>`

---

### 5. Tags Filter

**Key**: `tags`
**Type**: StringFilter
**Icon**: Hash

- Autocomplete search for tags
- Multi-select with limit: **10 tags max**
- Values are tag SIDs (source IDs)
- `#` symbols are stripped during backend serialization

**Backend serialization**: `tags:"tag1","tag2"`

**URL format**: `f_tags=:tag1,tag2`

---

### 6. Labels Filter

**Key**: `labels`
**Type**: StringFilter
**Icon**: Tag

- Multi-select from project labels
- Limit: **10 labels max**
- `#` symbols stripped during serialization
- Values displayed with `#` prefix in UI

**Backend serialization**: `labels:"label1","label2"`

**URL format**: `f_labels=:label1,label2`

---

### 7. Products Filter

**Key**: `product_ref`
**Type**: StringFilter
**Icon**: Box

**Operators**:

| Label | Symbol | Constant |
|-------|--------|----------|
| Is exact | `:` | IS_EXACT |
| Starts with | `~^` | STARTS_WITH |
| Contains | `~` | CONTAINS |

**Backend serialization**: Uses `=%` operator: `product_ref=%"value"`

**URL format**: `f_product_ref=:value` or `f_product_ref=~^value`

---

### 8. Image Filter

**Key**: `image`
**Type**: StringFilter
**Icon**: Image

Composite filter with 3 sub-sections stored as indexed values `[resolution, orientation, faces]`:

**Resolution** (index 0):

| Value | Label |
|-------|-------|
| `small` | Small |
| `medium` | Medium |
| `large` | Large |

**Orientation** (index 1):

| Value | Label |
|-------|-------|
| `portrait` | Portrait |
| `landscape` | Landscape |
| `square` | Square |
| `panorama` | Panorama |

**Faces** (index 2):

| Value | Label |
|-------|-------|
| `none` | None |
| `1` | 1 |
| `2` | 2 |
| `3..` | 3+ |

**Backend serialization**: Custom mapper produces notation like `resolution:"medium" orientation:"landscape" faces:"1"`

**URL format**: `f_image=:resolution|medium,orientation|landscape`

---

### 9. Color Filter

**Key**: `color`
**Type**: StringFilter
**Icon**: SwatchBook

**Preset colors** (13):
`#ffffff`, `#99a1af`, `#000000`, `#894b00`, `#e7000b`, `#ff8904`, `#fdc700`, `#9ae600`, `#008236`, `#00bcff`, `#1447e6`, `#7f22fe`, `#e60076`

Also supports custom hex color via color picker.

**Color difference (tolerance)** options:

| Label | Value |
|-------|-------|
| None (Exact) | `0` |
| Small | `1` |
| Medium | `2` |
| Large | `4` |

**Defaults**: coverage = `20`, tolerance = `1`

**Value format**: `#RRGGBB tolerance1 tolerance2 coverage`

**Backend serialization**: Key remapped to `color_search`, adds extra `color_operator:"AND"`. Format: `color_search:"#ff0000 1 1 20"`

**URL format**: `f_color=:#ff0000 1 1 20`

---

### 10. Approval Filter

**Key**: `approval`
**Type**: StringFilter
**Icon**: BadgeCheck

Composite filter with 4 sub-filters:

| Key | Label | Type |
|-----|-------|------|
| `approval_status` | Status | StringFilter |
| `task_approver` | Approver | StringFilter |
| `task_requester` | Requestor | StringFilter |
| `task_duedate` | Due date | DateFilter |

**Status/Approver/Requestor operators**:

| Label | Symbol |
|-------|--------|
| Contains | `:` |
| Does not contain | `:-` |

**Due date**: Uses same date serializer as the Date filter.

**URL format**: `f_approval_status=:value`, `f_task_approver=:value`, `f_task_duedate=<date>`

---

### 11. Metadata Filter

**Key**: `metadata`
**Type**: StringFilter (or DateFilter for date fields)
**Icon**: FileText

The most complex filter. Allows filtering on dynamic custom metadata fields defined per project.

#### Field Selection

- Fields come from the project's metadata model (index 0 = "Files" model)
- Grouped by: **Root fields** and **Product fields**
- Limit: **10 metadata fields max** visible at once
- Each field has a type-specific prefix for the filter key

#### Field Types (13 types)

| Type ID | Prefix | Filter UI | Operators |
|---------|--------|-----------|-----------|
| `text` | `text_` | Text input | Is (`:`), Contains (`~~~`) |
| `textarea` | `area_` | Text input | Is (`:`), Contains (`~~~`) |
| `select-one` | `one_` | Dropdown from `possible_values` | Is (`:`), Is not (`:-`) |
| `multi-select` | `multi_` | Multi-select from `possible_values` | Is (`:=`), Contains (`:`), Does not contain (`:-`) |
| `tags` | `tags_` | Autocomplete tag input | Is (`:=`), Contains (`:`), Does not contain (`:-`) |
| `date` | `date_` | Date picker with presets | Same as Date filter kinds |
| `boolean` | `bool_` | Checkbox options | N/A (value-based: `true`, `false`, `empty`, `non-empty`) |
| `numeric` | `num_` | Number input | Is (`:`), Greater than (`>=`), Is not (`:-`), Less than (`<=`), Between (`..`) |
| `decimal2` | `dec_` | Decimal input (2 places) | Is (`:`), Greater than (`>=`), Is not (`:-`), Less than (`<=`), Between (`..`) |
| `attachments_assets` | `attach_` | Empty/Not empty only | N/A (value-based: `empty`, `non-empty`) |
| `attachment-uri` | `uri_` | Empty/Not empty only | N/A (value-based: `empty`, `non-empty`) |
| `geopoint` | `geo_` | Lat/Lng input with optional radius | Operator appended with `~` |
| `integer-list` | `intlist_` | Autocomplete (if face_matcher slug) or Empty/Not empty | Depends on slug |

#### Special Values

All metadata field types support:
- `empty` - Field has no value
- `non-empty` - Field has any value

Select types additionally support `specific` to enter custom values.

#### Metadata Boolean Options

| Label | Value |
|-------|-------|
| Empty | `empty` |
| Not Empty | `non-empty` |
| True | `true` |
| False | `false` |

#### Geolocation Format

- Input: `latitude,longitude` or `(lat,lng)` or DMS format `42.7 N, 23.3 E`
- With radius: `lat,lng..radius`
- Validation: Latitude -90 to 90, Longitude -180 to 180
- Backend operator: appends `~` to the chosen operator

#### Number Validation

- `numeric`: Integer regex validation
- `decimal2`: Decimal with up to 2 decimal places
- Between operator (`..`): Two values joined with `..` separator, remapped to `:` operator for backend

#### URL format

Metadata filters use the `m_` prefix: `m_text_fieldname=:value`, `m_num_fieldname=>=42`

The type prefix is stripped when sending to backend, but included in URL params and internal state to identify the field type.

#### Backend Serialization

Metadata filters are serialized alongside standard filters. The prefix is stripped: `m_text_description` becomes `description:"value"` in the search notation.

---

## URL Encoding

### Prefix Convention

| Prefix | Usage |
|--------|-------|
| `f_` | Standard filters |
| `m_` | Metadata filters |

### Format

```
f_<filterKey>=<operator><values>
m_<prefix><fieldName>=<operator><values>
```

### Value Separators

- **OR logic**: Values separated by `,` (comma)
- **AND logic**: Values separated by `+` (plus); each value becomes a separate `key:operator"value"` entry in backend notation

### Parsing

URL params are parsed by extracting:
1. The prefix (`f_` or `m_`)
2. Optional filter sub-key (e.g., `created` in date filter)
3. Operator (matched against known operator list, longest-first)
4. Values (split by `,` for OR, `+` for AND)

### Examples

```
f_type=:image,video               # Format: image OR video
f_date=created>="2024-01-01"      # Date: created after
f_size=:0..5000000                # Size: 0 to 5MB
f_tags=:sunset,beach              # Tags: sunset OR beach
f_color=:#ff0000 1 1 20           # Color: red, small tolerance, 20% coverage
m_text_title=~~~photo             # Metadata: title contains "photo"
m_num_rating=>=4                  # Metadata: rating >= 4
m_bool_approved=:true             # Metadata: approved is true
m_one_category=:landscape         # Metadata: category is "landscape"
```

---

## Backend Serialization

Filters are serialized into a search notation string for the API. The serializer:

1. Iterates all applied filters
2. Looks up a serializer config per filter key (operator mapping, value separator, key remapping)
3. Produces notation entries like `key:operator"value1","value2"`
4. Merges `type` and `mimetype` filter entries with OR logic
5. Returns an array of notation strings

### Serializer Config Per Filter

| Filter Key | Backend Key | Value Separator | Special Handling |
|------------|-------------|-----------------|------------------|
| `size` | `size` | `..` | Accepts falsy values |
| `faces` | `faces` | `,` | |
| `tags` | `tags` | `","` | Strips `#` |
| `labels` | `labels` | `","` | Strips `#` |
| `date` | (custom) | `..` | Custom date mapper |
| `asset_expiration` | (custom) | `..` | Custom date mapper |
| `color` | `color_search` | `,` | Adds `color_operator:"AND"` |
| `type` | `type` | `","` | Merged with mimetype |
| `mimetype` | `mimetype` | `","` | Merged with type |
| `image` | (custom) | ` ` | Custom image mapper |
| `product_ref` | `product_ref` | `","` | Uses `=%` operator |
| `geopoint` (metadata) | field name | `","` | Appends `~` to operator |
| `numeric` (metadata) | field name | `","` | Range `..` remapped to `:` |
| `decimal2` (metadata) | field name | `","` | Range `..` remapped to `:` |

---

## Operators Reference

### All Operators

| Constant | Symbol | Description |
|----------|--------|-------------|
| IS | `:` | Contains / partial match |
| EQUAL | `=` | Exact equality |
| NOT_EQUAL | `!=` | Not equal |
| RANGE | `..` | Range (between two values) |
| IS_NOT | `:-` | Negated contains |
| IS_EXACT | `:=` | Exact match |
| CONTAINS | `~` | Text contains |
| CONTAINS_IN_TEXT | `~~~` | Full-text search |
| STARTS_WITH | `~^` | Starts with |
| GREATER_THAN | `>` | Greater than |
| LESS_THAN | `<` | Less than |
| GREATER_THAN_OR_EQUAL | `>=` | Greater than or equal |
| LESS_THAN_OR_EQUAL | `<=` | Less than or equal |
| SIMILAR_TO | `~~` | Similar to |

### Operator Sets by Context

**Text fields**: Is (`:`), Contains (`~~~`)

**Single-select fields**: Is (`:`), Is not (`:-`)

**Multi-select fields**: Is (`:=`), Contains (`:`), Does not contain (`:-`)

**Number fields**: Is (`:`), Greater than (`>=`), Is not (`:-`), Less than (`<=`), Between (`..`)

**Products**: Is exact (`:`), Starts with (`~^`)

**Approval status/approver/requestor**: Contains (`:`), Does not contain (`:-`)

---

## Constants Summary

| Constant | Value |
|----------|-------|
| `SELECTED_TAGS_LIMIT` | 10 |
| `SELECTED_LABELS_LIMIT` | 10 |
| `SELECTED_METADATA_FIELDS_LIMIT` | 10 |
| `DEFAULT_COLOR_COVERAGE` | `"20"` |
| `DEFAULT_COLOR_TOLERANCE` | `"1"` |
| `FILTER_URL_PREFIX` | `"f_"` |
| `METADATA_FILTER_URL_PREFIX` | `"m_"` |
| `DEFAULT_FILTER_OPERATOR` | `":"` (IS) |
| `METADATA_MODEL_INDEX` | `0` (Files model) |
| `DEFAULT_PINNED_FILTERS` | `['date', 'type', 'metadata']` |
| `FILTERS_PINNED_PREFIX` | `"filters:pinned:"` |
| `METADATA_PINNED_PREFIX` | `"metadata:pinned:"` |
