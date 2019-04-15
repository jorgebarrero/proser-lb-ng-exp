import { TestBed } from '@angular/core/testing';

import { InvQueueService } from './inv-queue.service';

describe('InvQueueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvQueueService = TestBed.get(InvQueueService);
    expect(service).toBeTruthy();
  });
});
