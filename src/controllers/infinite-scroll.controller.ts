import type { ReactiveController, ReactiveControllerHost } from 'lit';

export class InfiniteScrollController implements ReactiveController {
  private host: ReactiveControllerHost;
  private observer?: IntersectionObserver;
  private sentinel?: Element;
  private onLoadMore: () => void;

  constructor(host: ReactiveControllerHost, onLoadMore: () => void) {
    this.host = host;
    this.onLoadMore = onLoadMore;
    host.addController(this);
  }

  hostConnected(): void {}

  hostDisconnected(): void {
    this.disconnect();
  }

  observe(sentinel: Element, root?: Element | null): void {
    this.disconnect();
    this.sentinel = sentinel;
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          this.onLoadMore();
        }
      },
      { root: root ?? null, rootMargin: '200px' }
    );
    this.observer.observe(sentinel);
  }

  private disconnect(): void {
    if (this.observer && this.sentinel) {
      this.observer.unobserve(this.sentinel);
      this.observer.disconnect();
    }
    this.observer = undefined;
    this.sentinel = undefined;
  }
}
