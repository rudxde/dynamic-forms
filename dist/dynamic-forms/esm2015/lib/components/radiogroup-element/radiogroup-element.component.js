/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
export class RadiogroupElementComponent extends AbstractFormFieldComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9ncm91cC1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybXMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yYWRpb2dyb3VwLWVsZW1lbnQvcmFkaW9ncm91cC1lbGVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQVFsRyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsMEJBQTRDO0lBRTFGO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLDJVQUFrRDs7YUFFbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1mb3JtLWZpZWxkL2Fic3RyYWN0LWZvcm0tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IElSYWRpb0dyb3VwRmllbGQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tZmllbGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeW5hbWljLWZvcm1zLXJhZGlvZ3JvdXAtZWxlbWVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpb2dyb3VwLWVsZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpb2dyb3VwLWVsZW1lbnQuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb2dyb3VwRWxlbWVudENvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0Rm9ybUZpZWxkQ29tcG9uZW50PElSYWRpb0dyb3VwRmllbGQ+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuWEZvcm1GaWVsZC5vdGhlck9wdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKCdvdGhlck9wdGlvbiBvbiByYWRpb2dyb3VwIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIScpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=