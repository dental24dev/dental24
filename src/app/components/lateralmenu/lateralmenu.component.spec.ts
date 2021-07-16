import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralmenuComponent } from './lateralmenu.component';

describe('LateralmenuComponent', () => {
  let component: LateralmenuComponent;
  let fixture: ComponentFixture<LateralmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
