import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigIntervaloComponent } from './config-intervalo.component';

describe('ConfigIntervaloComponent', () => {
  let component: ConfigIntervaloComponent;
  let fixture: ComponentFixture<ConfigIntervaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigIntervaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigIntervaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
