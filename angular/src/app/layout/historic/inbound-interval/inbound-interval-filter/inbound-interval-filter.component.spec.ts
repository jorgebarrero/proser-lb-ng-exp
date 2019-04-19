import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundIntervalFilterComponent } from './inbound-interval-filter.component';

describe('InboundIntervalFilterComponent', () => {
  let component: InboundIntervalFilterComponent;
  let fixture: ComponentFixture<InboundIntervalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundIntervalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundIntervalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
