import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPuntoOrigenComponent } from './listar-punto-origen.component';

describe('ListarPuntoOrigenComponent', () => {
  let component: ListarPuntoOrigenComponent;
  let fixture: ComponentFixture<ListarPuntoOrigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPuntoOrigenComponent]
    });
    fixture = TestBed.createComponent(ListarPuntoOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
