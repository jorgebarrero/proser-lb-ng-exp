import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundIntervalGraphComponent } from './outbound-interval-graph.component';

describe('OutboundIntervalGraphComponent', () => {
  let component: OutboundIntervalGraphComponent;
  let fixture: ComponentFixture<OutboundIntervalGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundIntervalGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundIntervalGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
