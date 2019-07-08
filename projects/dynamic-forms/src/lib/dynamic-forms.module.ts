import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatSliderModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
} from '@angular/material';
import { CheckboxElementComponent } from './components/checkbox-element/checkbox-element.component';
import { FormComponent } from './components/form.component';
import { InputElementComponent } from './components/input-element/input-element.component';
import { RadiogroupElementComponent } from './components/radiogroup-element/radiogroup-element.component';
import { SelectElementComponent } from './components/select-element/select-element.component';
import { SlideElementComponent } from './components/slide-element/slide-element.component';
import { SliderElementComponent } from './components/slider-element/slider-element.component';
import { CommonModule } from '@angular/common';

@NgModule({
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
})
export class DynamicFormsModule { }
