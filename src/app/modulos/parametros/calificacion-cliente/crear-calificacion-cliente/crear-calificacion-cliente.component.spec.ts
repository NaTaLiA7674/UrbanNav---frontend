import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCalificacionClienteComponent } from './crear-calificacion-cliente.component';

describe('CrearCalificacionClienteComponent', () => {
  let component: CrearCalificacionClienteComponent;
  let fixture: ComponentFixture<CrearCalificacionClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCalificacionClienteComponent]
    });
    fixture = TestBed.createComponent(CrearCalificacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
