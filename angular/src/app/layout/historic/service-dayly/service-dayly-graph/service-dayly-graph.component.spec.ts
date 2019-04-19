import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDaylyGraphComponent } from './service-dayly-graph.component';

describe('ServiceDaylyGraphComponent', () => {
  let component: ServiceDaylyGraphComponent;
  let fixture: ComponentFixture<ServiceDaylyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDaylyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDaylyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
