import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDeServidorComponent } from './error-de-servidor.component';

describe('ErrorDeServidorComponent', () => {
  let component: ErrorDeServidorComponent;
  let fixture: ComponentFixture<ErrorDeServidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorDeServidorComponent]
    });
    fixture = TestBed.createComponent(ErrorDeServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
