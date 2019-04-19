import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundDaylyMenuComponent } from './outbound-dayly-menu.component';

describe('OutboundDaylyMenuComponent', () => {
  let component: OutboundDaylyMenuComponent;
  let fixture: ComponentFixture<OutboundDaylyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundDaylyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundDaylyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
