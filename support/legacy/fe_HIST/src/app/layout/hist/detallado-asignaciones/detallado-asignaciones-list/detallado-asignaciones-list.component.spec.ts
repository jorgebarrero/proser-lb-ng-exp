import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalladoAsignacionesListComponent } from './detallado-asignaciones-list.component';

describe('DetalladoAsignacionesListComponent', () => {
  let component: DetalladoAsignacionesListComponent;
  let fixture: ComponentFixture<DetalladoAsignacionesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalladoAsignacionesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalladoAsignacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
