import { Component, OnInit } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
import { ISlideField } from '../../interfaces/form-field';

@Component({
  selector: 'dynamic-forms-slide-element',
  templateUrl: './slide-element.component.html',
  styleUrls: ['./slide-element.component.less']
})
export class SlideElementComponent extends AbstractFormFieldComponent<ISlideField> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
