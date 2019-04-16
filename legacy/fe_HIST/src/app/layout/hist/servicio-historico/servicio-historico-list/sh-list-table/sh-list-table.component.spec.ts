import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShListTableComponent } from './sh-list-table.component';

describe('ShListTableComponent', () => {
  let component: ShListTableComponent;
  let fixture: ComponentFixture<ShListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
