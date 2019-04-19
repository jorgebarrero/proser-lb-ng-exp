import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoricGraphComponent } from './service-historic-graph.component';

describe('ServiceHistoricGraphComponent', () => {
  let component: ServiceHistoricGraphComponent;
  let fixture: ComponentFixture<ServiceHistoricGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHistoricGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHistoricGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
