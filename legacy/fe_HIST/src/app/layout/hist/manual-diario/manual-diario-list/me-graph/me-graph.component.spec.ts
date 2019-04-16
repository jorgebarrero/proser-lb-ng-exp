import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeGraphComponent } from './me-graph.component';

describe('MeGraphComponent', () => {
  let component: MeGraphComponent;
  let fixture: ComponentFixture<MeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
