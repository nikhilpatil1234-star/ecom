import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSellerComponent } from './auth-seller.component';

describe('AuthSellerComponent', () => {
  let component: AuthSellerComponent;
  let fixture: ComponentFixture<AuthSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthSellerComponent]
    });
    fixture = TestBed.createComponent(AuthSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
