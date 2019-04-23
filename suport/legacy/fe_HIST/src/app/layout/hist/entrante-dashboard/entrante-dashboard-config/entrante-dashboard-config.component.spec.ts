import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntanteDashboardConfigComponent } from './entante-dashboard-config.component';

describe('EntanteDashboardConfigComponent', () => {
  let component: EntanteDashboardConfigComponent;
  let fixture: ComponentFixture<EntanteDashboardConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntanteDashboardConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntanteDashboardConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
