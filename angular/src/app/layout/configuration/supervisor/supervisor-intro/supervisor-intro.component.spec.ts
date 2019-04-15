import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorIntroComponent } from './supervisor-intro.component';

describe('SupervisorIntroComponent', () => {
  let component: SupervisorIntroComponent;
  let fixture: ComponentFixture<SupervisorIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
