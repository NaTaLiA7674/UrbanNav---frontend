import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarBotonPanicoComponent } from './eliminar-boton-panico.component';

describe('EliminarBotonPanicoComponent', () => {
  let component: EliminarBotonPanicoComponent;
  let fixture: ComponentFixture<EliminarBotonPanicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarBotonPanicoComponent]
    });
    fixture = TestBed.createComponent(EliminarBotonPanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
