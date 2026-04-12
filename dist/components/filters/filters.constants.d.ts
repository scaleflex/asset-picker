import { AnyFilterKey, FilterItemConfig, MetadataFieldType } from '../../types/filter.types';
export declare const SELECTED_TAGS_LIMIT = 10;
export declare const SELECTED_LABELS_LIMIT = 10;
export declare const SELECTED_METADATA_FIELDS_LIMIT = 10;
export declare const FILTER_URL_PREFIX = "f_";
export declare const METADATA_FILTER_URL_PREFIX = "m_";
export declare const FILTERS_PINNED_PREFIX = "filters:pinned:";
export declare const METADATA_PINNED_PREFIX = "metadata:pinned:";
export declare const DEFAULT_PINNED_FILTERS: AnyFilterKey[];
export declare const DEFAULT_FILTER_OPERATOR: ":";
export declare const DEFAULT_COLOR_COVERAGE = "20";
export declare const DEFAULT_COLOR_TOLERANCE = "1";
export declare const METADATA_MODEL_INDEX = 0;
export declare const FILTER_ITEMS: FilterItemConfig[];
export declare const METADATA_FILTER_ITEM: FilterItemConfig;
export declare const APPROVAL_FILTER_ITEM: FilterItemConfig;
export declare const ALL_FILTER_ITEMS: FilterItemConfig[];
export declare const FILTER_LABELS: Partial<Record<AnyFilterKey, string>>;
export declare const MIME_TYPES: {
    readonly IMAGE: "image";
    readonly VIDEO: "video";
    readonly AUDIO: "audio";
    readonly DOCUMENT: "document";
    readonly ARCHIVE: "archive";
    readonly DESIGN_TEMPLATE: "template_fdt";
    readonly OTHER: "other";
    readonly SCRIPT: "script";
    readonly FONTS: "font";
};
export declare const ASSET_TYPE_OPTIONS: ({
    value: "image";
    label: string;
    icon: string;
} | {
    value: "video";
    label: string;
    icon: string;
} | {
    value: "audio";
    label: string;
    icon: string;
} | {
    value: "document";
    label: string;
    icon: string;
} | {
    value: "archive";
    label: string;
    icon: string;
} | {
    value: "template_fdt";
    label: string;
    icon: string;
} | {
    value: "font";
    label: string;
    icon: string;
} | {
    value: "other";
    label: string;
    icon: string;
})[];
export declare const TYPE_EXTENSIONS: Partial<Record<string, string[]>>;
export declare const IMAGE_FILTER_KEY_INDEX: {
    readonly RESOLUTION: 0;
    readonly ORIENTATION: 1;
    readonly FACES: 2;
};
export declare const RESOLUTION_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const ORIENTATION_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const FACES_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const DATE_FIELD_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const DATE_RANGE_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const LICENSE_DATE_RANGE_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const WITHIN_DATE_RANGE_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const APPROVAL_STATUS_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const COLOR_PALETTE: string[];
export declare const COLOR_DIFFERENCE_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const TEXT_OPERATOR_OPTIONS: ({
    label: string;
    value: ":";
} | {
    label: string;
    value: "~~~";
})[];
export declare const SINGLE_SELECT_OPERATOR_OPTIONS: ({
    label: string;
    value: ":";
} | {
    label: string;
    value: ":-";
})[];
export declare const MULTI_SELECT_OPERATOR_OPTIONS: ({
    label: string;
    value: ":=";
} | {
    label: string;
    value: ":";
} | {
    label: string;
    value: ":-";
})[];
export declare const NUMBER_OPERATOR_OPTIONS: ({
    label: string;
    value: ":";
} | {
    label: string;
    value: ">=";
} | {
    label: string;
    value: ":-";
} | {
    label: string;
    value: "<=";
} | {
    label: string;
    value: "..";
})[];
export declare const PRODUCTS_OPERATOR_OPTIONS: ({
    label: string;
    value: ":";
} | {
    label: string;
    value: "~^";
} | {
    label: string;
    value: "~";
})[];
export declare const APPROVAL_OPERATOR_OPTIONS: ({
    label: string;
    value: ":=";
} | {
    label: string;
    value: ":-";
})[];
export declare const APPROVAL_PERSON_OPERATOR_OPTIONS: ({
    label: string;
    value: "~";
} | {
    label: string;
    value: ":-";
})[];
export declare const APPROVAL_STATUS_ONLY_OPTIONS: {
    value: string;
    label: string;
    icon: string;
    iconColor: string;
}[];
export declare const EMPTY_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const EMPTY_AND_SPECIFIC_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const BOOLEAN_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const METADATA_FIELD_TYPE_ICONS: Record<MetadataFieldType, string>;
export type MetadataFilterUIType = 'text' | 'number' | 'boolean' | 'select-one' | 'multi-select' | 'tags' | 'date' | 'geo' | 'attachment';
export declare const METADATA_UI_TYPE_MAP: Record<MetadataFieldType, MetadataFilterUIType>;
//# sourceMappingURL=filters.constants.d.ts.map