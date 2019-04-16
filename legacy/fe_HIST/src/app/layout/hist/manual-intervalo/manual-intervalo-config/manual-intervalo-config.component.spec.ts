import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualIntervaloConfigComponent } from './manual-intervalo-config.component';

describe('ManualIntervaloConfigComponent', () => {
  let component: ManualIntervaloConfigComponent;
  let fixture: ComponentFixture<ManualIntervaloConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualIntervaloConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualIntervaloConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
