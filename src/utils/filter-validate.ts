/**
 * Filter validation utilities.
 * Checks whether a filter has enough data to be serialized.
 */

import type { AnyFilter, DateFilter, StringFilter } from '../types/filter.types';

export function validateFilter(_key: string, filter: AnyFilter): boolean {
  if (!filter) return false;

  if (filter.type === 'date') {
    return validateDateFilter(filter);
  }

  if (filter.type === 'string') {
    return validateStringFilter(filter);
  }

  return true;
}

function validateDateFilter(filter: DateFilter): boolean {
  if (!filter.kind && !filter.preset) return false;
  if (filter.kind === 'preset' && !filter.preset) return false;
  if (filter.kind === 'between' && !filter.from && !filter.to) return false;
  if (filter.kind === 'after' && !filter.from) return false;
  if (filter.kind === 'before' && !filter.to) return false;
  if (filter.kind === 'specific' && !filter.from) return false;
  if (filter.from && filter.to && new Date(filter.from) > new Date(filter.to)) return false;
  return true;
}

function validateStringFilter(filter: StringFilter): boolean {
  if (!filter.values || !Array.isArray(filter.values)) return false;
  return filter.values.filter(Boolean).length > 0;
}
