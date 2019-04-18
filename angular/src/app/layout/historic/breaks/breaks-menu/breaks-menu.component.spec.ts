import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaksMenuComponent } from './breaks-menu.component';

describe('BreaksMenuComponent', () => {
  let component: BreaksMenuComponent;
  let fixture: ComponentFixture<BreaksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreaksMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreaksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
