import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDetailIntroComponent } from './call-detail-intro.component';

describe('CallDetailIntroComponent', () => {
  let component: CallDetailIntroComponent;
  let fixture: ComponentFixture<CallDetailIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDetailIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
