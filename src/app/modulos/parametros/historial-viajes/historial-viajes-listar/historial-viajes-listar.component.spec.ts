import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialViajesListarComponent } from './historial-viajes-listar.component';

describe('HistorialViajesListarComponent', () => {
  let component: HistorialViajesListarComponent;
  let fixture: ComponentFixture<HistorialViajesListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialViajesListarComponent]
    });
    fixture = TestBed.createComponent(HistorialViajesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
