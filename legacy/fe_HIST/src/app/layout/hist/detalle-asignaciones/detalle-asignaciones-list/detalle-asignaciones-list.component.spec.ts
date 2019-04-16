import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAsignacionesListComponent } from './detalle-asignaciones-list.component';

describe('DetalleAsignacionesListComponent', () => {
  let component: DetalleAsignacionesListComponent;
  let fixture: ComponentFixture<DetalleAsignacionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignacionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAsignacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
