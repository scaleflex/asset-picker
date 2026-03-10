import { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class KeyboardController implements ReactiveController {
    private host;
    private onEscape;
    private handleKeyDown;
    constructor(host: ReactiveControllerHost, onEscape: () => void);
    hostConnected(): void;
    hostDisconnected(): void;
}
//# sourceMappingURL=keyboard.controller.d.ts.map