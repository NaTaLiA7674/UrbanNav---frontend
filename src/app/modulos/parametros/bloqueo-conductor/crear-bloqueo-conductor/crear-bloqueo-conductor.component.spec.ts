import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBloqueoConductorComponent } from './crear-bloqueo-conductor.component';

describe('CrearBloqueoConductorComponent', () => {
  let component: CrearBloqueoConductorComponent;
  let fixture: ComponentFixture<CrearBloqueoConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearBloqueoConductorComponent]
    });
    fixture = TestBed.createComponent(CrearBloqueoConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
