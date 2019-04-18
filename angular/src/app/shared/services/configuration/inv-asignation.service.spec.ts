import { TestBed } from '@angular/core/testing';

import { InvAsignationService } from './inv-asignation.service';

describe('InvAsignationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvAsignationService = TestBed.get(InvAsignationService);
    expect(service).toBeTruthy();
  });
});
