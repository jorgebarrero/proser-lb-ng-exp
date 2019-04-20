import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsMenuComponent } from './agents-menu.component';

describe('AgentsMenuComponent', () => {
  let component: AgentsMenuComponent;
  let fixture: ComponentFixture<AgentsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
