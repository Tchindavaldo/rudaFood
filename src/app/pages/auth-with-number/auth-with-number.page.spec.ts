import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthWithNumberPage } from './auth-with-number.page';

describe('AuthWithNumberPage', () => {
  let component: AuthWithNumberPage;
  let fixture: ComponentFixture<AuthWithNumberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthWithNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
