import type { AssetPicker } from '../../src/asset-picker';

export interface Page {
  render(): string;
  init?(picker: AssetPicker): void;
  destroy?(): void;
}

type RouteEntry = { pattern: string; load: () => Promise<Page> };

const routes: RouteEntry[] = [
  { pattern: '/', load: () => import('../pages/landing').then((m) => m.default) },
  // Docs
  { pattern: '/docs/getting-started', load: () => import('../pages/docs/getting-started').then((m) => m.default) },
  { pattern: '/docs/configuration', load: () => import('../pages/docs/configuration').then((m) => m.default) },
  { pattern: '/docs/api', load: () => import('../pages/docs/api').then((m) => m.default) },
  { pattern: '/docs/theming', load: () => import('../pages/docs/theming').then((m) => m.default) },
  { pattern: '/docs/filters', load: () => import('../pages/docs/filters').then((m) => m.default) },
  { pattern: '/docs/types', load: () => import('../pages/docs/types').then((m) => m.default) },
  // Examples
  { pattern: '/examples/basic', load: () => import('../pages/examples/basic').then((m) => m.default) },
  { pattern: '/examples/single-select', load: () => import('../pages/examples/single-select').then((m) => m.default) },
  { pattern: '/examples/multi-select', load: () => import('../pages/examples/multi-select').then((m) => m.default) },
  { pattern: '/examples/theming', load: () => import('../pages/examples/theming').then((m) => m.default) },
  { pattern: '/examples/custom-theming', load: () => import('../pages/examples/custom-theming').then((m) => m.default) },
  { pattern: '/examples/default-filters', load: () => import('../pages/examples/default-filters').then((m) => m.default) },
  { pattern: '/examples/forced-filters', load: () => import('../pages/examples/forced-filters').then((m) => m.default) },

  { pattern: '/examples/hidden-tabs', load: () => import('../pages/examples/hidden-tabs').then((m) => m.default) },
  { pattern: '/examples/root-folder', load: () => import('../pages/examples/root-folder').then((m) => m.default) },
  { pattern: '/examples/events', load: () => import('../pages/examples/events').then((m) => m.default) },
  { pattern: '/examples/react-wrapper', load: () => import('../pages/examples/react-wrapper').then((m) => m.default) },
  { pattern: '/examples/inline', load: () => import('../pages/examples/inline').then((m) => m.default) },
  { pattern: '/examples/sticky-filters', load: () => import('../pages/examples/sticky-filters').then((m) => m.default) },
  { pattern: '/examples/uploader', load: () => import('../pages/examples/uploader').then((m) => m.default) },
];

let currentPage: Page | null = null;
let navId = 0;

export function initRouter(picker: AssetPicker) {
  const content = document.getElementById('content')!;
  const sidebar = document.getElementById('sidebar')!;
  const sidebarDocs = document.getElementById('sidebar-docs')!;
  const sidebarExamples = document.getElementById('sidebar-examples')!;
  const topbarNavLinks = document.querySelectorAll<HTMLElement>('.topbar-nav-link');

  async function navigate() {
    const hash = location.hash.slice(1) || '/';
    const thisNav = ++navId;

    // Destroy previous page
    if (currentPage?.destroy) currentPage.destroy();
    picker.close();

    // Find matching route
    const route = routes.find((r) => r.pattern === hash);
    if (!route) {
      location.hash = '#/';
      return;
    }

    // Determine section
    const isDocs = hash.startsWith('/docs/');
    const isExamples = hash.startsWith('/examples/');
    const hasSidebar = isDocs || isExamples;

    // Toggle layout classes
    const isHome = hash === '/';
    sidebar.classList.toggle('hidden', !hasSidebar);
    document.body.classList.toggle('has-sidebar', hasSidebar);
    document.body.classList.toggle('is-home', isHome);

    // Toggle doc vs example sidebar nav
    sidebarDocs.classList.toggle('hidden', !isDocs);
    sidebarExamples.classList.toggle('hidden', !isExamples);

    // Update active sidebar link
    sidebar.querySelectorAll('.sidebar-link').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-route') === hash);
    });

    // Update active topbar nav link
    const activeSection = isDocs ? 'docs' : isExamples ? 'examples' : 'home';
    topbarNavLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-section') === activeSection);
    });

    // Close mobile sidebar
    sidebar.classList.remove('mobile-open');

    // Scroll to top
    window.scrollTo(0, 0);

    // Load & render page
    const page = await route.load();
    if (thisNav !== navId) return; // stale navigation, discard
    currentPage = page;
    content.innerHTML = page.render();
    if (page.init) page.init(picker);
  }

  window.addEventListener('hashchange', navigate);
  navigate();
}
