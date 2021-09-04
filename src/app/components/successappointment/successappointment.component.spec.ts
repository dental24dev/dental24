import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessappointmentComponent } from './successappointment.component';

describe('SuccessappointmentComponent', () => {
  let component: SuccessappointmentComponent;
  let fixture: ComponentFixture<SuccessappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
