import type { ApiClient } from './api-client';
import type { GetSettingsResponse } from '../types/api.types';

export async function getSettings(client: ApiClient): Promise<GetSettingsResponse> {
  const response = await client.request<GetSettingsResponse>('/public/settings');
  return response;
}
