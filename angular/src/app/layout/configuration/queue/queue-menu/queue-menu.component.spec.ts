import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueMenuComponent } from './queue-menu.component';

describe('QueueMenuComponent', () => {
  let component: QueueMenuComponent;
  let fixture: ComponentFixture<QueueMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
