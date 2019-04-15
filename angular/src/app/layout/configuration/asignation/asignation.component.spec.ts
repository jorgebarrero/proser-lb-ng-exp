import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationComponent } from './asignation.component';

describe('AsignationComponent', () => {
  let component: AsignationComponent;
  let fixture: ComponentFixture<AsignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
