import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCalificacionConductorComponent } from './listar-calificacion-conductor.component';

describe('ListarCalificacionConductorComponent', () => {
  let component: ListarCalificacionConductorComponent;
  let fixture: ComponentFixture<ListarCalificacionConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCalificacionConductorComponent]
    });
    fixture = TestBed.createComponent(ListarCalificacionConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
