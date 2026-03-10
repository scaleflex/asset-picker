import type { Asset } from './asset.types';
import type { Folder } from './folder.types';
import type { Label } from './label.types';
import type { SortBy, SortDirection } from './config.types';

export interface ApiBaseResponse {
  status: string;
  msg: string;
}

export interface GetFilesParams {
  folder?: string;
  offset?: number;
  limit?: number;
  sort_by?: SortBy;
  sort_direction?: SortDirection;
  search?: string;       // text search query
  q?: string;            // search notation string (serialized filters + search combined)
  recursive?: number;
}

export interface GetFilesResponse extends ApiBaseResponse {
  files: Asset[];
  folders: Folder[];
  base?: {
    count?: {
      files_direct?: number;
      files_recursive?: number;
    };
  };
  limit: number;
  offset: number;
}

export interface GetFoldersResponse extends ApiBaseResponse {
  folders: Folder[];
  total: number;
}

export interface GetLabelsResponse extends ApiBaseResponse {
  labels: Label[];
}

export interface GetSettingsResponse extends ApiBaseResponse {
  settings: {
    project_branding?: {
      brandColor?: string;
    };
    [key: string]: unknown;
  };
}

export interface SassKeyResponse extends ApiBaseResponse {
  key: string;
}

export interface GetFiltersResponse extends ApiBaseResponse {
  filters: {
    key: string;
    values: string[];
  }[];
}

export interface GetMetadataFieldsResponse extends ApiBaseResponse {
  metadata_model: {
    fields: Array<{
      key: string;
      label: string;
      type: string;
      slug?: string;
      possible_values?: string[];
    }>;
  }[];
}

export interface GetFilterConfigResponse extends ApiBaseResponse {
  file_types: Array<{
    name: string;
    value: string;
    count: number;
    category?: string;
    label?: string;
  }>;
}
