import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAgenteComponent } from './config-agente.component';

describe('ConfigAgenteComponent', () => {
  let component: ConfigAgenteComponent;
  let fixture: ComponentFixture<ConfigAgenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAgenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
