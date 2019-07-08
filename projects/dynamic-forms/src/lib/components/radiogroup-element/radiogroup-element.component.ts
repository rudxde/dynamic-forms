import { Component, OnInit } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';
import { IRadioGroupField } from '../../interfaces/form-field';

@Component({
  selector: 'dynamic-forms-radiogroup-element',
  templateUrl: './radiogroup-element.component.html',
  styleUrls: ['./radiogroup-element.component.less']
})
export class RadiogroupElementComponent extends AbstractFormFieldComponent<IRadioGroupField> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.XFormField.otherOption) {
      console.warn('otherOption on radiogroup currently not supported!');
    }
  }

}
