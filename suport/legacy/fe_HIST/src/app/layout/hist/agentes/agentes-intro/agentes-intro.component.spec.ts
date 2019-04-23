import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesIntroComponent } from './agentes-intro.component';

describe('AgentesIntroComponent', () => {
  let component: AgentesIntroComponent;
  let fixture: ComponentFixture<AgentesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
