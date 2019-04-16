import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiListTableComponent } from './mi-list-table.component';

describe('MiListTableComponent', () => {
  let component: MiListTableComponent;
  let fixture: ComponentFixture<MiListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
