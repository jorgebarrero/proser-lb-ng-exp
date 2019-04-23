import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoDetalladoListComponent } from './operativo-detallado-list.component';

describe('OperativoDetalladoListComponent', () => {
  let component: OperativoDetalladoListComponent;
  let fixture: ComponentFixture<OperativoDetalladoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativoDetalladoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativoDetalladoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
