import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarParadaComponent } from './editar-parada.component';

describe('EditarParadaComponent', () => {
  let component: EditarParadaComponent;
  let fixture: ComponentFixture<EditarParadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarParadaComponent]
    });
    fixture = TestBed.createComponent(EditarParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
