import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorDetailComponent } from './supervisor-detail.component';

describe('SupervisorDetailComponent', () => {
  let component: SupervisorDetailComponent;
  let fixture: ComponentFixture<SupervisorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
