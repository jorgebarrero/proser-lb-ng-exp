import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoricFilterComponent } from './service-historic-filter.component';

describe('ServiceHistoricFilterComponent', () => {
  let component: ServiceHistoricFilterComponent;
  let fixture: ComponentFixture<ServiceHistoricFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHistoricFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHistoricFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
