import { TestBed } from '@angular/core/testing';

import { BoughtSharesService } from './bought-shares.service';

describe('BoughtSharesService', () => {
  let service: BoughtSharesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoughtSharesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
