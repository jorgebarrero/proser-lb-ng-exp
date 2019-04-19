import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorEndDateComponent } from './selector-end-date.component';

describe('SelectorEndDateComponent', () => {
  let component: SelectorEndDateComponent;
  let fixture: ComponentFixture<SelectorEndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorEndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorEndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
