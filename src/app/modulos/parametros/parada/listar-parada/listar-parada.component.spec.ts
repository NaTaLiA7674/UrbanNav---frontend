import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarParadaComponent } from './listar-parada.component';

describe('ListarParadaComponent', () => {
  let component: ListarParadaComponent;
  let fixture: ComponentFixture<ListarParadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarParadaComponent]
    });
    fixture = TestBed.createComponent(ListarParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
