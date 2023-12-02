import { TestBed } from '@angular/core/testing';

import { DistanciasService } from './distancias.service';

describe('DistanciasService', () => {
  let service: DistanciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistanciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
