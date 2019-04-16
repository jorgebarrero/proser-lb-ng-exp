import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakMenuComponent } from './break-menu.component';

describe('BreakMenuComponent', () => {
  let component: BreakMenuComponent;
  let fixture: ComponentFixture<BreakMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
