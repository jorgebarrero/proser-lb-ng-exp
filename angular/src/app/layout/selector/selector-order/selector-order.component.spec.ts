import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorOrderComponent } from './selector-order.component';

describe('SelectorOrderComponent', () => {
  let component: SelectorOrderComponent;
  let fixture: ComponentFixture<SelectorOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
