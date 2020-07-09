import { TestBed } from '@angular/core/testing';

import { ApiKeyProviderService } from './api-key-provider.service';

describe('ApiKeyProviderService', () => {
  let service: ApiKeyProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiKeyProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
