import { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class InfiniteScrollController implements ReactiveController {
    private host;
    private observer?;
    private sentinel?;
    private onLoadMore;
    constructor(host: ReactiveControllerHost, onLoadMore: () => void);
    hostConnected(): void;
    hostDisconnected(): void;
    observe(sentinel: Element, root?: Element | null): void;
    private disconnect;
}
//# sourceMappingURL=infinite-scroll.controller.d.ts.map