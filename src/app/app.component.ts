import { Component, OnInit } from '@angular/core';
import { IFormField, IInputField, ISelectField, IRadioGroupField, ISlideField, ISliderField, ICheckboxField } from 'projects/dynamic-forms/src/public-api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  formResult$: Subject<object>;

  constructor() {
    this.formResult$ = new Subject();
  }

  ngOnInit() {
    this.formResult$.subscribe(console.log, console.error);
  }

  getDemoData(): IFormField[] {
    const input: IInputField = {
      type: 'input',
      placeholder: 'Test1',
      default: 'standard-wert',
      validators: [
        {
          type: 'email'
        }
      ]
    };
    const slider: ISliderField = {
      type: 'slider',
      min: 0,
      max: 100,
      step: 1,
      default: 0,
    };
    const select: ISelectField = {
      type: 'select',
      default: '',
      options: [
        'BMW',
        'Mercedes',
        'Audi'
      ],
      title: 'Select'
    };
    const checkbox: ICheckboxField = {
      type: 'check',
      align: 'before',
      text: 'Eine Checkbox',
      indeterminate: false,
      default: true,
    };
    const radio: IRadioGroupField = {
      type: 'radio',
      align: 'after',
      options: [
        'A',
        'B',
        'C'
      ]
    };
    const slide: ISlideField = {
      type: 'slide',
      text: 'slide Me',
      color: 'primary',
      default: true,
    };
    return [
      input,
      slider,
      select,
      checkbox,
      radio,
      slide,
    ];
  }

}
