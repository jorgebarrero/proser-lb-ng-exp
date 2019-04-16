import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakListComponent } from './break-list.component';

describe('BreakListComponent', () => {
  let component: BreakListComponent;
  let fixture: ComponentFixture<BreakListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
