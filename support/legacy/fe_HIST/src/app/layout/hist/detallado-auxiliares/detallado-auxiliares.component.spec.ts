import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalladoAuxiliaresComponent } from './detallado-auxiliares.component';

describe('DetalladoAuxiliaresComponent', () => {
  let component: DetalladoAuxiliaresComponent;
  let fixture: ComponentFixture<DetalladoAuxiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalladoAuxiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalladoAuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
