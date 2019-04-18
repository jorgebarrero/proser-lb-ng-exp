import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIntervalMenuComponent } from './service-interval-menu.component';

describe('ServiceIntervalMenuComponent', () => {
  let component: ServiceIntervalMenuComponent;
  let fixture: ComponentFixture<ServiceIntervalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIntervalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIntervalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
