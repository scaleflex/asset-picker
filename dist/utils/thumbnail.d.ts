import { Asset } from '../types/asset.types';
/**
 * Get the best thumbnail URL for an asset.
 * Priority matches portals-fe getItemIcon():
 *   video: video_thumbnail > image_thumbnail > thumbnail > url.cdn
 *   other: image_thumbnail > thumbnail > preview > url.cdn
 */
export declare function getAssetThumbnailUrl(asset: Asset): string;
/**
 * Get video thumbnail URL. Prefers video_thumbnail from API info.
 */
export declare function getVideoThumbnailUrl(asset: Asset): string;
/**
 * Get PDF thumbnail URL by transforming CDN URL to render first page as image.
 * Matches portals-fe getItemIcon() PDF path: uses CDN link + doc_page=1.
 */
export declare function getPdfPreviewUrl(asset: Asset): string;
/**
 * Add query parameters to a CDN URL.
 */
export declare function addCdnParams(url: string, params: Record<string, string>): string;
export declare function getFormattedPreviewUrl(cdnUrl: string, containerToken?: string): string;
/**
 * Get preview URL for full preview display.
 */
export declare function getPreviewUrl(cdnUrl: string): string;
//# sourceMappingURL=thumbnail.d.ts.map