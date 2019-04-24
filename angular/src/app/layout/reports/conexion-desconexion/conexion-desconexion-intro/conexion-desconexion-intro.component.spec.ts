import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionDesconexionIntroComponent } from './conexion-desconexion-intro.component';

describe('ConexionDesconexionIntroComponent', () => {
  let component: ConexionDesconexionIntroComponent;
  let fixture: ComponentFixture<ConexionDesconexionIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexionDesconexionIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionDesconexionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
