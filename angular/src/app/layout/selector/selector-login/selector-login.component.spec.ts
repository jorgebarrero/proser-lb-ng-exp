import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorLoginComponent } from './selector-login.component';

describe('SelectorLoginComponent', () => {
  let component: SelectorLoginComponent;
  let fixture: ComponentFixture<SelectorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
