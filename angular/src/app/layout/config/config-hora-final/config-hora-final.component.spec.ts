import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHoraFinalComponent } from './config-hora-final.component';

describe('ConfigHoraFinalComponent', () => {
  let component: ConfigHoraFinalComponent;
  let fixture: ComponentFixture<ConfigHoraFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigHoraFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigHoraFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
