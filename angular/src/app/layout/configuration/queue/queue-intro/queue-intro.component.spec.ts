import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueIntroComponent } from './queue-intro.component';

describe('QueueIntroComponent', () => {
  let component: QueueIntroComponent;
  let fixture: ComponentFixture<QueueIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
