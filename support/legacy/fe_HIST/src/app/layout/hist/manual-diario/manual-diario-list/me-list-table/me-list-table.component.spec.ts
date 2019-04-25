import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeListTableComponent } from './me-list-table.component';

describe('MeListTableComponent', () => {
  let component: MeListTableComponent;
  let fixture: ComponentFixture<MeListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
