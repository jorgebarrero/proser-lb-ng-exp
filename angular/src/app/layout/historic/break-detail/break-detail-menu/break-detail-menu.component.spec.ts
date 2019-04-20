import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakDetailMenuComponent } from './break-detail-menu.component';

describe('BreakDetailMenuComponent', () => {
  let component: BreakDetailMenuComponent;
  let fixture: ComponentFixture<BreakDetailMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakDetailMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
