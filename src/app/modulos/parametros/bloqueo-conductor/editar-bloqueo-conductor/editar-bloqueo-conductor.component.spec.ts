import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBloqueoConductorComponent } from './editar-bloqueo-conductor.component';

describe('EditarBloqueoConductorComponent', () => {
  let component: EditarBloqueoConductorComponent;
  let fixture: ComponentFixture<EditarBloqueoConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarBloqueoConductorComponent]
    });
    fixture = TestBed.createComponent(EditarBloqueoConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
