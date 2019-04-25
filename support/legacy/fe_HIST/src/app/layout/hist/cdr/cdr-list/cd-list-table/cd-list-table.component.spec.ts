import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdListTableComponent } from './cd-list-table.component';

describe('CdListTableComponent', () => {
  let component: CdListTableComponent;
  let fixture: ComponentFixture<CdListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
