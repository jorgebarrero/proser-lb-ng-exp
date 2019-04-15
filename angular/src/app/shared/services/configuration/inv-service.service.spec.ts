import { TestBed } from '@angular/core/testing';

import { InvServiceService } from './inv-service.service';

describe('InvServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvServiceService = TestBed.get(InvServiceService);
    expect(service).toBeTruthy();
  });
});
