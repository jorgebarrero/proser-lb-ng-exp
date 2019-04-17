import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakDetailIntroComponent } from './break-detail-intro.component';

describe('BreakDetailIntroComponent', () => {
  let component: BreakDetailIntroComponent;
  let fixture: ComponentFixture<BreakDetailIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakDetailIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakDetailIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
