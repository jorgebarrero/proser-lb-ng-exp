import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakDetailReportComponent } from './break-detail-report.component';

describe('BreakDetailReportComponent', () => {
  let component: BreakDetailReportComponent;
  let fixture: ComponentFixture<BreakDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
