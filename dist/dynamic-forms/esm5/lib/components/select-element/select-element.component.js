/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
var SelectElementComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectElementComponent, _super);
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
export { SelectElementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVsZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZHluYW1pYy1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlbGVjdC1lbGVtZW50L3NlbGVjdC1lbGVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFbEc7SUFLNEMsa0RBQXdDO0lBRWxGO2VBQ0UsaUJBQU87SUFDVCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLCtoQkFBOEM7O2lCQUUvQzs7OztJQVVELDZCQUFDO0NBQUEsQUFkRCxDQUs0QywwQkFBMEIsR0FTckU7U0FUWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNlbGVjdEZpZWxkIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEFic3RyYWN0Rm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QtZm9ybS1maWVsZC9hYnN0cmFjdC1mb3JtLWZpZWxkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5bmFtaWMtZm9ybXMtc2VsZWN0LWVsZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LWVsZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QtZWxlbWVudC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEVsZW1lbnRDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdEZvcm1GaWVsZENvbXBvbmVudDxJU2VsZWN0RmllbGQ+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19