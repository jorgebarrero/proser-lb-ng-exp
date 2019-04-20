import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationDetailFilterComponent } from './asignation-detail-filter.component';

describe('AsignationDetailFilterComponent', () => {
  let component: AsignationDetailFilterComponent;
  let fixture: ComponentFixture<AsignationDetailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationDetailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
