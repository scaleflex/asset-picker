import { Asset } from '../types/asset.types';
import { FolderPreviewImage } from '../types/folder.types';
import { TransformationParams } from '../types/transformation.types';
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
/**
 * Get the best preview URL for a folder preview image.
 * Uses assets CDN URL to bypass private permissions and support CDN params.
 */
export declare function getFolderPreviewUrl(preview: FolderPreviewImage, width: string): string;
/**
 * Build a transformed CDN URL by applying format, quality, and resize params.
 * Normalizes the URL via getFormattedPreviewUrl() first, then appends CDN query params.
 */
export declare function buildTransformCdnParams(params: TransformationParams, options?: {
    isMultiSelect?: boolean;
    isAspectLocked?: boolean;
}): Record<string, string>;
export declare function buildTransformedUrl(cdnUrl: string, params: TransformationParams, options?: {
    isMultiSelect?: boolean;
    isAspectLocked?: boolean;
}): string;
//# sourceMappingURL=thumbnail.d.ts.map