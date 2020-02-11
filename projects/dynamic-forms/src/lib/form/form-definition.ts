import { IFormElementDefinition, FormElementDefinitionFactory } from './form-element-definition';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, first, skip } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IFormElementModel } from './form-element-model';


export interface IFormModel {
  elements: IFormElementModel[];
}

export class FormDefinition {
  public elements: IFormElementDefinition[];
  public updates$: Subject<void>;
  public formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject(this.fb.group({}));
  public result: object;
  constructor(
    fm: IFormModel,
    private fb: FormBuilder,
  ) {
    this.updates$ = new Subject();
    this.elements = fm.elements.reduce(
      (prev, cur) => [...prev, FormElementDefinitionFactory(cur, this, prev.length, this.formGroup$, fb)],
      [],
    );
    this.formCycle();
  }

  formCycle() {
    this.evalAllValues();
    console.log(this.elements, this.getReactiveFormObject());
    this.formGroup$.next(this.fb.group(this.getReactiveFormObject()));
    this.updates$.next();
    this.formGroup$.value.valueChanges
      .pipe(takeUntil(this.formGroup$.pipe(skip(1))))
      .subscribe(x => {
        this.result = x;
        this.formCycle();
      });
  }

  element(id: string): IFormElementDefinition {
    return this.elements.find(x => x.id === id);
  }

  evalAllValues() {
    this.elements.forEach(x => x.evalValues());
  }

  getReactiveFormObject(): { [key: string]: any } {
    return this.elements.reduce((prev, cur) => {
      return {
        ...cur.getReactiveFormObject(this.result),
        ...prev,
      };
    }, {});
  }

}
