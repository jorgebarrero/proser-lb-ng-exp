import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLineasComponent } from './config-lineas.component';

describe('ConfigLineasComponent', () => {
  let component: ConfigLineasComponent;
  let fixture: ComponentFixture<ConfigLineasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigLineasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
