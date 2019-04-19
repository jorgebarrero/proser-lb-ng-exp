import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorLinesComponent } from './selector-lines.component';

describe('SelectorLinesComponent', () => {
  let component: SelectorLinesComponent;
  let fixture: ComponentFixture<SelectorLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
