import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmdBottomCardPage } from './cmd-bottom-card.page';

describe('CmdBottomCardPage', () => {
  let component: CmdBottomCardPage;
  let fixture: ComponentFixture<CmdBottomCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdBottomCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
