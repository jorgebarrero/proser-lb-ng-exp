import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundIntroComponent } from './inbound-intro.component';

describe('InboundIntroComponent', () => {
  let component: InboundIntroComponent;
  let fixture: ComponentFixture<InboundIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
