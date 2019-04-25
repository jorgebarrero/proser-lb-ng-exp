import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLlamadasListComponent } from './detalle-llamadas-list.component';

describe('DetalleLlamadasListComponent', () => {
  let component: DetalleLlamadasListComponent;
  let fixture: ComponentFixture<DetalleLlamadasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLlamadasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLlamadasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
