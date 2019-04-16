import { TestBed } from '@angular/core/testing';

import { InvScaleService } from './inv-scale.service';

describe('InvScaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvScaleService = TestBed.get(InvScaleService);
    expect(service).toBeTruthy();
  });
});
