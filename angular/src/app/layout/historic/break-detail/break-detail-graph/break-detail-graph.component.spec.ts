import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakDetailGraphComponent } from './break-detail-graph.component';

describe('BreakDetailGraphComponent', () => {
  let component: BreakDetailGraphComponent;
  let fixture: ComponentFixture<BreakDetailGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakDetailGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakDetailGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
