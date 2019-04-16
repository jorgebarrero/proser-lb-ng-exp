import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalladoAsignacionesConfigComponent } from './detallado-asignaciones-config.component';

describe('DetalladoAsignacionesConfigComponent', () => {
  let component: DetalladoAsignacionesConfigComponent;
  let fixture: ComponentFixture<DetalladoAsignacionesConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalladoAsignacionesConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalladoAsignacionesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
