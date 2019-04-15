import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationIntroComponent } from './location-intro.component';

describe('LocationIntroComponent', () => {
  let component: LocationIntroComponent;
  let fixture: ComponentFixture<LocationIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
