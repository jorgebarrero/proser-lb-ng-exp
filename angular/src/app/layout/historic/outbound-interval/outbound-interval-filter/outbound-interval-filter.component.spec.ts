import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundIntervalFilterComponent } from './outbound-interval-filter.component';

describe('OutboundIntervalFilterComponent', () => {
  let component: OutboundIntervalFilterComponent;
  let fixture: ComponentFixture<OutboundIntervalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundIntervalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundIntervalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
