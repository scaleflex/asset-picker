# Filter Comparison: js-admin-v5 vs asset-picker

Deep comparison of every filter component between the two projects.
**Goal:** Make asset-picker filters look and work 100% the same as js-admin.

---

## Shared UI Patterns in js-admin (the standard)

### 1. Filter Popover Title + Clear All
Every popover has a **"Clear all"** button (ghost-primary variant, absolute top-right). Uses `FiltersClearButton` component. Disabled when no filter applied.

### 2. Condition/Operator Selection
Uses `ConditionOptions` component - a `RadioGroup` with `FiltersCheckboxGroup` items displayed in a **horizontal flex row**. Radio buttons, not dropdowns.

### 3. Content (Empty/Not Empty/Specific)
Most filters have a "Content" `RadioGroup` with:
- Empty
- Not empty
- Specific value (default)
When "Empty" or "Not empty" selected, the operator and value inputs are disabled.

### 4. FiltersCheckboxGroup
Radio button + label pair. Uses `RadioGroupItem` + `Label`. This is the standard for single-select options.

### 5. Section Labels
Uses `<Label>` (bold, cursor-default) as section headers: "Condition", "Content", "Range", "Value", etc.

### 6. Spacing
Sections separated by `space-y-6` (24px). Within sections `space-y-1` or `gap-3`.

---

## 1. DATE FILTER

### js-admin (correct)
- **Date type**: `RadioGroup` with radio buttons: "Created at", "Updated at" (vertical list)
- **Section label**: "Date type" with `FiltersPopupTitle` (includes Clear all)
- **Range**: `RadioGroup` with radio buttons in **2-column grid** (`grid grid-cols-2 gap-3`):
  - Presets: Today, Last week, Last month, Last year
  - Custom: Before date, After date, Between dates, Specific date
  - Separated into two groups: `dateRanges` and manual kinds
- **Date inputs**: Two `DatePicker` components with labels "Start date" and "End date", 2-column grid
- **Empty values**: When `isEmptyValues=true` (used by due date, license expiry, metadata date), adds radio options: Empty, Not empty

### asset-picker (current - WRONG)
- **Date type**: Segmented tab buttons (`.field-tabs`) - NOT radio buttons
- **Range**: Pill/chip buttons (`border-radius: 9999px`) in flex-wrap - NOT radio buttons, NOT grid
- **Date inputs**: Native `<input type="date">` with inline "Before"/"After" text separators - no proper labels
- **Empty values**: Separate `.empty-options` row with pill buttons

### CHANGES NEEDED
1. Replace segmented tabs with radio buttons for date type
2. Replace pill buttons with radio buttons in 2-column grid for range
3. Add section labels ("Date type", "Range")
4. Add "Start date" / "End date" labels for date inputs in 2-column grid
5. Add "Clear all" button top-right
6. Empty/Not empty should be radio buttons in the same RadioGroup as range options, separated visually

---

## 2. TYPE FILTER

### js-admin
- **Search input** at top with X clear button
- **2-column grid** of asset types
- Each asset type is a **ComboboxMultiCheckbox** (expandable) showing sub-formats (e.g., Image > PNG, JPG, etc.)
- Selecting parent selects all children
- Shows count of selected items per group
- Enter key toggles first match

### asset-picker (current)
- Simple vertical list of asset type options
- Click to toggle selection
- Checkbox-style with icon and label
- No search, no sub-format expansion, no grouping

### CHANGES NEEDED
1. Add search input at top
2. Add sub-format expansion per asset type (collapsible with child formats)
3. 2-column grid layout
4. Show selected count per group
5. Enter key support

---

## 3. TAGS FILTER

### js-admin
- **Search input** with X clear button (`FiltersXSearchButton`)
- **Command-based** UI (searchable list)
- Two sections: "Suggested tags" and "All tags" (when not searching)
- **Selected tags** displayed as flex-wrapped chips with remove buttons (when not searching)
- Max 10 tags limit with tooltip on disabled overflow
- Debounced search (200ms)
- "Find more tags by using search" message when idle
- Loading skeleton

### asset-picker (current)
- Search input
- Flat list of tag checkboxes
- Selected shown inline in list
- Max 10 limit

### CHANGES NEEDED
1. Add "Suggested tags" / "All tags" sections
2. Show selected tags as removable chips above the list (when not searching)
3. Add "Find more tags by using search" idle message
4. Add loading skeleton
5. Add disabled tooltip at max limit

---

## 4. LABELS FILTER

### js-admin
- **Search input** with X clear button
- **Command-based** UI
- Each label shows **colored TagIcon** with label color
- **Selected labels** as flex-wrapped chips with color dots (when not searching)
- Max 10 limit with tooltip
- Debounced search (200ms)

### asset-picker (current)
- Search input
- Flat checkbox list with color dots
- Selected inline

### CHANGES NEEDED
1. Show selected labels as removable chips above list (when not searching)
2. Add disabled tooltip at max limit
3. Ensure color icons match

---

## 5. SIZE FILTER

### js-admin
- **Title** "Size" with Clear all button (`FiltersPopupTitle`)
- **3-column grid** (equal width):
  1. "From" - number input with label
  2. "To" - number input with label
  3. "Unit" - dropdown/selector (MB, KB, GB)
- Debounced inputs (850ms)
- Internal storage: range in KB

### asset-picker (current)
- "Min" and "Max" number inputs
- Unit toggle buttons (MB/GB)
- Vertical layout, not 3-column grid

### CHANGES NEEDED
1. Change to 3-column grid layout
2. Rename "Min"/"Max" to "From"/"To"
3. Use dropdown for unit selector instead of toggle buttons
4. Add title with Clear all button
5. Match label styling

---

## 6. COLOR FILTER

### js-admin
- **Title** with Clear all + **Advanced mode toggle** (Switch)
- **ColorPalette** component (13 preset colors)
- **Selected colors** section:
  - Normal mode: 1-column (color square + remove button)
  - Advanced mode: 3-column grid (color, difference dropdown, coverage %)
- "Add Color" button (max 3 colors)
- **Info alert** about image processing
- Color difference options: None, Small, Medium, Large (dropdown)
- Coverage: percentage input 1-100%

### asset-picker (current)
- 7-column color palette grid
- Tolerance as button toggles (Low/Medium/High) - NOT dropdown
- Coverage as number input
- Single color only - no multi-color support
- No advanced mode toggle
- No info alert

### CHANGES NEEDED
1. Support multiple colors (up to 3) with add/remove
2. Add advanced mode toggle
3. Change tolerance from buttons to dropdown ("Color difference" with None/Small/Medium/Large)
4. In normal mode: show selected color + remove button
5. In advanced mode: 3-column grid with color, difference dropdown, coverage
6. Add info alert about image processing
7. Add "Add Color" button
8. Add title with Clear all

---

## 7. IMAGE FILTER

### js-admin
- Three sections with **checkboxes** (not toggle buttons):
  1. **Resolution**: horizontal 2-column layout (High, Low)
  2. **Orientation**: vertical 1-column with icons (Landscape, Portrait, Square)
  3. **Faces**: horizontal 2-column layout (Multiple, Single, Zero)
- **Info alert** about image processing
- `FiltersPopupTitle` with Clear all
- Uses native `Checkbox` + `Label` components

### asset-picker (current)
- Three sections with button toggles (pill-style)
- No info alert
- No clear all button

### CHANGES NEEDED
1. Replace button toggles with checkboxes + labels
2. Match layouts: 2-col for resolution, 1-col for orientation (with icons), 2-col for faces
3. Add info alert
4. Add title with Clear all

---

## 8. APPROVAL FILTER

### js-admin
Approval is a **container filter** that opens sub-filters:
- **Status**: separate popover
- **Approver**: separate popover
- **Requestor**: separate popover
- **Due Date**: separate popover

Each sub-filter is its own component:

#### 8a. Approval Status
- **Condition**: RadioGroup horizontal ("Is" / "Is not") - radio buttons
- **Empty values**: Checkbox group (Empty, Not empty) with separator below
- **Status options**: Checkbox group with colored icons (Approved, Rejected, Pending, Cancelled)
- Condition disabled when empty value selected
- Clear all button

#### 8b. Approval Approver/Requestor
- **Condition**: RadioGroup horizontal ("Contains" / "Does not contain") - radio buttons
- **Users list**: ComboboxUsers with search, profile pics, multi-select
- Clear all button

#### 8c. Approval Due Date
- Uses `DateFilterRange` component with `withinDateRanges` + `isEmptyValues=true`
- Same radio-button grid as date filter range
- Clear all button

### asset-picker (current - WRONG)
- All approval sub-filters crammed into ONE component
- Status operator: uses `<ap-dropdown>` - should be radio buttons
- Approver/Requester: plain text input - should be user combobox (but we may not have user list, so text input may be OK)
- Approver/Requester operator: uses `<ap-dropdown>` - should be radio buttons
- Due date: pill/chip preset buttons - should be radio buttons in grid
- Due date: missing date picker inputs for custom ranges

### CHANGES NEEDED
1. Replace all `<ap-dropdown>` operator selectors with radio button groups
2. Status section: add checkboxes with colored icons, add empty/not-empty options, add separator
3. Approver/Requester: operator as radio buttons ("Contains" / "Does not contain")
4. Due date: use radio button grid layout matching date filter, add empty/not-empty options
5. Add Clear all button
6. Add section labels ("Condition", "Status", etc.)

---

## 9. METADATA FILTERS

### js-admin
Each metadata type has its **own popover component**. Common patterns:
- Clear all button (always)
- "Content" RadioGroup with Empty/Not empty/Specific
- ConditionOptions (operator radio buttons)

#### 9a. Text
- ConditionOptions: "Is" / "Contains" (radio buttons, horizontal)
- Content: Empty / Not empty / Specific (radio buttons)
- Value: Textarea input (prevents Enter on short text)
- Debounced (500ms)

#### 9b. Number
- Condition: "Is" / "Is not" / "Greater than" / "Less than" / "Between" (radio buttons, 2-col grid)
- Content: Empty / Not empty / Specific
- Value: 2-column grid: "Value" (or "Min") + "Max" inputs. Max hidden for exact mode. Min disabled for less-than. Max disabled for greater-than.
- Debounced (850ms)

#### 9c. Select/Multi-select
- Search input with X
- ConditionOptions (operator radio buttons) - shown when not searching
- Selected values as removable chips - shown when not searching
- "All options" label
- Empty/Not empty checkboxes with separator
- All possible_values as checkboxes
- Max 10 limit with tooltip

#### 9d. Boolean
- "Value" title with Clear all
- RadioGroup: Empty / Not empty / True / False

#### 9e. Date
- Uses `DateFilterRange` with `isEmptyValues=true`
- Same radio button grid as main date filter

#### 9f. Geolocation
- Content: Empty / Not empty / Specific (radio buttons)
- Location: text input "Latitude, longitude" (2/3 width)
- Radius: number input "Max radius (degrees)" (1/3 width)
- Validation: lat +-90, lng +-180, radius 0-50
- Error message displayed below location input

#### 9g. Attachment
- RadioGroup: Empty / Not empty only

#### 9h. Autocomplete (tags-like)
- Search input
- Command-based multi-select checkboxes
- Similar to select but fetches dynamic tag values

### asset-picker (current)
All metadata types handled in ONE 1599-line monolithic component. Issues:
- Operators use `<select>` dropdown - should be radio buttons
- Text uses `<input>` - should be `<textarea>` for long text
- Number layout doesn't match (no proper 2-col grid with conditional hiding)
- Select/multi-select: no removable chips for selected values, no search
- Boolean: uses custom radio dots - should match pattern
- Date: uses pill buttons - should use radio button grid
- Geo: basic inputs without proper layout (2/3 + 1/3) or validation messages
- No "Content" RadioGroup (Empty/Not empty/Specific) pattern
- No Clear all buttons per field
- Empty/Not empty handled inconsistently across types

### CHANGES NEEDED
1. Replace all `<select>` operator dropdowns with radio button groups
2. Add "Content" RadioGroup (Empty/Not empty/Specific) to all applicable types
3. Text: use textarea, add Content section
4. Number: proper 2-col grid, conditional show/hide of min/max based on operator, add Content section
5. Select: add search, show selected as removable chips, add separator between empty and regular values
6. Boolean: match radio button pattern (Empty/Not empty/True/False)
7. Date: use radio button grid layout
8. Geo: 2/3 + 1/3 layout, validation error message, Content section
9. Attachment: simple Empty/Not empty radio group
10. Add Clear all button per field section

---

## Summary of Global Changes

### Pattern replacements across ALL filters:
| Current (wrong) | Target (correct) |
|---|---|
| `<ap-dropdown>` for operators | Radio button group (horizontal) |
| Pill/chip toggle buttons for options | Radio buttons in grid |
| Segmented tabs | Radio buttons |
| `<select>` elements | Radio buttons |
| No Clear all | Add Clear all button (top-right, ghost style) |
| No section labels | Add "Condition", "Content", "Range", "Value" labels |
| No Empty/Not empty/Specific pattern | Add Content RadioGroup |
| Inline selected items | Removable chips above list |

### New shared components needed:
1. **Radio button group** - reusable for condition/operator selection
2. **Clear all button** - absolute positioned top-right
3. **Section label** - consistent styled label
4. **Removable chip** - for selected tags/labels/values
5. **Info alert** - for image/color processing notice
