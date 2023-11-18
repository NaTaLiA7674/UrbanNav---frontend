import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBloqueoConductorComponent } from './listar-bloqueo-conductor.component';

describe('ListarBloqueoConductorComponent', () => {
  let component: ListarBloqueoConductorComponent;
  let fixture: ComponentFixture<ListarBloqueoConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarBloqueoConductorComponent]
    });
    fixture = TestBed.createComponent(ListarBloqueoConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
