import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHorarioComponent } from './config-horario.component';

describe('ConfigHorarioComponent', () => {
  let component: ConfigHorarioComponent;
  let fixture: ComponentFixture<ConfigHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
