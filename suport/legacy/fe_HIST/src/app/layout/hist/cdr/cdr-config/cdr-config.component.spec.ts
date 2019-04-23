import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrConfigComponent } from './cdr-config.component';

describe('CdrConfigComponent', () => {
  let component: CdrConfigComponent;
  let fixture: ComponentFixture<CdrConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdrConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdrConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
