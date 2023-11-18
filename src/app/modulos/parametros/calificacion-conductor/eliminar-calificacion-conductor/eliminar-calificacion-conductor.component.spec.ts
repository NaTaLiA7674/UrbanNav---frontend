import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCalificacionConductorComponent } from './eliminar-calificacion-conductor.component';

describe('EliminarCalificacionConductorComponent', () => {
  let component: EliminarCalificacionConductorComponent;
  let fixture: ComponentFixture<EliminarCalificacionConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarCalificacionConductorComponent]
    });
    fixture = TestBed.createComponent(EliminarCalificacionConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
