import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigIntroComponent } from './config-intro.component';

describe('ConfigIntroComponent', () => {
  let component: ConfigIntroComponent;
  let fixture: ComponentFixture<ConfigIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
