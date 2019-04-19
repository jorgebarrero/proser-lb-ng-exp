import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIntervalGraphComponent } from './service-interval-graph.component';

describe('ServiceIntervalGraphComponent', () => {
  let component: ServiceIntervalGraphComponent;
  let fixture: ComponentFixture<ServiceIntervalGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIntervalGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIntervalGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
