import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnListTableComponent } from './sn-list-table.component';

describe('SnListTableComponent', () => {
  let component: SnListTableComponent;
  let fixture: ComponentFixture<SnListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
