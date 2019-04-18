import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricHeaderComponent } from './historic-header.component';

describe('HistoricHeaderComponent', () => {
  let component: HistoricHeaderComponent;
  let fixture: ComponentFixture<HistoricHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
