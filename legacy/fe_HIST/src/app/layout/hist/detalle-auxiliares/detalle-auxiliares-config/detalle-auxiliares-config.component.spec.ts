import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAuxiliaresConfigComponent } from './detalle-auxiliares-config.component';

describe('DetalleAuxiliaresConfigComponent', () => {
  let component: DetalleAuxiliaresConfigComponent;
  let fixture: ComponentFixture<DetalleAuxiliaresConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAuxiliaresConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAuxiliaresConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
