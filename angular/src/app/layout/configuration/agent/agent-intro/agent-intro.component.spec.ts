import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentIntroComponent } from './agent-intro.component';

describe('AgentIntroComponent', () => {
  let component: AgentIntroComponent;
  let fixture: ComponentFixture<AgentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
