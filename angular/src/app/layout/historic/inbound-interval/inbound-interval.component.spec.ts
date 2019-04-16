import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundIntervalComponent } from './inbound-interval.component';

describe('InboundIntervalComponent', () => {
  let component: InboundIntervalComponent;
  let fixture: ComponentFixture<InboundIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
