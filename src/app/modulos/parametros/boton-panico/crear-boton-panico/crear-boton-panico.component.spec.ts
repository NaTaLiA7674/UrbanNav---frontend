import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBotonPanicoComponent } from './crear-boton-panico.component';

describe('CrearBotonPanicoComponent', () => {
  let component: CrearBotonPanicoComponent;
  let fixture: ComponentFixture<CrearBotonPanicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearBotonPanicoComponent]
    });
    fixture = TestBed.createComponent(CrearBotonPanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
