import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDaylyIntroComponent } from './service-dayly-intro.component';

describe('ServiceDaylyIntroComponent', () => {
  let component: ServiceDaylyIntroComponent;
  let fixture: ComponentFixture<ServiceDaylyIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDaylyIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDaylyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
