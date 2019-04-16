import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionDesconexionComponent } from './conexion-desconexion.component';

describe('ConexionDesconexionComponent', () => {
  let component: ConexionDesconexionComponent;
  let fixture: ComponentFixture<ConexionDesconexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexionDesconexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionDesconexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
