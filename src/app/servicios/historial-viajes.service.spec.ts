import { TestBed } from '@angular/core/testing';

import { HistorialViajesService } from './historial-viajes.service';

describe('HistorialViajesService', () => {
  let service: HistorialViajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialViajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
