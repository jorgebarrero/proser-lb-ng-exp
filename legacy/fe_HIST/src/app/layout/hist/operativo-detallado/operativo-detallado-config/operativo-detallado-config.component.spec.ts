import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoDetalladoConfigComponent } from './operativo-detallado-config.component';

describe('OperativoDetalladoConfigComponent', () => {
  let component: OperativoDetalladoConfigComponent;
  let fixture: ComponentFixture<OperativoDetalladoConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativoDetalladoConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativoDetalladoConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
