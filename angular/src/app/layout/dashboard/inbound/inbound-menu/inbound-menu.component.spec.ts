import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundMenuComponent } from './inbound-menu.component';

describe('InboundMenuComponent', () => {
  let component: InboundMenuComponent;
  let fixture: ComponentFixture<InboundMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
