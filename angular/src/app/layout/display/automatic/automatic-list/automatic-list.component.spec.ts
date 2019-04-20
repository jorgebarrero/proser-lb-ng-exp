import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticListComponent } from './automatic-list.component';

describe('AutomaticListComponent', () => {
  let component: AutomaticListComponent;
  let fixture: ComponentFixture<AutomaticListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
