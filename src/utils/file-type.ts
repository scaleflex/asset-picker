import type { AssetType } from '../types/asset.types';

const IMAGE_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico', 'tiff', 'tif', 'avif', 'heic', 'heif']);
const VIDEO_EXTENSIONS = new Set(['mp4', 'webm', 'ogg', 'mov', 'avi', 'mkv', 'flv', 'wmv', 'm4v']);

/** Extensions that can produce a visual thumbnail (matches portals-fe isThumbnailCloudimgSupported). */
const THUMBNAIL_SUPPORTED_EXTENSIONS = new Set([
  ...IMAGE_EXTENSIONS,
  'pdf', 'psd', 'eps', 'ai',
  'ttf', 'otf', 'woff', 'woff2', 'eot',
]);
const AUDIO_EXTENSIONS = new Set(['mp3', 'wav', 'ogg', 'flac', 'aac', 'wma', 'm4a', 'opus']);
const DOCUMENT_EXTENSIONS = new Set(['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv', 'rtf', 'odt', 'ods', 'odp']);
const ARCHIVE_EXTENSIONS = new Set(['zip', 'rar', '7z', 'tar', 'gz', 'bz2', 'xz']);
const FONT_EXTENSIONS = new Set(['ttf', 'otf', 'woff', 'woff2', 'eot']);

export function getFileType(extension: string): AssetType {
  const ext = extension.toLowerCase().replace('.', '');
  if (IMAGE_EXTENSIONS.has(ext)) return 'image';
  if (VIDEO_EXTENSIONS.has(ext)) return 'video';
  if (AUDIO_EXTENSIONS.has(ext)) return 'audio';
  if (DOCUMENT_EXTENSIONS.has(ext)) return 'document';
  if (ARCHIVE_EXTENSIONS.has(ext)) return 'archive';
  if (FONT_EXTENSIONS.has(ext)) return 'font';
  return 'other';
}

export function getFileTypeFromMime(typeOrMime: string): AssetType {
  if (!typeOrMime) return 'other';
  // Handle short type strings from API (e.g. "image", "video", "application")
  const shortMap: Record<string, AssetType> = {
    image: 'image',
    video: 'video',
    audio: 'audio',
    application: 'document',
    font: 'font',
    text: 'document',
  };
  if (shortMap[typeOrMime]) return shortMap[typeOrMime];
  // Handle full MIME types (e.g. "image/jpeg", "video/mp4")
  if (typeOrMime.startsWith('image/')) return 'image';
  if (typeOrMime.startsWith('video/')) return 'video';
  if (typeOrMime.startsWith('audio/')) return 'audio';
  if (typeOrMime.startsWith('application/pdf') || typeOrMime.startsWith('text/') || typeOrMime.startsWith('application/msword') || typeOrMime.startsWith('application/vnd.')) return 'document';
  if (typeOrMime.startsWith('application/zip') || typeOrMime.startsWith('application/x-rar') || typeOrMime.startsWith('application/x-7z') || typeOrMime.startsWith('application/gzip')) return 'archive';
  if (typeOrMime.startsWith('font/')) return 'font';
  return 'other';
}

export function getFileTypeIcon(type: AssetType): string {
  const icons: Record<AssetType, string> = {
    image: 'image',
    video: 'video',
    audio: 'audio',
    document: 'document',
    archive: 'archive',
    font: 'font',
    other: 'file',
  };
  return icons[type];
}

export function isPreviewable(type: AssetType): boolean {
  return type === 'image' || type === 'video' || type === 'audio';
}

/** Check if an extension supports thumbnail generation (image rendering via CDN/Cloudimage). */
export function hasThumbnailSupport(extension: string): boolean {
  const ext = extension?.toLowerCase().replace('.', '') || '';
  return THUMBNAIL_SUPPORTED_EXTENSIONS.has(ext);
}

// --- Portals-FE file type icon utilities ---

const FILE_TYPES_ICON_BASE = 'https://assets.filerobot.com/scaleflex/assets/file-types/v2/';

const EXTENSION_ICON_MAP: Record<string, string> = {
  png: 'PNG', jpg: 'JPG', jpeg: 'JPG', gif: 'GIF', bmp: 'BMP', webp: 'WEBP',
  svg: 'SVG', tiff: 'TIFF', tif: 'TIFF', heic: 'HEIC', avif: 'AVIF', ico: 'ICO',
  pdf: 'PDF', doc: 'DOC', docx: 'DOCX', txt: 'TXT', rtf: 'RTF',
  xls: 'XLS', xlsx: 'XLSX', ppt: 'PPT', pptx: 'PPTX', csv: 'CSV',
  odt: 'ODT', ods: 'ODS', odp: 'ODP',
  mp4: 'MP4', webm: 'WEBM', mov: 'MOV', avi: 'AVI', mkv: 'MKV', mpeg: 'MPEG',
  mp3: 'MP3', wav: 'WAV', aac: 'AAC', flac: 'FLAC', ogg: 'OGG', wma: 'WMA',
  zip: 'ZIP', rar: 'RAR', '7z': '7Z', tar: 'TAR', gz: 'GZ',
  ttf: 'TTF', otf: 'OTF', woff: 'WOFF', woff2: 'WOFF2', eot: 'EOT',
  psd: 'PSD', ai: 'AI', dwg: 'DWG',
  js: 'JS', ts: 'TS', css: 'CSS', html: 'HTML', json: 'JSON', xml: 'XML', php: 'PHP', sh: 'SH',
  exe: 'EXE', iso: 'ISO', bin: 'BIN',
};

/**
 * Get the CDN-hosted file type icon URL for a given extension.
 * Matches portals-fe FILE_TYPES_AND_ICONS mapping.
 */
export function getFileTypeIconUrl(extension: string): string {
  const ext = extension?.toLowerCase().replace('.', '') || '';
  const iconName = EXTENSION_ICON_MAP[ext];
  return `${FILE_TYPES_ICON_BASE}${iconName || 'DEFAULT'}.png`;
}

export function getDefaultFileTypeIconUrl(): string {
  return `${FILE_TYPES_ICON_BASE}DEFAULT.png`;
}

/**
 * Detect file type from MIME type string (e.g. "image/jpeg")
 * or short API type (e.g. "image", "video").
 * Returns the extension part for icon lookup.
 */
export function getExtensionFromType(fileType: string): string {
  if (!fileType) return '';
  const parts = fileType.split('/');
  return parts.length > 1 ? parts[1] : parts[0];
}

/**
 * Check if a URL is a low-quality file type icon (from Filerobot CDN).
 */
export function isFileTypeIcon(url: string): boolean {
  return url.includes('scaleflex/assets/file-types');
}

/** Extensions that support transparency (shown with checkerboard background). */
const TRANSPARENT_EXTENSIONS = new Set(['png', 'svg', 'webp', 'gif', 'avif']);

export function hasTransparencySupport(extension: string): boolean {
  const ext = extension?.toLowerCase().replace('.', '') || '';
  return TRANSPARENT_EXTENSIONS.has(ext);
}
