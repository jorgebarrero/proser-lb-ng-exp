import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteDiarioIntroComponent } from './entrante-diario-intro.component';

describe('EntranteDiarioIntroComponent', () => {
  let component: EntranteDiarioIntroComponent;
  let fixture: ComponentFixture<EntranteDiarioIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteDiarioIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteDiarioIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
