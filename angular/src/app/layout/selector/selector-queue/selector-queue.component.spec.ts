import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorQueueComponent } from './selector-queue.component';

describe('SelectorQueueComponent', () => {
  let component: SelectorQueueComponent;
  let fixture: ComponentFixture<SelectorQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
