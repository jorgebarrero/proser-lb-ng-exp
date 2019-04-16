import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalladoAuxiliaresListComponent } from './detallado-auxiliares-list.component';

describe('DetalladoAuxiliaresListComponent', () => {
  let component: DetalladoAuxiliaresListComponent;
  let fixture: ComponentFixture<DetalladoAuxiliaresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalladoAuxiliaresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalladoAuxiliaresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
