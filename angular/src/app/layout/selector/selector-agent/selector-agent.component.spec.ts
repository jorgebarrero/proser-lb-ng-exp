import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAgentComponent } from './selector-agent.component';

describe('SelectorAgentComponent', () => {
  let component: SelectorAgentComponent;
  let fixture: ComponentFixture<SelectorAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
