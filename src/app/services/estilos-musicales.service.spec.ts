import { TestBed } from '@angular/core/testing';

import { EstilosMusicalesService } from './estilos-musicales.service';

describe('EstilosMusicalesService', () => {
  let service: EstilosMusicalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstilosMusicalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
