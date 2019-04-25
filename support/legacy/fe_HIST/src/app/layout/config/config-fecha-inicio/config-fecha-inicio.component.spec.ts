import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFechaInicioComponent } from './config-fecha-inicio.component';

describe('ConfigFechaInicioComponent', () => {
  let component: ConfigFechaInicioComponent;
  let fixture: ComponentFixture<ConfigFechaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFechaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFechaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
