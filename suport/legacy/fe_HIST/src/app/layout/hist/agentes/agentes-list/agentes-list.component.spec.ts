import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesListComponent } from './agentes-list.component';

describe('AgentesListComponent', () => {
  let component: AgentesListComponent;
  let fixture: ComponentFixture<AgentesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
