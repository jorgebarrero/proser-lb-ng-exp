import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsignacionesConfigComponent } from './detalle-asignaciones-config.component';

describe('DetalleAsignacionesConfigComponent', () => {
  let component: DetalleAsignacionesConfigComponent;
  let fixture: ComponentFixture<DetalleAsignacionesConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignacionesConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignacionesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
