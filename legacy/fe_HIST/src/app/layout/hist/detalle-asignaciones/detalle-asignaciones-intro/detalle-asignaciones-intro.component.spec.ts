import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsignacionesIntroComponent } from './detalle-asignaciones-intro.component';

describe('DetalleAsignacionesIntroComponent', () => {
  let component: DetalleAsignacionesIntroComponent;
  let fixture: ComponentFixture<DetalleAsignacionesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignacionesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignacionesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
