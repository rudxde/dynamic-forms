import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { FormDefinition, IFormModel } from '../form/form-definition';

@Component({
  selector: 'dynamic-forms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  @Input() formModel: Subject<IFormModel>;
  @Input() hideSubmitButton: boolean;
  @Input() submitButtonText: string;
  @Input() abortButton: boolean;
  @Input() abortButtonText: string;
  @Input() result$: Subject<object>;
  @Input() changes$: Subject<object>;

  // indexedFormDefinition: IIndexedFormField[];
  myForm: FormGroup;
  form: FormDefinition;

  constructor(
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    this.formModel.subscribe(x => {
      this.form = new FormDefinition(x, this.fb);
      this.form.formGroup$.subscribe(fg => {
        this.myForm = fg;
        this.changeDetectorRef.markForCheck();
      });
      if (this.changes$) {
        this.form.updates$.subscribe(
          () => this.changes$.next(this.form.result),
        );
      }
    });

  }

  // createReactiveFormsObject(form: IIndexedFormField[]): object {
  //   const result = {};
  //   for (const c of form) {
  //     const defaultVal = c.default === undefined ? '' : c.default;
  //     const validators = [];
  //     if (c.validators) {
  //       c.validators.forEach(validator => {
  //         switch (validator.type) {
  //           case 'email':
  //             validators.push(Validators.email);
  //             break;
  //           case 'match':
  //             validators.push(Validators.pattern(new RegExp(validator.immediate as string)));
  //             break;
  //           case 'max':
  //             validators.push(Validators.max(validator.immediate as number));
  //             break;
  //           case 'min':
  //             validators.push(Validators.min(validator.immediate as number));
  //             break;
  //           case 'maxLength':
  //             validators.push(Validators.maxLength(validator.immediate as number));
  //             break;
  //           case 'minLength':
  //             validators.push(Validators.minLength(validator.immediate as number));
  //             break;
  //           case 'required':
  //             validators.push(Validators.required);
  //             break;
  //           case 'requiredTrue':
  //             validators.push(Validators.requiredTrue);
  //             break;
  //         }
  //       });
  //     }
  //     if (c.type === 'array') {
  //       result[c.id] = this.fb.array((c.default as string[]) || []);
  //     } else {
  //       result[c.id] = [defaultVal, validators];
  //     }
  //   }
  //   return result;
  // }

  submitClick() {
    this.result$.next(this.myForm.value);
  }

  abortClick() {
    this.result$.error('abort');
  }

}
