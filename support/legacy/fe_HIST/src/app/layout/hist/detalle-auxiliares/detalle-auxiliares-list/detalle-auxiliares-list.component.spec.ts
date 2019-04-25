import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAuxiliaresListComponent } from './detalle-auxiliares-list.component';

describe('DetalleAuxiliaresListComponent', () => {
  let component: DetalleAuxiliaresListComponent;
  let fixture: ComponentFixture<DetalleAuxiliaresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAuxiliaresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAuxiliaresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
