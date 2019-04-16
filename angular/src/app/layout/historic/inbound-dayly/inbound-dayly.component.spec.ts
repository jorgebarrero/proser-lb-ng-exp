import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundDaylyComponent } from './inbound-dayly.component';

describe('InboundDaylyComponent', () => {
  let component: InboundDaylyComponent;
  let fixture: ComponentFixture<InboundDaylyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundDaylyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundDaylyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
