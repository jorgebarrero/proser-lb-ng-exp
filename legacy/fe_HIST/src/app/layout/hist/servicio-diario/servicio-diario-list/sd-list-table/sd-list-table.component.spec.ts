import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdListTableComponent } from './sd-list-table.component';

describe('SdListTableComponent', () => {
  let component: SdListTableComponent;
  let fixture: ComponentFixture<SdListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
