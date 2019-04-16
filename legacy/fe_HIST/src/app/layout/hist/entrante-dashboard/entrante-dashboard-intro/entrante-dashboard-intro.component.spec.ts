import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntanteDashboardIntroComponent } from './entante-dashboard-intro.component';

describe('EntanteDashboardIntroComponent', () => {
  let component: EntanteDashboardIntroComponent;
  let fixture: ComponentFixture<EntanteDashboardIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntanteDashboardIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntanteDashboardIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
