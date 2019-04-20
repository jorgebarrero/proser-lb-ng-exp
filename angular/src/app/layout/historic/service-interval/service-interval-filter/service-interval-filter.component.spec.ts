import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIntervalFilterComponent } from './service-interval-filter.component';

describe('ServiceIntervalFilterComponent', () => {
  let component: ServiceIntervalFilterComponent;
  let fixture: ComponentFixture<ServiceIntervalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIntervalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIntervalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
