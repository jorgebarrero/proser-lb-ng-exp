import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorBreakComponent } from './selector-break.component';

describe('SelectorBreakComponent', () => {
  let component: SelectorBreakComponent;
  let fixture: ComponentFixture<SelectorBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
