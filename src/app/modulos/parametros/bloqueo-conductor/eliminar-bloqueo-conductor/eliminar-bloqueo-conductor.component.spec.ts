import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarBloqueoConductorComponent } from './eliminar-bloqueo-conductor.component';

describe('EliminarBloqueoConductorComponent', () => {
  let component: EliminarBloqueoConductorComponent;
  let fixture: ComponentFixture<EliminarBloqueoConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarBloqueoConductorComponent]
    });
    fixture = TestBed.createComponent(EliminarBloqueoConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
