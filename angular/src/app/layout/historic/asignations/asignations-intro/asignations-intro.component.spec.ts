import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationsIntroComponent } from './asignations-intro.component';

describe('AsignationsIntroComponent', () => {
  let component: AsignationsIntroComponent;
  let fixture: ComponentFixture<AsignationsIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationsIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
