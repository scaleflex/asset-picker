/**
 * Date resolution utilities for date filter presets.
 * Converts preset strings (e.g. 'today', 'last_week') into ISO timestamp ranges.
 */

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function startOfWeek(date: Date): Date {
  const d = startOfDay(date);
  const day = d.getDay();
  // Monday-based: shift Sunday (0) to 7 so Monday is always day 1
  const diff = day === 0 ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  return d;
}

function startOfMonth(date: Date): Date {
  const d = new Date(date);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
}

function startOfYear(date: Date): Date {
  const d = new Date(date);
  d.setMonth(0, 1);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function resolvePresetToRange(
  preset: string,
): { from: string; to: string } | null {
  const now = new Date();

  switch (preset) {
    case 'today': {
      return {
        from: startOfDay(now).toISOString(),
        to: now.toISOString(),
      };
    }

    case 'last_week': {
      const thisWeekStart = startOfWeek(now);
      const prevWeekStart = new Date(thisWeekStart);
      prevWeekStart.setDate(prevWeekStart.getDate() - 7);
      return {
        from: prevWeekStart.toISOString(),
        to: thisWeekStart.toISOString(),
      };
    }

    case 'within_week': {
      const weekAgo = new Date(now);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return {
        from: weekAgo.toISOString(),
        to: now.toISOString(),
      };
    }

    case 'last_month': {
      const thisMonthStart = startOfMonth(now);
      const prevMonthStart = new Date(thisMonthStart);
      prevMonthStart.setMonth(prevMonthStart.getMonth() - 1);
      return {
        from: prevMonthStart.toISOString(),
        to: thisMonthStart.toISOString(),
      };
    }

    case 'within_month': {
      const monthAgo = new Date(now);
      monthAgo.setDate(monthAgo.getDate() - 30);
      return {
        from: monthAgo.toISOString(),
        to: now.toISOString(),
      };
    }

    case 'last_year': {
      const thisYearStart = startOfYear(now);
      const prevYearStart = new Date(thisYearStart);
      prevYearStart.setFullYear(prevYearStart.getFullYear() - 1);
      return {
        from: prevYearStart.toISOString(),
        to: thisYearStart.toISOString(),
      };
    }

    case 'within_year': {
      const yearAgo = new Date(now);
      yearAgo.setDate(yearAgo.getDate() - 365);
      return {
        from: yearAgo.toISOString(),
        to: now.toISOString(),
      };
    }

    default:
      return null;
  }
}
