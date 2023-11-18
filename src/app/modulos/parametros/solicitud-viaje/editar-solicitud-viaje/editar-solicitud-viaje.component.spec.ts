import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSolicitudViajeComponent } from './editar-solicitud-viaje.component';

describe('EditarSolicitudViajeComponent', () => {
  let component: EditarSolicitudViajeComponent;
  let fixture: ComponentFixture<EditarSolicitudViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSolicitudViajeComponent]
    });
    fixture = TestBed.createComponent(EditarSolicitudViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
