import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTipoComponent } from './config-tipo.component';

describe('ConfigTipoComponent', () => {
  let component: ConfigTipoComponent;
  let fixture: ComponentFixture<ConfigTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
