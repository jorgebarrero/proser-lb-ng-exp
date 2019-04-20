import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsIntroComponent } from './agents-intro.component';

describe('AgentsIntroComponent', () => {
  let component: AgentsIntroComponent;
  let fixture: ComponentFixture<AgentsIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
