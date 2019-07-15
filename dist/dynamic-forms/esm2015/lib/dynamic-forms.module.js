/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSliderModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatSlideToggleModule, } from '@angular/material';
import { CheckboxElementComponent } from './components/checkbox-element/checkbox-element.component';
import { FormComponent } from './components/form.component';
import { InputElementComponent } from './components/input-element/input-element.component';
import { RadiogroupElementComponent } from './components/radiogroup-element/radiogroup-element.component';
import { SelectElementComponent } from './components/select-element/select-element.component';
import { SlideElementComponent } from './components/slide-element/slide-element.component';
import { SliderElementComponent } from './components/slider-element/slider-element.component';
import { CommonModule } from '@angular/common';
export class DynamicFormsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3Jtcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9keW5hbWljLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2R5bmFtaWMtZm9ybXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsY0FBYyxFQUNkLGVBQWUsRUFDZixlQUFlLEVBQ2YsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixjQUFjLEVBQ2Qsb0JBQW9CLEdBQ3JCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQTRCL0MsTUFBTSxPQUFPLGtCQUFrQjs7O1lBMUI5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLHdCQUF3QjtvQkFDeEIsYUFBYTtvQkFDYixxQkFBcUI7b0JBQ3JCLDBCQUEwQjtvQkFDMUIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixlQUFlO29CQUNmLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENoZWNrYm94RWxlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveC1lbGVtZW50L2NoZWNrYm94LWVsZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LWVsZW1lbnQvaW5wdXQtZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmFkaW9ncm91cEVsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW9ncm91cC1lbGVtZW50L3JhZGlvZ3JvdXAtZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RWxlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QtZWxlbWVudC9zZWxlY3QtZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlLWVsZW1lbnQvc2xpZGUtZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyRWxlbWVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXItZWxlbWVudC9zbGlkZXItZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hlY2tib3hFbGVtZW50Q29tcG9uZW50LFxuICAgIEZvcm1Db21wb25lbnQsXG4gICAgSW5wdXRFbGVtZW50Q29tcG9uZW50LFxuICAgIFJhZGlvZ3JvdXBFbGVtZW50Q29tcG9uZW50LFxuICAgIFNlbGVjdEVsZW1lbnRDb21wb25lbnQsXG4gICAgU2xpZGVFbGVtZW50Q29tcG9uZW50LFxuICAgIFNsaWRlckVsZW1lbnRDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZvcm1Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybXNNb2R1bGUgeyB9XG4iXX0=