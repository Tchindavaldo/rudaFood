import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthVerifyNumberPage } from './auth-verify-number.page';

describe('AuthVerifyNumberPage', () => {
  let component: AuthVerifyNumberPage;
  let fixture: ComponentFixture<AuthVerifyNumberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthVerifyNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
