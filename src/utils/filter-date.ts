/**
 * Date resolution utilities for date filter presets.
 * Converts preset strings (e.g. 'today', 'last_week') into date ranges.
 */

function startOfDayUtc(date: Date): Date {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}

function formatDateOnly(d: Date): string {
  return d.toLocaleDateString('en-CA');
}

export function resolvePresetToRange(
  preset: string,
): { from: string; to: string | null } | null {
  const now = new Date();

  switch (preset) {
    case 'today': {
      return {
        from: formatDateOnly(startOfDayUtc(now)),
        to: null,
      };
    }

    case 'last_week': {
      const weekAgo = new Date(now);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return {
        from: formatDateOnly(weekAgo),
        to: null,
      };
    }

    case 'within_week': {
      const weekLater = new Date(now);
      weekLater.setDate(weekLater.getDate() + 7);
      return {
        from: formatDateOnly(startOfDayUtc(now)),
        to: formatDateOnly(weekLater),
      };
    }

    case 'last_month': {
      const monthAgo = new Date(now);
      monthAgo.setDate(monthAgo.getDate() - 30);
      return {
        from: formatDateOnly(monthAgo),
        to: null,
      };
    }

    case 'within_month': {
      const monthLater = new Date(now);
      monthLater.setDate(monthLater.getDate() + 30);
      return {
        from: formatDateOnly(startOfDayUtc(now)),
        to: formatDateOnly(monthLater),
      };
    }

    case 'last_year': {
      const yearAgo = new Date(now);
      yearAgo.setDate(yearAgo.getDate() - 365);
      return {
        from: formatDateOnly(yearAgo),
        to: null,
      };
    }

    case 'within_year': {
      const yearLater = new Date(now);
      yearLater.setDate(yearLater.getDate() + 365);
      return {
        from: formatDateOnly(startOfDayUtc(now)),
        to: formatDateOnly(yearLater),
      };
    }

    default:
      return null;
  }
}
