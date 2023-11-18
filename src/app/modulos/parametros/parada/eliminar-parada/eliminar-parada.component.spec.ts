import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarParadaComponent } from './eliminar-parada.component';

describe('EliminarParadaComponent', () => {
  let component: EliminarParadaComponent;
  let fixture: ComponentFixture<EliminarParadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarParadaComponent]
    });
    fixture = TestBed.createComponent(EliminarParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
