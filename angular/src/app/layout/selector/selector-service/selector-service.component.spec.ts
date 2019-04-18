import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorServiceComponent } from './selector-service.component';

describe('SelectorServiceComponent', () => {
  let component: SelectorServiceComponent;
  let fixture: ComponentFixture<SelectorServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
