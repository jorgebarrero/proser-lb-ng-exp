import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationAddComponent } from './asignation-add.component';

describe('AsignationAddComponent', () => {
  let component: AsignationAddComponent;
  let fixture: ComponentFixture<AsignationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
