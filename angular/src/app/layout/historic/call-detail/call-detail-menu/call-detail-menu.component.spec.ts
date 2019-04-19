import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDetailMenuComponent } from './call-detail-menu.component';

describe('CallDetailMenuComponent', () => {
  let component: CallDetailMenuComponent;
  let fixture: ComponentFixture<CallDetailMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDetailMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
