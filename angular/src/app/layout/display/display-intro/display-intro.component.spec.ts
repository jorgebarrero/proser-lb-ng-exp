import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIntroComponent } from './display-intro.component';

describe('DisplayIntroComponent', () => {
  let component: DisplayIntroComponent;
  let fixture: ComponentFixture<DisplayIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
