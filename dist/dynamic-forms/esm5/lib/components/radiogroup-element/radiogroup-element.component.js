/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
var RadiogroupElementComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RadiogroupElementComponent, _super);
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
export { RadiogroupElementComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9ncm91cC1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2R5bmFtaWMtZm9ybXMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yYWRpb2dyb3VwLWVsZW1lbnQvcmFkaW9ncm91cC1lbGVtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHbEc7SUFLZ0Qsc0RBQTRDO0lBRTFGO2VBQ0UsaUJBQU87SUFDVCxDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsMlVBQWtEOztpQkFFbkQ7Ozs7SUFhRCxpQ0FBQztDQUFBLEFBakJELENBS2dELDBCQUEwQixHQVl6RTtTQVpZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdEZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LWZvcm0tZmllbGQvYWJzdHJhY3QtZm9ybS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVJhZGlvR3JvdXBGaWVsZCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZm9ybS1maWVsZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R5bmFtaWMtZm9ybXMtcmFkaW9ncm91cC1lbGVtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvZ3JvdXAtZWxlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvZ3JvdXAtZWxlbWVudC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvZ3JvdXBFbGVtZW50Q29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RGb3JtRmllbGRDb21wb25lbnQ8SVJhZGlvR3JvdXBGaWVsZD4gaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5YRm9ybUZpZWxkLm90aGVyT3B0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ290aGVyT3B0aW9uIG9uIHJhZGlvZ3JvdXAgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQhJyk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==