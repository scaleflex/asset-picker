export interface AssetInfo {
  img_type?: string;
  img_w?: number;
  img_h?: number;
  duration?: number;
  video_duration?: number;
  video_w?: number;
  video_h?: number;
  thumbnail?: string;
  preview?: string;
  video_thumbnail?: string;
  video_gif?: string;
  image_thumbnail?: string;
  main_colors?: string[];
  main_colors_hex?: string[];
  dominant_color?: string;
  dominant_color_hex?: string;
  color_space?: string;
  metadata?: Record<string, unknown>;
  playlists?: Array<{ playlists: string[]; resolution?: string }>;
}

export interface AssetMeta {
  title?: string;
  description?: string;
  alt?: string;
  [key: string]: unknown;
}

export interface AssetSize {
  bytes: number;
  pretty: string;
}

export interface Asset {
  uuid: string;
  name: string;
  extension: string;
  /** File type string, e.g. "image", "video", "application" */
  type: string;
  /** MIME type string, e.g. "image/jpeg", "video/mp4" */
  mime?: string;
  size: AssetSize;
  url?: {
    public: string;
    cdn: string;
    path: string;
    permalink?: string;
  };
  public_id?: string;
  visibility?: string;
  status?: string;
  hash?: string;
  folder_uuid?: string;
  folder?: {
    uuid: string;
    name: string;
  };
  created_at: string;
  modified_at: string;
  tags: Record<string, Array<{ label: string; sid: string }>> | Record<string, { label: string; sid: string }> | string[];
  labels: string[];
  meta: AssetMeta;
  info: AssetInfo;
  owner?: {
    uuid: string;
    name: string;
    email: string;
  };
}

export type AssetType = 'image' | 'video' | 'audio' | 'document' | 'archive' | 'font' | 'other';
