import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualIntervaloIntroComponent } from './manual-intervalo-intro.component';

describe('ManualIntervaloIntroComponent', () => {
  let component: ManualIntervaloIntroComponent;
  let fixture: ComponentFixture<ManualIntervaloIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualIntervaloIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualIntervaloIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
