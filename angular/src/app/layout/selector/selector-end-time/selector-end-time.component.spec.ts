import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorEndTimeComponent } from './selector-end-time.component';

describe('SelectorEndTimeComponent', () => {
  let component: SelectorEndTimeComponent;
  let fixture: ComponentFixture<SelectorEndTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorEndTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorEndTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
