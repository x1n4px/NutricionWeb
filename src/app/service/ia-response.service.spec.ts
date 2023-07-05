import { TestBed } from '@angular/core/testing';

import { IaResponseService } from './ia-response.service';

describe('IaResponseService', () => {
  let service: IaResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
