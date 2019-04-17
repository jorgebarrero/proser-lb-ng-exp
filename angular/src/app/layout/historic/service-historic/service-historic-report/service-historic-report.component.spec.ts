import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoricReportComponent } from './service-historic-report.component';

describe('ServiceHistoricReportComponent', () => {
  let component: ServiceHistoricReportComponent;
  let fixture: ComponentFixture<ServiceHistoricReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHistoricReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHistoricReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
