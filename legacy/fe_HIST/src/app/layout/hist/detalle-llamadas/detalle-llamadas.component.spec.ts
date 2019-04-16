import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLlamadasComponent } from './detalle-llamadas.component';

describe('DetalleLlamadasComponent', () => {
  let component: DetalleLlamadasComponent;
  let fixture: ComponentFixture<DetalleLlamadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLlamadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
