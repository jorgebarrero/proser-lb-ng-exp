import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLlamadasConfigComponent } from './detalle-llamadas-config.component';

describe('DetalleLlamadasConfigComponent', () => {
  let component: DetalleLlamadasConfigComponent;
  let fixture: ComponentFixture<DetalleLlamadasConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLlamadasConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLlamadasConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
