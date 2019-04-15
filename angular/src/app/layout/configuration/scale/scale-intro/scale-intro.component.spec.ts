import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleIntroComponent } from './scale-intro.component';

describe('ScaleIntroComponent', () => {
  let component: ScaleIntroComponent;
  let fixture: ComponentFixture<ScaleIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
