import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component2Page } from './component2.page';

describe('Component2Page', () => {
  let component: Component2Page;
  let fixture: ComponentFixture<Component2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
