import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundDaylyReportComponent } from './outbound-dayly-report.component';

describe('OutboundDaylyReportComponent', () => {
  let component: OutboundDaylyReportComponent;
  let fixture: ComponentFixture<OutboundDaylyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundDaylyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundDaylyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
