import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDetailGraphComponent } from './operation-detail-graph.component';

describe('OperationDetailGraphComponent', () => {
  let component: OperationDetailGraphComponent;
  let fixture: ComponentFixture<OperationDetailGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDetailGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDetailGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
