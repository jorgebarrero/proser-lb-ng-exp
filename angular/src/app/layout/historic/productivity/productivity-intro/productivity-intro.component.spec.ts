import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityIntroComponent } from './productivity-intro.component';

describe('ProductivityIntroComponent', () => {
  let component: ProductivityIntroComponent;
  let fixture: ComponentFixture<ProductivityIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivityIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
