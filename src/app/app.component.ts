import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { IFormModel } from 'projects/dynamic-forms/src/lib/form/form-definition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  formResult$: Subject<object>;
  editor = false;

  constructor() {
    this.formResult$ = new Subject();
  }

  ngOnInit() {
    this.formResult$.subscribe(console.log, console.error);
  }

  getDemoData(): Observable<IFormModel> {
    const model: IFormModel = {
      elements: [
        {
          type: 'input',
          id: 'firstname',
          placeholder: {type: 'static', value: 'Vorname:'}
        },
        {
          type: 'input',
          id: 'lastname',
          placeholder: {type: 'static', value: 'Nachname:'}
        },
        {
          type: 'radio',
          id: 'underage',
          options: {type: 'static', value: ['Unter 18', 'Über 18']}
        },
        {
          type: 'check',
          visible: {type: 'dynamic', unCompiledFunction: '$underage.value.isNotEmpty'},
          text: {type: 'dynamic', unCompiledFunction: `
          $underage.value == "Unter 18"
          ? "Ich bin mit den Bedingungen für minen Sohn/Tochter einverstanden."
          : "Ich bin mit den Bedingungen einverstanden."
          `}
        }
      ]
    };
    return of(model);
  }
  // getDemoData(): Observable<IFormModel> {
  //   const model: IFormModel = {
  //     elements: [
  //       { type: 'input', id: 'Name', placeholder: { type: 'static', value: 'Name' } },
  //       {
  //         type: 'input', id: 'Alter',
  //         default: { type: 'static', value: '' },
  //         placeholder: {
  //           type: 'static', value: 'MaxAlter'
  //         },
  //         disabled: { type: 'dynamic', unCompiledFunction: 'return $Name.value.length === 0' },
  //         visible: { type: 'dynamic', unCompiledFunction: 'return $Name.value !== "Michael"' },
  //       },
  //       {
  //         type: 'slider',
  //         id: 'slider',
  //         max: { type: 'dynamic', unCompiledFunction: 'return Number($Alter.value || 100);' }
  //       },
  //       {
  //         type: 'slide',
  //         id: 'AcceptAgb',
  //         text: { type: 'static', value: 'Ich akzeptire die AGB\'s' }
  //       },
  //       {
  //         type: 'select',
  //         options: { type: 'dynamic', unCompiledFunction: 'return [$Name.value, $Alter.value, $slider.value, $AcceptAgb.value];' },
  //         title: { type: 'static', value: 'Auswahl:' },
  //       },
  //       {
  //         type: 'array',
  //         default: {type: 'static', value: ['A', 'B', 'C']},
  //       },
  //       {
  //         type: 'check',
  //         default: { type: 'static', value: false },
  //         text: {type: 'static', value: 'Check mich'}
  //       },
  //       {
  //         type: 'radio',
  //         options: {type: 'static', value: ['D', 'E', 'F']}
  //       }
  //     ]
  //   };
  //   return of(model);
  // }


}
