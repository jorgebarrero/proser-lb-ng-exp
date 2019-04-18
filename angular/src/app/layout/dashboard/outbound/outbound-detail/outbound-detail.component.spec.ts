import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundDetailComponent } from './outbound-detail.component';

describe('OutboundDetailComponent', () => {
  let component: OutboundDetailComponent;
  let fixture: ComponentFixture<OutboundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
