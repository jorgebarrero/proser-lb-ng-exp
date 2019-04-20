import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticMenuComponent } from './automatic-menu.component';

describe('AutomaticMenuComponent', () => {
  let component: AutomaticMenuComponent;
  let fixture: ComponentFixture<AutomaticMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
