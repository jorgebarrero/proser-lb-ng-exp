import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgListTableComponent } from './ag-list-table.component';

describe('AgListTableComponent', () => {
  let component: AgListTableComponent;
  let fixture: ComponentFixture<AgListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
