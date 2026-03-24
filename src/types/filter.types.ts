// ── Filter Keys ─────────────────────────────────────────────────────

export const FILTER_KEYS = {
  TYPE: 'type',
  MIME_TYPE: 'mimetype',
  METADATA: 'metadata',
  DATE: 'date',
  APPROVAL: 'approval',
  SIZE: 'size',
  LICENSE_EXPIRY: 'asset_expiration',
  TAGS: 'tags',
  FOLDERS: 'folders',
  IMAGE: 'image',
  LABELS: 'labels',
  PRODUCT_REF: 'product_ref',
  RESOLUTION: 'resolution',
  PRODUCTS: 'products',
  FACES: 'faces',
  ORIENTATION: 'orientation',
  COLOR: 'color',
} as const;

export type FilterKey = (typeof FILTER_KEYS)[keyof typeof FILTER_KEYS];

export const APPROVAL_FILTER_KEYS = {
  STATUS: 'approval_status',
  APPROVER: 'task_approver',
  REQUESTOR: 'task_requester',
  DUE_DATE: 'task_duedate',
} as const;

export type ApprovalFilterKey = (typeof APPROVAL_FILTER_KEYS)[keyof typeof APPROVAL_FILTER_KEYS];

export type AnyFilterKey = FilterKey | ApprovalFilterKey;

// ── Filter Operators ────────────────────────────────────────────────

export const FILTER_OPERATORS = {
  IS: ':',
  EQUAL: '=',
  NOT_EQUAL: '!=',
  RANGE: '..',
  IS_NOT: ':-',
  IS_EXACT: ':=',
  CONTAINS: '~',
  CONTAINS_IN_TEXT: '~~~',
  STARTS_WITH: '~^',
  GREATER_THAN: '>',
  LESS_THAN: '<',
  GREATER_THAN_OR_EQUAL: '>=',
  LESS_THAN_OR_EQUAL: '<=',
  SIMILAR_TO: '~~',
} as const;

export type FilterOperator = (typeof FILTER_OPERATORS)[keyof typeof FILTER_OPERATORS];

export const FILTER_LOGIC = {
  OR: 'OR',
  AND: 'AND',
} as const;

export type FilterLogic = (typeof FILTER_LOGIC)[keyof typeof FILTER_LOGIC];

// ── Metadata Field Types ────────────────────────────────────────────

export const METADATA_FIELD_TYPES = {
  NUMERIC: 'numeric',
  SELECT_ONE: 'select-one',
  MULTI_SELECT: 'multi-select',
  TEXT_AREA: 'textarea',
  TEXT: 'text',
  SUPERTAGS: 'tags',
  DATE: 'date',
  BOOLEAN: 'boolean',
  ATTACHMENTS_ASSETS: 'attachments-assets',
  ATTACHMENT_URI: 'attachment-uri',
  GEO_POINT: 'geopoint',
  DECIMAL2: 'decimal2',
  INTEGER_LIST: 'integer-list',
} as const;

export type MetadataFieldType = (typeof METADATA_FIELD_TYPES)[keyof typeof METADATA_FIELD_TYPES];

export const METADATA_PREFIX_BY_TYPE: Record<MetadataFieldType, string> = {
  [METADATA_FIELD_TYPES.DATE]: 'date_',
  [METADATA_FIELD_TYPES.BOOLEAN]: 'bool_',
  [METADATA_FIELD_TYPES.NUMERIC]: 'num_',
  [METADATA_FIELD_TYPES.DECIMAL2]: 'dec_',
  [METADATA_FIELD_TYPES.ATTACHMENTS_ASSETS]: 'attach_',
  [METADATA_FIELD_TYPES.ATTACHMENT_URI]: 'uri_',
  [METADATA_FIELD_TYPES.SELECT_ONE]: 'one_',
  [METADATA_FIELD_TYPES.MULTI_SELECT]: 'multi_',
  [METADATA_FIELD_TYPES.SUPERTAGS]: 'tags_',
  [METADATA_FIELD_TYPES.TEXT]: 'text_',
  [METADATA_FIELD_TYPES.TEXT_AREA]: 'area_',
  [METADATA_FIELD_TYPES.GEO_POINT]: 'geo_',
  [METADATA_FIELD_TYPES.INTEGER_LIST]: 'intlist_',
};

export const METADATA_TYPE_BY_PREFIX: Record<string, MetadataFieldType> = Object.fromEntries(
  Object.entries(METADATA_PREFIX_BY_TYPE).map(([k, v]) => [v, k as MetadataFieldType]),
);

export const METADATA_PREFIXES: string[] = Object.values(METADATA_PREFIX_BY_TYPE);

// ── Date Filter Types ───────────────────────────────────────────────

export const DATE_KINDS = {
  PRESET: 'preset',
  AFTER: 'after',
  BEFORE: 'before',
  BETWEEN: 'between',
  SPECIFIC: 'specific',
} as const;

export type DateKind = (typeof DATE_KINDS)[keyof typeof DATE_KINDS];

export const DATE_PRESETS = {
  TODAY: 'today',
  LAST_WEEK: 'last_week',
  WITHIN_WEEK: 'within_week',
  LAST_MONTH: 'last_month',
  WITHIN_MONTH: 'within_month',
  LAST_YEAR: 'last_year',
  WITHIN_YEAR: 'within_year',
  EMPTY: 'empty',
  NOT_EMPTY: 'non-empty',
} as const;

export type DatePreset = (typeof DATE_PRESETS)[keyof typeof DATE_PRESETS];

export const DATE_FIELDS = {
  CREATED: 'created',
  UPDATED: 'updated',
} as const;

export type DateField = (typeof DATE_FIELDS)[keyof typeof DATE_FIELDS];

// ── Filter Data Structures ──────────────────────────────────────────

export interface BaseFilter {
  metadataType?: MetadataFieldType;
  operator?: string;
  logic?: FilterLogic;
  values?: string[];
}

export type StringFilter = BaseFilter & {
  type: 'string';
  values: string[];
};

export type DateFilter = BaseFilter & {
  type: 'date';
  field: DateField;
  kind: DateKind | null;
  preset: DatePreset | null;
  from: string | null;
  to: string | null;
};

export type AnyFilter = StringFilter | DateFilter;
export type Filters = Partial<Record<AnyFilterKey, AnyFilter>>;
export type MetadataFilters = Record<string, AnyFilter>;

// ── Simplified Input Types (user-facing) ────────────────────────────

/** Simplified string filter input — `type` is inferred, operator/logic have defaults */
export interface StringFilterInput {
  values: string[];
  operator?: string;
  logic?: FilterLogic;
}

/** Simplified date filter input — `type` is inferred, unused fields default to null */
export interface DateFilterInput {
  field?: DateField;
  kind: DateKind;
  preset?: DatePreset | null;
  from?: string | null;
  to?: string | null;
}

export type FilterInput = StringFilterInput | DateFilterInput;

/** User-facing filters config type — accepts both simplified and full forms */
export type FiltersInput = Partial<Record<AnyFilterKey, FilterInput | AnyFilter>>;

// ── Filter State ────────────────────────────────────────────────────

export interface FiltersState {
  metadata: {
    pinned: string[];
    visible: string[];
    applied: MetadataFilters;
  };
  pinned: AnyFilterKey[];
  visible: AnyFilterKey[];
  applied: Filters;
}

// ── Filter Config ───────────────────────────────────────────────────

export interface FilterItemConfig {
  key: FilterKey;
  label: string;
  icon: string;
  type: 'string' | 'date';
}

export interface MetadataPossibleValue {
  api_value: string;
  internal_unique_value: string;
  label: string;
}

export interface MetadataModelField {
  key: string;
  label: string;
  type: MetadataFieldType;
  slug?: string;
  ckey?: string;
  possible_values?: MetadataPossibleValue[];
  /** Metadata group name from the API (e.g. "Root fields", "Product Fields", custom group names). */
  group?: string;
  /** UUID of the regional variant group this field belongs to (if regional). */
  regionalVariantsGroupUuid?: string;
}

// ── Regional Variant Types ─────────────────────────────────────────

export interface RegionalVariant {
  api_value: string;
  internal_unique_value: string;
  label: string;
}

export interface RegionalVariantGroup {
  uuid: string;
  label: string;
  variants: RegionalVariant[];
}

/** Maps group UUID → selected variant api_value */
export type RegionalFilters = Record<string, string>;

export interface FilterFileType {
  name: string;
  value: string;
  count: number;
  category?: string;
  label?: string;
}

export interface FiltersConfig {
  fileTypes: FilterFileType[];
}

// ── Special Values ──────────────────────────────────────────────────

export const EMPTY_VALUE = 'empty';
export const NOT_EMPTY_VALUE = 'non-empty';
export const SPECIFIC_VALUE = 'specific';
