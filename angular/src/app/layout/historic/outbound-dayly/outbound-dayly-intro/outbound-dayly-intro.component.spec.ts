import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundDaylyIntroComponent } from './outbound-dayly-intro.component';

describe('OutboundDaylyIntroComponent', () => {
  let component: OutboundDaylyIntroComponent;
  let fixture: ComponentFixture<OutboundDaylyIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundDaylyIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundDaylyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
