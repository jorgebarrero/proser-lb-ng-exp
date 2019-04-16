import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigModoComponent } from './config-modo.component';

describe('ConfigModoComponent', () => {
  let component: ConfigModoComponent;
  let fixture: ComponentFixture<ConfigModoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigModoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigModoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
