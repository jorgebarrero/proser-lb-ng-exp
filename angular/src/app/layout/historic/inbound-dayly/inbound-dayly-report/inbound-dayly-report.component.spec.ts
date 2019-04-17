import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundDaylyReportComponent } from './inbound-dayly-report.component';

describe('InboundDaylyReportComponent', () => {
  let component: InboundDaylyReportComponent;
  let fixture: ComponentFixture<InboundDaylyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundDaylyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundDaylyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
