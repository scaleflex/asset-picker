type Listener<T> = (state: T, prevState: T) => void;

export class Store<T extends object> {
  private state: T;
  private listeners = new Set<Listener<T>>();
  private _notifying = false;
  private _pendingState: Partial<T> | null = null;

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState(): T {
    return this.state;
  }

  setState(partial: Partial<T>): void {
    if (this._notifying) {
      // Merge with pending state to apply after current notification
      this._pendingState = { ...(this._pendingState || {}), ...partial };
      return;
    }

    const prevState = this.state;
    this.state = { ...prevState, ...partial };
    this._notifying = true;
    try {
      this.listeners.forEach((listener) => listener(this.state, prevState));
    } finally {
      this._notifying = false;
    }

    // Apply any state that was queued during notification
    if (this._pendingState) {
      const pending = this._pendingState;
      this._pendingState = null;
      this.setState(pending);
    }
  }

  subscribe(listener: Listener<T>): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  destroy(): void {
    this.listeners.clear();
  }
}
