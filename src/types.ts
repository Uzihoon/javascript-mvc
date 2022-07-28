export type InputType = 'name' | 'phoneNumber';
export type SelectType = 'animal';
export type ViewType = InputType | SelectType;

export type View = {
  id: ViewType;
  type: 'input' | 'select';
  title: string;
  inputType?: string;
};

export type Carrier = {
  id: string;
  name: string;
};

export interface Template {
  [s: string]: (view: View, carrier: Carrier[]) => string;
}

export type State = {
  [P in ViewType]: string;
};

export type Callback = (state: State) => void;

export type Action = (el: EventTarget, event: Event) => void;
