import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDiarioComponent } from './manual-diario.component';

describe('ManualDiarioComponent', () => {
  let component: ManualDiarioComponent;
  let fixture: ComponentFixture<ManualDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
