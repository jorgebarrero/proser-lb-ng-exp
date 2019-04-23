import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSuplenteComponent } from './config-suplente.component';

describe('ConfigSuplenteComponent', () => {
  let component: ConfigSuplenteComponent;
  let fixture: ComponentFixture<ConfigSuplenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigSuplenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigSuplenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
