import { OnInit } from '@angular/core';
import { ISelectField } from '../../interfaces/form-field';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
export declare class SelectElementComponent extends AbstractFormFieldComponent<ISelectField> implements OnInit {
    constructor();
    ngOnInit(): void;
}
