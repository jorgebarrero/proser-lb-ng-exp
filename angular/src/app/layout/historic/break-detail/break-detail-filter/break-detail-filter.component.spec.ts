import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakDetailFilterComponent } from './break-detail-filter.component';

describe('BreakDetailFilterComponent', () => {
  let component: BreakDetailFilterComponent;
  let fixture: ComponentFixture<BreakDetailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakDetailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
