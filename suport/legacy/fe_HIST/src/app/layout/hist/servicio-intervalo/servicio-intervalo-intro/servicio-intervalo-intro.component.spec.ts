import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioIntervaloIntroComponent } from './servicio-intervalo-intro.component';

describe('ServicioIntervaloIntroComponent', () => {
  let component: ServicioIntervaloIntroComponent;
  let fixture: ComponentFixture<ServicioIntervaloIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioIntervaloIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioIntervaloIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
