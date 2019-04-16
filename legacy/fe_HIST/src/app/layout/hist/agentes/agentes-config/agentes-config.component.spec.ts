import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesConfigComponent } from './agentes-config.component';

describe('AgentesConfigComponent', () => {
  let component: AgentesConfigComponent;
  let fixture: ComponentFixture<AgentesConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentesConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
