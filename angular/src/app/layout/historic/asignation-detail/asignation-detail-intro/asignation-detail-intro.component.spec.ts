import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationDetailIntroComponent } from './asignation-detail-intro.component';

describe('AsignationDetailIntroComponent', () => {
  let component: AsignationDetailIntroComponent;
  let fixture: ComponentFixture<AsignationDetailIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationDetailIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationDetailIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
