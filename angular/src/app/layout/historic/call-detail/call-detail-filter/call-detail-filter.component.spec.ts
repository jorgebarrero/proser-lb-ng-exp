import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDetailFilterComponent } from './call-detail-filter.component';

describe('CallDetailFilterComponent', () => {
  let component: CallDetailFilterComponent;
  let fixture: ComponentFixture<CallDetailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDetailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
