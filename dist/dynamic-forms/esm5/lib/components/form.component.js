/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
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
            result.push(tslib_1.__assign({}, form[i], { id: form[i].id || i }));
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
            for (var form_1 = tslib_1.__values(form), form_1_1 = form_1.next(); !form_1_1.done; form_1_1 = form_1.next()) {
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
export { FormComponent };
if (false) {
    /** @type {?} */
    FormComponent.prototype.form;
    /** @type {?} */
    FormComponent.prototype.submitButtonText;
    /** @type {?} */
    FormComponent.prototype.abortButton;
    /** @type {?} */
    FormComponent.prototype.abortButtonText;
    /** @type {?} */
    FormComponent.prototype.result$;
    /** @type {?} */
    FormComponent.prototype.indexedFormDefinition;
    /** @type {?} */
    FormComponent.prototype.myForm;
    /**
     * @type {?}
     * @private
     */
    FormComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0I7SUFnQkUsdUJBQ1UsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7SUFFekIsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDdkQsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0RixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCx1Q0FBZTs7OztJQUFmLFVBQWdCLElBQWtCOztZQUMxQixNQUFNLEdBQXdCLEVBQUU7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsTUFBTSxDQUFDLElBQUksc0JBQ04sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUNWLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFDbkIsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFHRCxpREFBeUI7Ozs7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a0I7Ozs7O0lBR2hCLDJCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUZvcm1GaWVsZCwgSUluZGV4ZWRGb3JtRmllbGQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2Zvcm0tZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeW5hbWljLWZvcm1zLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0uY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmb3JtOiBJRm9ybUZpZWxkW107XG4gIEBJbnB1dCgpIHN1Ym1pdEJ1dHRvblRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgYWJvcnRCdXR0b246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFib3J0QnV0dG9uVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSByZXN1bHQkOiBTdWJqZWN0PG9iamVjdD47XG5cbiAgaW5kZXhlZEZvcm1EZWZpbml0aW9uOiBJSW5kZXhlZEZvcm1GaWVsZFtdO1xuICBteUZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluZGV4ZWRGb3JtRGVmaW5pdGlvbiA9IHRoaXMuc2V0Rm9ybUZpZWxkSWRzKHRoaXMuZm9ybSk7XG4gICAgY29uc3QgcmVhY3RpdmVGb3Jtc09iamVjdCA9IHRoaXMuY3JlYXRlUmVhY3RpdmVGb3Jtc09iamVjdCh0aGlzLmluZGV4ZWRGb3JtRGVmaW5pdGlvbik7XG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHJlYWN0aXZlRm9ybXNPYmplY3QpO1xuICB9XG5cbiAgc2V0Rm9ybUZpZWxkSWRzKGZvcm06IElGb3JtRmllbGRbXSk6IElJbmRleGVkRm9ybUZpZWxkW10ge1xuICAgIGNvbnN0IHJlc3VsdDogSUluZGV4ZWRGb3JtRmllbGRbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAuLi5mb3JtW2ldLFxuICAgICAgICBpZDogZm9ybVtpXS5pZCB8fCBpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgY3JlYXRlUmVhY3RpdmVGb3Jtc09iamVjdChmb3JtOiBJSW5kZXhlZEZvcm1GaWVsZFtdKTogb2JqZWN0IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGMgb2YgZm9ybSkge1xuICAgICAgY29uc3QgZGVmYXVsdFZhbCA9IGMuZGVmYXVsdCA9PT0gdW5kZWZpbmVkID8gJycgOiBjLmRlZmF1bHQ7XG4gICAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgICBpZiAoYy52YWxpZGF0b3JzKSB7XG4gICAgICAgIGMudmFsaWRhdG9ycy5mb3JFYWNoKHZhbGlkYXRvciA9PiB7XG4gICAgICAgICAgc3dpdGNoICh2YWxpZGF0b3IudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWF0Y2gnOlxuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKG5ldyBSZWdFeHAodmFsaWRhdG9yLmltbWVkaWF0ZSBhcyBzdHJpbmcpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4KHZhbGlkYXRvci5pbW1lZGlhdGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluKHZhbGlkYXRvci5pbW1lZGlhdGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWF4TGVuZ3RoJzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbGlkYXRvci5pbW1lZGlhdGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWluTGVuZ3RoJzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHZhbGlkYXRvci5pbW1lZGlhdGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVxdWlyZWRUcnVlJzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtjLmlkXSA9IFtkZWZhdWx0VmFsLCB2YWxpZGF0b3JzXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN1Ym1pdENsaWNrKCkge1xuICAgIHRoaXMucmVzdWx0JC5uZXh0KHRoaXMubXlGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIGFib3J0Q2xpY2soKSB7XG4gICAgdGhpcy5yZXN1bHQkLmVycm9yKCdhYm9ydCcpO1xuICB9XG5cbn1cbiJdfQ==