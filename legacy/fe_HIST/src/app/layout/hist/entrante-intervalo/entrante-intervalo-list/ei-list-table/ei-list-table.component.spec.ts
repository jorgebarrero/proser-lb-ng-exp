import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdListTableComponent } from './ei-list-table.component';

describe('EdListTableComponent', () => {
  let component: EdListTableComponent;
  let fixture: ComponentFixture<EdListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
