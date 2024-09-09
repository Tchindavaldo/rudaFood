import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item2CmdBottomCardPage } from './item2-cmd-bottom-card.page';

describe('Item2CmdBottomCardPage', () => {
  let component: Item2CmdBottomCardPage;
  let fixture: ComponentFixture<Item2CmdBottomCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Item2CmdBottomCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
