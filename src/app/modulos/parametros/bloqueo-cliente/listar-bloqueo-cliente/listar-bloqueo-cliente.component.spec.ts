import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBloqueoClienteComponent } from './listar-bloqueo-cliente.component';

describe('ListarBloqueoClienteComponent', () => {
  let component: ListarBloqueoClienteComponent;
  let fixture: ComponentFixture<ListarBloqueoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarBloqueoClienteComponent]
    });
    fixture = TestBed.createComponent(ListarBloqueoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
