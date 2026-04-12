import { AssetType } from '../types/asset.types';
export declare function getFileType(extension: string): AssetType;
export declare function getFileTypeFromMime(typeOrMime: string): AssetType;
export declare function getFileTypeIcon(type: AssetType): string;
export declare function isPreviewable(type: AssetType): boolean;
/** Check if an extension supports thumbnail generation (image rendering via CDN/Cloudimage). */
export declare function hasThumbnailSupport(extension: string): boolean;
/**
 * Get the CDN-hosted file type icon URL for a given extension.
 * Falls back to GENERIC icon if extension is not mapped.
 */
export declare function getFileTypeIconUrl(extension: string): string;
export declare function getDefaultFileTypeIconUrl(): string;
/**
 * Detect file type from MIME type string (e.g. "image/jpeg")
 * or short API type (e.g. "image", "video").
 * Returns the extension part for icon lookup.
 */
export declare function getExtensionFromType(fileType: string): string;
/**
 * Check if a URL is a file type icon (from Scaleflex CDN).
 */
export declare function isFileTypeIcon(url: string): boolean;
export declare function hasTransparencySupport(extension: string): boolean;
/** Whether a file type should use icon-mode display (contain instead of cover). */
export declare function isAlternativeDisplay(fileType: string): boolean;
//# sourceMappingURL=file-type.d.ts.map