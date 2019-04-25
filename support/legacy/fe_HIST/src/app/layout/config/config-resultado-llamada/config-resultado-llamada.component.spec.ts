import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigResultadoLlamadaComponent } from './config-resultado-llamada.component';

describe('ConfigResultadoLlamadaComponent', () => {
  let component: ConfigResultadoLlamadaComponent;
  let fixture: ComponentFixture<ConfigResultadoLlamadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigResultadoLlamadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigResultadoLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
