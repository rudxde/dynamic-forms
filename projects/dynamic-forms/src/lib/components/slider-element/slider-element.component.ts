import { Component, OnInit } from '@angular/core';
import { ISliderField } from '../../interfaces/form-field';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';

@Component({
  selector: 'dynamic-forms-slider-element',
  templateUrl: './slider-element.component.html',
  styleUrls: ['./slider-element.component.less']
})
export class SliderElementComponent extends AbstractFormFieldComponent<ISliderField> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
