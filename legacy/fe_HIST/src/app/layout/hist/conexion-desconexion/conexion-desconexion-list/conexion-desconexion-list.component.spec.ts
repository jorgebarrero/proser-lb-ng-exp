import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexionDesconexionListComponent } from './conexion-desconexion-list.component';

describe('ConexionDesconexionListComponent', () => {
  let component: ConexionDesconexionListComponent;
  let fixture: ComponentFixture<ConexionDesconexionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexionDesconexionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexionDesconexionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
