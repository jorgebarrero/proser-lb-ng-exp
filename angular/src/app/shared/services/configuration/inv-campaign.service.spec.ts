import { TestBed } from '@angular/core/testing';

import { InvCampaignService } from './inv-campaign.service';

describe('InvCampaignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvCampaignService = TestBed.get(InvCampaignService);
    expect(service).toBeTruthy();
  });
});
