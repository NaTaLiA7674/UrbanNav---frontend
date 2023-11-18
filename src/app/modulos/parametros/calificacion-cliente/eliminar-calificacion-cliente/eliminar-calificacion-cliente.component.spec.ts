import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCalificacionClienteComponent } from './eliminar-calificacion-cliente.component';

describe('EliminarCalificacionClienteComponent', () => {
  let component: EliminarCalificacionClienteComponent;
  let fixture: ComponentFixture<EliminarCalificacionClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarCalificacionClienteComponent]
    });
    fixture = TestBed.createComponent(EliminarCalificacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
