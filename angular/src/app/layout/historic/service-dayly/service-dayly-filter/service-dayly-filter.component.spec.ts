import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDaylyFilterComponent } from './service-dayly-filter.component';

describe('ServiceDaylyFilterComponent', () => {
  let component: ServiceDaylyFilterComponent;
  let fixture: ComponentFixture<ServiceDaylyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDaylyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDaylyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
