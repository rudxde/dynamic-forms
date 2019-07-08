import { IValidatorFormField } from './form-field-validator';

export interface IFormField extends IValidatorFormField {
  type: string;
  default?: string | number | boolean;
}

export interface IIndexedFormField extends IFormField {
  id: number;
}

export interface IInputField extends IFormField {
  type: 'input';
  placeholder: string;
  default?: string;
}

export interface ISliderField extends IFormField {
  type: 'slider';
  min: number;
  max: number;
  step: number;
  default: number;
}

export interface ISelectField extends IFormField {
  type: 'select';
  default: string;
  options: string[];
  title: string;
}

export interface ISlideField extends IFormField {
  type: 'slide';
  text: string;
  color: 'primary' | 'accent' | 'warn';
  default?: boolean;
}

export interface ICheckboxField extends IFormField {
  type: 'check';
  text: string;
  align: 'before' | 'after';
  indeterminate?: boolean;
  default?: boolean;
}

export interface IRadioGroupField extends IFormField {
  type: 'radio';
  align: 'before' | 'after';
  default?: string;
  options: string[];
  otherOption?: IInputField;
}
