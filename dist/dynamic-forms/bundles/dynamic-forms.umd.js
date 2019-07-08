(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material'), require('@angular/forms'), require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('dynamic-forms', ['exports', '@angular/material', '@angular/forms', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (factory((global['dynamic-forms'] = {}),global.ng.material,global.ng.forms,global.ng.core,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,material,forms,core,common,platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @abstract
     * @template T
     */
    var AbstractFormFieldComponent = /** @class */ (function () {
        function AbstractFormFieldComponent() {
        }
        AbstractFormFieldComponent.propDecorators = {
            XFormField: [{ type: core.Input }],
            XFormGroup: [{ type: core.Input }]
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
            { type: core.Component, args: [{
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
                        c.validators.forEach(( /**
                         * @param {?} validator
                         * @return {?}
                         */function (validator) {
                            switch (validator.type) {
                                case 'email':
                                    validators.push(forms.Validators.email);
                                    break;
                                case 'match':
                                    validators.push(forms.Validators.pattern(new RegExp(( /** @type {?} */(validator.immediate)))));
                                    break;
                                case 'max':
                                    validators.push(forms.Validators.max(( /** @type {?} */(validator.immediate))));
                                    break;
                                case 'min':
                                    validators.push(forms.Validators.min(( /** @type {?} */(validator.immediate))));
                                    break;
                                case 'maxLength':
                                    validators.push(forms.Validators.maxLength(( /** @type {?} */(validator.immediate))));
                                    break;
                                case 'minLength':
                                    validators.push(forms.Validators.minLength(( /** @type {?} */(validator.immediate))));
                                    break;
                                case 'required':
                                    validators.push(forms.Validators.required);
                                    break;
                                case 'requiredTrue':
                                    validators.push(forms.Validators.requiredTrue);
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (form_1_1 && !form_1_1.done && (_a = form_1.return))
                            _a.call(form_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
            { type: core.Component, args: [{
                        selector: 'dynamic-forms-form',
                        template: "<form [formGroup]=\"myForm\">\n  <div *ngFor=\"let x of indexedFormDefinition\" class=\"form-element\">\n    <dynamic-forms-input-element *ngIf=\"x.type === 'input'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-input-element>\n    <dynamic-forms-checkbox-element *ngIf=\"x.type === 'check'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-checkbox-element>\n    <dynamic-forms-radiogroup-element *ngIf=\"x.type === 'radio'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\">\n    </dynamic-forms-radiogroup-element>\n    <dynamic-forms-slide-element *ngIf=\"x.type === 'slide'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-slide-element>\n    <dynamic-forms-slider-element *ngIf=\"x.type === 'slider'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-slider-element>\n    <dynamic-forms-select-element *ngIf=\"x.type === 'select'\" [XFormGroup]=\"myForm\" [XFormField]=\"x\"></dynamic-forms-select-element>\n  </div>\n  <button mat-raised-button color=\"secondary\" *ngIf=\"abortButton\" (click)=\"abortClick()\">\n    {{abortButtonText}}\n  </button>\n  <button mat-raised-button color=\"primary\" [disabled]=\"myForm.invalid\" (click)=\"submitClick()\">\n    {{submitButtonText}}\n  </button>\n</form>\n",
                        styles: [".form-element{margin-bottom:10px}"]
                    }] }
        ];
        /** @nocollapse */
        FormComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        FormComponent.propDecorators = {
            form: [{ type: core.Input }],
            submitButtonText: [{ type: core.Input }],
            abortButton: [{ type: core.Input }],
            abortButtonText: [{ type: core.Input }],
            result$: [{ type: core.Input }]
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
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
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatInputModule,
                            material.MatButtonModule,
                            material.MatSliderModule,
                            material.MatSelectModule,
                            material.MatCheckboxModule,
                            material.MatRadioModule,
                            material.MatSlideToggleModule,
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

    exports.DynamicFormsModule = DynamicFormsModule;
    exports.ɵb = AbstractFormFieldComponent;
    exports.ɵa = CheckboxElementComponent;
    exports.ɵc = FormComponent;
    exports.ɵd = InputElementComponent;
    exports.ɵe = RadiogroupElementComponent;
    exports.ɵf = SelectElementComponent;
    exports.ɵg = SlideElementComponent;
    exports.ɵh = SliderElementComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=dynamic-forms.umd.js.map