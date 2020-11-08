import { TestBed } from '@angular/core/testing';

import { AnnoucementsService } from './annoucements.service';

describe('AnnoucementsService', () => {
  let service: AnnoucementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnoucementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
