import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionIntroComponent } from './connection-intro.component';

describe('ConnectionIntroComponent', () => {
  let component: ConnectionIntroComponent;
  let fixture: ComponentFixture<ConnectionIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
