import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualIntervaloListComponent } from './manual-intervalo-list.component';

describe('ManualIntervaloListComponent', () => {
  let component: ManualIntervaloListComponent;
  let fixture: ComponentFixture<ManualIntervaloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualIntervaloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualIntervaloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
