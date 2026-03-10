import type { ApiClient } from './api-client';
import type { GetLabelsResponse } from '../types/api.types';

export async function getLabels(client: ApiClient): Promise<GetLabelsResponse> {
  const response = await client.request<GetLabelsResponse>('/labels');
  return response;
}
