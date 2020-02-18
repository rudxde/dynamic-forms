import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { IFormField } from '../../../form/form-element-model';
import { IFormElementDefinition } from '../../../form/form-element-definition';

export abstract class AbstractFormFieldComponent<T extends IFormElementDefinition> {

    @Input() XFormField: T;
    @Input() XFormGroup: FormGroup;

    constructor() { }

}
