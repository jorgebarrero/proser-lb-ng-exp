import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticIntroComponent } from './automatic-intro.component';

describe('AutomaticIntroComponent', () => {
  let component: AutomaticIntroComponent;
  let fixture: ComponentFixture<AutomaticIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
