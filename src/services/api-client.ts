import type { AuthConfig, SessionAuth, SecurityTemplateAuth } from '../types/config.types';

export class ApiClient {
  private baseUrl: string;
  private auth: AuthConfig;
  private sassKey?: string;

  constructor(auth: AuthConfig, apiBase?: string) {
    this.auth = auth;
    const token = auth.projectToken;
    this.baseUrl = apiBase || `https://api.filerobot.com/${token}/v5`;
  }

  setSassKey(key: string): void {
    this.sassKey = key;
  }

  getSecurityTemplateKey(): string | undefined {
    if (this.auth.mode === 'securityTemplate') {
      return (this.auth as SecurityTemplateAuth).securityTemplateKey;
    }
    return undefined;
  }

  async request<T>(path: string, params?: Record<string, unknown>): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            url.searchParams.set(key, value.join(','));
          } else {
            url.searchParams.set(key, String(value));
          }
        }
      });
    }

    const headers: Record<string, string> = {};

    if (this.auth.mode === 'session') {
      const session = this.auth as SessionAuth;
      headers['X-Session-Token'] = session.sessionToken;
      headers['X-Company-Token'] = session.companyToken;
      headers['X-Project-Token'] = session.projectToken;
    } else {
      const secTemplate = this.auth as SecurityTemplateAuth;
      if (this.sassKey) {
        headers['X-Filerobot-Key'] = this.sassKey;
      } else {
        headers['X-Filerobot-Key'] = secTemplate.securityTemplateKey;
      }
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(url.toString(), { headers, signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorMsg = `API error: ${response.status} ${response.statusText}`;
        try {
          const body = await response.json();
          if (body.msg) errorMsg = `API error: ${response.status} - ${body.msg}`;
        } catch {
          // ignore parse errors
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      if (data.status === 'error') {
        throw new Error(`API error: ${data.msg || 'Unknown error'}`);
      }
      return data as T;
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof DOMException && err.name === 'AbortError') {
        throw new Error('API request timed out');
      }
      throw err;
    }
  }

  async post<T>(path: string, body: unknown): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Same auth header logic as request()
    if (this.auth.mode === 'session') {
      const session = this.auth as SessionAuth;
      headers['X-Session-Token'] = session.sessionToken;
      headers['X-Company-Token'] = session.companyToken;
      headers['X-Project-Token'] = session.projectToken;
    } else {
      const secTemplate = this.auth as SecurityTemplateAuth;
      if (this.sassKey) {
        headers['X-Filerobot-Key'] = this.sassKey;
      } else {
        headers['X-Filerobot-Key'] = secTemplate.securityTemplateKey;
      }
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(url.toString(), {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorMsg = `API error: ${response.status} ${response.statusText}`;
        try {
          const errorBody = await response.json();
          if (errorBody.msg) errorMsg = `API error: ${response.status} - ${errorBody.msg}`;
        } catch {
          // ignore parse errors
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      if (data.status === 'error') {
        throw new Error(`API error: ${data.msg || 'Unknown error'}`);
      }
      return data as T;
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof DOMException && err.name === 'AbortError') {
        throw new Error('API request timed out');
      }
      throw err;
    }
  }
}
