import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticFilterComponent } from './automatic-filter.component';

describe('AutomaticFilterComponent', () => {
  let component: AutomaticFilterComponent;
  let fixture: ComponentFixture<AutomaticFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
