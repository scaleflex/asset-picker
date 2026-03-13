/**
 * URL sync utilities for filters.
 * Encodes/decodes filter state to/from URL search params using f_ and m_ prefixes.
 */

import {
  FILTER_OPERATORS,
  FILTER_LOGIC,
  METADATA_TYPE_BY_PREFIX,
  METADATA_PREFIXES,
  type FilterLogic,
  type AnyFilter,
  type StringFilter,
  type DateFilter,
  type Filters,
  type MetadataFilters,
  type AnyFilterKey,
  type MetadataFieldType,
} from '../types/filter.types';

import {
  FILTER_URL_PREFIX,
  METADATA_FILTER_URL_PREFIX,
  DEFAULT_FILTER_OPERATOR,
} from '../components/filters/filters.constants';

// ── Operator Parsing ────────────────────────────────────────────────

// Sort operators by length descending so we match longest first (e.g. '>=' before '>')
const SORTED_OPERATORS: string[] = Object.values(FILTER_OPERATORS).sort(
  (a, b) => b.length - a.length,
);

function parseOperatorAndValues(raw: string): { operator: string; rest: string } {
  for (const op of SORTED_OPERATORS) {
    if (raw.startsWith(op)) {
      return { operator: op, rest: raw.slice(op.length) };
    }
  }
  return { operator: DEFAULT_FILTER_OPERATOR, rest: raw };
}

function parseValuesAndLogic(rest: string): { values: string[]; logic: FilterLogic } {
  // ',' separated = OR logic (higher priority), '+' separated = AND logic
  if (rest.includes(',')) {
    return {
      values: rest.split(',').map(stripQuotes).map(s => s.trim()),
      logic: FILTER_LOGIC.OR,
    };
  }
  if (rest.includes('+')) {
    return {
      values: rest.split('+').map(stripQuotes).map(s => s.trim()),
      logic: FILTER_LOGIC.AND,
    };
  }
  return {
    values: [stripQuotes(rest).trim()],
    logic: FILTER_LOGIC.OR,
  };
}

function stripQuotes(value: string): string {
  return value.replace(/^["']|["']$/g, '');
}

// ── Date Value Parsing ──────────────────────────────────────────────

function isDateFilterValue(value: string): boolean {
  // Date values use '|' separator and contain key:value segments
  return value.includes('field:') || value.includes('kind:');
}

function parseDateFilterValue(raw: string): DateFilter {
  const parts: Record<string, string> = {};
  // Format: field:created|kind:preset|preset:today (pipe-separated to avoid collision with OR logic commas)
  // Also support legacy comma-separated format for backwards compatibility
  const separator = raw.includes('|') ? '|' : ',';
  for (const segment of raw.split(separator)) {
    const colonIdx = segment.indexOf(':');
    if (colonIdx > -1) {
      parts[segment.slice(0, colonIdx)] = segment.slice(colonIdx + 1);
    }
  }

  return {
    type: 'date',
    field: (parts.field as DateFilter['field']) || 'created',
    kind: (parts.kind as DateFilter['kind']) || null,
    preset: (parts.preset as DateFilter['preset']) || null,
    from: parts.from || null,
    to: parts.to || null,
  };
}

// ── Metadata Key Parsing ────────────────────────────────────────────

function parseMetadataKey(rawKey: string): { type: MetadataFieldType; fieldName: string } | null {
  for (const prefix of METADATA_PREFIXES) {
    if (rawKey.startsWith(prefix)) {
      return {
        type: METADATA_TYPE_BY_PREFIX[prefix],
        fieldName: rawKey.slice(prefix.length),
      };
    }
  }
  return null;
}

// ── Public API ──────────────────────────────────────────────────────

export function getFiltersFromUrl(
  url: URL = new URL(window.location.href),
): { filters: Filters; metadataFields: MetadataFilters } {
  const filters: Filters = {};
  const metadataFields: MetadataFilters = {};

  url.searchParams.forEach((value, param) => {
    // Standard filters
    if (param.startsWith(FILTER_URL_PREFIX)) {
      const filterKey = param.slice(FILTER_URL_PREFIX.length) as AnyFilterKey;

      if (isDateFilterValue(value)) {
        filters[filterKey] = parseDateFilterValue(value);
      } else {
        const { operator, rest } = parseOperatorAndValues(value);
        const { values, logic } = parseValuesAndLogic(rest);

        const existing = filters[filterKey];
        if (existing && existing.type === 'string') {
          // Merge duplicate params: combine arrays and deduplicate
          const merged = [...(existing as StringFilter).values, ...values];
          (existing as StringFilter).values = [...new Set(merged)];
        } else {
          filters[filterKey] = {
            type: 'string',
            operator,
            logic,
            values,
          } as StringFilter;
        }
      }
    }

    // Metadata filters
    if (param.startsWith(METADATA_FILTER_URL_PREFIX)) {
      const rawKey = param.slice(METADATA_FILTER_URL_PREFIX.length);
      const meta = parseMetadataKey(rawKey);

      if (isDateFilterValue(value)) {
        const dateFilter = parseDateFilterValue(value);
        if (meta) {
          dateFilter.metadataType = meta.type;
        }
        metadataFields[rawKey] = dateFilter;
      } else {
        const { operator, rest } = parseOperatorAndValues(value);
        const { values, logic } = parseValuesAndLogic(rest);

        const existing = metadataFields[rawKey];
        if (existing && existing.type === 'string') {
          // Merge duplicate params: combine arrays and deduplicate
          const merged = [...(existing as StringFilter).values, ...values];
          (existing as StringFilter).values = [...new Set(merged)];
        } else {
          metadataFields[rawKey] = {
            type: 'string',
            operator,
            logic,
            values,
            metadataType: meta?.type,
          } as StringFilter;
        }
      }
    }
  });

  return { filters, metadataFields };
}

export function prepareFilterForUrl(key: string, filter: AnyFilter): string {
  if (filter.type === 'date') {
    return serializeDateToUrl(filter);
  }

  const { operator = DEFAULT_FILTER_OPERATOR, values = [], logic } = filter;
  const separator = logic === FILTER_LOGIC.AND ? '+' : ',';
  return `${operator}${values.join(separator)}`;
}

export function setFiltersToUrl(
  filters: Filters,
  metadataFilters: MetadataFilters,
  url: URL = new URL(window.location.href),
): URL {
  const result = new URL(url.toString());

  // Remove existing filter params
  const keysToDelete: string[] = [];
  result.searchParams.forEach((_, key) => {
    if (key.startsWith(FILTER_URL_PREFIX) || key.startsWith(METADATA_FILTER_URL_PREFIX)) {
      keysToDelete.push(key);
    }
  });
  keysToDelete.forEach((key) => result.searchParams.delete(key));

  // Set standard filters
  for (const [key, filter] of Object.entries(filters)) {
    if (!filter) continue;
    const paramKey = `${FILTER_URL_PREFIX}${key}`;
    result.searchParams.set(paramKey, prepareFilterForUrl(key, filter));
  }

  // Set metadata filters (keep prefix in URL key for round-trip consistency)
  for (const [key, filter] of Object.entries(metadataFilters)) {
    if (!filter) continue;
    const paramKey = `${METADATA_FILTER_URL_PREFIX}${key}`;
    result.searchParams.set(paramKey, prepareFilterForUrl(key, filter));
  }

  return result;
}

// ── Internal Helpers ────────────────────────────────────────────────

function serializeDateToUrl(filter: DateFilter): string {
  const parts: string[] = [];
  if (filter.field) parts.push(`field:${filter.field}`);
  if (filter.kind) parts.push(`kind:${filter.kind}`);
  if (filter.preset) parts.push(`preset:${filter.preset}`);
  if (filter.from) parts.push(`from:${filter.from}`);
  if (filter.to) parts.push(`to:${filter.to}`);
  // Use '|' separator to avoid collision with ',' (OR logic) in parseValuesAndLogic
  return parts.join('|');
}
