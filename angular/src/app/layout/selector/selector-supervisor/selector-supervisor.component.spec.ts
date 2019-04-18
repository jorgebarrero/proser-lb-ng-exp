import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorSupervisorComponent } from './selector-supervisor.component';

describe('SelectorSupervisorComponent', () => {
  let component: SelectorSupervisorComponent;
  let fixture: ComponentFixture<SelectorSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
