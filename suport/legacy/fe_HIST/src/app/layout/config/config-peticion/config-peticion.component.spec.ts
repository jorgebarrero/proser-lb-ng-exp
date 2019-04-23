import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPeticionComponent } from './config-peticion.component';

describe('ConfigPeticionComponent', () => {
  let component: ConfigPeticionComponent;
  let fixture: ComponentFixture<ConfigPeticionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPeticionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
