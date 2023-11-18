import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCalificacionConductorComponent } from './editar-calificacion-conductor.component';

describe('EditarCalificacionConductorComponent', () => {
  let component: EditarCalificacionConductorComponent;
  let fixture: ComponentFixture<EditarCalificacionConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCalificacionConductorComponent]
    });
    fixture = TestBed.createComponent(EditarCalificacionConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
