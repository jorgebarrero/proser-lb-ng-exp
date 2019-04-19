import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundFilterComponent } from './outbound-filter.component';

describe('OutboundFilterComponent', () => {
  let component: OutboundFilterComponent;
  let fixture: ComponentFixture<OutboundFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutboundFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutboundFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
