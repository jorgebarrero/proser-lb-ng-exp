import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaksFilterComponent } from './breaks-filter.component';

describe('BreaksFilterComponent', () => {
  let component: BreaksFilterComponent;
  let fixture: ComponentFixture<BreaksFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreaksFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreaksFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
