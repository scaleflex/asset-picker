export type TransformFormat = 'webp' | 'jpeg' | 'png' | 'gif';
export type TransformQuality = 'excellent' | 'good' | 'fair';
export interface TransformationParams {
    format?: TransformFormat;
    quality?: TransformQuality;
    width?: number;
    height?: number;
}
export declare const QUALITY_MAP: Record<TransformQuality, number>;
export declare const FORMAT_OPTIONS: {
    label: string;
    value: TransformFormat;
}[];
export declare const QUALITY_OPTIONS: {
    label: string;
    value: TransformQuality;
}[];
export declare const SIZE_PRESETS: {
    label: string;
    value: string;
    width?: number;
}[];
export interface TransformationResult {
    params: TransformationParams;
    url: {
        cdn: string;
        permalink_cdn?: string;
    };
}
/** CDN force_format values — animated format fallbacks */
export declare const FORMAT_TO_CDN: Record<TransformFormat, string>;
//# sourceMappingURL=transformation.types.d.ts.map