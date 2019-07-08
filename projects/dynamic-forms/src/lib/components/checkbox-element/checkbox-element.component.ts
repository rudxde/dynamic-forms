import { Component, OnInit } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
import { ICheckboxField } from '../../interfaces/form-field';

@Component({
  selector: 'dynamic-forms-checkbox-element',
  templateUrl: './checkbox-element.component.html',
  styleUrls: ['./checkbox-element.component.less']
})
export class CheckboxElementComponent extends AbstractFormFieldComponent<ICheckboxField> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
