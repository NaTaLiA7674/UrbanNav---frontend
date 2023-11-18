import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBotonPanicoComponent } from './listar-boton-panico.component';

describe('ListarBotonPanicoComponent', () => {
  let component: ListarBotonPanicoComponent;
  let fixture: ComponentFixture<ListarBotonPanicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarBotonPanicoComponent]
    });
    fixture = TestBed.createComponent(ListarBotonPanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
