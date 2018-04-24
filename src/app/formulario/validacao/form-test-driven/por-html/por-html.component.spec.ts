import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorHtmlComponent } from './por-html.component';

describe('PorHtmlComponent', () => {
  let component: PorHtmlComponent;
  let fixture: ComponentFixture<PorHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
