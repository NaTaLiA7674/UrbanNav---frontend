import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudViajeComponent } from './eliminar-solicitud-viaje.component';

describe('EliminarSolicitudViajeComponent', () => {
  let component: EliminarSolicitudViajeComponent;
  let fixture: ComponentFixture<EliminarSolicitudViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarSolicitudViajeComponent]
    });
    fixture = TestBed.createComponent(EliminarSolicitudViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
