export interface IValidatorFormField {
  validators?: IValidator[];
}

interface IValidator {
  type: 'required' | 'email' | 'match' | 'min' | 'max' | 'minLength' | 'maxLength' | 'requiredTrue';
  immediate?: number | string;
}
