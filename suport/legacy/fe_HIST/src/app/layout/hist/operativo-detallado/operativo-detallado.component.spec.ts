import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoDetalladoComponent } from './operativo-detallado.component';

describe('OperativoDetalladoComponent', () => {
  let component: OperativoDetalladoComponent;
  let fixture: ComponentFixture<OperativoDetalladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativoDetalladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativoDetalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
