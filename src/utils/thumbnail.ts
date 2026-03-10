import type { Asset } from '../types/asset.types';

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
  // Strip func=proxy (portals-fe: replaceAirstoreWithFilerobot + remove func=proxy)
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
 * Convert a CDN URL to an assets.filerobot.com URL that supports image processing params.
 * Transforms: https://{token}.filerobot.com/{path} -> https://assets.filerobot.com/{token}/{path}
 * Matches js-admin-react-filerobot-v5 getFormattedPreviewUrl().
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
