import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleAddComponent } from './scale-add.component';

describe('ScaleAddComponent', () => {
  let component: ScaleAddComponent;
  let fixture: ComponentFixture<ScaleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
