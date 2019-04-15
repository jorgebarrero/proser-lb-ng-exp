import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIntroComponent } from './filter-intro.component';

describe('FilterIntroComponent', () => {
  let component: FilterIntroComponent;
  let fixture: ComponentFixture<FilterIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
