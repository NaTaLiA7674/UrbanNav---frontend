import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionUsuarioComponent } from './identificacion-usuario.component';

describe('IdentificacionUsuarioComponent', () => {
  let component: IdentificacionUsuarioComponent;
  let fixture: ComponentFixture<IdentificacionUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentificacionUsuarioComponent]
    });
    fixture = TestBed.createComponent(IdentificacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
