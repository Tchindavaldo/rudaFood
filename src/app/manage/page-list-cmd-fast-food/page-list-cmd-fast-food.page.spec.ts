import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageListCmdFastFoodPage } from './page-list-cmd-fast-food.page';

describe('PageListCmdFastFoodPage', () => {
  let component: PageListCmdFastFoodPage;
  let fixture: ComponentFixture<PageListCmdFastFoodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListCmdFastFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
