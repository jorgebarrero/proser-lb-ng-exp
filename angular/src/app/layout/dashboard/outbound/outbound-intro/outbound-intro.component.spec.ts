import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundIntroComponent } from './outbound-intro.component';

describe('OutboundIntroComponent', () => {
  let component: OutboundIntroComponent;
  let fixture: ComponentFixture<OutboundIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
