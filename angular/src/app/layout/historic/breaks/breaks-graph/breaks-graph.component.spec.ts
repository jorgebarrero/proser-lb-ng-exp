import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaksGraphComponent } from './breaks-graph.component';

describe('BreaksGraphComponent', () => {
  let component: BreaksGraphComponent;
  let fixture: ComponentFixture<BreaksGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreaksGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreaksGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
