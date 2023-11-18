import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearParadaComponent } from './crear-parada.component';

describe('CrearParadaComponent', () => {
  let component: CrearParadaComponent;
  let fixture: ComponentFixture<CrearParadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearParadaComponent]
    });
    fixture = TestBed.createComponent(CrearParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
