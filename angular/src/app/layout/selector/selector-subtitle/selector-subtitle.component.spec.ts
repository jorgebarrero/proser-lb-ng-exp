import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorSubtitleComponent } from './selector-subtitle.component';

describe('SelectorSubtitleComponent', () => {
  let component: SelectorSubtitleComponent;
  let fixture: ComponentFixture<SelectorSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
