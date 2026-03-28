export interface FolderPreviewImage {
  file_uri_cdn: string;
  file_type: string;
}

export interface Folder {
  uuid: string;
  name: string;
  path: string;
  owner?: string;
  size?: {
    total_recursive_bytes?: number;
  };
  count?: {
    files_recursive?: number;
    files_direct?: number;
  };
  created_at: string;
  modified_at?: string;
  updated_at?: string;
  visibility?: {
    in_cdn?: { actual: string; set: string };
    in_dam?: { actual: string; set: string };
  };
}
