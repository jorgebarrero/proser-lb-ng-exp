import { TestBed } from '@angular/core/testing';

import { SupervisorService } from './inv-supervisor.service';

describe('InvSupervisorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvSupervisorService = TestBed.get(SupervisorService);
    expect(service).toBeTruthy();
  });
});
