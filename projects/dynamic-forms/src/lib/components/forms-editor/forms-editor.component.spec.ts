import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEditorComponent } from './forms-editor.component';

describe('FormsEditorComponent', () => {
  let component: FormsEditorComponent;
  let fixture: ComponentFixture<FormsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
