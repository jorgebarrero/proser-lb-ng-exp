import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteDiarioListComponent } from './entrante-diario-list.component';

describe('EntranteDiarioListComponent', () => {
  let component: EntranteDiarioListComponent;
  let fixture: ComponentFixture<EntranteDiarioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteDiarioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteDiarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
