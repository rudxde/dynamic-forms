import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { IFormField, IIndexedFormField } from '../interfaces/form-field';
export declare class FormComponent implements OnInit {
    private fb;
    form: IFormField[];
    submitButtonText: string;
    abortButton: boolean;
    abortButtonText: string;
    result$: Subject<object>;
    indexedFormDefinition: IIndexedFormField[];
    myForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    setFormFieldIds(form: IFormField[]): IIndexedFormField[];
    createReactiveFormsObject(form: IIndexedFormField[]): object;
    submitClick(): void;
    abortClick(): void;
}
