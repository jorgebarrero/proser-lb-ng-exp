import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlListTableComponent } from './dl-list-table.component';

describe('DlListTableComponent', () => {
  let component: DlListTableComponent;
  let fixture: ComponentFixture<DlListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
