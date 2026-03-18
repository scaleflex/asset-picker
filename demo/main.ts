import '../src/define';
import type { AssetPicker } from '../src/asset-picker';
import { initRouter } from './lib/router';
import { initAuthUI } from './lib/auth';

// Auth UI
initAuthUI();

// Sidebar toggle (mobile)
const sidebarToggle = document.getElementById('sidebar-toggle')!;
const sidebar = document.getElementById('sidebar')!;
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('mobile-open');
});

// Close mobile sidebar when tapping content area
document.getElementById('content')!.addEventListener('click', () => {
  sidebar.classList.remove('mobile-open');
});

// Router
const picker = document.getElementById('picker') as AssetPicker;
initRouter(picker);
