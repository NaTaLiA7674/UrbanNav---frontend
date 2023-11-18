import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDistanciasComponent } from './editar-distancias.component';

describe('EditarDistanciasComponent', () => {
  let component: EditarDistanciasComponent;
  let fixture: ComponentFixture<EditarDistanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDistanciasComponent]
    });
    fixture = TestBed.createComponent(EditarDistanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
