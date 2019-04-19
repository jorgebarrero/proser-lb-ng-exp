import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorScaleComponent } from './selector-scale.component';

describe('SelectorScaleComponent', () => {
  let component: SelectorScaleComponent;
  let fixture: ComponentFixture<SelectorScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
