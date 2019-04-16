import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteIntervaloConfigComponent } from './entrante-intervalo-config.component';

describe('EntranteIntervaloConfigComponent', () => {
  let component: EntranteIntervaloConfigComponent;
  let fixture: ComponentFixture<EntranteIntervaloConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteIntervaloConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteIntervaloConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
