import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHistoricoConfigComponent } from './servicio-historico-config.component';

describe('ServicioHistoricoConfigComponent', () => {
  let component: ServicioHistoricoConfigComponent;
  let fixture: ComponentFixture<ServicioHistoricoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioHistoricoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioHistoricoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
