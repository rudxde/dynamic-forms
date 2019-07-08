import { OnInit } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
import { ICheckboxField } from '../../interfaces/form-field';
export declare class CheckboxElementComponent extends AbstractFormFieldComponent<ICheckboxField> implements OnInit {
    constructor();
    ngOnInit(): void;
}
