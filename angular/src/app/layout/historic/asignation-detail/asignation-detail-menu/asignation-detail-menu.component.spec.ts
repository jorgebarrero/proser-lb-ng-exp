import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationDetailMenuComponent } from './asignation-detail-menu.component';

describe('AsignationDetailMenuComponent', () => {
  let component: AsignationDetailMenuComponent;
  let fixture: ComponentFixture<AsignationDetailMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationDetailMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
