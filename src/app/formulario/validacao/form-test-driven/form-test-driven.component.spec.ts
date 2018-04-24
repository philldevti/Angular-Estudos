import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTestDrivenComponent } from './form-test-driven.component';

describe('FormTestDrivenComponent', () => {
  let component: FormTestDrivenComponent;
  let fixture: ComponentFixture<FormTestDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTestDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTestDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
