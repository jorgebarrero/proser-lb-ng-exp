import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleMenuComponent } from './scale-menu.component';

describe('ScaleMenuComponent', () => {
  let component: ScaleMenuComponent;
  let fixture: ComponentFixture<ScaleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
