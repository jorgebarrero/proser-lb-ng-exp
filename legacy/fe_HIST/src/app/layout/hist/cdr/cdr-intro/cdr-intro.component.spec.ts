import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrIntroComponent } from './cdr-intro.component';

describe('CdrIntroComponent', () => {
  let component: CdrIntroComponent;
  let fixture: ComponentFixture<CdrIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdrIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
