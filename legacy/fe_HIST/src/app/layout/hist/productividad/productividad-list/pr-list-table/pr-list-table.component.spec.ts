import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrListTableComponent } from './pr-list-table.component';

describe('PrListTableComponent', () => {
  let component: PrListTableComponent;
  let fixture: ComponentFixture<PrListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
