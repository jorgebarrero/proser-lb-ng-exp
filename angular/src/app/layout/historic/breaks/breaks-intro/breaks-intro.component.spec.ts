import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaksIntroComponent } from './breaks-intro.component';

describe('BreaksIntroComponent', () => {
  let component: BreaksIntroComponent;
  let fixture: ComponentFixture<BreaksIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreaksIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreaksIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
