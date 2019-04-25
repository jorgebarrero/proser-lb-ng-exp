import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EiGraphComponent } from './ei-graph.component';

describe('EiGraphComponent', () => {
  let component: EiGraphComponent;
  let fixture: ComponentFixture<EiGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
