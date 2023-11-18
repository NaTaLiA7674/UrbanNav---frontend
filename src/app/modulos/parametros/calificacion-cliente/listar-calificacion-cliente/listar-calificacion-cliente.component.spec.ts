import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCalificacionClienteComponent } from './listar-calificacion-cliente.component';

describe('ListarCalificacionClienteComponent', () => {
  let component: ListarCalificacionClienteComponent;
  let fixture: ComponentFixture<ListarCalificacionClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCalificacionClienteComponent]
    });
    fixture = TestBed.createComponent(ListarCalificacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
