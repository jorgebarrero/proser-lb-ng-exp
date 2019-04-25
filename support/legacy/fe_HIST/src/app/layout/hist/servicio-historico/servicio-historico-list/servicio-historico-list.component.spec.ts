import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHistoricoListComponent } from './servicio-historico-list.component';

describe('ServicioHistoricoListComponent', () => {
  let component: ServicioHistoricoListComponent;
  let fixture: ComponentFixture<ServicioHistoricoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioHistoricoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioHistoricoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
