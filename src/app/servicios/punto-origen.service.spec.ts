import { TestBed } from '@angular/core/testing';

import { PuntoOrigenService } from './punto-origen.service';

describe('PuntoOrigenService', () => {
  let service: PuntoOrigenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoOrigenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
