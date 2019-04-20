import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricIntroComponent } from './historic-intro.component';

describe('HistoricIntroComponent', () => {
  let component: HistoricIntroComponent;
  let fixture: ComponentFixture<HistoricIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
