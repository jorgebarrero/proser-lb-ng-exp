import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIntroComponent } from './client-intro.component';

describe('ClientIntroComponent', () => {
  let component: ClientIntroComponent;
  let fixture: ComponentFixture<ClientIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
