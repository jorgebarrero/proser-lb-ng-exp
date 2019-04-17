import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundDetailComponent } from './inbound-detail.component';

describe('InboundDetailComponent', () => {
  let component: InboundDetailComponent;
  let fixture: ComponentFixture<InboundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
