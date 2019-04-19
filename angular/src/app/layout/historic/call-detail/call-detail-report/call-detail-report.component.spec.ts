import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDetailReportComponent } from './call-detail-report.component';

describe('CallDetailReportComponent', () => {
  let component: CallDetailReportComponent;
  let fixture: ComponentFixture<CallDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
