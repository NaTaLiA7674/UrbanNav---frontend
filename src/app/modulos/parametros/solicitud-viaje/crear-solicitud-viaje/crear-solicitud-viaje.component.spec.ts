import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSolicitudViajeComponent } from './crear-solicitud-viaje.component';

describe('CrearSolicitudViajeComponent', () => {
  let component: CrearSolicitudViajeComponent;
  let fixture: ComponentFixture<CrearSolicitudViajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearSolicitudViajeComponent]
    });
    fixture = TestBed.createComponent(CrearSolicitudViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
