import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAuxiliaresComponent } from './detalle-auxiliares.component';

describe('DetalleAuxiliaresComponent', () => {
  let component: DetalleAuxiliaresComponent;
  let fixture: ComponentFixture<DetalleAuxiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAuxiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
