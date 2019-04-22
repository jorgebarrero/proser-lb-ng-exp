import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAuxiliarComponent } from './selector-auxiliar.component';

describe('SelectorAuxiliarComponent', () => {
  let component: SelectorAuxiliarComponent;
  let fixture: ComponentFixture<SelectorAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
