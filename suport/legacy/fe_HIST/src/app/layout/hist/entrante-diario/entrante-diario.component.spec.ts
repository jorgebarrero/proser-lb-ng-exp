import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteDiarioComponent } from './entrante-diario.component';

describe('EntranteDiarioComponent', () => {
  let component: EntranteDiarioComponent;
  let fixture: ComponentFixture<EntranteDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
