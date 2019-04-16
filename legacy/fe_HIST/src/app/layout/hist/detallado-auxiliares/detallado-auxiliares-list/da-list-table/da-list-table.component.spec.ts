import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaListTableComponent } from './da-list-table.component';

describe('DaListTableComponent', () => {
  let component: DaListTableComponent;
  let fixture: ComponentFixture<DaListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
