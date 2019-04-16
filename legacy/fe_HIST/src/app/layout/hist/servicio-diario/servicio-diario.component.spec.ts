import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioDiarioComponent } from './servicio-diario.component';

describe('ServicioDiarioComponent', () => {
  let component: ServicioDiarioComponent;
  let fixture: ComponentFixture<ServicioDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
