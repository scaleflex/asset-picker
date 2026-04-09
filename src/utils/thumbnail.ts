import type { Asset } from '../types/asset.types';
import type { FolderPreviewImage } from '../types/folder.types';
import type { TransformationParams } from '../types/transformation.types';
import { FORMAT_TO_CDN, QUALITY_MAP } from '../types/transformation.types';
import { getExtensionFromType, getFileTypeFromMime } from './file-type';

/**
 * Get the best thumbnail URL for an asset.
 * Priority matches portals-fe getItemIcon():
 *   video: video_thumbnail > image_thumbnail > thumbnail > url.cdn
 *   other: image_thumbnail > thumbnail > preview > url.cdn
 */
export function getAssetThumbnailUrl(asset: Asset): string {
  const info = asset.info;
  const raw = info?.video_thumbnail
    || info?.image_thumbnail
    || info?.thumbnail
    || info?.preview
    || asset.url?.cdn
    || '';
  return getFormattedPreviewUrl(raw);
}

/**
 * Get video thumbnail URL. Prefers video_thumbnail from API info.
 */
export function getVideoThumbnailUrl(asset: Asset): string {
  const info = asset.info;
  const raw = info?.video_thumbnail
    || info?.image_thumbnail
    || info?.thumbnail
    || '';
  return raw ? getFormattedPreviewUrl(raw) : '';
}

/**
 * Get PDF thumbnail URL by transforming CDN URL to render first page as image.
 * Matches portals-fe getItemIcon() PDF path: uses CDN link + doc_page=1.
 */
export function getPdfPreviewUrl(asset: Asset): string {
  let cdnUrl = getFormattedPreviewUrl(asset.url?.cdn || asset.url?.public || '');
  if (!cdnUrl) return '';
  // Strip func=proxy (portals-fe: replaceAirstoreWithScaleflex + remove func=proxy)
  cdnUrl = cdnUrl
    .replace(/([?&])func=proxy&?/, '$1')
    .replace(/[?&]$/, '');
  return addCdnParams(cdnUrl, {
    w: '200',
    force_format: 'webp,jpeg',
    doc_page: '1',
    bypass_process_proxy: '1',
  });
}

/**
 * Add query parameters to a CDN URL.
 */
export function addCdnParams(url: string, params: Record<string, string>): string {
  try {
    const u = new URL(url);
    for (const [k, v] of Object.entries(params)) {
      u.searchParams.set(k, v);
    }
    return u.toString();
  } catch {
    return url;
  }
}

/**
 * Convert a CDN URL to an assets CDN URL that supports image processing params.
 * Transforms: https://{token}.filerobot.com/{path} -> https://assets.filerobot.com/{token}/{path}
 * Matches js-admin v5 getFormattedPreviewUrl().
 */
const FILEROBOT_CDN_REGEX = /^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;

export function getFormattedPreviewUrl(cdnUrl: string, containerToken?: string): string {
  if (!cdnUrl) return '';
  // Already an assets.filerobot.com URL
  if (cdnUrl.includes('assets.filerobot.com')) return cdnUrl;

  const match = cdnUrl.match(FILEROBOT_CDN_REGEX);
  if (match) {
    const token = match[2];
    return cdnUrl.replace(FILEROBOT_CDN_REGEX, `$1assets.filerobot.com/${token}/`);
  }

  // Fallback: if we have a containerToken, try to build it from the URL
  if (containerToken) {
    try {
      const u = new URL(cdnUrl);
      return `https://assets.filerobot.com/${containerToken}${u.pathname}${u.search}`;
    } catch {
      // ignore
    }
  }

  return cdnUrl;
}

/**
 * Get preview URL for full preview display.
 */
export function getPreviewUrl(cdnUrl: string): string {
  return cdnUrl;
}

/**
 * Get the best preview URL for a folder preview image.
 * Uses assets CDN URL to bypass private permissions and support CDN params.
 */
export function getFolderPreviewUrl(preview: FolderPreviewImage, width: string): string {
  const rawUrl = preview.file_uri_cdn;
  if (!rawUrl) return '';

  let url = getFormattedPreviewUrl(rawUrl);
  const type = getFileTypeFromMime(preview.file_type);
  const dpr = String(window.devicePixelRatio || 1);

  if (type === 'video') {
    return addCdnParams(url, { w: width, dpr, force_format: 'webp,jpeg' });
  }

  if (preview.file_type === 'application/pdf' || getExtensionFromType(preview.file_type).toLowerCase() === 'pdf') {
    url = url.replace(/([?&])func=proxy&?/, '$1').replace(/[?&]$/, '');
    return addCdnParams(url, { w: width, dpr, force_format: 'webp,jpeg', doc_page: '1', bypass_process_proxy: '1' });
  }

  return addCdnParams(url, { w: width, dpr });
}

/**
 * Build a transformed CDN URL by applying format, quality, and resize params.
 * Normalizes the URL via getFormattedPreviewUrl() first, then appends CDN query params.
 */
export function buildTransformCdnParams(
  params: TransformationParams,
  options?: { isMultiSelect?: boolean; isAspectLocked?: boolean },
): Record<string, string> {
  const cdnParams: Record<string, string> = {};

  if (params.format) {
    cdnParams.force_format = FORMAT_TO_CDN[params.format];
  }

  if (params.quality && params.format !== 'png') {
    cdnParams.q = String(QUALITY_MAP[params.quality]);
  }

  if (params.width) cdnParams.w = String(params.width);
  if (params.height) cdnParams.h = String(params.height);

  if (params.width || params.height) {
    cdnParams.org_if_sml = '1';
    if (options?.isMultiSelect) {
      cdnParams.func = 'bound';
    } else if (options?.isAspectLocked === false) {
      cdnParams.func = 'cover';
    }
  }

  return cdnParams;
}

export function buildTransformedUrl(
  cdnUrl: string,
  params: TransformationParams,
  options?: { isMultiSelect?: boolean; isAspectLocked?: boolean },
): string {
  const url = getFormattedPreviewUrl(cdnUrl);
  if (!url) return cdnUrl;

  const cdnParams = buildTransformCdnParams(params, options);
  return Object.keys(cdnParams).length > 0 ? addCdnParams(url, cdnParams) : url;
}
