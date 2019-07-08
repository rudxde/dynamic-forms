import { IInputField, IIndexedFormField, IFormField } from '../../interfaces/form-field';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';

export abstract class AbstractFormFieldComponent<T extends IFormField> {

  @Input() XFormField: T & IIndexedFormField;
  @Input() XFormGroup: FormGroup;

  constructor() { }

}
