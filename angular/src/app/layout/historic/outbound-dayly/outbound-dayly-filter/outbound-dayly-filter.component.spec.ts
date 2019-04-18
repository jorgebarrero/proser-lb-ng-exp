import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundDaylyFilterComponent } from './outbound-dayly-filter.component';

describe('OutboundDaylyFilterComponent', () => {
  let component: OutboundDaylyFilterComponent;
  let fixture: ComponentFixture<OutboundDaylyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundDaylyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundDaylyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
