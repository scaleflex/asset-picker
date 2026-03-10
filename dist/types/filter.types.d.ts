export declare const FILTER_KEYS: {
    readonly TYPE: "type";
    readonly MIME_TYPE: "mimetype";
    readonly METADATA: "metadata";
    readonly DATE: "date";
    readonly APPROVAL: "approval";
    readonly SIZE: "size";
    readonly LICENSE_EXPIRY: "asset_expiration";
    readonly TAGS: "tags";
    readonly FOLDERS: "folders";
    readonly IMAGE: "image";
    readonly LABELS: "labels";
    readonly PRODUCT_REF: "product_ref";
    readonly RESOLUTION: "resolution";
    readonly PRODUCTS: "products";
    readonly FACES: "faces";
    readonly ORIENTATION: "orientation";
    readonly COLOR: "color";
};
export type FilterKey = (typeof FILTER_KEYS)[keyof typeof FILTER_KEYS];
export declare const APPROVAL_FILTER_KEYS: {
    readonly STATUS: "approval_status";
    readonly APPROVER: "task_approver";
    readonly REQUESTOR: "task_requester";
    readonly DUE_DATE: "task_duedate";
};
export type ApprovalFilterKey = (typeof APPROVAL_FILTER_KEYS)[keyof typeof APPROVAL_FILTER_KEYS];
export type AnyFilterKey = FilterKey | ApprovalFilterKey;
export declare const FILTER_OPERATORS: {
    readonly IS: ":";
    readonly EQUAL: "=";
    readonly NOT_EQUAL: "!=";
    readonly RANGE: "..";
    readonly IS_NOT: ":-";
    readonly IS_EXACT: ":=";
    readonly CONTAINS: "~";
    readonly CONTAINS_IN_TEXT: "~~~";
    readonly STARTS_WITH: "~^";
    readonly GREATER_THAN: ">";
    readonly LESS_THAN: "<";
    readonly GREATER_THAN_OR_EQUAL: ">=";
    readonly LESS_THAN_OR_EQUAL: "<=";
    readonly SIMILAR_TO: "~~";
};
export type FilterOperator = (typeof FILTER_OPERATORS)[keyof typeof FILTER_OPERATORS];
export declare const FILTER_LOGIC: {
    readonly OR: "OR";
    readonly AND: "AND";
};
export type FilterLogic = (typeof FILTER_LOGIC)[keyof typeof FILTER_LOGIC];
export declare const METADATA_FIELD_TYPES: {
    readonly NUMERIC: "numeric";
    readonly SELECT_ONE: "select-one";
    readonly MULTI_SELECT: "multi-select";
    readonly TEXT_AREA: "textarea";
    readonly TEXT: "text";
    readonly SUPERTAGS: "tags";
    readonly DATE: "date";
    readonly BOOLEAN: "boolean";
    readonly ATTACHMENTS_ASSETS: "attachments_assets";
    readonly ATTACHMENT_URI: "attachment-uri";
    readonly GEO_POINT: "geopoint";
    readonly DECIMAL2: "decimal2";
    readonly INTEGER_LIST: "integer-list";
};
export type MetadataFieldType = (typeof METADATA_FIELD_TYPES)[keyof typeof METADATA_FIELD_TYPES];
export declare const METADATA_PREFIX_BY_TYPE: Record<MetadataFieldType, string>;
export declare const METADATA_TYPE_BY_PREFIX: Record<string, MetadataFieldType>;
export declare const METADATA_PREFIXES: string[];
export declare const DATE_KINDS: {
    readonly PRESET: "preset";
    readonly AFTER: "after";
    readonly BEFORE: "before";
    readonly BETWEEN: "between";
    readonly SPECIFIC: "specific";
};
export type DateKind = (typeof DATE_KINDS)[keyof typeof DATE_KINDS];
export declare const DATE_PRESETS: {
    readonly TODAY: "today";
    readonly LAST_WEEK: "last_week";
    readonly WITHIN_WEEK: "within_week";
    readonly LAST_MONTH: "last_month";
    readonly WITHIN_MONTH: "within_month";
    readonly LAST_YEAR: "last_year";
    readonly WITHIN_YEAR: "within_year";
    readonly EMPTY: "empty";
    readonly NOT_EMPTY: "non-empty";
};
export type DatePreset = (typeof DATE_PRESETS)[keyof typeof DATE_PRESETS];
export declare const DATE_FIELDS: {
    readonly CREATED: "created";
    readonly UPDATED: "updated";
};
export type DateField = (typeof DATE_FIELDS)[keyof typeof DATE_FIELDS];
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
    group?: 'root' | 'product';
    /** UUID of the regional variant group this field belongs to (if regional). */
    regionalVariantsGroupUuid?: string;
}
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
export declare const EMPTY_VALUE = "empty";
export declare const NOT_EMPTY_VALUE = "non-empty";
export declare const SPECIFIC_VALUE = "specific";
//# sourceMappingURL=filter.types.d.ts.map