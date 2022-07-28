export type InputType = 'name' | 'phoneNumber';
export type SelectType = 'animal';
export type ViewType = InputType | SelectType;

export type View = {
  id: ViewType;
  type: 'input' | 'select';
  title: string;
  inputType: string;
};

export type Carrier = {
  id: string;
  name: string;
};
