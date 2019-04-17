import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationsReportComponent } from './asignations-report.component';

describe('AsignationsReportComponent', () => {
  let component: AsignationsReportComponent;
  let fixture: ComponentFixture<AsignationsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
