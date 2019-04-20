import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsDetailComponent } from './agents-detail.component';

describe('AgentsDetailComponent', () => {
  let component: AgentsDetailComponent;
  let fixture: ComponentFixture<AgentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
