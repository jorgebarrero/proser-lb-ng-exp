import { TestBed } from '@angular/core/testing';

import { InvClientService } from './inv-client.service';

describe('InvClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvClientService = TestBed.get(InvClientService);
    expect(service).toBeTruthy();
  });
});
