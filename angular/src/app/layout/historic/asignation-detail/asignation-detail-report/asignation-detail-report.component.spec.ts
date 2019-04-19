import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationDetailReportComponent } from './asignation-detail-report.component';

describe('AsignationDetailReportComponent', () => {
  let component: AsignationDetailReportComponent;
  let fixture: ComponentFixture<AsignationDetailReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationDetailReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
