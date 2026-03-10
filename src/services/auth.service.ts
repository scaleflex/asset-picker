import type { ApiClient } from './api-client';
import type { SassKeyResponse } from '../types/api.types';

export async function exchangeSassKey(client: ApiClient): Promise<string> {
  const secKey = client.getSecurityTemplateKey();
  if (!secKey) throw new Error('Security template key is required for SASS key exchange');
  const response = await client.request<SassKeyResponse>(`/key/${secKey}`);
  return response.key;
}
