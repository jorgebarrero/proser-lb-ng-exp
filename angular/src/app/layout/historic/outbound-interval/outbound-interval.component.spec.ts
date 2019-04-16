import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundIntervalComponent } from './outbound-interval.component';

describe('OutboundIntervalComponent', () => {
  let component: OutboundIntervalComponent;
  let fixture: ComponentFixture<OutboundIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
