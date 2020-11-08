import { TestBed } from '@angular/core/testing';

import { BuysharesService } from './buyshares.service';

describe('BuysharesService', () => {
  let service: BuysharesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuysharesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
