import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteIntervaloListComponent } from './entrante-intervalo-list.component';

describe('EntranteIntervaloListComponent', () => {
  let component: EntranteIntervaloListComponent;
  let fixture: ComponentFixture<EntranteIntervaloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteIntervaloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteIntervaloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
