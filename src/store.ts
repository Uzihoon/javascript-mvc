import { Callback, State, ViewType } from './types';

/**
 * Store Class
 * Update and delete state data
 */
export default class Store {
  private state: State = {
    name: '',
    phoneNumber: '',
    animal: '',
  };

  private callback: Callback;

  constructor() {
    this.callback = () => null;
  }

  setCallback(callback: Callback) {
    this.callback = callback;
  }

  /**
   * Save state value in the store and call the callback function.
   * @param key state's key
   * @param value state's new value
   */
  setState<T extends keyof State>(key: T, value: State[T]) {
    // If there's no certain key data, do nothing.
    if (typeof this.state[key] === undefined) return;
    this.state = { ...this.state, [key]: value };
    this.callback({ ...this.state });
  }

  /**
   * Return specific state value or all state.
   * @param key state's key
   */
  getState<T extends keyof State>(key?: T) {
    return this.state[key!] || { ...this.state };
  }
}
