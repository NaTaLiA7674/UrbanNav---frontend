import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPuntoOrigenComponent } from './crear-punto-origen.component';

describe('CrearPuntoOrigenComponent', () => {
  let component: CrearPuntoOrigenComponent;
  let fixture: ComponentFixture<CrearPuntoOrigenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPuntoOrigenComponent]
    });
    fixture = TestBed.createComponent(CrearPuntoOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
