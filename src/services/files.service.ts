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

  // When AI search is active, send search text as ai_query, not in q
  const parts: string[] = [];
  if (params.search && !params.with_ai) parts.push(params.search);
  if (params.q) parts.push(params.q);
  if (parts.length > 0) apiParams.q = parts.join(' ');

  if (params.with_ai) {
    apiParams.with_ai = true;
    if (params.ai_query) apiParams.ai_query = params.ai_query;
    if (params.ai_lang) apiParams.ai_lang = params.ai_lang;
  }

  if (params.collection_uuid) apiParams.collection_uuid = params.collection_uuid;
  if (params.f64) apiParams.f64 = params.f64;

  return apiParams;
}

export async function getFiles(client: ApiClient, params: GetFilesParams): Promise<GetFilesResponse> {
  const apiParams = buildApiParams(params);
  return client.request<GetFilesResponse>('/files', apiParams);
}

export interface GetFilesStatsResponse {
  status: string;
  stats?: {
    approx_files_count?: number;
    approx_files_size?: number;
  };
  info?: {
    total_files_count?: number;
    total_files_size?: number;
  };
}

export async function getFilesStats(
  client: ApiClient,
  params: { folder?: string; q?: string; search?: string; recursive?: number; with_ai?: boolean; ai_query?: string; ai_lang?: string; collection_uuid?: string; f64?: string },
): Promise<GetFilesStatsResponse> {
  const apiParams: Record<string, unknown> = {
    recursive: params.recursive ?? 1,
  };
  if (params.folder) apiParams.folder = params.folder;
  const parts: string[] = [];
  if (params.search && !params.with_ai) parts.push(params.search);
  if (params.q) parts.push(params.q);
  if (parts.length > 0) apiParams.q = parts.join(' ');
  if (params.with_ai) {
    apiParams.with_ai = true;
    if (params.ai_query) apiParams.ai_query = params.ai_query;
    if (params.ai_lang) apiParams.ai_lang = params.ai_lang;
  }
  if (params.collection_uuid) apiParams.collection_uuid = params.collection_uuid;
  if (params.f64) apiParams.f64 = params.f64;
  return client.request<GetFilesStatsResponse>('/files/stats', apiParams);
}
