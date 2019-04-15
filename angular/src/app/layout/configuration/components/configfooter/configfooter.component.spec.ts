import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigfooterComponent } from './configfooter.component';

describe('ConfigfooterComponent', () => {
  let component: ConfigfooterComponent;
  let fixture: ComponentFixture<ConfigfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
