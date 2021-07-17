import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesspatientregisterComponent } from './successpatientregister.component';

describe('SuccesspatientregisterComponent', () => {
  let component: SuccesspatientregisterComponent;
  let fixture: ComponentFixture<SuccesspatientregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesspatientregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesspatientregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
