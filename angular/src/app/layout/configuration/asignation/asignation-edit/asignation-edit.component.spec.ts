import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationEditComponent } from './asignation-edit.component';

describe('AsignationEditComponent', () => {
  let component: AsignationEditComponent;
  let fixture: ComponentFixture<AsignationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
