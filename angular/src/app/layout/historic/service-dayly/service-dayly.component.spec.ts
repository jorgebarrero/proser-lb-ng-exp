import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDaylyComponent } from './service-dayly.component';

describe('ServiceDaylyComponent', () => {
  let component: ServiceDaylyComponent;
  let fixture: ComponentFixture<ServiceDaylyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDaylyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDaylyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
