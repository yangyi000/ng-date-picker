import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatePickerComponent } from './ng-date-picker.component';

describe('DatePickerComponent', () => {
  let component: NgDatePickerComponent;
  let fixture: ComponentFixture<NgDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
