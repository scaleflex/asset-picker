import { Asset } from '../types/asset.types';
/** Check if the asset is an image (type starts with "image"). */
export declare function isImage(asset: Asset): boolean;
/** Check if the asset is a video (type starts with "video"). */
export declare function isVideo(asset: Asset): boolean;
/** Check if the asset is audio (type starts with "audio"). */
export declare function isAudio(asset: Asset): boolean;
/**
 * Get the CDN URL for an asset, falling back to the public URL.
 *
 * @example
 * ```ts
 * const url = getCdnUrl(asset);
 * // "https://token.filerobot.com/path/to/image.jpg"
 * ```
 */
export declare function getCdnUrl(asset: Asset): string;
/**
 * Derive a human-readable alt text from asset metadata.
 *
 * Priority: `meta.alt` > `meta.title` (string or localized record) > filename
 * (without extension).
 *
 * @param asset - The asset to extract alt text from.
 * @param lang  - Preferred language code for localized titles (e.g. "en").
 *                Falls back to the first available language.
 *
 * @example
 * ```ts
 * const alt = getAltText(asset);        // uses first available language
 * const alt = getAltText(asset, 'fr');  // prefers French title
 * ```
 */
export declare function getAltText(asset: Asset, lang?: string): string;
/**
 * Get the asset width (works for both images and videos).
 *
 * @returns Width in pixels, or `0` if unknown.
 */
export declare function getAssetWidth(asset: Asset): number;
/**
 * Get the asset height (works for both images and videos).
 *
 * @returns Height in pixels, or `0` if unknown.
 */
export declare function getAssetHeight(asset: Asset): number;
/**
 * Get the asset dimensions as `{ width, height }`.
 *
 * @example
 * ```ts
 * const { width, height } = getAssetDimensions(asset);
 * ```
 */
export declare function getAssetDimensions(asset: Asset): {
    width: number;
    height: number;
};
/**
 * Check whether the video asset has a transcoded (HLS) version available.
 */
export declare function isTranscoded(asset: Asset): boolean;
/**
 * Get the transcoded (HLS manifest) URL if available.
 *
 * @returns The HLS URL string, or `null` if not transcoded.
 */
export declare function getTranscodedUrl(asset: Asset): string | null;
/**
 * Get the best playback URL for a video asset.
 *
 * Priority: transcoded HLS URL > CDN URL > public URL.
 *
 * @example
 * ```ts
 * const videoSrc = getBestVideoUrl(asset);
 * ```
 */
export declare function getBestVideoUrl(asset: Asset): string;
//# sourceMappingURL=asset-helpers.d.ts.map