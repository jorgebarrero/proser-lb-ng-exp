import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranteDiarioConfigComponent } from './entrante-diario-config.component';

describe('EntranteDiarioConfigComponent', () => {
  let component: EntranteDiarioConfigComponent;
  let fixture: ComponentFixture<EntranteDiarioConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntranteDiarioConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntranteDiarioConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
