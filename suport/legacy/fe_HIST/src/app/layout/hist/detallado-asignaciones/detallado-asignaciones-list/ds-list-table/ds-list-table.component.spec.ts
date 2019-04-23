import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsListTableComponent } from './ds-list-table.component';

describe('DsListTableComponent', () => {
  let component: DsListTableComponent;
  let fixture: ComponentFixture<DsListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
