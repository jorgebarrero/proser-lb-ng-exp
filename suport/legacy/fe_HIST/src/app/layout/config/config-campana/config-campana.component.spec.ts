import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigCampanaComponent } from './config-campana.component';

describe('ConfigCampanaComponent', () => {
  let component: ConfigCampanaComponent;
  let fixture: ComponentFixture<ConfigCampanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigCampanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigCampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
