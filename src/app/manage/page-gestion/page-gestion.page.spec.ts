import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageGestionPage } from './page-gestion.page';

describe('PageGestionPage', () => {
  let component: PageGestionPage;
  let fixture: ComponentFixture<PageGestionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
