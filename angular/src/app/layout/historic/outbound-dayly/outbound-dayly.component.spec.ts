import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundDaylyComponent } from './outbound-dayly.component';

describe('OutboundDaylyComponent', () => {
  let component: OutboundDaylyComponent;
  let fixture: ComponentFixture<OutboundDaylyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundDaylyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundDaylyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
