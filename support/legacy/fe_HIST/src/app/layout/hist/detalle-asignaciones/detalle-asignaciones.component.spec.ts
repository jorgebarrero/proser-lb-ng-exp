import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsignacionesComponent } from './detalle-asignaciones.component';

describe('DetalleAsignacionesComponent', () => {
  let component: DetalleAsignacionesComponent;
  let fixture: ComponentFixture<DetalleAsignacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
