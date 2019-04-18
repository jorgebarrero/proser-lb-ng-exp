import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDaylyMenuComponent } from './service-dayly-menu.component';

describe('ServiceDaylyMenuComponent', () => {
  let component: ServiceDaylyMenuComponent;
  let fixture: ComponentFixture<ServiceDaylyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDaylyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDaylyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
