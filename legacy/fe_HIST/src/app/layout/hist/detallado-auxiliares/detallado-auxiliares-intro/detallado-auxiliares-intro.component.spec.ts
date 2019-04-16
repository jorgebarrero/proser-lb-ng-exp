import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalladoAuxiliaresIntroComponent } from './detallado-auxiliares-intro.component';

describe('DetalladoAuxiliaresIntroComponent', () => {
  let component: DetalladoAuxiliaresIntroComponent;
  let fixture: ComponentFixture<DetalladoAuxiliaresIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalladoAuxiliaresIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalladoAuxiliaresIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
