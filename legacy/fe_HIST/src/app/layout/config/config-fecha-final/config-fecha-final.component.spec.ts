import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFechaFinalComponent } from './config-fecha-final.component';

describe('ConfigFechaFinalComponent', () => {
  let component: ConfigFechaFinalComponent;
  let fixture: ComponentFixture<ConfigFechaFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFechaFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFechaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
