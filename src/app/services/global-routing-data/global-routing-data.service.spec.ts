import { TestBed } from '@angular/core/testing';

import { GlobalRoutingDataService } from './global-routing-data.service';

describe('GlobalRoutingDataService', () => {
  let service: GlobalRoutingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalRoutingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
