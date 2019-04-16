import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioIntervaloConfigComponent } from './servicio-intervalo-config.component';

describe('ServicioIntervaloConfigComponent', () => {
  let component: ServicioIntervaloConfigComponent;
  let fixture: ComponentFixture<ServicioIntervaloConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioIntervaloConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioIntervaloConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
