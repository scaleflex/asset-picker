import { ReactiveController, ReactiveControllerHost } from 'lit';
import { Store } from '../store/store';
import { AppState } from '../store/store.types';
export interface MarqueeRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class MarqueeController implements ReactiveController {
    private host;
    private store;
    private container?;
    private startX;
    private startY;
    private startClientX;
    private startClientY;
    private preMarqueeSelection;
    private _dragging;
    private _scrollRAF;
    private _lastMouseEvent;
    isActive: boolean;
    rect: MarqueeRect;
    private handleMouseDown;
    private handleMouseMove;
    private handleMouseUp;
    constructor(host: ReactiveControllerHost, store: Store<AppState>);
    hostConnected(): void;
    hostDisconnected(): void;
    attach(container: HTMLElement): void;
    detach(): void;
    private isInteractiveTarget;
    private onMouseDown;
    private onMouseMove;
    private updateMarqueeRect;
    private startAutoScroll;
    private autoScrollTick;
    private stopAutoScroll;
    private onMouseUp;
    private queryCards;
    private selectIntersecting;
}
//# sourceMappingURL=marquee.controller.d.ts.map