import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCampaignComponent } from './selector-campaign.component';

describe('SelectorCampaignComponent', () => {
  let component: SelectorCampaignComponent;
  let fixture: ComponentFixture<SelectorCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
