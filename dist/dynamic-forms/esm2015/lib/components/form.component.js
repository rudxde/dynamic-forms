/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
export class FormComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVEvQixNQUFNLE9BQU8sYUFBYTs7OztJQVd4QixZQUNVLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO0lBRXpCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztjQUN2RCxtQkFBbUIsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFrQjs7Y0FDMUIsTUFBTSxHQUF3QixFQUFFO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLG1CQUNOLElBQUksQ0FBQyxDQUFDLENBQUMsSUFDVixFQUFFLEVBQUUsQ0FBQyxJQUNMLENBQUM7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBR0QseUJBQXlCLENBQUMsSUFBeUI7O2NBQzNDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFOztrQkFDZCxVQUFVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87O2tCQUNyRCxVQUFVLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hCLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztnQkFBQyxTQUFTLENBQUMsRUFBRTtvQkFDL0IsUUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFO3dCQUN0QixLQUFLLE9BQU87NEJBQ1YsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2xDLE1BQU07d0JBQ1IsS0FBSyxPQUFPOzRCQUNWLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxtQkFBQSxTQUFTLENBQUMsU0FBUyxFQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQy9FLE1BQU07d0JBQ1IsS0FBSyxLQUFLOzRCQUNSLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxTQUFTLENBQUMsU0FBUyxFQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUMvRCxNQUFNO3dCQUNSLEtBQUssS0FBSzs0QkFDUixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQUEsU0FBUyxDQUFDLFNBQVMsRUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDL0QsTUFBTTt3QkFDUixLQUFLLFdBQVc7NEJBQ2QsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLG1CQUFBLFNBQVMsQ0FBQyxTQUFTLEVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQ3JFLE1BQU07d0JBQ1IsS0FBSyxXQUFXOzRCQUNkLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxtQkFBQSxTQUFTLENBQUMsU0FBUyxFQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNyRSxNQUFNO3dCQUNSLEtBQUssVUFBVTs0QkFDYixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDckMsTUFBTTt3QkFDUixLQUFLLGNBQWM7NEJBQ2pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUN6QyxNQUFNO3FCQUNUO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBckZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixndkNBQW9DOzthQUVyQzs7OztZQVRtQixXQUFXOzs7bUJBWTVCLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUpOLDZCQUE0Qjs7SUFDNUIseUNBQWtDOztJQUNsQyxvQ0FBOEI7O0lBQzlCLHdDQUFpQzs7SUFDakMsZ0NBQWtDOztJQUVsQyw4Q0FBMkM7O0lBQzNDLCtCQUFrQjs7Ozs7SUFHaEIsMkJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJRm9ybUZpZWxkLCBJSW5kZXhlZEZvcm1GaWVsZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvZm9ybS1maWVsZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5bmFtaWMtZm9ybXMtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9ybS5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZvcm06IElGb3JtRmllbGRbXTtcbiAgQElucHV0KCkgc3VibWl0QnV0dG9uVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBhYm9ydEJ1dHRvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgYWJvcnRCdXR0b25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc3VsdCQ6IFN1YmplY3Q8b2JqZWN0PjtcblxuICBpbmRleGVkRm9ybURlZmluaXRpb246IElJbmRleGVkRm9ybUZpZWxkW107XG4gIG15Rm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5kZXhlZEZvcm1EZWZpbml0aW9uID0gdGhpcy5zZXRGb3JtRmllbGRJZHModGhpcy5mb3JtKTtcbiAgICBjb25zdCByZWFjdGl2ZUZvcm1zT2JqZWN0ID0gdGhpcy5jcmVhdGVSZWFjdGl2ZUZvcm1zT2JqZWN0KHRoaXMuaW5kZXhlZEZvcm1EZWZpbml0aW9uKTtcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAocmVhY3RpdmVGb3Jtc09iamVjdCk7XG4gIH1cblxuICBzZXRGb3JtRmllbGRJZHMoZm9ybTogSUZvcm1GaWVsZFtdKTogSUluZGV4ZWRGb3JtRmllbGRbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBJSW5kZXhlZEZvcm1GaWVsZFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIC4uLmZvcm1baV0sXG4gICAgICAgIGlkOiBpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgY3JlYXRlUmVhY3RpdmVGb3Jtc09iamVjdChmb3JtOiBJSW5kZXhlZEZvcm1GaWVsZFtdKTogb2JqZWN0IHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGMgb2YgZm9ybSkge1xuICAgICAgY29uc3QgZGVmYXVsdFZhbCA9IGMuZGVmYXVsdCA9PT0gdW5kZWZpbmVkID8gJycgOiBjLmRlZmF1bHQ7XG4gICAgICBjb25zdCB2YWxpZGF0b3JzID0gW107XG4gICAgICBpZiAoYy52YWxpZGF0b3JzKSB7XG4gICAgICAgIGMudmFsaWRhdG9ycy5mb3JFYWNoKHZhbGlkYXRvciA9PiB7XG4gICAgICAgICAgc3dpdGNoICh2YWxpZGF0b3IudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWF0Y2gnOlxuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKG5ldyBSZWdFeHAodmFsaWRhdG9yLmltbWVkaWF0ZSBhcyBzdHJpbmcpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4KHZhbGlkYXRvci5pbW1lZGlhdGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWluJzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluKHZhbGlkYXRvci5pbW1lZGlhdGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWF4TGVuZ3RoJzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHZhbGlkYXRvci5pbW1lZGlhdGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWluTGVuZ3RoJzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHZhbGlkYXRvci5pbW1lZGlhdGUgYXMgbnVtYmVyKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVxdWlyZWQnOlxuICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVxdWlyZWRUcnVlJzpcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtjLmlkXSA9IFtkZWZhdWx0VmFsLCB2YWxpZGF0b3JzXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN1Ym1pdENsaWNrKCkge1xuICAgIHRoaXMucmVzdWx0JC5uZXh0KHRoaXMubXlGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIGFib3J0Q2xpY2soKSB7XG4gICAgdGhpcy5yZXN1bHQkLmVycm9yKCdhYm9ydCcpO1xuICB9XG5cbn1cbiJdfQ==