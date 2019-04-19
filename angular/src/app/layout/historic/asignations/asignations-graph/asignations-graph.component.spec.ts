import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationsGraphComponent } from './asignations-graph.component';

describe('AsignationsGraphComponent', () => {
  let component: AsignationsGraphComponent;
  let fixture: ComponentFixture<AsignationsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
