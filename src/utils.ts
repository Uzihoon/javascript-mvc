import { Action } from './types';

const utils = {
  delegate(target: Element, selector: string, type: string, action: Action) {
    const dispatch = (event: Event) => {
      const targetElement = event.target;
      const bindElement = target.querySelectorAll(selector);
      bindElement.forEach(el => {
        if (el === targetElement) {
          action(targetElement, event);
          return;
        }
      });
    };

    this.bindEvent(target, type, dispatch);
  },
  bindEvent(target: Element, type: string, action: (event: Event) => any) {
    target.addEventListener(type, action);
  },
};

export default utils;
