import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundIntervalIntroComponent } from './inbound-interval-intro.component';

describe('InboundIntervalIntroComponent', () => {
  let component: InboundIntervalIntroComponent;
  let fixture: ComponentFixture<InboundIntervalIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundIntervalIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundIntervalIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
