import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakIntroComponent } from './break-intro.component';

describe('BreakIntroComponent', () => {
  let component: BreakIntroComponent;
  let fixture: ComponentFixture<BreakIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
