import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { Store } from '../store/store';
import type { AppState } from '../store/store.types';

export class StoreController implements ReactiveController {
  private host: ReactiveControllerHost;
  private store: Store<AppState>;
  private unsubscribe?: () => void;

  constructor(host: ReactiveControllerHost, store: Store<AppState>) {
    this.host = host;
    this.store = store;
    host.addController(this);
  }

  get state(): AppState {
    return this.store.getState();
  }

  setState(partial: Partial<AppState>): void {
    this.store.setState(partial);
  }

  hostConnected(): void {
    this.unsubscribe = this.store.subscribe(() => {
      this.host.requestUpdate();
    });
  }

  hostDisconnected(): void {
    this.unsubscribe?.();
  }
}
