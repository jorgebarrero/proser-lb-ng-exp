import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiGraphComponent } from './mi-graph.component';

describe('MiGraphComponent', () => {
  let component: MiGraphComponent;
  let fixture: ComponentFixture<MiGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
