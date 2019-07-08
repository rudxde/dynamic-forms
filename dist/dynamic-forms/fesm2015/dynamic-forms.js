import { MatInputModule, MatButtonModule, MatSliderModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs';
import { Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class AbstractFormFieldComponent {
    constructor() { }
}
AbstractFormFieldComponent.propDecorators = {
    XFormField: [{ type: Input }],
    XFormGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxElementComponent extends AbstractFormFieldComponent {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CheckboxElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-forms-checkbox-element',
                template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n  <mat-checkbox\n    [formControlName]=\"XFormField.id\"\n    [indeterminate]=\"XFormField.indeterminate\"\n    [labelPosition]=\"XFormField.align\">\n    {{XFormField.text}}\n  </mat-checkbox>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CheckboxElementComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.indexedFormDefinition = this.setFormFieldIds(this.form);
        /** @type {?} */
        const reactiveFormsObject = this.createReactiveFormsObject(this.indexedFormDefinition);
        this.myForm = this.fb.group(reactiveFormsObject);
    }
    /**
     * @param {?} form
     * @return {?}
     */
    setFormFieldIds(form) {
        /** @type {?} */
        const result = [];
        for (let i = 0; i < form.length; i++) {
            result.push(Object.assign({}, form[i], { id: i }));
        }
        return result;
    }
    /**
     * @param {?} form
     * @return {?}
     */
    createReactiveFormsObject(form) {
        /** @type {?} */
        const result = {};
        for (const c of form) {
            /** @type {?} */
            const defaultVal = c.default === undefined ? '' : c.default;
            /** @type {?} */
            const validators = [];
            if (c.validators) {
                c.validators.forEach((/**
                 * @param {?} validator
                 * @return {?}
                 */
                validator => {
                    switch (validator.type) {
                        case 'email':
                            validators.push(Validators.email);
                            break;
                        case 'match':
                            validators.push(Validators.pattern(new RegExp((/** @type {?} */ (validator.immediate)))));
                            break;
                        case 'max':
                            validators.push(Validators.max((/** @type {?} */ (validator.immediate))));
                            break;
                        case 'min':
                            validators.push(Validators.min((/** @type {?} */ (validator.immediate))));
                            break;
                        case 'maxLength':
                            validators.push(Validators.maxLength((/** @type {?} */ (validator.immediate))));
                            break;
                        case 'minLength':
                            validators.push(Validators.minLength((/** @type {?} */ (validator.immediate))));
                            break;
                        case 'required':
                            validators.push(Validators.required);
                            break;
                        case 'requiredTrue':
                            validators.push(Validators.requiredTrue);
                            break;
                    }
                }));
            }
            result[c.id] = [defaultVal, validators];
        }
        return result;
    }
    /**
     * @return {?}
     */
    submitClick() {
        this.result$.next(this.myForm.value);
    }
    /**
     * @return {?}
     */
    abortClick() {
        this.result$.error('abort');
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-forms-form',
                template: "<form [formGroup]=\"myForm\">\n  <div *ngFor=\"let x of indexedFormDefinition\" class=\"form-element\">\n    <dynamic-forms-input-element *ngIf=\"x.type === 'input'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-input-element>\n    <dynamic-forms-checkbox-element *ngIf=\"x.type === 'check'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-checkbox-element>\n    <dynamic-forms-radiogroup-element *ngIf=\"x.type === 'radio'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\">\n    </dynamic-forms-radiogroup-element>\n    <dynamic-forms-slide-element *ngIf=\"x.type === 'slide'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-slide-element>\n    <dynamic-forms-slider-element *ngIf=\"x.type === 'slider'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-slider-element>\n    <dynamic-forms-select-element *ngIf=\"x.type === 'select'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-select-element>\n  </div>\n  <button mat-raised-button color=\"secondary\" *ngIf=\"abortButton\" (click)=\"abortClick()\">\n    {{abortButtonText}}\n  </button>\n  <button mat-raised-button color=\"primary\" [disabled]=\"myForm.invalid\" (click)=\"submitClick()\">\n    {{submitButtonText}}\n  </button>\n</form>\n",
                styles: [".form-element{margin-bottom:10px}"]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: FormBuilder }
];
FormComponent.propDecorators = {
    form: [{ type: Input }],
    submitButtonText: [{ type: Input }],
    abortButton: [{ type: Input }],
    abortButtonText: [{ type: Input }],
    result$: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputElementComponent extends AbstractFormFieldComponent {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
InputElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-forms-input-element',
                template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n  <mat-form-field>\n    <input matInput [placeholder]=\"XFormField.placeholder\" [formControlName]=\"XFormField.id\">\n  </mat-form-field>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
InputElementComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadiogroupElementComponent extends AbstractFormFieldComponent {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.XFormField.otherOption) {
            console.warn('otherOption on radiogroup currently not supported!');
        }
    }
}
RadiogroupElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-forms-radiogroup-element',
                template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n  <mat-radio-group [formControlName]=\"XFormField.id\">\n    <mat-radio-button class=\"radio-button\" *ngFor=\"let x of XFormField.options\" [value]=\"x\"\n      [labelPosition]=\"XFormField.align\">\n      {{x}}\n    </mat-radio-button>\n  </mat-radio-group>\n</div>\n",
                styles: [".radio-button{display:block}"]
            }] }
];
/** @nocollapse */
RadiogroupElementComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectElementComponent extends AbstractFormFieldComponent {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SelectElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-forms-select-element',
                template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n  <mat-form-field>\n    <mat-label>{{XFormField.title}}</mat-label>\n    <select matNativeControl [formControlName]=\"XFormField.id\">\n      <option *ngFor=\"let option of XFormField.options\" [value]=\"option\">{{option}}</option>\n    </select>\n    <!-- <mat-error *ngIf=\"field.controls.value.hasError('required')\">\n          This field is required\n        </mat-error>\n        <mat-hint>You can pick up your favorite car here</mat-hint> -->\n  </mat-form-field>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SelectElementComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideElementComponent extends AbstractFormFieldComponent {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SlideElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-forms-slide-element',
                template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n    <mat-slide-toggle [color]=\"XFormField.color\" [formControlName]=\"XFormField.id\">{{XFormField.text}}</mat-slide-toggle>\n  </div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SlideElementComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SliderElementComponent extends AbstractFormFieldComponent {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SliderElementComponent.decorators = [
    { type: Component, args: [{
                selector: 'dynamic-forms-slider-element',
                template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n    <mat-slider\n      [min]=\"XFormField.min\"\n      [max]=\"XFormField.max\"\n      [step]=\"XFormField.step\"\n      [formControlName]=\"XFormField.id\">\n    </mat-slider>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
SliderElementComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicFormsModule {
}
DynamicFormsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CheckboxElementComponent,
                    FormComponent,
                    InputElementComponent,
                    RadiogroupElementComponent,
                    SelectElementComponent,
                    SlideElementComponent,
                    SliderElementComponent,
                ],
                imports: [
                    CommonModule,
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatInputModule,
                    MatButtonModule,
                    MatSliderModule,
                    MatSelectModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatSlideToggleModule,
                ],
                exports: [
                    FormComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DynamicFormsModule, AbstractFormFieldComponent as ɵb, CheckboxElementComponent as ɵa, FormComponent as ɵc, InputElementComponent as ɵd, RadiogroupElementComponent as ɵe, SelectElementComponent as ɵf, SlideElementComponent as ɵg, SliderElementComponent as ɵh };

//# sourceMappingURL=dynamic-forms.js.map