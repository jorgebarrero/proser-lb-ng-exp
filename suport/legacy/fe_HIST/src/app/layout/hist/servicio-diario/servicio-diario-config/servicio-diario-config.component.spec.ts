import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioDiarioConfigComponent } from './servicio-diario-config.component';

describe('ServicioDiarioConfigComponent', () => {
  let component: ServicioDiarioConfigComponent;
  let fixture: ComponentFixture<ServicioDiarioConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioDiarioConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDiarioConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
