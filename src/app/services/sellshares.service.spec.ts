import { TestBed } from '@angular/core/testing';

import { SellsharesService } from './sellshares.service';

describe('SellsharesService', () => {
  let service: SellsharesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellsharesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
