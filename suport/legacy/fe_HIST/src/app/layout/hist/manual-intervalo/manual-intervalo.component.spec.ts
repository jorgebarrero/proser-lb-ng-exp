import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualIntervaloComponent } from './manual-intervalo.component';

describe('ManualIntervaloComponent', () => {
  let component: ManualIntervaloComponent;
  let fixture: ComponentFixture<ManualIntervaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualIntervaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualIntervaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
