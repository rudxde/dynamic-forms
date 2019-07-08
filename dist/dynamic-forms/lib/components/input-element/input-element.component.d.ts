import { OnInit } from '@angular/core';
import { IInputField } from '../../interfaces/form-field';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
export declare class InputElementComponent extends AbstractFormFieldComponent<IInputField> implements OnInit {
    constructor();
    ngOnInit(): void;
}
