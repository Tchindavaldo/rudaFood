import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component1Page } from './component1.page';

describe('Component1Page', () => {
  let component: Component1Page;
  let fixture: ComponentFixture<Component1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
