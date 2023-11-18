import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBotonPanicoComponent } from './editar-boton-panico.component';

describe('EditarBotonPanicoComponent', () => {
  let component: EditarBotonPanicoComponent;
  let fixture: ComponentFixture<EditarBotonPanicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarBotonPanicoComponent]
    });
    fixture = TestBed.createComponent(EditarBotonPanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
