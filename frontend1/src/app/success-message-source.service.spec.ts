import { TestBed } from '@angular/core/testing';

import { SuccessMessageSourceService } from './success-message-source.service';

describe('SuccessMessageSourceService', () => {
  let service: SuccessMessageSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessMessageSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
