import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDetailReportComponent } from './operation-detail-report.component';

describe('OperationDetailReportComponent', () => {
  let component: OperationDetailReportComponent;
  let fixture: ComponentFixture<OperationDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
