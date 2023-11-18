import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBloqueoClienteComponent } from './crear-bloqueo-cliente.component';

describe('CrearBloqueoClienteComponent', () => {
  let component: CrearBloqueoClienteComponent;
  let fixture: ComponentFixture<CrearBloqueoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearBloqueoClienteComponent]
    });
    fixture = TestBed.createComponent(CrearBloqueoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
