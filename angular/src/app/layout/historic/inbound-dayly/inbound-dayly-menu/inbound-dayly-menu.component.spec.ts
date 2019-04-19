import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundDaylyMenuComponent } from './inbound-dayly-menu.component';

describe('InboundDaylyMenuComponent', () => {
  let component: InboundDaylyMenuComponent;
  let fixture: ComponentFixture<InboundDaylyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundDaylyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundDaylyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
