import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDiarioListComponent } from './manual-diario-list.component';

describe('ManualDiarioListComponent', () => {
  let component: ManualDiarioListComponent;
  let fixture: ComponentFixture<ManualDiarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDiarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDiarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
