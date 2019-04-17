import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundDaylyFilterComponent } from './inbound-dayly-filter.component';

describe('InboundDaylyFilterComponent', () => {
  let component: InboundDaylyFilterComponent;
  let fixture: ComponentFixture<InboundDaylyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundDaylyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundDaylyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
