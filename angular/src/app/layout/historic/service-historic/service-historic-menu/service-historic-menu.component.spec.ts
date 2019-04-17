import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoricMenuComponent } from './service-historic-menu.component';

describe('ServiceHistoricMenuComponent', () => {
  let component: ServiceHistoricMenuComponent;
  let fixture: ComponentFixture<ServiceHistoricMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHistoricMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHistoricMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
