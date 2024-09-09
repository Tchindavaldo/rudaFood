import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component3Page } from './component3.page';

describe('Component3Page', () => {
  let component: Component3Page;
  let fixture: ComponentFixture<Component3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
