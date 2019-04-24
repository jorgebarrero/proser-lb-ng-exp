import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigGroupByComponent } from './config-group-by.component';

describe('ConfigGroupByComponent', () => {
  let component: ConfigGroupByComponent;
  let fixture: ComponentFixture<ConfigGroupByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigGroupByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigGroupByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
