import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSeguridadComponent } from './inicio-seguridad.component';

describe('InicioSeguridadComponent', () => {
  let component: InicioSeguridadComponent;
  let fixture: ComponentFixture<InicioSeguridadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSeguridadComponent]
    });
    fixture = TestBed.createComponent(InicioSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
