import type { AssetPickerConfig } from '../../src/types/config.types';

const STORAGE_KEY = 'ap-demo-auth';

interface AuthCreds {
  projectToken: string;
  securityTemplateKey: string;
}

const DEFAULTS: AuthCreds = {
  projectToken: 'fbmjmuoeb',
  securityTemplateKey: 'SECU_47D57B3106A841F7A1FEA951846CC5F3',
};

export function getAuth(): AuthCreds {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...DEFAULTS, ...JSON.parse(stored) };
  } catch { /* ignore */ }
  return { ...DEFAULTS };
}

export function saveAuth(creds: AuthCreds) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(creds));
}

export function buildConfig(overrides: Partial<AssetPickerConfig> = {}): AssetPickerConfig {
  const { projectToken, securityTemplateKey } = getAuth();
  return {
    auth: {
      mode: 'securityTemplate' as const,
      securityTemplateKey,
      projectToken,
    },
    ...overrides,
  };
}

export function initAuthUI() {
  const btn = document.getElementById('auth-btn')!;
  const popover = document.getElementById('auth-popover')!;
  const tokenInput = document.getElementById('auth-project-token') as HTMLInputElement;
  const keyInput = document.getElementById('auth-sec-key') as HTMLInputElement;
  const saveBtn = document.getElementById('auth-save')!;

  // Only show user-provided values (not defaults)
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const creds = JSON.parse(stored) as Partial<AuthCreds>;
      tokenInput.value = creds.projectToken ?? '';
      keyInput.value = creds.securityTemplateKey ?? '';
    }
  } catch { /* ignore */ }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.toggle('hidden');
  });

  saveBtn.addEventListener('click', () => {
    saveAuth({
      projectToken: tokenInput.value.trim() || DEFAULTS.projectToken,
      securityTemplateKey: keyInput.value.trim() || DEFAULTS.securityTemplateKey,
    });
    popover.classList.add('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target as Node) && !btn.contains(e.target as Node)) {
      popover.classList.add('hidden');
    }
  });
}
