import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundIntervalGraphComponent } from './inbound-interval-graph.component';

describe('InboundIntervalGraphComponent', () => {
  let component: InboundIntervalGraphComponent;
  let fixture: ComponentFixture<InboundIntervalGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundIntervalGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundIntervalGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
