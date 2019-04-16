import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioDiarioIntroComponent } from './servicio-diario-intro.component';

describe('ServicioDiarioIntroComponent', () => {
  let component: ServicioDiarioIntroComponent;
  let fixture: ComponentFixture<ServicioDiarioIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioDiarioIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDiarioIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
