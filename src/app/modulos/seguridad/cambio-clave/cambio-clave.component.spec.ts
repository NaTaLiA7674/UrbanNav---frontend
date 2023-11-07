import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioClaveComponent } from './cambio-clave.component';

describe('CambioClaveComponent', () => {
  let component: CambioClaveComponent;
  let fixture: ComponentFixture<CambioClaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambioClaveComponent]
    });
    fixture = TestBed.createComponent(CambioClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
