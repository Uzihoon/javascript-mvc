export type InputType = 'name' | 'phoneNumber';
export type SelectType = 'animal';
export type IdentityType = InputType | SelectType;

export type View = {
  id: IdentityType;
  type: 'input' | 'select';
  title: string;
  inputType: string;
};

export type Carrier = {
  id: string;
  name: string;
};
