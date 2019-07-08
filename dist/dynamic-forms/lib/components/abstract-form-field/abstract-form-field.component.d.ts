import { IIndexedFormField, IFormField } from '../../interfaces/form-field';
import { FormGroup } from '@angular/forms';
export declare abstract class AbstractFormFieldComponent<T extends IFormField> {
    XFormField: T & IIndexedFormField;
    XFormGroup: FormGroup;
    constructor();
}
