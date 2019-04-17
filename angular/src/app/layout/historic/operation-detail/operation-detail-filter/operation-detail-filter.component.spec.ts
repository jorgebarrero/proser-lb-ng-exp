import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDetailFilterComponent } from './operation-detail-filter.component';

describe('OperationDetailFilterComponent', () => {
  let component: OperationDetailFilterComponent;
  let fixture: ComponentFixture<OperationDetailFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDetailFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDetailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
