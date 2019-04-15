import { TestBed } from '@angular/core/testing';

import { InvScheduleService } from './inv-schedule.service';

describe('InvScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvScheduleService = TestBed.get(InvScheduleService);
    expect(service).toBeTruthy();
  });
});
