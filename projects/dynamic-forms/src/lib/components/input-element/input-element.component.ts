import { Component, OnInit } from '@angular/core';
import { IInputField } from '../../interfaces/form-field';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';

@Component({
  selector: 'dynamic-forms-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.less']
})
export class InputElementComponent extends AbstractFormFieldComponent<IInputField> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
