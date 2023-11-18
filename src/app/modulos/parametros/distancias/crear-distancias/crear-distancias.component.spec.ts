import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDistanciasComponent } from './crear-distancias.component';

describe('CrearDistanciasComponent', () => {
  let component: CrearDistanciasComponent;
  let fixture: ComponentFixture<CrearDistanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearDistanciasComponent]
    });
    fixture = TestBed.createComponent(CrearDistanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
