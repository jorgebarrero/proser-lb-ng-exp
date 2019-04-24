import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigColaComponent } from './config-cola.component';

describe('ConfigColaComponent', () => {
  let component: ConfigColaComponent;
  let fixture: ComponentFixture<ConfigColaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigColaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
