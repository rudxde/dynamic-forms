import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiogroupElementComponent } from './radiogroup-element.component';

describe('RadiogroupElementComponent', () => {
  let component: RadiogroupElementComponent;
  let fixture: ComponentFixture<RadiogroupElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiogroupElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiogroupElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
