import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHistoricoIntroComponent } from './servicio-historico-intro.component';

describe('ServicioHistoricoIntroComponent', () => {
  let component: ServicioHistoricoIntroComponent;
  let fixture: ComponentFixture<ServicioHistoricoIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioHistoricoIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioHistoricoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
