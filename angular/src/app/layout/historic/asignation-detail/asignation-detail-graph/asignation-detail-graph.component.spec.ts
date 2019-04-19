import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationDetailGraphComponent } from './asignation-detail-graph.component';

describe('AsignationDetailGraphComponent', () => {
  let component: AsignationDetailGraphComponent;
  let fixture: ComponentFixture<AsignationDetailGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationDetailGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationDetailGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
