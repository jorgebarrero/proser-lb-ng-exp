import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakDetailComponent } from './break-detail.component';

describe('BreakDetailComponent', () => {
  let component: BreakDetailComponent;
  let fixture: ComponentFixture<BreakDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
