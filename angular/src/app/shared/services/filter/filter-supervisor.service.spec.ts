import { TestBed } from '@angular/core/testing';

import { FilterSupervisorService } from './filter-supervisor.service';

describe('FilterSupervisorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterSupervisorService = TestBed.get(FilterSupervisorService);
    expect(service).toBeTruthy();
  });
});
