import { MatInputModule, MatButtonModule, MatSliderModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs';
import { __extends, __assign, __values } from 'tslib';
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
var AbstractFormFieldComponent = /** @class */ (function () {
    function AbstractFormFieldComponent() {
    }
    AbstractFormFieldComponent.propDecorators = {
        XFormField: [{ type: Input }],
        XFormGroup: [{ type: Input }]
    };
    return AbstractFormFieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxElementComponent = /** @class */ (function (_super) {
    __extends(CheckboxElementComponent, _super);
    function CheckboxElementComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    CheckboxElementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CheckboxElementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-forms-checkbox-element',
                    template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n  <mat-checkbox\n    [formControlName]=\"XFormField.id\"\n    [indeterminate]=\"XFormField.indeterminate\"\n    [labelPosition]=\"XFormField.align\">\n    {{XFormField.text}}\n  </mat-checkbox>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CheckboxElementComponent.ctorParameters = function () { return []; };
    return CheckboxElementComponent;
}(AbstractFormFieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormComponent = /** @class */ (function () {
    function FormComponent(fb) {
        this.fb = fb;
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.indexedFormDefinition = this.setFormFieldIds(this.form);
        /** @type {?} */
        var reactiveFormsObject = this.createReactiveFormsObject(this.indexedFormDefinition);
        this.myForm = this.fb.group(reactiveFormsObject);
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FormComponent.prototype.setFormFieldIds = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        /** @type {?} */
        var result = [];
        for (var i = 0; i < form.length; i++) {
            result.push(__assign({}, form[i], { id: i }));
        }
        return result;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FormComponent.prototype.createReactiveFormsObject = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        var e_1, _a;
        /** @type {?} */
        var result = {};
        var _loop_1 = function (c) {
            /** @type {?} */
            var defaultVal = c.default === undefined ? '' : c.default;
            /** @type {?} */
            var validators = [];
            if (c.validators) {
                c.validators.forEach((/**
                 * @param {?} validator
                 * @return {?}
                 */
                function (validator) {
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
        };
        try {
            for (var form_1 = __values(form), form_1_1 = form_1.next(); !form_1_1.done; form_1_1 = form_1.next()) {
                var c = form_1_1.value;
                _loop_1(c);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (form_1_1 && !form_1_1.done && (_a = form_1.return)) _a.call(form_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.submitClick = /**
     * @return {?}
     */
    function () {
        this.result$.next(this.myForm.value);
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.abortClick = /**
     * @return {?}
     */
    function () {
        this.result$.error('abort');
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-forms-form',
                    template: "<form [formGroup]=\"myForm\">\n  <div *ngFor=\"let x of indexedFormDefinition\" class=\"form-element\">\n    <dynamic-forms-input-element *ngIf=\"x.type === 'input'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-input-element>\n    <dynamic-forms-checkbox-element *ngIf=\"x.type === 'check'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-checkbox-element>\n    <dynamic-forms-radiogroup-element *ngIf=\"x.type === 'radio'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\">\n    </dynamic-forms-radiogroup-element>\n    <dynamic-forms-slide-element *ngIf=\"x.type === 'slide'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-slide-element>\n    <dynamic-forms-slider-element *ngIf=\"x.type === 'slider'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-slider-element>\n    <dynamic-forms-select-element *ngIf=\"x.type === 'select'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-select-element>\n  </div>\n  <button mat-raised-button color=\"secondary\" *ngIf=\"abortButton\" (click)=\"abortClick()\">\n    {{abortButtonText}}\n  </button>\n  <button mat-raised-button color=\"primary\" [disabled]=\"myForm.invalid\" (click)=\"submitClick()\">\n    {{submitButtonText}}\n  </button>\n</form>\n",
                    styles: [".form-element{margin-bottom:10px}"]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    FormComponent.propDecorators = {
        form: [{ type: Input }],
        submitButtonText: [{ type: Input }],
        abortButton: [{ type: Input }],
        abortButtonText: [{ type: Input }],
        result$: [{ type: Input }]
    };
    return FormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputElementComponent = /** @class */ (function (_super) {
    __extends(InputElementComponent, _super);
    function InputElementComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    InputElementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    InputElementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-forms-input-element',
                    template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n  <mat-form-field>\n    <input matInput [placeholder]=\"XFormField.placeholder\" [formControlName]=\"XFormField.id\">\n  </mat-form-field>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    InputElementComponent.ctorParameters = function () { return []; };
    return InputElementComponent;
}(AbstractFormFieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadiogroupElementComponent = /** @class */ (function (_super) {
    __extends(RadiogroupElementComponent, _super);
    function RadiogroupElementComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    RadiogroupElementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.XFormField.otherOption) {
            console.warn('otherOption on radiogroup currently not supported!');
        }
    };
    RadiogroupElementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-forms-radiogroup-element',
                    template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n  <mat-radio-group [formControlName]=\"XFormField.id\">\n    <mat-radio-button class=\"radio-button\" *ngFor=\"let x of XFormField.options\" [value]=\"x\"\n      [labelPosition]=\"XFormField.align\">\n      {{x}}\n    </mat-radio-button>\n  </mat-radio-group>\n</div>\n",
                    styles: [".radio-button{display:block}"]
                }] }
    ];
    /** @nocollapse */
    RadiogroupElementComponent.ctorParameters = function () { return []; };
    return RadiogroupElementComponent;
}(AbstractFormFieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectElementComponent = /** @class */ (function (_super) {
    __extends(SelectElementComponent, _super);
    function SelectElementComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SelectElementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SelectElementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-forms-select-element',
                    template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n  <mat-form-field>\n    <mat-label>{{XFormField.title}}</mat-label>\n    <select matNativeControl [formControlName]=\"XFormField.id\">\n      <option *ngFor=\"let option of XFormField.options\" [value]=\"option\">{{option}}</option>\n    </select>\n    <!-- <mat-error *ngIf=\"field.controls.value.hasError('required')\">\n          This field is required\n        </mat-error>\n        <mat-hint>You can pick up your favorite car here</mat-hint> -->\n  </mat-form-field>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SelectElementComponent.ctorParameters = function () { return []; };
    return SelectElementComponent;
}(AbstractFormFieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideElementComponent = /** @class */ (function (_super) {
    __extends(SlideElementComponent, _super);
    function SlideElementComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SlideElementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SlideElementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-forms-slide-element',
                    template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n    <mat-slide-toggle [color]=\"XFormField.color\" [formControlName]=\"XFormField.id\">{{XFormField.text}}</mat-slide-toggle>\n  </div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SlideElementComponent.ctorParameters = function () { return []; };
    return SlideElementComponent;
}(AbstractFormFieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderElementComponent = /** @class */ (function (_super) {
    __extends(SliderElementComponent, _super);
    function SliderElementComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SliderElementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SliderElementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-forms-slider-element',
                    template: "<div class=\"input\" [formGroup]=\"XFormGroup\">\n    <mat-slider\n      [min]=\"XFormField.min\"\n      [max]=\"XFormField.max\"\n      [step]=\"XFormField.step\"\n      [formControlName]=\"XFormField.id\">\n    </mat-slider>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SliderElementComponent.ctorParameters = function () { return []; };
    return SliderElementComponent;
}(AbstractFormFieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicFormsModule = /** @class */ (function () {
    function DynamicFormsModule() {
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
    return DynamicFormsModule;
}());

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