import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalladoAsignacionesIntroComponent } from './detallado-asignaciones-intro.component';

describe('DetalladoAsignacionesIntroComponent', () => {
  let component: DetalladoAsignacionesIntroComponent;
  let fixture: ComponentFixture<DetalladoAsignacionesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalladoAsignacionesIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalladoAsignacionesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
