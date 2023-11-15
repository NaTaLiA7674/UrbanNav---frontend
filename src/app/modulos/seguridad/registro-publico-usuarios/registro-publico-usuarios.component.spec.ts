import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios.component';

describe('RegistroPublicoUsuariosComponent', () => {
  let component: RegistroPublicoUsuariosComponent;
  let fixture: ComponentFixture<RegistroPublicoUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPublicoUsuariosComponent]
    });
    fixture = TestBed.createComponent(RegistroPublicoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
