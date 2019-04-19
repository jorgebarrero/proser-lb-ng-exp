import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundIntervalMenuComponent } from './outbound-interval-menu.component';

describe('OutboundIntervalMenuComponent', () => {
  let component: OutboundIntervalMenuComponent;
  let fixture: ComponentFixture<OutboundIntervalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundIntervalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundIntervalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
