import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductividadIntroComponent } from './productividad-intro.component';

describe('ProductividadIntroComponent', () => {
  let component: ProductividadIntroComponent;
  let fixture: ComponentFixture<ProductividadIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductividadIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductividadIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
