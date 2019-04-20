import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticDetailComponent } from './automatic-detail.component';

describe('AutomaticDetailComponent', () => {
  let component: AutomaticDetailComponent;
  let fixture: ComponentFixture<AutomaticDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
