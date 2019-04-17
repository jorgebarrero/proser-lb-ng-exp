import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundFilterComponent } from './inbound-filter.component';

describe('InboundFilterComponent', () => {
  let component: InboundFilterComponent;
  let fixture: ComponentFixture<InboundFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
