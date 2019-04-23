import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDiarioIntroComponent } from './manual-diario-intro.component';

describe('ManualDiarioIntroComponent', () => {
  let component: ManualDiarioIntroComponent;
  let fixture: ComponentFixture<ManualDiarioIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDiarioIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDiarioIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
