import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDiarioConfigComponent } from './manual-diario-config.component';

describe('ManualDiarioConfigComponent', () => {
  let component: ManualDiarioConfigComponent;
  let fixture: ComponentFixture<ManualDiarioConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDiarioConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDiarioConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
