import { TestBed } from '@angular/core/testing';

import { BloqueoClienteService } from './bloqueo-cliente.service';

describe('BloqueoClienteService', () => {
  let service: BloqueoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloqueoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
