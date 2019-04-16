import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIntervalComponent } from './service-interval.component';

describe('ServiceIntervalComponent', () => {
  let component: ServiceIntervalComponent;
  let fixture: ComponentFixture<ServiceIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
