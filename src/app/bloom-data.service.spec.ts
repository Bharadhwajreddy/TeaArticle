import { TestBed } from '@angular/core/testing';

import { BloomDataService } from './bloom-data.service';

describe('BloomDataService', () => {
  let service: BloomDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloomDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
