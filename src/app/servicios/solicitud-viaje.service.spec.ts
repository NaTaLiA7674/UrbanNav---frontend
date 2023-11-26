import { TestBed } from '@angular/core/testing';

import { SolicitudViajeService } from './solicitud-viaje.service';

describe('SolicitudViajeService', () => {
  let service: SolicitudViajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudViajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
