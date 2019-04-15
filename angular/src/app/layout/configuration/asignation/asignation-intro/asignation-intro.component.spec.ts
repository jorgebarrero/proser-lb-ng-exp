import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationIntroComponent } from './asignation-intro.component';

describe('AsignationIntroComponent', () => {
  let component: AsignationIntroComponent;
  let fixture: ComponentFixture<AsignationIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
