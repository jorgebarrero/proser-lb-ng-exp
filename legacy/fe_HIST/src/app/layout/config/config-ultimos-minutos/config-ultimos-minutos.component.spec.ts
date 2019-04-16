import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigUltimosMinutosComponent } from './config-ultimos-minutos.component';

describe('ConfigUltimosMinutosComponent', () => {
  let component: ConfigUltimosMinutosComponent;
  let fixture: ComponentFixture<ConfigUltimosMinutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigUltimosMinutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigUltimosMinutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
