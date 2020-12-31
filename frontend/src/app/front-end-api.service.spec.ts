import { TestBed } from '@angular/core/testing';

import { FrontEndAPIService } from './front-end-api.service';

describe('FrontEndAPIService', () => {
  let service: FrontEndAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontEndAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
