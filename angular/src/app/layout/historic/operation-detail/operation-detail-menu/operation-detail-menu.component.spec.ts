import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDetailMenuComponent } from './operation-detail-menu.component';

describe('OperationDetailMenuComponent', () => {
  let component: OperationDetailMenuComponent;
  let fixture: ComponentFixture<OperationDetailMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDetailMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
