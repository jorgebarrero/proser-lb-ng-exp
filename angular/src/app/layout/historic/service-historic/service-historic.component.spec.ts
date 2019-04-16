import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoricComponent } from './service-historic.component';

describe('ServiceHistoricComponent', () => {
  let component: ServiceHistoricComponent;
  let fixture: ComponentFixture<ServiceHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
