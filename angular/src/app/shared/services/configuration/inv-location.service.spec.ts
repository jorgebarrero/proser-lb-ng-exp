import { TestBed } from '@angular/core/testing';

import { InvLocationService } from './inv-location.service';

describe('InvLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvLocationService = TestBed.get(InvLocationService);
    expect(service).toBeTruthy();
  });
});
