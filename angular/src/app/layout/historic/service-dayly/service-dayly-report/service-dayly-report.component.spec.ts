import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDaylyReportComponent } from './service-dayly-report.component';

describe('ServiceDaylyReportComponent', () => {
  let component: ServiceDaylyReportComponent;
  let fixture: ComponentFixture<ServiceDaylyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDaylyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDaylyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
