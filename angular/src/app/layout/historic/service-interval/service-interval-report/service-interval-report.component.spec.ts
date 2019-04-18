import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIntervalReportComponent } from './service-interval-report.component';

describe('ServiceIntervalReportComponent', () => {
  let component: ServiceIntervalReportComponent;
  let fixture: ComponentFixture<ServiceIntervalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIntervalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIntervalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
