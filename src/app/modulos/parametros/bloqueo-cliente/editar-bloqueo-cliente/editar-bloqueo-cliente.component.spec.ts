import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBloqueoClienteComponent } from './editar-bloqueo-cliente.component';

describe('EditarBloqueoClienteComponent', () => {
  let component: EditarBloqueoClienteComponent;
  let fixture: ComponentFixture<EditarBloqueoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarBloqueoClienteComponent]
    });
    fixture = TestBed.createComponent(EditarBloqueoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
