import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundDaylyGraphComponent } from './outbound-dayly-graph.component';

describe('OutboundDaylyGraphComponent', () => {
  let component: OutboundDaylyGraphComponent;
  let fixture: ComponentFixture<OutboundDaylyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundDaylyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundDaylyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
