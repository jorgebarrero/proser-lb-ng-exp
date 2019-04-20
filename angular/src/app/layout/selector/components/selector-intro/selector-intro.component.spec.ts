import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorIntroComponent } from './selector-intro.component';

describe('SelectorIntroComponent', () => {
  let component: SelectorIntroComponent;
  let fixture: ComponentFixture<SelectorIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
