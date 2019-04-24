import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionDesconexionConfigComponent } from './conexion-desconexion-config.component';

describe('ConexionDesconexionConfigComponent', () => {
  let component: ConexionDesconexionConfigComponent;
  let fixture: ComponentFixture<ConexionDesconexionConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexionDesconexionConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionDesconexionConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
