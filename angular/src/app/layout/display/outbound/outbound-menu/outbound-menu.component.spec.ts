import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundMenuComponent } from './outbound-menu.component';

describe('OutboundMenuComponent', () => {
  let component: OutboundMenuComponent;
  let fixture: ComponentFixture<OutboundMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
