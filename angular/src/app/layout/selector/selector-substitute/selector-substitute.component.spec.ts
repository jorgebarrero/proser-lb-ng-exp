import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorSubstituteComponent } from './selector-substitute.component';

describe('SelectorSubstituteComponent', () => {
  let component: SelectorSubstituteComponent;
  let fixture: ComponentFixture<SelectorSubstituteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorSubstituteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorSubstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
