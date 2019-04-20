import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorGroupComponent } from './selector-group.component';

describe('SelectorGroupComponent', () => {
  let component: SelectorGroupComponent;
  let fixture: ComponentFixture<SelectorGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
