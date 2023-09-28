import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguinComponent } from './loguin.component';

describe('LoguinComponent', () => {
  let component: LoguinComponent;
  let fixture: ComponentFixture<LoguinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoguinComponent]
    });
    fixture = TestBed.createComponent(LoguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
