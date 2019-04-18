import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntroComponent } from './dashboard-intro.component';

describe('DashboardIntroComponent', () => {
  let component: DashboardIntroComponent;
  let fixture: ComponentFixture<DashboardIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
