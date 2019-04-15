import { TestBed } from '@angular/core/testing';

import { InvBreakService } from './inv-break.service';

describe('InvBreakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvBreakService = TestBed.get(InvBreakService);
    expect(service).toBeTruthy();
  });
});
