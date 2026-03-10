import type { ApiClient } from './api-client';
import type { GetFilesParams, GetFilesResponse } from '../types/api.types';

function buildApiParams(params: GetFilesParams): Record<string, unknown> {
  const apiParams: Record<string, unknown> = {
    offset: params.offset ?? 0,
    limit: params.limit ?? 100,
    format: 'json,regvar:api,select:internal',
    preview: 2301,
    recursive: params.recursive ?? 1,
  };

  const sortField = params.sort_by ?? 'created_at';
  const sortDir = params.sort_direction ?? 'desc';
  const sortMap: Record<string, string> = {
    created_at: 'created_at',
    modified_at: 'modified_at',
    name: 'name',
    size: 'size',
    type: 'type',
  };
  apiParams.sort = `${sortMap[sortField] || sortField}:${sortDir}`;

  if (params.folder) apiParams.folder = params.folder;

  // Combine search query and filter notation into q param
  const parts: string[] = [];
  if (params.search) parts.push(params.search);
  if (params.q) parts.push(params.q);
  if (parts.length > 0) apiParams.q = parts.join(' ');

  return apiParams;
}

export async function getFiles(client: ApiClient, params: GetFilesParams): Promise<GetFilesResponse> {
  const apiParams = buildApiParams(params);
  return client.request<GetFilesResponse>('/files', apiParams);
}
