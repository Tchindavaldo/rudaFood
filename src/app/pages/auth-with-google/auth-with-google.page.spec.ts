import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthWithGooglePage } from './auth-with-google.page';

describe('AuthWithGooglePage', () => {
  let component: AuthWithGooglePage;
  let fixture: ComponentFixture<AuthWithGooglePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthWithGooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
