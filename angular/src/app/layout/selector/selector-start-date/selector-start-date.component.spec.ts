import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorStartDateComponent } from './selector-start-date.component';

describe('SelectorStartDateComponent', () => {
  let component: SelectorStartDateComponent;
  let fixture: ComponentFixture<SelectorStartDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorStartDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorStartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
