import {
  FILTER_KEYS,
  FILTER_OPERATORS,
  METADATA_FIELD_TYPES,
  EMPTY_VALUE,
  NOT_EMPTY_VALUE,
  SPECIFIC_VALUE,
  type FilterKey,
  type AnyFilterKey,
  type FilterItemConfig,
  type MetadataFieldType,
} from '../../types/filter.types';

// ── Limits ──────────────────────────────────────────────────────────

export const SELECTED_TAGS_LIMIT = 10;
export const SELECTED_LABELS_LIMIT = 10;
export const SELECTED_METADATA_FIELDS_LIMIT = 10;

// ── URL Prefixes ────────────────────────────────────────────────────

export const FILTER_URL_PREFIX = 'f_';
export const METADATA_FILTER_URL_PREFIX = 'm_';

// ── Pin Storage Prefixes ────────────────────────────────────────────

export const FILTERS_PINNED_PREFIX = 'filters:pinned:';
export const METADATA_PINNED_PREFIX = 'metadata:pinned:';

// ── Default Pinned Filters ──────────────────────────────────────────

export const DEFAULT_PINNED_FILTERS: AnyFilterKey[] = [
  FILTER_KEYS.DATE,
  FILTER_KEYS.TYPE,
];

export const DEFAULT_FILTER_OPERATOR = FILTER_OPERATORS.IS;

// ── Color Defaults ──────────────────────────────────────────────────

export const DEFAULT_COLOR_COVERAGE = '30';
export const DEFAULT_COLOR_TOLERANCE = '1';

// ── Metadata Model ──────────────────────────────────────────────────

export const METADATA_MODEL_INDEX = 0;

// ── Filter Items (for "Add filter" UI) ──────────────────────────────

export const FILTER_ITEMS: FilterItemConfig[] = [
  { key: FILTER_KEYS.DATE, label: 'Date', icon: 'calendar-days', type: 'date' },
  { key: FILTER_KEYS.TYPE, label: 'Format', icon: 'file-type', type: 'string' },
  { key: FILTER_KEYS.SIZE, label: 'Size', icon: 'scaling', type: 'string' },
  { key: FILTER_KEYS.LICENSE_EXPIRY, label: 'License expiry', icon: 'history', type: 'date' },
  { key: FILTER_KEYS.TAGS, label: 'Tags', icon: 'hash', type: 'string' },
  { key: FILTER_KEYS.LABELS, label: 'Labels', icon: 'tag', type: 'string' },
  { key: FILTER_KEYS.PRODUCT_REF, label: 'Products', icon: 'box', type: 'string' },
  { key: FILTER_KEYS.IMAGE, label: 'Image', icon: 'image', type: 'string' },
  { key: FILTER_KEYS.COLOR, label: 'Color', icon: 'swatch-book', type: 'string' },
];

export const METADATA_FILTER_ITEM: FilterItemConfig = {
  key: FILTER_KEYS.METADATA,
  label: 'Metadata',
  icon: 'file-text',
  type: 'string',
};

export const APPROVAL_FILTER_ITEM: FilterItemConfig = {
  key: FILTER_KEYS.APPROVAL,
  label: 'Approval',
  icon: 'badge-check',
  type: 'string',
};

export const ALL_FILTER_ITEMS: FilterItemConfig[] = [
  METADATA_FILTER_ITEM,
  ...FILTER_ITEMS,
  APPROVAL_FILTER_ITEM,
];

// ── Filter Labels ───────────────────────────────────────────────────

export const FILTER_LABELS: Partial<Record<AnyFilterKey, string>> = {
  [FILTER_KEYS.TYPE]: 'Format',
  [FILTER_KEYS.DATE]: 'Date',
  [FILTER_KEYS.SIZE]: 'Size',
  [FILTER_KEYS.LICENSE_EXPIRY]: 'License expiry',
  [FILTER_KEYS.TAGS]: 'Tags',
  [FILTER_KEYS.LABELS]: 'Labels',
  [FILTER_KEYS.PRODUCT_REF]: 'Products',
  [FILTER_KEYS.IMAGE]: 'Image',
  [FILTER_KEYS.COLOR]: 'Color',
  [FILTER_KEYS.METADATA]: 'Metadata',
  [FILTER_KEYS.APPROVAL]: 'Approval',
};

// ── File Type / Mime Categories ─────────────────────────────────────

export const MIME_TYPES = {
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  DOCUMENT: 'document',
  ARCHIVE: 'archive',
  DESIGN_TEMPLATE: 'template_fdt',
  OTHER: 'other',
  SCRIPT: 'script',
  FONTS: 'font',
} as const;

export const ASSET_TYPE_OPTIONS = [
  { value: MIME_TYPES.IMAGE, label: 'Image', icon: 'image' },
  { value: MIME_TYPES.VIDEO, label: 'Video', icon: 'clapperboard' },
  { value: MIME_TYPES.AUDIO, label: 'Audio', icon: 'music' },
  { value: MIME_TYPES.DOCUMENT, label: 'Document', icon: 'document' },
  { value: MIME_TYPES.ARCHIVE, label: 'Archive', icon: 'archive' },
  { value: MIME_TYPES.DESIGN_TEMPLATE, label: 'Design template', icon: 'layout-template' },
  { value: MIME_TYPES.FONTS, label: 'Fonts', icon: 'text' },
  { value: MIME_TYPES.OTHER, label: 'Other', icon: 'layout-grid' },
];

// ── Image Filter Options ────────────────────────────────────────────

export const IMAGE_FILTER_KEY_INDEX = {
  RESOLUTION: 0,
  ORIENTATION: 1,
  FACES: 2,
} as const;

export const RESOLUTION_OPTIONS = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

export const ORIENTATION_OPTIONS = [
  { value: 'portrait', label: 'Portrait' },
  { value: 'landscape', label: 'Landscape' },
  { value: 'square', label: 'Square' },
  { value: 'panorama', label: 'Panorama' },
];

export const FACES_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3..', label: '3+' },
];

// ── Date Filter Options ─────────────────────────────────────────────

export const DATE_FIELD_OPTIONS = [
  { value: 'created', label: 'Created at' },
  { value: 'updated', label: 'Updated at' },
];

export const DATE_RANGE_OPTIONS = [
  { value: 'today', label: 'Today' },
  { value: 'before', label: 'Before date' },
  { value: 'last_week', label: 'Last week' },
  { value: 'after', label: 'After date' },
  { value: 'last_month', label: 'Last month' },
  { value: 'between', label: 'Between dates' },
  { value: 'last_year', label: 'Last year' },
];

export const LICENSE_DATE_RANGE_OPTIONS = [
  { value: 'today', label: 'Today' },
  { value: 'before', label: 'Before date' },
  { value: 'within_week', label: 'Within week' },
  { value: 'after', label: 'After date' },
  { value: 'within_month', label: 'Within month' },
  { value: 'between', label: 'Between dates' },
  { value: 'within_year', label: 'Within year' },
  { value: 'specific', label: 'Specific date' },
];

export const WITHIN_DATE_RANGE_OPTIONS = [
  { value: 'today', label: 'Today' },
  { value: 'before', label: 'Before date' },
  { value: 'within_week', label: 'Within week' },
  { value: 'after', label: 'After date' },
  { value: 'within_month', label: 'Within month' },
  { value: 'between', label: 'Between dates' },
  { value: 'within_year', label: 'Within year' },
  { value: 'specific', label: 'Specific date' },
];

// ── Approval Filter Options ─────────────────────────────────────────

export const APPROVAL_STATUS_OPTIONS = [
  { value: 'APPROVED', label: 'Approved' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'REJECTED', label: 'Rejected' },
  { value: 'CANCELLED', label: 'Cancelled' },
  { value: EMPTY_VALUE, label: 'Empty' },
  { value: NOT_EMPTY_VALUE, label: 'Not empty' },
];

// ── Color Palette ───────────────────────────────────────────────────

export const COLOR_PALETTE = [
  '#ffffff', '#99a1af', '#000000', '#894b00',
  '#e7000b', '#ff8904', '#fdc700', '#9ae600',
  '#008236', '#00bcff', '#1447e6', '#7f22fe',
  '#e60076',
];

export const COLOR_DIFFERENCE_OPTIONS = [
  { label: 'None (Exact)', value: '0' },
  { label: 'Small', value: '1' },
  { label: 'Medium', value: '2' },
  { label: 'Large', value: '4' },
];

// ── Operator Options (UI labels → operator symbols) ─────────────────

export const TEXT_OPERATOR_OPTIONS = [
  { label: 'Is', value: FILTER_OPERATORS.IS },
  { label: 'Contains', value: FILTER_OPERATORS.CONTAINS_IN_TEXT },
];

export const SINGLE_SELECT_OPERATOR_OPTIONS = [
  { label: 'Is', value: FILTER_OPERATORS.IS },
  { label: 'Is not', value: FILTER_OPERATORS.IS_NOT },
];

export const MULTI_SELECT_OPERATOR_OPTIONS = [
  { label: 'Is', value: FILTER_OPERATORS.IS_EXACT },
  { label: 'Contains', value: FILTER_OPERATORS.IS },
  { label: 'Does not contain', value: FILTER_OPERATORS.IS_NOT },
];

export const NUMBER_OPERATOR_OPTIONS = [
  { label: 'Is', value: FILTER_OPERATORS.IS },
  { label: 'Greater than', value: FILTER_OPERATORS.GREATER_THAN_OR_EQUAL },
  { label: 'Is not', value: FILTER_OPERATORS.IS_NOT },
  { label: 'Less than', value: FILTER_OPERATORS.LESS_THAN_OR_EQUAL },
  { label: 'Between', value: FILTER_OPERATORS.RANGE },
];

export const PRODUCTS_OPERATOR_OPTIONS = [
  { label: 'Is exact', value: FILTER_OPERATORS.IS },
  { label: 'Starts with', value: FILTER_OPERATORS.STARTS_WITH },
  { label: 'Contains', value: FILTER_OPERATORS.CONTAINS },
];

export const APPROVAL_OPERATOR_OPTIONS = [
  { label: 'Is', value: FILTER_OPERATORS.IS_EXACT },
  { label: 'Is not', value: FILTER_OPERATORS.IS_NOT },
];

export const APPROVAL_PERSON_OPERATOR_OPTIONS = [
  { label: 'Contains', value: FILTER_OPERATORS.CONTAINS },
  { label: 'Does not contain', value: FILTER_OPERATORS.IS_NOT },
];

export const APPROVAL_STATUS_ONLY_OPTIONS = [
  { value: 'APPROVED', label: 'Approved' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'REJECTED', label: 'Rejected' },
  { value: 'CANCELLED', label: 'Cancelled' },
];

// ── Empty / Special Values ──────────────────────────────────────────

export const EMPTY_OPTIONS = [
  { label: 'Empty', value: EMPTY_VALUE },
  { label: 'Not empty', value: NOT_EMPTY_VALUE },
];

export const EMPTY_AND_SPECIFIC_OPTIONS = [
  ...EMPTY_OPTIONS,
  { label: 'Specific', value: SPECIFIC_VALUE },
];

export const BOOLEAN_OPTIONS = [
  { label: 'Empty', value: EMPTY_VALUE },
  { label: 'Not empty', value: NOT_EMPTY_VALUE },
  { label: 'True', value: 'true' },
  { label: 'False', value: 'false' },
];

// ── Metadata Field Type → UI Component Mapping ─────────────────────

export type MetadataFilterUIType =
  | 'text'
  | 'number'
  | 'boolean'
  | 'select-one'
  | 'multi-select'
  | 'tags'
  | 'date'
  | 'geo'
  | 'attachment';

export const METADATA_UI_TYPE_MAP: Record<MetadataFieldType, MetadataFilterUIType> = {
  [METADATA_FIELD_TYPES.TEXT]: 'text',
  [METADATA_FIELD_TYPES.TEXT_AREA]: 'text',
  [METADATA_FIELD_TYPES.NUMERIC]: 'number',
  [METADATA_FIELD_TYPES.DECIMAL2]: 'number',
  [METADATA_FIELD_TYPES.BOOLEAN]: 'boolean',
  [METADATA_FIELD_TYPES.SELECT_ONE]: 'select-one',
  [METADATA_FIELD_TYPES.MULTI_SELECT]: 'multi-select',
  [METADATA_FIELD_TYPES.SUPERTAGS]: 'tags',
  [METADATA_FIELD_TYPES.DATE]: 'date',
  [METADATA_FIELD_TYPES.GEO_POINT]: 'geo',
  [METADATA_FIELD_TYPES.ATTACHMENTS_ASSETS]: 'attachment',
  [METADATA_FIELD_TYPES.ATTACHMENT_URI]: 'attachment',
  [METADATA_FIELD_TYPES.INTEGER_LIST]: 'attachment',
};
