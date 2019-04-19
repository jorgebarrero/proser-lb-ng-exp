import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDetailIntroComponent } from './operation-detail-intro.component';

describe('OperationDetailIntroComponent', () => {
  let component: OperationDetailIntroComponent;
  let fixture: ComponentFixture<OperationDetailIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationDetailIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDetailIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
