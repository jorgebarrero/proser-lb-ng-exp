import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioIntervaloListComponent } from './servicio-intervalo-list.component';

describe('ServicioIntervaloListComponent', () => {
  let component: ServicioIntervaloListComponent;
  let fixture: ComponentFixture<ServicioIntervaloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioIntervaloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioIntervaloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
