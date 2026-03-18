import type { Page } from '../../lib/router';
import type { AssetPicker } from '../../../src/asset-picker';
import { buildConfig } from '../../lib/auth';
import { renderCodeBlock } from '../../lib/code-block';

let logEl: HTMLElement | null = null;
const listeners: Array<[string, EventListener]> = [];

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function log(event: string, data?: unknown) {
  if (!logEl) return;
  const time = new Date().toLocaleTimeString();
  const line = document.createElement('div');
  const dataStr = data ? ` <span class="log-data">${escapeHtml(JSON.stringify(data, null, 0))}</span>` : '';
  line.innerHTML = `<span class="log-time">${escapeHtml(time)}</span> <span class="log-event">${escapeHtml(event)}</span>${dataStr}`;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
}

const page: Page = {
  render() {
    return `
      <div class="page-header">
        <h1>Event handling</h1>
        <p>The asset picker fires events for selection, cancellation, and errors. Use callback props or DOM event listeners.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Event log</h2>
        <div class="event-log" id="event-log">
          <div><span class="log-time">--:--:--</span> Waiting for events...</div>
        </div>
        <button class="btn-outline btn-sm" id="clear-log">Clear log</button>
      </section>

      <section class="page-section">
        <h2>Callback props</h2>
        <div id="code-callbacks"></div>
      </section>

      <section class="page-section">
        <h2>DOM events</h2>
        <div id="code-events"></div>
      </section>
    `;
  },

  init(picker: AssetPicker) {
    logEl = document.getElementById('event-log');

    renderCodeBlock('#code-callbacks', [
      {
        label: 'JavaScript',
        lang: 'javascript',
        code: `
picker.config = {
  auth: { /* ... */ },
  onSelect: (assets) => {
    console.log('Selected assets:', assets);
  },
  onCancel: () => {
    console.log('Picker was cancelled');
  },
};`,
      },
    ]);

    renderCodeBlock('#code-events', [
      {
        label: 'JavaScript',
        lang: 'javascript',
        code: `
// DOM custom events (alternative to callback props)
picker.addEventListener('ap-select', (e) => {
  console.log('Selected:', e.detail.assets);
});

picker.addEventListener('ap-cancel', () => {
  console.log('Cancelled');
});

picker.addEventListener('ap-error', (e) => {
  console.error(e.detail.context, e.detail.error);
});`,
      },
    ]);

    // Register listeners
    const onSelect = ((e: CustomEvent) => {
      log('ap-select', {
        count: e.detail.assets.length,
        assets: e.detail.assets.map((a: { uuid: string; name: string }) => ({
          uuid: a.uuid,
          name: a.name,
        })),
      });
    }) as EventListener;

    const onCancel = (() => {
      log('ap-cancel');
    }) as EventListener;

    const onError = ((e: CustomEvent) => {
      log('ap-error', { context: e.detail.context, message: e.detail.error?.message });
    }) as EventListener;

    picker.addEventListener('ap-select', onSelect);
    picker.addEventListener('ap-cancel', onCancel);
    picker.addEventListener('ap-error', onError);
    listeners.push(['ap-select', onSelect], ['ap-cancel', onCancel], ['ap-error', onError]);

    document.getElementById('clear-log')!.addEventListener('click', () => {
      if (logEl) logEl.innerHTML = '<div><span class="log-time">--:--:--</span> Log cleared.</div>';
    });

    document.getElementById('open-btn')!.addEventListener('click', () => {
      log('open');
      picker.config = buildConfig({
        onSelect: (assets) => log('onSelect callback', { count: assets.length }),
        onCancel: () => log('onCancel callback'),
      });
      picker.open();
    });
  },

  destroy() {
    const picker = document.getElementById('picker');
    if (picker) {
      listeners.forEach(([event, fn]) => picker.removeEventListener(event, fn));
    }
    listeners.length = 0;
    logEl = null;
  },
};

export default page;
