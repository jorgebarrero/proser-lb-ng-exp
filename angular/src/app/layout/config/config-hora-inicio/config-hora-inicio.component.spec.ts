import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHoraInicioComponent } from './config-hora-inicio.component';

describe('ConfigHoraInicioComponent', () => {
  let component: ConfigHoraInicioComponent;
  let fixture: ComponentFixture<ConfigHoraInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigHoraInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigHoraInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
