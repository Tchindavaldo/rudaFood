import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item1CmdBottomCardPage } from './item1-cmd-bottom-card.page';

describe('Item1CmdBottomCardPage', () => {
  let component: Item1CmdBottomCardPage;
  let fixture: ComponentFixture<Item1CmdBottomCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Item1CmdBottomCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
