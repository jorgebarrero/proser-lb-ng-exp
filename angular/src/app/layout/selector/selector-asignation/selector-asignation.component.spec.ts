import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAsignationComponent } from './selector-asignation.component';

describe('SelectorAsignationComponent', () => {
  let component: SelectorAsignationComponent;
  let fixture: ComponentFixture<SelectorAsignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorAsignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorAsignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
