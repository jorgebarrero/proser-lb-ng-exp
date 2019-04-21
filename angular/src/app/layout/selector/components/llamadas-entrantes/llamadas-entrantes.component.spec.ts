import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadasEntrantesComponent } from './llamadas-entrantes.component';

describe('LlamadasEntrantesComponent', () => {
  let component: LlamadasEntrantesComponent;
  let fixture: ComponentFixture<LlamadasEntrantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlamadasEntrantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlamadasEntrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
