import { Action, View as ViewListType } from './types';
import utils from './utils';
export default class View {
  private ViewList: ViewListType[] = [
    {
      id: 'name',
      title: 'Name',
      type: 'input',
    },
    {
      id: 'phoneNumber',
      inputType: 'tel',
      title: 'Phone Number',
      type: 'input',
    },
    {
      id: 'animal',
      title: 'Favoriate Animal',
      type: 'select',
    },
  ];

  bindDelegate(event: string, callback: Action, parentClassName: string, childClassName: string) {
    const element = this.getElement(parentClassName, 'section');
    utils.delegate(element, childClassName, event, callback);
  }

  getElement(className: string, elementType: string) {
    return this.checkValidElement(this.selectElement(className), elementType, className);
  }

  selectElement(selector: string) {
    return document.querySelector(selector);
  }

  selectAllElements(selector: string) {
    return document.querySelectorAll(selector);
  }

  checkValidElement(element: Element | null, elementType: string, className: string) {
    let validElement = element;

    if (!validElement) {
      validElement = document.createElement(elementType);
      validElement.setAttribute('class', className);
      document.body.appendChild(validElement);
    }

    return validElement;
  }

  displayElement(parent: Element, virtualElement: string) {
    parent.insertAdjacentHTML('beforeend', virtualElement);
  }

  bindEvent(event: string, callback: Action, parentClassName: string, className: string) {
    this.bindDelegate(event, callback, parentClassName, className);
  }
}
