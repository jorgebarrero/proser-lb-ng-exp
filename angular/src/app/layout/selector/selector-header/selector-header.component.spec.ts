import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHeaderComponent } from './selector-header.component';

describe('SelectorHeaderComponent', () => {
  let component: SelectorHeaderComponent;
  let fixture: ComponentFixture<SelectorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
