import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDistanciasComponent } from './listar-distancias.component';

describe('ListarDistanciasComponent', () => {
  let component: ListarDistanciasComponent;
  let fixture: ComponentFixture<ListarDistanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDistanciasComponent]
    });
    fixture = TestBed.createComponent(ListarDistanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
