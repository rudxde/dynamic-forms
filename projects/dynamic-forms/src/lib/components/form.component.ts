import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { IFormField, IIndexedFormField } from '../interfaces/form-field';

@Component({
  selector: 'dynamic-forms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  @Input() form: IFormField[];
  @Input() submitButtonText: string;
  @Input() abortButton: boolean;
  @Input() abortButtonText: string;
  @Input() result$: Subject<object>;

  indexedFormDefinition: IIndexedFormField[];
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.indexedFormDefinition = this.setFormFieldIds(this.form);
    const reactiveFormsObject = this.createReactiveFormsObject(this.indexedFormDefinition);
    this.myForm = this.fb.group(reactiveFormsObject);
  }

  setFormFieldIds(form: IFormField[]): IIndexedFormField[] {
    const result: IIndexedFormField[] = [];
    for (let i = 0; i < form.length; i++) {
      result.push({
        ...form[i],
        id: i
      });
    }
    return result;
  }


  createReactiveFormsObject(form: IIndexedFormField[]): object {
    const result = {};
    for (const c of form) {
      const defaultVal = c.default === undefined ? '' : c.default;
      const validators = [];
      if (c.validators) {
        c.validators.forEach(validator => {
          switch (validator.type) {
            case 'email':
              validators.push(Validators.email);
              break;
            case 'match':
              validators.push(Validators.pattern(new RegExp(validator.immediate as string)));
              break;
            case 'max':
              validators.push(Validators.max(validator.immediate as number));
              break;
            case 'min':
              validators.push(Validators.min(validator.immediate as number));
              break;
            case 'maxLength':
              validators.push(Validators.maxLength(validator.immediate as number));
              break;
            case 'minLength':
              validators.push(Validators.minLength(validator.immediate as number));
              break;
            case 'required':
              validators.push(Validators.required);
              break;
            case 'requiredTrue':
              validators.push(Validators.requiredTrue);
              break;
          }
        });
      }
      result[c.id] = [defaultVal, validators];
    }
    return result;
  }

  submitClick() {
    this.result$.next(this.myForm.value);
  }

  abortClick() {
    this.result$.error('abort');
  }

}
