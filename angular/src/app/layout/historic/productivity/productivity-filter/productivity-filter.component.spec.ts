import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityFilterComponent } from './productivity-filter.component';

describe('ProductivityFilterComponent', () => {
  let component: ProductivityFilterComponent;
  let fixture: ComponentFixture<ProductivityFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivityFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
