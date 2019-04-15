import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSupervisorComponent } from './filter-supervisor.component';

describe('FilterSupervisorComponent', () => {
  let component: FilterSupervisorComponent;
  let fixture: ComponentFixture<FilterSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
