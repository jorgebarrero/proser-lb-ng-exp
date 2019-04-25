import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdGraphComponent } from './cd-graph.component';

describe('CdGraphComponent', () => {
  let component: CdGraphComponent;
  let fixture: ComponentFixture<CdGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
