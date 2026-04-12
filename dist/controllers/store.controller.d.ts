import { ReactiveController, ReactiveControllerHost } from 'lit';
import { Store } from '../store/store';
import { AppState } from '../store/store.types';
export declare class StoreController implements ReactiveController {
    private host;
    private store;
    private unsubscribe?;
    constructor(host: ReactiveControllerHost, store: Store<AppState>);
    get state(): AppState;
    setState(partial: Partial<AppState>): void;
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=store.controller.d.ts.map