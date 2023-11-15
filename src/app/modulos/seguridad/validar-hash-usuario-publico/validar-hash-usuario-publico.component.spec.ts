import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico.component';

describe('ValidarHashUsuarioPublicoComponent', () => {
  let component: ValidarHashUsuarioPublicoComponent;
  let fixture: ComponentFixture<ValidarHashUsuarioPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidarHashUsuarioPublicoComponent]
    });
    fixture = TestBed.createComponent(ValidarHashUsuarioPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
