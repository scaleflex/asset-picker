import type { ReactiveController, ReactiveControllerHost } from 'lit';

export class KeyboardController implements ReactiveController {
  private host: ReactiveControllerHost;
  private onEscape: () => void;
  private handleKeyDown: (e: KeyboardEvent) => void;

  constructor(host: ReactiveControllerHost, onEscape: () => void) {
    this.host = host;
    this.onEscape = onEscape;
    this.handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.onEscape();
      }
    };
    host.addController(this);
  }

  hostConnected(): void {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  hostDisconnected(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}
