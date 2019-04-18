import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundDaylyGraphComponent } from './inbound-dayly-graph.component';

describe('InboundDaylyGraphComponent', () => {
  let component: InboundDaylyGraphComponent;
  let fixture: ComponentFixture<InboundDaylyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundDaylyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundDaylyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
