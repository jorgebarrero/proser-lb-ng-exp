import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteIntervaloIntroComponent } from './entrante-intervalo-intro.component';

describe('EntranteIntervaloIntroComponent', () => {
  let component: EntranteIntervaloIntroComponent;
  let fixture: ComponentFixture<EntranteIntervaloIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteIntervaloIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteIntervaloIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
