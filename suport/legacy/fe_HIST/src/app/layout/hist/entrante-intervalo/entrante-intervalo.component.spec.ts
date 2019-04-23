import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteIntervaloComponent } from './entrante-intervalo.component';

describe('EntranteIntervaloComponent', () => {
  let component: EntranteIntervaloComponent;
  let fixture: ComponentFixture<EntranteIntervaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteIntervaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteIntervaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
