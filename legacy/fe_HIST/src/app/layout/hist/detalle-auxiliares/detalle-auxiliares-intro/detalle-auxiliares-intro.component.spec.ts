import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAuxiliaresIntroComponent } from './detalle-auxiliares-intro.component';

describe('DetalleAuxiliaresIntroComponent', () => {
  let component: DetalleAuxiliaresIntroComponent;
  let fixture: ComponentFixture<DetalleAuxiliaresIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAuxiliaresIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAuxiliaresIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
