import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLlamadaComponent } from './config-llamada.component';

describe('ConfigLlamadaComponent', () => {
  let component: ConfigLlamadaComponent;
  let fixture: ComponentFixture<ConfigLlamadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigLlamadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
