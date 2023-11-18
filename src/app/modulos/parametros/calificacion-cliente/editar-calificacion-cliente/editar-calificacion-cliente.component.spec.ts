import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCalificacionClienteComponent } from './editar-calificacion-cliente.component';

describe('EditarCalificacionClienteComponent', () => {
  let component: EditarCalificacionClienteComponent;
  let fixture: ComponentFixture<EditarCalificacionClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCalificacionClienteComponent]
    });
    fixture = TestBed.createComponent(EditarCalificacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
