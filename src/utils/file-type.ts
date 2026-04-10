import type { AssetType } from '../types/asset.types';

const IMAGE_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp', 'ico', 'tiff', 'tif', 'avif', 'heic', 'heif', 'psd', 'eps']);
const VIDEO_EXTENSIONS = new Set(['mp4', 'webm', 'ogg', 'mov', 'avi', 'mkv', 'flv', 'wmv', 'm4v']);

/** Extensions that can produce a visual thumbnail (matches portals-fe isThumbnailCloudimgSupported). */
const THUMBNAIL_SUPPORTED_EXTENSIONS = new Set([
  ...IMAGE_EXTENSIONS,
  'pdf', 'psd', 'eps', 'ai',
  'ttf', 'otf', 'woff', 'woff2', 'eot',
]);
const AUDIO_EXTENSIONS = new Set(['mp3', 'wav', 'ogg', 'flac', 'aac', 'wma', 'm4a', 'opus']);
const DOCUMENT_EXTENSIONS = new Set(['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv', 'rtf', 'odt', 'ods', 'odp', 'html']);
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

// --- File type icon utilities (v3 SVG icons) ---

const FILE_TYPES_ICON_BASE = 'https://scaleflex.cloudimg.io/v7/assets/file-types/v3/';

const FILE_TYPES_AND_ICONS: Record<string, string> = {
  _default: FILE_TYPES_ICON_BASE + 'GENERIC.svg?vh=9a518a',
  // Images
  png: FILE_TYPES_ICON_BASE + 'PNG.svg?vh=96cd9a',
  jpg: FILE_TYPES_ICON_BASE + 'JPG.svg?vh=06e819',
  jpg2: FILE_TYPES_ICON_BASE + 'JPG2.svg?vh=f0eb7f',
  jpeg: FILE_TYPES_ICON_BASE + 'JPEG.svg?vh=6a65e9',
  gif: FILE_TYPES_ICON_BASE + 'GIF.svg?vh=c3c2c3',
  bmp: FILE_TYPES_ICON_BASE + 'BMP.svg?vh=d2243a',
  webp: FILE_TYPES_ICON_BASE + 'WEBP.svg?vh=fedd74',
  svg: FILE_TYPES_ICON_BASE + 'SVG.svg?vh=a15e46',
  tiff: FILE_TYPES_ICON_BASE + 'TIFF.svg?vh=1f30c3',
  tif: FILE_TYPES_ICON_BASE + 'TIF.svg?vh=b383c9',
  heic: FILE_TYPES_ICON_BASE + 'HEIC.svg?vh=84adfe',
  avif: FILE_TYPES_ICON_BASE + 'AVIF.svg?vh=536b30',
  ico: FILE_TYPES_ICON_BASE + 'ICO.svg?vh=79063d',
  psd: FILE_TYPES_ICON_BASE + 'PSD.svg?vh=be6140',
  psb: FILE_TYPES_ICON_BASE + 'PSB.svg?vh=678646',
  ai: FILE_TYPES_ICON_BASE + 'AI.svg?vh=84b254',
  dwg: FILE_TYPES_ICON_BASE + 'DWG.svg?vh=971fb3',
  // Video
  mp4: FILE_TYPES_ICON_BASE + 'MP4.svg?vh=42f175',
  webm: FILE_TYPES_ICON_BASE + 'WEBM.svg?vh=26a84a',
  avi: FILE_TYPES_ICON_BASE + 'AVI.svg?vh=d22ba8',
  mpeg: FILE_TYPES_ICON_BASE + 'MPEG.svg?vh=ba93bb',
  ogv: FILE_TYPES_ICON_BASE + 'OGV.svg?vh=74d453',
  '3gp': FILE_TYPES_ICON_BASE + '3GP.svg?vh=f0d388',
  '3g2': FILE_TYPES_ICON_BASE + '3G2.svg?vh=04c652',
  swf: FILE_TYPES_ICON_BASE + 'SWF.svg?vh=3955e2',
  fla: FILE_TYPES_ICON_BASE + 'FLA.svg?vh=daf585',
  m3u8: FILE_TYPES_ICON_BASE + 'M3U8.svg?vh=7d5e62',
  // Audio
  mp3: FILE_TYPES_ICON_BASE + 'MP3.svg?vh=66bbef',
  wav: FILE_TYPES_ICON_BASE + 'WAV.svg?vh=d7a7d5',
  aac: FILE_TYPES_ICON_BASE + 'AAC.svg?vh=07f3f9',
  oga: FILE_TYPES_ICON_BASE + 'OGA.svg?vh=a5c622',
  opus: FILE_TYPES_ICON_BASE + 'OPUS.svg?vh=9548b1',
  weba: FILE_TYPES_ICON_BASE + 'WEBA.svg?vh=4dcf70',
  mid: FILE_TYPES_ICON_BASE + 'MID.svg?vh=3f0e29',
  midi: FILE_TYPES_ICON_BASE + 'MIDI.svg?vh=9fedec',
  cda: FILE_TYPES_ICON_BASE + 'CDA.svg?vh=85b83b',
  // Documents
  pdf: FILE_TYPES_ICON_BASE + 'PDF.svg?vh=18c5f7',
  doc: FILE_TYPES_ICON_BASE + 'DOC.svg?vh=d1b47c',
  docx: FILE_TYPES_ICON_BASE + 'DOCX.svg?vh=1eb6b0',
  txt: FILE_TYPES_ICON_BASE + 'TXT.svg?vh=307979',
  rtf: FILE_TYPES_ICON_BASE + 'RTF.svg?vh=978c5f',
  xls: FILE_TYPES_ICON_BASE + 'XLS.svg?vh=13b5f7',
  xlsx: FILE_TYPES_ICON_BASE + 'XLSX.svg?vh=79d64a',
  ppt: FILE_TYPES_ICON_BASE + 'PPT.svg?vh=4ee29b',
  pptx: FILE_TYPES_ICON_BASE + 'PPTX.svg?vh=8b1568',
  csv: FILE_TYPES_ICON_BASE + 'CSV.svg?vh=4add78',
  odt: FILE_TYPES_ICON_BASE + 'ODT.svg?vh=940781',
  ods: FILE_TYPES_ICON_BASE + 'ODS.svg?vh=9fbe9a',
  odp: FILE_TYPES_ICON_BASE + 'ODP.svg?vh=bf892d',
  dbf: FILE_TYPES_ICON_BASE + 'DBF.svg?vh=457bd4',
  vsd: FILE_TYPES_ICON_BASE + 'VSD.svg?vh=8a9ccb',
  abw: FILE_TYPES_ICON_BASE + 'ABW.svg?vh=313dc7',
  epub: FILE_TYPES_ICON_BASE + 'EPUB.svg?vh=15263d',
  azw: FILE_TYPES_ICON_BASE + 'AZW.svg?vh=a018b1',
  ics: FILE_TYPES_ICON_BASE + 'ICS.svg?vh=909f63',
  ogx: FILE_TYPES_ICON_BASE + 'OGX.svg?vh=f694d2',
  // Archives
  zip: FILE_TYPES_ICON_BASE + 'ZIP.svg?vh=84f98b',
  rar: FILE_TYPES_ICON_BASE + 'RAR.svg?vh=1d6423',
  '7z': FILE_TYPES_ICON_BASE + '7Z.svg?vh=e007e5',
  tar: FILE_TYPES_ICON_BASE + 'TAR.svg?vh=603aed',
  gz: FILE_TYPES_ICON_BASE + 'GZ.svg?vh=de13f7',
  bz: FILE_TYPES_ICON_BASE + 'BZ.svg?vh=0374ff',
  bz2: FILE_TYPES_ICON_BASE + 'BZ2.svg?vh=e14294',
  arc: FILE_TYPES_ICON_BASE + 'ARC.svg?vh=942fad',
  jar: FILE_TYPES_ICON_BASE + 'JAR.svg?vh=149796',
  mpkg: FILE_TYPES_ICON_BASE + 'MPKG.svg?vh=dea655',
  // Fonts
  ttf: FILE_TYPES_ICON_BASE + 'TTF.svg?vh=d2e2c1',
  otf: FILE_TYPES_ICON_BASE + 'OTF.svg?vh=c904fd',
  woff: FILE_TYPES_ICON_BASE + 'WOFF.svg?vh=4b8177',
  woff2: FILE_TYPES_ICON_BASE + 'WOFF2.svg?vh=b532d3',
  eot: FILE_TYPES_ICON_BASE + 'EOT.svg?vh=a54980',
  // Code / Scripts
  js: FILE_TYPES_ICON_BASE + 'JS.svg?vh=524691',
  mjs: FILE_TYPES_ICON_BASE + 'MJS.svg?vh=d57921',
  ts: FILE_TYPES_ICON_BASE + 'TS.svg?vh=9af3ae',
  css: FILE_TYPES_ICON_BASE + 'CSS.svg?vh=287863',
  html: FILE_TYPES_ICON_BASE + 'HTML.svg?vh=fa7a87',
  htm: FILE_TYPES_ICON_BASE + 'HTM.svg?vh=21323d',
  xhtml: FILE_TYPES_ICON_BASE + 'XHTML.svg?vh=e6d6a9',
  xul: FILE_TYPES_ICON_BASE + 'XUL.svg?vh=6c9c71',
  json: FILE_TYPES_ICON_BASE + 'JSON.svg?vh=104c9e',
  jsonld: FILE_TYPES_ICON_BASE + 'JSONLD.svg?vh=f30c0f',
  xml: FILE_TYPES_ICON_BASE + 'XML.svg?vh=7f7194',
  php: FILE_TYPES_ICON_BASE + 'PHP.svg?vh=503e36',
  sh: FILE_TYPES_ICON_BASE + 'SH.svg?vh=3b820e',
  csh: FILE_TYPES_ICON_BASE + 'CSH.svg?vh=08c0cc',
  // Executables / Disk images
  exe: FILE_TYPES_ICON_BASE + 'EXE.svg?vh=ccca53',
  iso: FILE_TYPES_ICON_BASE + 'ISO.svg?vh=064b8f',
  bin: FILE_TYPES_ICON_BASE + 'BIN.svg?vh=1e9618',
};

/**
 * Get the CDN-hosted file type icon URL for a given extension.
 * Falls back to GENERIC icon if extension is not mapped.
 */
export function getFileTypeIconUrl(extension: string): string {
  const ext = extension?.toLowerCase().replace('.', '') || '';
  return FILE_TYPES_AND_ICONS[ext] || FILE_TYPES_AND_ICONS._default;
}

export function getDefaultFileTypeIconUrl(): string {
  return FILE_TYPES_AND_ICONS._default;
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
 * Check if a URL is a file type icon (from Scaleflex CDN).
 */
export function isFileTypeIcon(url: string): boolean {
  return url.includes('assets/file-types');
}

/** Extensions that support transparency (shown with checkerboard background). */
const TRANSPARENT_EXTENSIONS = new Set(['png', 'svg', 'webp', 'gif', 'avif']);

export function hasTransparencySupport(extension: string): boolean {
  const ext = extension?.toLowerCase().replace('.', '') || '';
  return TRANSPARENT_EXTENSIONS.has(ext);
}

const ALTERNATIVE_DISPLAY_EXTENSIONS = new Set(['svg', 'svg+xml', 'png', 'pdf']);

/** Whether a file type should use icon-mode display (contain instead of cover). */
export function isAlternativeDisplay(fileType: string): boolean {
  return ALTERNATIVE_DISPLAY_EXTENSIONS.has(getExtensionFromType(fileType).toLowerCase());
}
