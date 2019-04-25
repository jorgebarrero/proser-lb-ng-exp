import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativoDetalladoIntroComponent } from './operativo-detallado-intro.component';

describe('OperativoDetalladoIntroComponent', () => {
  let component: OperativoDetalladoIntroComponent;
  let fixture: ComponentFixture<OperativoDetalladoIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativoDetalladoIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativoDetalladoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
