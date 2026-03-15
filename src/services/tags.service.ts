import type { ApiClient } from './api-client';
import type { GetTagsResponse } from '../types/api.types';
import type { TagWithLabel } from '../types/tag.types';

export async function getTags(client: ApiClient): Promise<TagWithLabel[]> {
  const response = await client.request<GetTagsResponse>('/tags');
  const tags = response.tags || [];

  return tags
    .map((tag) => ({
      ...tag,
      label: tag.names['en'] || Object.values(tag.names)[0] || '',
    }))
    .filter((tag) => tag.label)
    .sort((a, b) => a.label.localeCompare(b.label));
}
