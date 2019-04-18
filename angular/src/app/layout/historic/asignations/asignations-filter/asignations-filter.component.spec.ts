import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationsFilterComponent } from './asignations-filter.component';

describe('AsignationsFilterComponent', () => {
  let component: AsignationsFilterComponent;
  let fixture: ComponentFixture<AsignationsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
