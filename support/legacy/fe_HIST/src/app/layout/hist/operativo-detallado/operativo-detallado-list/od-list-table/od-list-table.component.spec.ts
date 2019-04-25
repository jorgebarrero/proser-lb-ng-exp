import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdListTableComponent } from './od-list-table.component';

describe('OdListTableComponent', () => {
  let component: OdListTableComponent;
  let fixture: ComponentFixture<OdListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
