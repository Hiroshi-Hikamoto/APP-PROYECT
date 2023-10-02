import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarpuestoComponent } from './consultarpuesto.component';

describe('ConsultarpuestoComponent', () => {
  let component: ConsultarpuestoComponent;
  let fixture: ComponentFixture<ConsultarpuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarpuestoComponent]
    });
    fixture = TestBed.createComponent(ConsultarpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
