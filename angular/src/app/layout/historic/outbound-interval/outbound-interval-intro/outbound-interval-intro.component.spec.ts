import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundIntervalIntroComponent } from './outbound-interval-intro.component';

describe('OutboundIntervalIntroComponent', () => {
  let component: OutboundIntervalIntroComponent;
  let fixture: ComponentFixture<OutboundIntervalIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundIntervalIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundIntervalIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
