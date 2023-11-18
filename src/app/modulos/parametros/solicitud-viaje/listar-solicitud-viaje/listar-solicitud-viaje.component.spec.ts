import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudViajeComponent } from './listar-solicitud-viaje.component';

describe('ListarSolicitudViajeComponent', () => {
  let component: ListarSolicitudViajeComponent;
  let fixture: ComponentFixture<ListarSolicitudViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSolicitudViajeComponent]
    });
    fixture = TestBed.createComponent(ListarSolicitudViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
