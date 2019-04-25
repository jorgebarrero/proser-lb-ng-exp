import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLlamadasIntroComponent } from './detalle-llamadas-intro.component';

describe('DetalleLlamadasIntroComponent', () => {
  let component: DetalleLlamadasIntroComponent;
  let fixture: ComponentFixture<DetalleLlamadasIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLlamadasIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLlamadasIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
