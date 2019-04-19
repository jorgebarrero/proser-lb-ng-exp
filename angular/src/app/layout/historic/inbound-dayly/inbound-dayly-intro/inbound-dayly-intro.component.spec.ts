import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundDaylyIntroComponent } from './inbound-dayly-intro.component';

describe('InboundDaylyIntroComponent', () => {
  let component: InboundDaylyIntroComponent;
  let fixture: ComponentFixture<InboundDaylyIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundDaylyIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundDaylyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
