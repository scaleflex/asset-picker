import '../src/define';
import type { AssetPicker } from '../src/asset-picker';
import type { AssetPickerConfig } from '../src/types/config.types';

const picker = document.getElementById('picker') as AssetPicker;
const output = document.getElementById('output')!;
const projectTokenInput = document.getElementById('projectToken') as HTMLInputElement;
const secTemplateKeyInput = document.getElementById('secTemplateKey') as HTMLInputElement;

function log(msg: string) {
  output.textContent += `\n${new Date().toLocaleTimeString()} - ${msg}`;
  output.scrollTop = output.scrollHeight;
}

function getConfig(multiSelect = true): AssetPickerConfig {
  const projectToken = projectTokenInput.value.trim();
  const secTemplateKey = secTemplateKeyInput.value.trim();

  if (!projectToken) {
    log('Error: Project Token is required');
    throw new Error('Project Token is required');
  }

  return {
    auth: secTemplateKey
      ? { mode: 'securityTemplate', securityTemplateKey: secTemplateKey, projectToken }
      : { mode: 'session', sessionToken: '', companyToken: '', projectToken },
    multiSelect,
    onSelect: (assets) => {
      log(`Selected ${assets.length} asset(s): ${assets.map((a) => a.name).join(', ')}`);
    },
    onCancel: () => {
      log('Picker cancelled');
    },
  };
}

document.getElementById('openBtn')!.addEventListener('click', () => {
  try {
    const config = getConfig(true);
    picker.config = config;
    picker.open();
    log('Picker opened (multi-select)');
  } catch { /* logged above */ }
});

document.getElementById('openSingleBtn')!.addEventListener('click', () => {
  try {
    const config = getConfig(false);
    picker.config = config;
    picker.open();
    log('Picker opened (single-select)');
  } catch { /* logged above */ }
});

picker.addEventListener('ap-select', ((e: CustomEvent) => {
  log(`ap-select event: ${JSON.stringify(e.detail.assets.map((a: { uuid: string; name: string }) => ({ uuid: a.uuid, name: a.name })))}`);
}) as EventListener);

picker.addEventListener('ap-cancel', () => {
  log('ap-cancel event fired');
});

picker.addEventListener('ap-error', ((e: CustomEvent) => {
  log(`ap-error: ${e.detail.context} - ${e.detail.error.message}`);
}) as EventListener);

log('Dev playground initialized');
