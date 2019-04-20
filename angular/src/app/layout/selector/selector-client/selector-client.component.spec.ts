import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorClientComponent } from './selector-client.component';

describe('SelectorClientComponent', () => {
  let component: SelectorClientComponent;
  let fixture: ComponentFixture<SelectorClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
