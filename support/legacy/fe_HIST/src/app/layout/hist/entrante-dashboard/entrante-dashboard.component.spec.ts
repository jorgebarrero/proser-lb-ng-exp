import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteDashboardComponent } from './entrante-dashboard.component';

describe('EntranteDashboardComponent', () => {
  let component: EntranteDashboardComponent;
  let fixture: ComponentFixture<EntranteDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
