import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioDiarioListComponent } from './servicio-diario-list.component';

describe('ServicioDiarioListComponent', () => {
  let component: ServicioDiarioListComponent;
  let fixture: ComponentFixture<ServicioDiarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioDiarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDiarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
