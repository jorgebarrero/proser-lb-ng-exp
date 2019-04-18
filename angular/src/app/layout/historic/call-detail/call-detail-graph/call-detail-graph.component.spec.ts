import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDetailGraphComponent } from './call-detail-graph.component';

describe('CallDetailGraphComponent', () => {
  let component: CallDetailGraphComponent;
  let fixture: ComponentFixture<CallDetailGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDetailGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
