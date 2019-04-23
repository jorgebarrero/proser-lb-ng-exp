import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHistoricoComponent } from './servicio-historico.component';

describe('ServicioHistoricoComponent', () => {
  let component: ServicioHistoricoComponent;
  let fixture: ComponentFixture<ServicioHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
