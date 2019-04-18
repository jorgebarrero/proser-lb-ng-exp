import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorIntervalComponent } from './selector-interval.component';

describe('SelectorIntervalComponent', () => {
  let component: SelectorIntervalComponent;
  let fixture: ComponentFixture<SelectorIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
