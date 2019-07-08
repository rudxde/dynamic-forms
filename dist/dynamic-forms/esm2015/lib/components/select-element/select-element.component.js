/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
export class SelectElementComponent extends AbstractFormFieldComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVsZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlbGVjdC1lbGVtZW50L3NlbGVjdC1lbGVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQU9sRyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsMEJBQXdDO0lBRWxGO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QywraEJBQThDOzthQUUvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU2VsZWN0RmllbGQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgQWJzdHJhY3RGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1mb3JtLWZpZWxkL2Fic3RyYWN0LWZvcm0tZmllbGQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHluYW1pYy1mb3Jtcy1zZWxlY3QtZWxlbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QtZWxlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC1lbGVtZW50LmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RWxlbWVudENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Rm9ybUZpZWxkQ29tcG9uZW50PElTZWxlY3RGaWVsZD4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=