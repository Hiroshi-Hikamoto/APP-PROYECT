import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiontestigosComponent } from './gestiontestigos.component';

describe('GestiontestigosComponent', () => {
  let component: GestiontestigosComponent;
  let fixture: ComponentFixture<GestiontestigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestiontestigosComponent]
    });
    fixture = TestBed.createComponent(GestiontestigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
