import { AssetType } from '../types/asset.types';
export declare function getFileType(extension: string): AssetType;
export declare function getFileTypeFromMime(typeOrMime: string): AssetType;
export declare function getFileTypeIcon(type: AssetType): string;
export declare function isPreviewable(type: AssetType): boolean;
/** Check if an extension supports thumbnail generation (image rendering via CDN/Cloudimage). */
export declare function hasThumbnailSupport(extension: string): boolean;
/**
 * Get the CDN-hosted file type icon URL for a given extension.
 * Matches portals-fe FILE_TYPES_AND_ICONS mapping.
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
 * Check if a URL is a low-quality file type icon (from Filerobot CDN).
 */
export declare function isFileTypeIcon(url: string): boolean;
export declare function hasTransparencySupport(extension: string): boolean;
//# sourceMappingURL=file-type.d.ts.map