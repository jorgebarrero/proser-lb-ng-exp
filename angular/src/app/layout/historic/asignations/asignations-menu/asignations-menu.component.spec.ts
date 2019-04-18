import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationsMenuComponent } from './asignations-menu.component';

describe('AsignationsMenuComponent', () => {
  let component: AsignationsMenuComponent;
  let fixture: ComponentFixture<AsignationsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
