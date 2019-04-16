import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalladoAuxiliaresConfigComponent } from './detallado-auxiliares-config.component';

describe('DetalladoAuxiliaresConfigComponent', () => {
  let component: DetalladoAuxiliaresConfigComponent;
  let fixture: ComponentFixture<DetalladoAuxiliaresConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalladoAuxiliaresConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalladoAuxiliaresConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
