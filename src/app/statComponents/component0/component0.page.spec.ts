import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component0Page } from './component0.page';

describe('Component0Page', () => {
  let component: Component0Page;
  let fixture: ComponentFixture<Component0Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Component0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
