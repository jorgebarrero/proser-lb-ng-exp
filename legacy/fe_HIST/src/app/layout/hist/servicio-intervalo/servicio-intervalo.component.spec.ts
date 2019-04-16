import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioIntervaloComponent } from './servicio-intervalo.component';

describe('ServicioIntervaloComponent', () => {
  let component: ServicioIntervaloComponent;
  let fixture: ComponentFixture<ServicioIntervaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioIntervaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioIntervaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
