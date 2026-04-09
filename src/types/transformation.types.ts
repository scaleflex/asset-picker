export type TransformFormat = 'webp' | 'jpeg' | 'png' | 'gif';
export type TransformQuality = 'excellent' | 'good' | 'fair';

export interface TransformationParams {
  format?: TransformFormat;
  quality?: TransformQuality;
  width?: number;
  height?: number;
}

export const QUALITY_MAP: Record<TransformQuality, number> = {
  excellent: 90,
  good: 75,
  fair: 60,
};

export const FORMAT_OPTIONS: { label: string; value: TransformFormat }[] = [
  { label: 'WEBP', value: 'webp' },
  { label: 'JPEG', value: 'jpeg' },
  { label: 'PNG', value: 'png' },
  { label: 'GIF', value: 'gif' },
];

export const QUALITY_OPTIONS: { label: string; value: TransformQuality }[] = [
  { label: 'Excellent', value: 'excellent' },
  { label: 'Good', value: 'good' },
  { label: 'Fair', value: 'fair' },
];

export const SIZE_PRESETS: { label: string; value: string; width?: number }[] = [
  { label: 'Original', value: 'original' },
  { label: 'Full HD', value: 'full_hd', width: 1920 },
  { label: 'Large', value: 'large', width: 1200 },
  { label: 'Medium', value: 'medium', width: 600 },
  { label: 'Small', value: 'small', width: 300 },
];

export interface TransformationResult {
  params: TransformationParams;
  url: {
    cdn: string;
    permalink_cdn?: string;
  };
}

/** CDN force_format values — animated format fallbacks */
export const FORMAT_TO_CDN: Record<TransformFormat, string> = {
  webp: 'awebp,webp',
  jpeg: 'jpeg',
  png: 'png',
  gif: 'agif,gif',
};
