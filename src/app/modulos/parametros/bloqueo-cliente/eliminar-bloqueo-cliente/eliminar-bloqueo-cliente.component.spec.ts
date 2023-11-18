import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarBloqueoClienteComponent } from './eliminar-bloqueo-cliente.component';

describe('EliminarBloqueoClienteComponent', () => {
  let component: EliminarBloqueoClienteComponent;
  let fixture: ComponentFixture<EliminarBloqueoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarBloqueoClienteComponent]
    });
    fixture = TestBed.createComponent(EliminarBloqueoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
