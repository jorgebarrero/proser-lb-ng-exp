import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorLimitComponent } from './selector-limit.component';

describe('SelectorLimitComponent', () => {
  let component: SelectorLimitComponent;
  let fixture: ComponentFixture<SelectorLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
