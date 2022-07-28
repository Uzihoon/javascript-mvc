import { INPUT_CLASS, INPUT_FORM_CLASS } from './constant';
import Store from './store';
import { Formatter, RuleList, State, TypeList } from './types';
import View from './view';

export default class Controller {
  private ruleList: RuleList = {
    name: { min: 1, max: 10, validate: /^[a-zA-Z]+$/ },
    phoneNumber: { min: 10, max: 11, validate: /(^([0-9]{3})([0-9]{3})([0-9]{4}))/i },
  };

  private typeList: TypeList = {
    phoneNumber: /[^0-9]/g,
    name: /[^a-zA-Z]/g,
  };

  private format: Formatter = {
    phoneNumber: { pattern: /([0-9]{3})([0-9]{3})([0-9]{4})/, replace: '$1 $2 $3' },
    name: null,
  };

  private view: View;
  private store: Store;

  constructor(view: View, store: Store) {
    this.view = view;
    this.store = store;

    this.store.setCallback(this.callbackStateChange.bind(this));
  }

  callbackStateChange(state: State) {}
  initialize() {
    this.view.initialGenerate();

    const eventList = [
      {
        type: 'input',
        parentClassName: INPUT_FORM_CLASS,
        className: INPUT_CLASS,
        callback: this.inputValuAction.bind(this),
      },
      {
        type: 'change',
        parentClassName: INPUT_FORM_CLASS,
        className: INPUT_CLASS,
        callback: this.changeInputAction.bind(this),
      },
    ];

    // Bind Event
    // this.view.bindButtonEvent('click', this.clickButtonAction.bind(this));
  }

  inputValuAction() {}

  clickButtonAction() {}

  changeInputAction() {}
}
