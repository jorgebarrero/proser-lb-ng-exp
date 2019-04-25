import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductividadConfigComponent } from './productividad-config.component';

describe('ProductividadConfigComponent', () => {
  let component: ProductividadConfigComponent;
  let fixture: ComponentFixture<ProductividadConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductividadConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductividadConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
