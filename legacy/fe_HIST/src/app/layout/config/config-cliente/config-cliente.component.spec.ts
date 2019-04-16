import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigClienteComponent } from './config-cliente.component';

describe('ConfigClienteComponent', () => {
  let component: ConfigClienteComponent;
  let fixture: ComponentFixture<ConfigClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
