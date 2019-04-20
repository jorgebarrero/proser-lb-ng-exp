import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorStartTimeComponent } from './selector-start-time.component';

describe('SelectorStartTimeComponent', () => {
  let component: SelectorStartTimeComponent;
  let fixture: ComponentFixture<SelectorStartTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorStartTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorStartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
