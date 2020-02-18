// import { Component, OnInit } from '@angular/core';
// import {
//     IFormField,
//     IInputField,
//     getInputFieldFormEditor,
//     ISliderField,
//     getSliderFieldFormEditor,
//     ICheckboxField,
//     getCheckboxFieldFormEditor,
//     getSlideFieldFormEditor,
//     getRadioGroupFieldFormEditor,
//     IRadioGroupField,
//     getSelectFieldFormEditor,
// } from '../../interfaces/form-field';
// import { Subject, of, Observable, BehaviorSubject } from 'rxjs';
// import { ISlideField, ISelectField } from 'dynamic-reactive-forms/public-api';

// @Component({
//   selector: 'dynamic-reactive-forms-forms-editor',
//   templateUrl: './forms-editor.component.html',
//   styleUrls: ['./forms-editor.component.css']
// })
// export class FormsEditorComponent implements OnInit {

//   form: IEditForm[];
//   result: IFormField[];

//   constructor() {
//     this.result = [
//       { type: 'input', placeholder: '', default: '' } as IInputField,
//       { type: 'slider', default: 0, max: 100, min: 0, step: 1 } as ISliderField,
//       { type: 'check', default: false } as ICheckboxField,
//       { type: 'slide', default: false } as ISlideField,
//       { type: 'radio', align: 'after', options: ['A', 'B'] } as IRadioGroupField,
//       { type: 'select', options: ['A', 'B'] } as ISelectField,
//     ];
//     this.form = [];
//     for (let i = 0; i < this.result.length; i++) {
//       this.form.push(this.getIEditForm(this.result[i], i));
//     }

//   }

//   ngOnInit() {
//   }

//   getIEditForm(field: IFormField, resultIndex: number): IEditForm {
//     const result: IEditForm = {} as IEditForm;
//     result.fieldPreview$ = new BehaviorSubject([{ ...field }]);
//     result.editorOpen = false;
//     result.closeEditor$ = new Subject();
//     result.closeEditor$.subscribe(
//       x => {
//         this.result[resultIndex] = x;
//         result.editorOpen = false;
//         this.setEditorForm(field, result, resultIndex);
//       },
//       () => {
//         result.fieldPreview$.next([this.result[resultIndex]]);
//         result.editorOpen = false;
//         this.setEditorForm(field, result, resultIndex);
//       }
//     );
//     result.changes$ = new Subject();
//     result.changes$.subscribe(x => { result.fieldPreview$.next([x]); });
//     this.setEditorForm(field, result, resultIndex);
//     return result;
//   }

//   moveUp(index: number) {
//     if (index === 0) {
//       return;
//     }
//     this.switchArrayElements(this.form, index, index - 1);
//     this.switchArrayElements(this.result, index, index - 1);
//   }

//   moveDown(index: number) {
//     if (index === this.form.length - 1) {
//       return;
//     }
//     this.switchArrayElements(this.form, index, index + 1);
//     this.switchArrayElements(this.result, index, index + 1);
//   }

//   logResult() {
//     console.log(this.result);
//     console.table(this.result);
//   }

//   private switchArrayElements<T>(array: T[], index1: number, index2: number) {
//     const tmp: T = array[index1];
//     array[index1] = array[index2];
//     array[index2] = tmp;
//   }

//   private setEditorForm(field: IFormField, result: IEditForm, resultIndex: number) {
//     switch (field.type) {
//       case 'input':
//         result.editorForm$ = new BehaviorSubject(getInputFieldFormEditor(this.result[resultIndex] as IInputField));
//         break;
//       case 'slider':
//         result.editorForm$ = new BehaviorSubject(getSliderFieldFormEditor(this.result[resultIndex] as ISliderField));
//         break;
//       case 'check':
//         result.editorForm$ = new BehaviorSubject(getCheckboxFieldFormEditor(this.result[resultIndex] as ICheckboxField));
//         break;
//       case 'slide':
//         result.editorForm$ = new BehaviorSubject(getSlideFieldFormEditor(this.result[resultIndex] as ISlideField));
//         break;
//       case 'radio':
//         result.editorForm$ = new BehaviorSubject(getRadioGroupFieldFormEditor(this.result[resultIndex] as IRadioGroupField));
//         break;
//       case 'select':
//         result.editorForm$ = new BehaviorSubject(getSelectFieldFormEditor(this.result[resultIndex] as ISelectField));
//         break;
//     }
//   }
// }

// interface IEditForm {
//   fieldPreview$: Subject<IFormField[]>;
//   changes$: Subject<IFormField>;
//   editorForm$: Observable<IFormField[]>;
//   editorOpen: boolean;
//   closeEditor$: Subject<IFormField>;
// }
