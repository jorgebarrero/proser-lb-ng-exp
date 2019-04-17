import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionFilterComponent } from './connection-filter.component';

describe('ConnectionFilterComponent', () => {
  let component: ConnectionFilterComponent;
  let fixture: ComponentFixture<ConnectionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
