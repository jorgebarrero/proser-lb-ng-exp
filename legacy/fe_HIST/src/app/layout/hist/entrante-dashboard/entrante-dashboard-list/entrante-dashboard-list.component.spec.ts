import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntanteDashboardListComponent } from './entante-dashboard-list.component';

describe('EntanteDashboardListComponent', () => {
  let component: EntanteDashboardListComponent;
  let fixture: ComponentFixture<EntanteDashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntanteDashboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntanteDashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
