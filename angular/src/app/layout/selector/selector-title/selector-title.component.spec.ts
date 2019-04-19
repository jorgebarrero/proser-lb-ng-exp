import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTitleComponent } from './selector-title.component';

describe('SelectorTitleComponent', () => {
  let component: SelectorTitleComponent;
  let fixture: ComponentFixture<SelectorTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
