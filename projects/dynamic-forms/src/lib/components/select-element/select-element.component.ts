import { Component, OnInit } from '@angular/core';
import { ISelectField } from '../../interfaces/form-field';
import { AbstractFormFieldComponent } from '../abstract-form-field/abstract-form-field.component';

@Component({
  selector: 'dynamic-forms-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.less']
})
export class SelectElementComponent extends AbstractFormFieldComponent<ISelectField> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
