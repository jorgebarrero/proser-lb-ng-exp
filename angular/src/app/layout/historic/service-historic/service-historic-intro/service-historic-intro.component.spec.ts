import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHistoricIntroComponent } from './service-historic-intro.component';

describe('ServiceHistoricIntroComponent', () => {
  let component: ServiceHistoricIntroComponent;
  let fixture: ComponentFixture<ServiceHistoricIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHistoricIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHistoricIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
