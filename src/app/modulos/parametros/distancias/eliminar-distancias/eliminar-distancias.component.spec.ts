import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDistanciasComponent } from './eliminar-distancias.component';

describe('EliminarDistanciasComponent', () => {
  let component: EliminarDistanciasComponent;
  let fixture: ComponentFixture<EliminarDistanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarDistanciasComponent]
    });
    fixture = TestBed.createComponent(EliminarDistanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
