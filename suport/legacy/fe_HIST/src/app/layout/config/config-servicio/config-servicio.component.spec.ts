import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigServicioComponent } from './config-servicio.component';

describe('ConfigServicioComponent', () => {
  let component: ConfigServicioComponent;
  let fixture: ComponentFixture<ConfigServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
