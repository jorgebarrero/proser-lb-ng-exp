import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignIntroComponent } from './campaign-intro.component';

describe('CampaignIntroComponent', () => {
  let component: CampaignIntroComponent;
  let fixture: ComponentFixture<CampaignIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
