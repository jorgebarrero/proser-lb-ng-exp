import { TestBed } from '@angular/core/testing';

import { InvAgentService } from './inv-agent.service';

describe('InvAgentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvAgentService = TestBed.get(InvAgentService);
    expect(service).toBeTruthy();
  });
});
