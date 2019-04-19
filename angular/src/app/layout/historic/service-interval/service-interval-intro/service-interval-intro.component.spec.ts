import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIntervalIntroComponent } from './service-interval-intro.component';

describe('ServiceIntervalIntroComponent', () => {
  let component: ServiceIntervalIntroComponent;
  let fixture: ComponentFixture<ServiceIntervalIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceIntervalIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIntervalIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
