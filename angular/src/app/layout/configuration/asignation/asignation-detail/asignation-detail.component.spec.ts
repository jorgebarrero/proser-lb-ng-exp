import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationDetailComponent } from './asignation-detail.component';

describe('AsignationDetailComponent', () => {
  let component: AsignationDetailComponent;
  let fixture: ComponentFixture<AsignationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
