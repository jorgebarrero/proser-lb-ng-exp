import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdGraphComponent } from './ed-graph.component';

describe('EdGraphComponent', () => {
  let component: EdGraphComponent;
  let fixture: ComponentFixture<EdGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
