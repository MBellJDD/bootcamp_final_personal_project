import { TestBed } from '@angular/core/testing';

import { FotografosService } from './fotografos.service';

describe('FotografosService', () => {
  let service: FotografosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotografosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
