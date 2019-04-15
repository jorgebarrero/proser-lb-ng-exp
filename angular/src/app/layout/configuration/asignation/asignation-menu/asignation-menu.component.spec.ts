import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignationMenuComponent } from './asignation-menu.component';

describe('AsignationMenuComponent', () => {
  let component: AsignationMenuComponent;
  let fixture: ComponentFixture<AsignationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
