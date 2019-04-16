import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductividadListComponent } from './productividad-list.component';

describe('ProductividadListComponent', () => {
  let component: ProductividadListComponent;
  let fixture: ComponentFixture<ProductividadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductividadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductividadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
