import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorScheduleComponent } from './selector-schedule.component';

describe('SelectorScheduleComponent', () => {
  let component: SelectorScheduleComponent;
  let fixture: ComponentFixture<SelectorScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
