/**
 * Date resolution utilities for date filter presets.
 * Converts preset strings (e.g. 'today', 'last_week') into date ranges.
 */

function formatDateOnly(d: Date): string {
  // Use en-CA locale which produces YYYY-MM-DD format
  return d.toLocaleDateString('en-CA');
}

function todayStr(): string {
  return formatDateOnly(new Date());
}

export function resolvePresetToRange(
  preset: string,
): { from: string; to: string | null } | null {
  const now = new Date();

  switch (preset) {
    case 'today': {
      return {
        from: todayStr(),
        to: null,
      };
    }

    case 'last_week': {
      const d = new Date(now);
      d.setDate(d.getDate() - 7);
      return { from: formatDateOnly(d), to: null };
    }

    case 'within_week': {
      const d = new Date(now);
      d.setDate(d.getDate() + 7);
      return { from: todayStr(), to: formatDateOnly(d) };
    }

    case 'last_month': {
      const d = new Date(now);
      d.setDate(d.getDate() - 30);
      return { from: formatDateOnly(d), to: null };
    }

    case 'within_month': {
      const d = new Date(now);
      d.setDate(d.getDate() + 30);
      return { from: todayStr(), to: formatDateOnly(d) };
    }

    case 'last_year': {
      const d = new Date(now);
      d.setDate(d.getDate() - 365);
      return { from: formatDateOnly(d), to: null };
    }

    case 'within_year': {
      const d = new Date(now);
      d.setDate(d.getDate() + 365);
      return { from: todayStr(), to: formatDateOnly(d) };
    }

    default:
      return null;
  }
}
