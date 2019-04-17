import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundIntervalMenuComponent } from './inbound-interval-menu.component';

describe('InboundIntervalMenuComponent', () => {
  let component: InboundIntervalMenuComponent;
  let fixture: ComponentFixture<InboundIntervalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundIntervalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundIntervalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
