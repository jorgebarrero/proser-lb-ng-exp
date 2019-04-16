import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalladoAsignacionesComponent } from './detallado-asignaciones.component';

describe('DetalladoAsignacionesComponent', () => {
  let component: DetalladoAsignacionesComponent;
  let fixture: ComponentFixture<DetalladoAsignacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalladoAsignacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalladoAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
