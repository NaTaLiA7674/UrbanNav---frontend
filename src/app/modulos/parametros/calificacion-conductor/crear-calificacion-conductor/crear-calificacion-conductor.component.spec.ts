import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCalificacionConductorComponent } from './crear-calificacion-conductor.component';

describe('CrearCalificacionConductorComponent', () => {
  let component: CrearCalificacionConductorComponent;
  let fixture: ComponentFixture<CrearCalificacionConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCalificacionConductorComponent]
    });
    fixture = TestBed.createComponent(CrearCalificacionConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
